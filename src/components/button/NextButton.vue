<template>
  <ul class="actions">
    <li>
      <a :href="id" class="button primary color2" @click="Next">NEXT ➜</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NextButton',
  props: {
    id: {
      type: String,
      default: () => ''
    },
  },
  methods: {
    Next() {
      this.$emit('setBoardInfo')
    }
  }
}
</script>
<style scoped>
.actions {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
}
.button.primary.color2 {
  background-color: inherit !important;
  color: #fff !important;
  font-size: 1rem !important;
}

.button.primary.color2:hover {
  color: #2baaf8 !important;
}
</style>