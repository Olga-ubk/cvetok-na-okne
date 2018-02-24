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
                    <h2 class="section-heading mb-0">
                      <span class="section-heading-upper">{{post.attributes.latin}}</span>
                      <span class="section-heading-lower">{{post.attributes.title}}</span>
                    </h2>
                  </div>
                </div>
                <router-link class="mb-0" :to=" {path: post.slug + '/'} ">
                <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" v-bind:src="post.attributes.cover" v-bind:alt="post.attributes.title">
                </router-link>
                <div class="product-item-description d-flex mr-auto">
                  <div class="bg-faded p-5 rounded">
                    <p class="mb-0">{{post.attributes.description}}</p>
                    <div class="product-item-button mx-auto">
                      <router-link class="btn btn-primary btn-xl" :to=" {path: post.slug + '/'} ">Посмотреть</router-link>
                    </div>
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
  },
  head () {
    return {
      title: 'Каталог с фотографиями и названиями',
      meta: [
        { hid: 'description', name: 'description', content: 'Виды комнатных цветов исчисляются тысячами. Каталог комнатных цветов с фотографиями и названиями поможет разобраться в этом разнообразии.' }
      ]
    }
  }
}
</script>
