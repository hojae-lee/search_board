<template>
  <div id="modal" :class="{show: getShowModal}">
    <div id="modal-content">
      <SaveBoard />
      <button id="close-modal" type="button" @click="closeModal">✖</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SaveBoard from '../SaveBoard.vue'

export default {
  components: {
    SaveBoard
  },
  computed: {
    ...mapGetters(['getShowModal'])
  },
  methods: {
    closeModal() {
      this.$store.commit('SET_MODAL', false)
    }
  }
}
</script>
<style scoped>
  #modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 1rem;
  }

  #modal-content {
    background-color: #fff;
    padding: 6rem 4rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    height: 100%;
  }

  #close-modal {
    position: absolute;
    top: 3rem;
    right: 5rem;
    background-color: #aaa;
    font-size: 1.2rem;
    color: #333;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
  }

  #close-modal:hover {
    opacity: 0.8;
  }

  .show {
    display: block !important;
  }
</style>