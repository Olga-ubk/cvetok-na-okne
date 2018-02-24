<template>
  <div id="mainContent">
    <site-header/>
    <navigation/>

    <!-- Main Content -->
    <section class="page-section about-heading">
      <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" v-bind:src="post.attributes.image" v-bind:alt="post.attributes.title">
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">{{post.attributes.latin}}</span>
                  <span class="section-heading-lower">{{post.attributes.title}}</span>
                </h2>
                <div v-html="postFile" class="mb-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
      async fetch ({store, params}) {
        await store.dispatch('loadPost', params.post)
      },
      head () {
        return {
          title: this.postTitle,
          meta: [
            { hid: 'description', name: 'description', content: this.post.attributes.description }
          ]
        }
      },
      computed: {
        post () {
          return this.$store.getters.getPost
        },
        postFile () {
          if (this.post.filename) {
            return require(`~/content/catalog/${this.post.filename}`)
          } else {
            return require('./not-found.md')
          }
        },
        postTitle () {
          return this.post.attributes.title
        }
      }
    }
</script>
