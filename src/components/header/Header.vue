<template>
  <div class="Navbar">
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-2">
              <!-- logo -->
              <a href="./index.html" class="site-logo">
                <img src="ProfLogo1.png">
              </a>
            </div>
            <div class="col-xl-6 col-lg-5">
              <form class="header-search-form">
                <input type="text" placeholder="Search any product">
                <button><i class="flaticon-search"></i></button>
              </form>
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="user-panel">
                <div class="up-item">
                  <i class="flaticon-profile"></i>
                  <a href="#">Sign</a> In or <a href="#">Create Account</a>
                </div>
                <div class="up-item">
                  <div class="shopping-card">
                    <i class="flaticon-bag"></i>
                    <span>0</span>
                  </div>
                  <a href="#">Shopping Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="main-navbar">
        <div class="container">
          <!-- menu -->
          <ul class="main-menu">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Магазин</a></li>
            <li><a href="#">Процедуры</a></li>
            <li><a href="#">Новинки
              <span class="new">New</span>
            </a></li>
            <li><a href="#">Shoes</a>
              <ul class="sub-menu">
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Formal Shoes</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Flip Flops</a></li>
              </ul>
            </li>
            <li><a href="#">Pages</a>
              <ul class="sub-menu">
                <li><a href="./product.html">Product Page</a></li>
                <li><a href="./category.html">Category Page</a></li>
                <li><a href="./cart.html">Cart Page</a></li>
                <li><a href="./checkout.html">Checkout Page</a></li>
                <li><a href="./contact.html">Contact Page</a></li>
              </ul>
            </li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Header section end -->
  </div>
</template>

<script>
    export default {
        name: "Navbar",

        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>






<!--<template>-->
  <!--<div>-->
    <!--&lt;!&ndash;<nav class="navbar" role="navigation" aria-label="main navigation">&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="navbar-brand">&ndash;&gt;-->
        <!--&lt;!&ndash;<router-link :to="{ path: '/', name: 'homepage-component' }" class="navbar-item">&ndash;&gt;-->
          <!--&lt;!&ndash;<h1 class="title is-3 is-flex-mobile"></h1>&ndash;&gt;-->
        <!--&lt;!&ndash;</router-link>&ndash;&gt;-->

        <!--&lt;!&ndash;<a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">&ndash;&gt;-->
          <!--&lt;!&ndash;<span aria-hidden="true"></span>&ndash;&gt;-->
          <!--&lt;!&ndash;<span aria-hidden="true"></span>&ndash;&gt;-->
          <!--&lt;!&ndash;<span aria-hidden="true"></span>&ndash;&gt;-->
        <!--&lt;!&ndash;</a>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->

      <!--&lt;!&ndash;<div class="navbar-menu is-active">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="navbar-start">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="navbar-item field">&ndash;&gt;-->
            <!--&lt;!&ndash;<search-component></search-component>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="navbar-end">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="navbar-item social">&ndash;&gt;-->
            <!--&lt;!&ndash;<a href="#" class="icon" :title="facebookTooltip">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="fab fa-facebook"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--&lt;!&ndash;<a href="#" class="icon" :title="twitterTooltip">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="fab fa-twitter"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--&lt;!&ndash;<a href="#" class="icon" :title="instagramTooltip">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="fab fa-instagram"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--&lt;!&ndash;<a href="#" class="icon" :title="linkedinTooltip">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="fab fa-linkedin"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</a>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="navbar-item shopping-cart" @click="showCheckoutModal">&ndash;&gt;-->
            <!--&lt;!&ndash;<span class="icon">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="fa fa-shopping-cart"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->

      <!--&lt;!&ndash;&lt;!&ndash; For mobile and tablet &ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;<div v-show="isMenuOpen" class="navbar-end">&ndash;&gt;-->
        <!--&lt;!&ndash;<menu-component></menu-component>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->

      <!--&lt;!&ndash;&lt;!&ndash; For desktop &ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="navbar-end is-hidden-mobile">&ndash;&gt;-->
        <!--&lt;!&ndash;<menu-component></menu-component>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</nav>&ndash;&gt;-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import Menu from '../menu/Menu';-->
  <!--import Search from '../search/Search';-->

  <!--export default {-->
    <!--name: 'header-component',-->

    <!--data () {-->
      <!--return {-->
        <!--linkedinTooltip: 'Follow us on Linkedin',-->
        <!--facebookTooltip: 'Follow us on Facebook',-->
        <!--twitterTooltip: 'Follow us on Twitter',-->
        <!--instagramTooltip: 'Follow us on Instagram',-->
        <!--isCheckoutActive: false,-->
        <!--isMenuOpen: false-->
      <!--}-->
    <!--},-->

    <!--computed: {-->
      <!--numProductsAdded () {-->
        <!--return this.$store.getters.productsAdded.length;-->
      <!--}-->
    <!--},-->

    <!--components: {-->
      <!--'search-component': Search,-->
      <!--'menu-component': Menu-->
    <!--},-->

    <!--methods: {-->
      <!--showCheckoutModal () {-->
        <!--this.$store.commit('showCheckoutModal', true);-->
      <!--}-->
    <!--}-->
  <!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
  <!--.title {-->
    <!--background: url('../../../public/assets/vuemmerce-logo.png') no-repeat;-->
    <!--background-position: 50% 50%;-->
    <!--background-size: 165px;-->
    <!--width: 175px;-->
    <!--height: 35px;-->
  <!--}-->
  <!--.shopping-cart {-->
    <!--cursor: pointer;-->
  <!--}-->
  <!--a {-->
    <!--color: grey;-->
  <!--}-->
<!--</style>-->
