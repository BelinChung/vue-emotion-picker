<template>
  <ul class="emotion-emotions">
    <li class="emotion-emotions__item" v-for="emo in props.emotions" :key="emo.phrase">
      <a href="javascript:" class="emotion-emotions__face" @click="picked(emo.phrase)"
        ><img class="vue-emotion" :src="baseUrl + emo.url"
      /></a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['emotions', 'baseUrl'])
const emit = defineEmits(['picked'])

const picked = (emo) => {
  emit('picked', emo)
}
</script>

<style lang="scss" scoped>
.emotion-emotions {
  width: 372px;
  height: 187px;
  padding: 11px 0 0 1px;
  &__item {
    float: left;
    list-style: none;
  }
  &__face {
    z-index: 1;
    float: left;
    width: 26px;
    height: 22px;
    cursor: pointer;
    overflow: hidden;
    padding: 4px 2px;
    position: relative;
    text-align: center;
    margin: -1px 0 0 -1px;
    border: 1px solid #e8e8e8;
    &:hover {
      z-index: 2;
      border: 1px solid #0095cd;
    }
    .vue-emotion {
      width: 22px;
      height: 22px;
      border: 0;
      vertical-align: text-bottom;
    }
  }
}
</style>
