<template>
  <!-- Page Wrapper -->
  <div id="page-wrapper">
    <!-- Wrapper -->
    <div id="wrapper">
      <FirstSection />
      <Search />
      <template v-for="(item, key) in getTopicInfo">
        <Question :item="item" :cnt="key + 1" :key="key + 'q'"/>
      </template>
      <ResultBoard />
      <Floating />
    </div>
  </div>
</template>
<script>
import FirstSection from '@/components/FirstSection.vue'
import Search from '@/components/Search.vue';
import Question from '@/components/Question.vue';
import ResultBoard from '@/components/ResultBoard.vue';
import Floating from '@/components/button/Floating.vue';
import { mapGetters } from 'vuex'

export default {
  name: "HelloHome",
  components: {
    FirstSection,
    Search,
    Question,
    ResultBoard,
    Floating
  },
  computed: {
    ...mapGetters(['getTopicInfo'])
  }
};
</script>
