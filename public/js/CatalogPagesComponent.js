Vue.component('catalogPages', {
    data() {
        return {
            pagesQuantity: 0,
            pageNums: [],
            currentPage: 1,
        }
    },
    methods: {
        countPages(products) {
            this.pagesQuantity = Math.ceil(products / this.$parent.$refs.catalog.num);
            this.pageNums = [];
            for (let i = 1; i <= this.pagesQuantity; i++) {
                this.pageNums.push(i);
            }
        },
        pageDown(e) {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.$parent.$refs.catalog.sliceCatalog(this.currentPage);
                this.changePageColor();
                this.setArrowActive(e);
            }
        },
        pageUp(e) {
            if (this.currentPage < this.pageNums.length) {
                this.currentPage++;
                this.$parent.$refs.catalog.sliceCatalog(this.currentPage);
                this.changePageColor();
                this.setArrowActive(e);
            }
        },
        pageActive(e) {
            if (e.target.classList.contains('pages__link')) {
                let pages = document.querySelectorAll('.pages__link');
                for (let el of pages) {
                    el.classList.remove('pages__active');
                }
            } else if (e.target.classList.contains('pages__control')) {
                let arrows = document.querySelectorAll('.pages__control');
                for (let el of arrows) {
                    el.classList.remove('pages__active');
                }
            }
            e.target.classList.add('pages__active');
        },
        setArrowActive(e) {
            e.target.classList.remove('pages__active');

            if (e.target.classList.contains('fa-chevron-left')) {
                if (this.currentPage !== 1) {
                    e.target.classList.add('pages__active');
                }
                let arrRight = document.querySelector('.fa-chevron-right');
                arrRight.classList.add('pages__active');
            }
            if (e.target.classList.contains('fa-chevron-right')) {
                if (this.currentPage !== this.pageNums.length) {
                    e.target.classList.add('pages__active');
                }
                let arrLeft = document.querySelector('.fa-chevron-left');
                arrLeft.classList.add('pages__active');
            }

            //    если стр в середине, добавить обеим ('pages__active');
        },
        changePageColor() {
            let pages = document.querySelectorAll('.page-num');
            for (let el of pages) {
                el.classList.remove('pages__active');
            }
            pages[this.currentPage - 1].classList.add('pages__active');
        },
    },
    template: `<div class="pages">
                    <ul class="pages__list">
                        <div class="pages__item">
                            <a href="catalog.html" class="pages__link" @click.prevent="pageDown($event)">
                                <i class="fas fa-chevron-left pages__control"></i>
                            </a>
                        </div>
                        <page 
                        v-for="page of pageNums" 
                        :key="page"
                        :page="page"
                        ></page>
                        <div class="pages__item">
                            <a href="catalog.html" class="pages__link" @click.prevent="pageUp($event)">
                                <i class="fas fa-chevron-right pages__control pages__active"></i>
                            </a>
                        </div> 
<!--                            <li class="pages__item"><span class="pages__dots">.....</span></li>-->
                    </ul>
                    <a href="catalog.html" class="pages__all-products">View All</a>
                </div>`
});

Vue.component('page', {
    props: ['page'],
    data() {
        return {
            isActive: this.setPageActive(),
        }
    },
    methods: {
        setPageActive() {
            let pageNum = this.page;
            if (pageNum === 1) {
                return true;
            }
        },
    },
    template: `<li class="pages__item">
                    <a href="catalog.html" class="pages__link page-num" :class="{pages__active:isActive}"
                                                  @click.prevent="$root.$refs.catalog.sliceCatalog(page), 
                                                  $root.$refs.catalogPages.pageActive($event)"
                                                  >
                    {{page}}</a>
                </li>`
});
