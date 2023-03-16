<template>
  <div class="spinner" v-if="loading">
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
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
.spinner {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 20%;
  left: 40%;
}

.spinner-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #fff;
  border-color: #fff transparent transparent transparent;
  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spinner-item:nth-child(1) {
  animation-delay: -0.45s;
}

.spinner-item:nth-child(2) {
  animation-delay: -0.3s;
}

.spinner-item:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>