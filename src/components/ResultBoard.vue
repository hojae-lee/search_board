<template>
  <section class="panel" id="board" v-if="getResultBoards.length">
    <div class="gallery">
      <div class="group span-3">
        <a v-for="(span, idx) in span3" class="image filtered" :class="span" data-position="left" :key="getResultBoards[idx].type + idx">
          <CardHover :item="getResultBoards[idx]"/>
          <img :src="getResultBoards[idx].imageURL" :alt="getResultBoards[idx].title" />
        </a>
      </div>
      <div class="group span-3">
        <a v-for="(span, idx) in span3" class="image filtered" :class="span" data-position="left" :key="getResultBoards[idx].type + idx">
          <CardHover :item="getResultBoards[idx + 3]" />
          <img :src="getResultBoards[idx + 3].imageURL" :alt="getResultBoards[idx + 3].title" />
        </a>
      </div>
      <div class="group span-4-5">
        <a v-for="(span, idx) in span4" class="image filtered" :class="span" data-position="left" :key="getResultBoards[idx].type + idx">
          <CardHover :item="getResultBoards[idx + 6]" />
          <img :src="getResultBoards[idx + 6].imageURL" :alt="getResultBoards[idx + 6].title" />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import CardHover from '@/components/common/CardHover.vue'

export default {
  name: "ResultBoard",
  components: {
    CardHover,
  },
  data() {
    return {
      span3: [
        'span-3',
        'span-1-5',
        'span-1-5',
      ],
      span4: [
        'span-3',
        'span-1-5',
        'span-1-5',
        'span-3'
      ]
    }
  },
  computed: {
    ...mapGetters(['getResultBoards'])
  }
}
</script>
