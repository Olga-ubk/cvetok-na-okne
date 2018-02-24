<template>
  <div id="mainContent">
    <site-header/>
    <navigation/>

    <!-- Main Content -->
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="">
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Добро пожаловать</span>
              <span class="section-heading-lower">Красивые цветы</span>
            </h2>
            <p class="mb-3">Цветы принесут в ваш дом весну, яркость, насыщенность и приятное настроение. Как приятно получать и дарить цветы в букете, в горшке, нарисованные на бумаге или холсте. Цветы невозможно не любить, они учат нас видеть  к прекрасное, дают веру в перерождение и вечно не прекращающуюся жизнь.
            </p>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="/catalog/">В каталог</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">интернет издание о</span>
                <span class="section-heading-lower">Комнатных цветах</span>
              </h2>
              <p class="mb-0">Кто и когда впервые поставил в своей пещере первый букет, или посадил первое растение «просто так» — для красоты, а не для еды в своем жилище, не возьмется предположить ни один историк.
              </p>
              <p class="mb-0">
                Нам известны древнеегипетские рисунки или рельефы на стенах гробниц или храмов, описания уютных вегетариумов или прекрасных внутридворовых садов с фонтанами в древнеримских летописях или древнекитайских литературных источниках, изображения различных горшечных растений в интерьерах на картинах.
              </p>
              <p class="mb-0">
                Творить и создавать красоту собственными руками — ни с чем не сравнимое удовольствие. Выращивать цветы, декорировать цветочные емкости, создавать букеты, рисовать цветы - перечислять творческую деятельность, на которую нас вдохновляет природа с помощью цветов можно бесконечно, ведь это её маленькие дети!
              </p>
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
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
