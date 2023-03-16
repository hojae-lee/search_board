<template>
  <a @click="showCart" class="floating-button">🎁 ( {{ getSaveBoards.length }} )</a>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getSaveBoards'])
  },
  methods: {
    showCart() {
      if (!this.getSaveBoards.length) return alert('장바구니가 비어있습니다.')
      this.$store.commit('SET_MODAL', true)
    }
  }
}
</script>
<style scoped>
.floating-button {
  display: inline-block;
  background-color: #3498db;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  line-height: 2.5rem;
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.floating-button:hover {
  background-color: #2980b9;
  transform: translateY(-4px);
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
}

.floating-button:active {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>