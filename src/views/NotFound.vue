<template>
  <div id="page-wrapper">
    <div id="wrapper">
      <section class="panel banner right">
        <div class="content color0 span-3-75">
          <h1 class="major">404 Not Found</h1>
          <p>잘못된 페이지 접근 입니다.</p>
          <ul class="actions">
            <li>
              <h1>Home</h1>
            </li>
            <li>
              <Next id="/" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Next from '@/components/common/NextIcon.vue'

export default {
  components: {
    Next
  }
}
</script>
