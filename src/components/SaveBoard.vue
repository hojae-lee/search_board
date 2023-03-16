<template>
  <section class="panel" id="board" v-if="getSaveBoards.length">
    <div class="gallery">
      <div class="group span-2 layout" style="width:28rem;">
        <div class="group-major">
          <div>
            <h3 class="major">AI를 마케팅 업무에 활용하는 방법</h3>
            <p>[디지털마케터/이미지, 동영상/기본 개념/실무]을 우선 순위로 한 검색 결과의 보드입니다.</p>
          </div>
        </div>
      </div>
      <div class="group span-6 layout">
        <a v-for="(board, idx) in getSaveBoards" class="image filtered span-1-5" data-position="center" :key="'s'+ board.type + idx">
          <CardHover :item="board" :active="true"/>
          <img :src="board.imageURL" :alt="board.title" />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import CardHover from '@/components/common/CardHover.vue'

export default {
  name: "SaveBoard",
  components: {
    CardHover,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getSaveBoards'])
  }
}
</script>
<style scoped>
.layout {
  height: 100%;
  background:linear-gradient(45deg, #FFB798 0%, #CE86A0 100%);
}
.group-major {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}
</style>