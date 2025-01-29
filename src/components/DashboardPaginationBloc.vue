<script>
export default {
    name: "DashboardPaginationBloc.vue",
    props: ['currentPage', 'totalPages'],
    methods: {
        goToPage(page) {
            if (page < 1 || page > this.totalPages) {
                return;
            }
            this.$emit('page-changed', page);
        },

        previousPage() {
            this.goToPage(this.currentPage - 1)
        },

        nextPage() {
            this.goToPage(this.currentPage + 1)

        },

        pages() {
            const pages = [];

            for (let page = 1; page <= this.totalPages; page++) {
                pages.push(page);
            }

            return pages;
        },

        hasMorePages() {
            return (this.totalPages - this.currentPage) > 0
        },
    },
}
</script>

<!-- <template>
     <div>
        <div class="flex flex-row mx-5" id="paginationBloc">
            <nav class="min-w-[100px] px-3 py-2 ml-auto rounded-3xl">
                <ul class="list-none flex flex-row flex-nowrap gap-x-4 text-lg">
                    <li>
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">&lt;</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center is-active" href="#">
                            <span class="block my-auto">1</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">2</span>
                        </a>
                    </li>
                    <li>
                    <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">3</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">&gt;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div> 
</template> -->

<template>
  <div>
    <div class="flex flex-row mx-5" id="paginationBloc">
      <nav class="min-w-[100px] px-3 py-2 ml-auto rounded-3xl">
        <ul class="list-none flex flex-row flex-nowrap gap-x-4 text-lg">
          <!-- Bouton précédent -->
          <!-- <li>
            <a 
              class="flex flex-row justify-center w-10 h-10 rounded-full text-center" 
              :class="{ 'disable': currentPage === 1 }" 
              href="#"
              @click.prevent="goToPage(currentPage - 1)"
            >
              <span class="block my-auto">&lt;</span>
            </a>
          </li> -->

          <!-- Pages numérotées -->
          <!-- <li v-for="page in pages" :key="page">
            <a 
              class="flex flex-row justify-center w-10 h-10 rounded-full text-center" 
              :class="{ 'is-active': currentPage === page }" 
              href="#"
              @click.prevent="goToPage(page)"
            >
              <span class="block my-auto">{{ page }}</span>
            </a>
          </li> -->

          <!-- Bouton suivant -->
          <!-- <li>
            <a 
              class="flex flex-row justify-center w-10 h-10 rounded-full text-center" 
              :class="{ 'text-gray-400': currentPage === totalPages }" 
              href="#"
              @click.prevent="goToPage(currentPage + 1)"
            >
              <span class="block my-auto">&gt;</span>
            </a>
          </li> -->
          <!-- First Page Link -->
            <li v-if="currentPage > 1">
                <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" @click.prevent="goToPage(1)"><span class="block my-auto">&laquo;</span></a>
            </li>

            <!-- Previous Page Link -->
            <li v-if="currentPage > 2">
                <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" @click.prevent="previousPage"><span class="block my-auto">&lsaquo;</span></a>
            </li>

            <template v-for="page in pages()">
                <!-- Use three dots when current page is greater than 3 -->
                <li
                v-if="currentPage > 3 && page === 2" :key="page"
                class="disabled"
                >
                <span class="flex flex-row justify-center w-10 h-10 rounded-full text-center"><span class="block my-auto">...</span></span>
                </li>

                <!-- Show active page two pages before and after it -->
                <template v-if="currentPage === page">
                    <li :key="page">
                        <span class="flex flex-row justify-center w-10 h-10 rounded-full text-center is-active"><span class="block my-auto">{{ page }}</span></span>
                    </li>
                </template>
                <template v-else>
                <li
                    v-if="
                    page === currentPage + 1 ||
                    page === currentPage + 2 ||
                    page === currentPage - 1 ||
                    page === currentPage - 2
                    "
                    :key="page"
                
                >
                    <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" @click.prevent="goToPage(page)"><span class="block my-auto">{{ page }}</span></a>
                </li>
                </template>

                <!-- Use three dots when current page is away from end -->
                <li
                v-if="
                    currentPage < totalPages - 2 && page === totalPages - 1
                "
                :key="page"
                class=" disabled"
                >
                <span class="flex flex-row justify-center w-10 h-10 rounded-full text-center"><span class="block my-auto">...</span></span>
                </li>
            </template>

            <!-- Next Page Link -->
            <li
                v-if="
                hasMorePages && totalPages - currentPage >= 2
                "
            
            >
                <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" @click.prevent="nextPage"><span class="block my-auto">&rsaquo;</span></a>
            </li>

            <!-- Last Page Link -->
            <li v-if="hasMorePages">
                <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" @click.prevent="goToPage(totalPages)"><span class="block my-auto">&raquo;</span></a>
            </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<style scoped>
    #paginationBloc > nav {
        border: 2px solid #EDEDED;
    }    

    #paginationBloc > nav > ul .is-active {
        background-color: #1814F3;
        color: white;
        font-weight: bold;
    }

    #paginationBloc > nav > ul li > a:not(.is-active):hover{
        background-color: rgba(24, 20, 243, 0.3);
        color: white;
        font-weight: bold;
    }

    #paginationBloc > nav > ul li > a:not(.is-active) {
        cursor: pointer;
    }
</style>