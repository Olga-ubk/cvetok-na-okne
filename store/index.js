import Vuex from 'vuex'
import fm from 'front-matter'
import slugify from 'slugify'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    getters: {
      getPost: state => {
        return state.post
      }
    },
    mutations: {
      updatePosts (state, posts) {
        state.posts = posts
      },
      updatePost (state, post) {
        state.post = post
      }
    },
    /**
     * the key here is to use if (process.server)
     * I'm also using front-matter to grab metadata from the markdown files
     **/
    actions: {
      nuxtServerInit () {
        // console.log('nuxtServerInit')
        if (process.server) {
          const fs = require('fs')
          const files = fs.readdirSync('content/blog')
          const posts = files.map((file) => {
            let post = fm(fs.readFileSync(`content/blog/${file}`, 'utf8'))
            post.filename = file
            post.created = new Date(fs.statSync(`content/blog/${file}`).ctime)
            post.slug = slugify(file.replace(/\.md$/, ''), {lower: true})
            post.url = `/blog/${post.slug}`
            return post
          })
          this.dispatch('loadPosts', posts)
        }
      },

      loadPosts ({commit}, posts) {
        const sorted = posts.sort((a, b) => {
          if (a === b) {
            return 0
          }
          return (a.created < b.created) ? 1 : -1
        })
        commit('updatePosts', sorted)
      },

      loadPost ({commit}, slug) {
        const post = this.state.posts.find((p) => {
          return p.slug === slug
        })
        commit('updatePost', post)
      }
    }
  })
}

export default makeStore
