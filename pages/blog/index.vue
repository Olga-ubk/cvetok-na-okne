<template>
  <div id="mainContent">
    <site-header/>
    <navigation/>

    <!-- Main Content -->
        <div v-for="post in posts">
          <section class="page-section">
            <div class="container">
              <div class="product-item">
                <div class="product-item-title d-flex">
                  <div class="bg-faded p-5 d-flex ml-auto rounded">
                    <router-link class="mb-0" :to=" {path: post.slug + '/'} ">
                    <h2 class="section-heading mb-0">
                      <span class="section-heading-upper">{{post.attributes.latin}}</span>
                      <span class="section-heading-lower">{{post.attributes.title}}</span>
                    </h2>
                    </router-link>
                  </div>
                </div>
                <router-link class="mb-0" :to=" {path: post.slug + '/'} ">
                <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/img/products-01.jpg" alt="">
                </router-link>
                <div class="product-item-description d-flex mr-auto">
                  <div class="bg-faded p-5 rounded">
                    <p class="mb-0">{{post.attributes.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
    <site-footer/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import SiteHeader from '~/components/SiteHeader.vue'

export default {
  components: {
    Navigation,
    SiteFooter,
    SiteHeader
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
