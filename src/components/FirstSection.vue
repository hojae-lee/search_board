<template>
  <section class="panel banner right">
    <div class="content color0 span-6-75">
      <h1 class="major">지식 검색</h1>
      <p>원하는 지식을 검색해보세요!</p>
      <Next id="#second"/>
    </div>
  </section>
</template>
<script>
import Next from './common/NextIcon.vue'

export default {
  name: "FirstSection",
  components: {
    Next
  }
}
</script>
