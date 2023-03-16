<template>
  <section class="panel spotlight medium right" id="second">
    <Spinner :loading="loading"/>

    <NextButton v-if="getTopicInfo.length" :id="`#question1`"/>
    <div class="content span-10 text_center">
      <h2 class="major">지식 검색</h2>
      <div style="display:flex; margin-bottom:1rem;">
        <input type="text" class="bg_gradient_blue" v-model="value" @keyup.enter="getInfo"/>
        <a @click="getInfo">
          <img src="images/ic_round-search.svg" alt="Search" class="custom_search" width="24" height="24" />
        </a>
      </div>
      <p v-if="!loading" style="font-size:0.7rem;">
        추천 질문: 프론트 개발자가 되고 싶어! Chat GPT 가 모야?! AI를 이용한 전략!
      </p>
    </div>
    <div class="image filtered tinted" data-position="top left">
      <img src="images/background_230314.svg" alt="커스텀 배경" />
    </div>
  </section>
</template>
<script>
import Spinner from './spinner/Spinner3.vue'
import NextButton from './button/NextButton.vue'
import { mapGetters } from 'vuex'

export default {
  name: "SecondSection",
  components: {
    Spinner,
    NextButton
  },
  data() {
    return {
      value: "",
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getTopicInfo'])
  },
  methods: {
    async getInfo() {
      this.loading = true
      this.$store.commit('RESET')

      setTimeout(async () => {
        const data = await this.$store.dispatch('FETCH_TOPIC_INFO', this.value)
        if (!data) alert("데이터가 존재하지 않습니다!")
        this.loading = false
      }, 5000)
    }
  },
}
</script>
<style scoped>
.content {
  padding: 9.5rem 3.5rem 2rem 3.5rem !important;
  -moz-justify-content: unset !important;
  -webkit-justify-content: unset !important;
  -ms-justify-content: unset !important;
  justify-content: unset !important;
}
</style>