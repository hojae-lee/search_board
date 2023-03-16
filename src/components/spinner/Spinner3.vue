<template>
  <div class="spinner-wrapper" v-if="loading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
<style>
.spinner-wrapper {
  display: inline-block;
  position: absolute;
  top: 60%;
  left: 44%;
  min-width: 1rem;
}

.spinner {
  border: 4px solid rgba(255,255,255,0.3);
  border-left-color: #fff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>