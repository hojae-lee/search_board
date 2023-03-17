<template>
  <section class="panel spotlight medium right" :id="`question${cnt}`">
    <div class="content span-10 text_center">
      <h2 class="major">{{ getTopic }}</h2>
      <div style="margin-bottom: 3rem;">
        검색결과 분석중
      </div>
      <div class="question_board">
        <div class="question_title">{{ item.question }}</div>
        <div>
          <ul style="gap:1rem;">
            <li class="question_li" v-for="(choice, idx) in item.choices" :key="idx">
              <input
                type="radio"
                :id="item.question + idx"
                :name="item.question"
                @change="setRadio($event)"
                class="color2"
              />
              <label :for="item.question + idx" :ref="item.question + idx">
                {{ choice }}
              </label>
            </li>
          </ul>
        </div>
        <Spinner v-if="loading" :loading="loading" />
        <NextButton v-else :id="getHref" @setBoardInfo="setBoardInfo"/>
      </div>
    </div>
    <div class="image filtered tinted" data-position="top left">
      <img src="images/background_230314.svg" alt="커스텀 배경" />
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import NextButton from './button/NextButton.vue'
import Spinner from './spinner/Spinner.vue'

export default {
  name: "Question",
  components: {
    NextButton,
    Spinner
  },
  props: {
    item: {
      type: Object,
    },
    cnt: {
      type: Number
    }
  },
  data() {
    return {
      radioData: "",
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getTopic']),
    ...mapGetters(['getTopicCount']),
    ...mapGetters(['getBoardInfo']),
    getHref() {
      const baseURL = this.cnt === this.getTopicCount ? 'board' : `question${this.cnt + 1}`

      return `#${baseURL}`
    }
  },
  methods: {
    setRadio(evt) {
      this.radioData = this.$refs[evt.target.id][0].textContent
    },
    async setBoardInfo() {
      this.$store.commit('SET_BOARD_INFO', this.radioData.trim())
      if (this.getHref === '#board') {
        this.loading = true
        const q = `${this.getTopic}:${this.getBoardInfo.join(",")}`
        setTimeout(async () => {
          await this.$store.dispatch('FETCH_RESULT_SEARCH', q)
          this.loading = false
        }, 3000)
      }
    }
  }
}
</script>
<style scoped>
.question_board {
  background: linear-gradient(90deg, #ABE0F8 0%, #C8C6FF 100%);
  opacity: 0.8;
  border-radius: 1rem;
  height: 40%;
  padding: 1.5rem;
}
.question_title {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 0.7rem;
}
.question_li {
  width: 30%;
}
input[type="radio"] + label {
  font-size: 1rem;
  font-weight: 600;
  min-width: 10rem;
  padding-right: 0;
  padding-left: 2rem;
  text-align: left;
}
</style>