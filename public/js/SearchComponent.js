Vue.component('search', {
    data() {
        return {
            filtered: [],
            searchLine: '',
        }
    },
    methods: {},
    template: `<div class="header-form">
                    <form action="#" class="header-form__search" @submit.prevent="$root.$refs.catalog.filterName(searchLine)">
                        <div class="browse-button">Browse<i class="fas fa-caret-down triangle-grey"></i>
                            <div class="menu-drop browse-drop">
                                <div class="menu-drop__box">
                                    <h3 class="menu-drop__head">Women</h3>
                                    <ul class="menu-drop__list">
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Dresses</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Tops</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Sweaters/Knits</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Jackets/Coats</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Blazers</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Denim</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Leggings/Pants</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Skirts/Shorts</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Accessories</a></li>
                                    </ul>
                                    <h3 class="menu-drop__head">Men</h3>
                                    <ul class="menu-drop__list">
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Tees/Tank tops</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Shirts/Polos</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Sweaters</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Sweatshirts/Hoodies</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Blazers</a></li>
                                        <li class="menu-drop__item"><a href="catalog.html" class="menu-drop__link">Jackets/vests</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <input type="search" class="search" placeholder="Search for Item..." v-model="searchLine">
                        <button type="submit" class="search__button"><i class="fas fa-search"></i></button>
                    </form>
                </div>`
});