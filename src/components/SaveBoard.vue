<template>
  <section class="panel" id="board" v-if="getSaveBoards.length">
    <div class="gallery">
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
}
.group-major {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}
</style>