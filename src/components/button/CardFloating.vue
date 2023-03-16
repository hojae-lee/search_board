<template>
  <div class="floating-button">
    <button class="main-button" type="button" @click="toggleOnOff">{{ getMainButton }}</button>
    <div class="menu" :class="{show: getToggle}">
      <button class="main-button" type="button" @click="clickHandler('bad')">👎</button>
      <button class="main-button" type="button" @click="clickHandler('good')">👍</button>
      <button class="main-button" type="button" @click="clickHandler('save')">📋</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      toggle: false,
      mainButton: '➕'
    }
  },
  computed: {
    ...mapGetters(['getToggle']),
    getMainButton() {
      return this.getToggle ? '✖' : '➕'
    }
  },
  methods: {
    toggleOnOff() {
      this.$store.commit('SET_TOGGLE', !this.getToggle)
    },
    clickHandler(type) {
      switch(type) {
        case 'bad':
          alert('🤬')
          break;
        case 'good':
          alert('😇')
          break;
        case 'save':
          this.$store.commit('SET_SAVE_BOARD', this.item)
          break;
      }
    }
  }
}
</script>
<style scoped>
.floating-button {
  position: absolute;
  bottom: 0.2rem;
  right: 0.5rem;
  z-index: 999;
}

.main-button {
  display: block;
  margin-bottom: 0.4rem;
  padding: 0;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 50%;
  background-color: #fff;
  color: #000 !important;
  font-size: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  letter-spacing: 0;
}

.menu {
  position: absolute;
  bottom: 1.6rem;
  right: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: none;
}

.menu.show {
  display: block;
}
</style>