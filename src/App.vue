<template>
  <div>
    <router-view />
    <Modal />
  </div>
</template>

<script>
import Modal from '@/components/modal'

export default {
  name: "App",
  components: {
    Modal
  }
};
</script>
