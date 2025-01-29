import { createLogger, createStore } from 'vuex'
import { AuthenticationModule } from './modules/authentication.modules'
// import { register } from './modules/register'
// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

const debug = 'sandbox'

export default createStore({
  modules: {
    AuthenticationModule,
    // register
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
