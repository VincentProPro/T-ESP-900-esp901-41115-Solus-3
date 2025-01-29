import ApiService from '@/services/api.services.js'
import TokenService from '@/services/storage.service.js'

const accessToken = TokenService.getToken();

const user = {
  id: null,
  role: null,
  status: null,
  lastname: null,
  firstname: null,
};

const initialState = accessToken ? { status: { isAuthenticated: true }, user : user  } : { status: { isAuthenticated: false }, user : null  }

export const AuthenticationModule = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, formData) {
      return ApiService.post('/login/', formData).then(
        response => {
          commit('loginSuccess', response.data);
          return Promise.resolve(response);
        },
        error => {
           commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    //Prevoir une route pour recuperer le profil du current user sans connaitre son id. Juste pour savoir s'il est connecte ou pas
    getAuthUserProfile({commit}) {
      return ApiService.get('/users/me/').then(
        response => {
          commit('getAuthUserProfileSuccess', response.data);
        },
        error => {
           commit('getAuthUserProfileFailure', error);
        }
      )
    },
    reinitializeState({ commit }) {
      commit('reinitializeState');
    },
  },
  mutations: {
    loginSuccess(state, data) {
      state.status.isAuthenticated = true;

      state.user = {
        id: data.detailuser.id,
        role: data.role,
        status: data.status,
        lastname: data.detailuser.lastname,
        firstname: data.detailuser.firstname,
      };

      TokenService.saveToken(data.accesstoken["access_token"])

    },
    loginFailure(state) {
      state.status.isAuthenticated = false;
      state.user = null;
    },
    getAuthUserProfileSuccess(state, data) {
      state.status.isAuthenticated = true;

      state.user = {
        id: data.detailuser.id,
        role: data.role,
        status: data.status,
        lastname: data.detailuser.lastname,
        firstname: data.detailuser.firstname,
      };

    },
    getAuthUserProfileFailure(state) {
      state.status.isAuthenticated = false;
      state.user = null;
    },
    reinitializeState(state) {
      state.status.isAuthenticated = false;
      state.user = null;
    }
  }
};