<template>
  <ul class="actions">
    <li>
      <a
        :href="`${id}`"
        class="button primary color1 circle icon solid fa-angle-right"
        >Next</a
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "NextIcon",
  props: {
    id: {
      type: String,
      default: () => ""
    },
  },
}
</script>
<style scoped>
ul.actions {
  display: block;
}
</style>