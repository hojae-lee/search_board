<template>
  <div class="cardHover" :class="{active: active}" @mouseleave="$store.commit('SET_TOGGLE', false)">
    <div>
      <h3 class="major">{{ item.title }}</h3>
      <p>{{ item.desc }} </p>
    </div>
    <CardFloating v-if="!active" :item="item" />
  </div>
</template>
<script>
import CardFloating from '../button/CardFloating.vue'

export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CardFloating
  },
}
</script>
<style scoped>
p {
  font-size: 0.7rem;
}

.cardHover {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  opacity: 0;
  background-color: rgba(0,0,0,.8);
  padding: 1.5rem;
  box-sizing: border-box;
}

.cardHover:hover {
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
}

.cardHover.active {
  opacity: 1;
}
</style>