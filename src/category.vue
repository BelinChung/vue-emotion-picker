<template>
  <div class="emotion-categories flex-row flex-hc">
    <ul class="emotion-categories__list flex-row flex-rest-width">
      <li class="emotion-categories__item" v-for="item in categories" :key="item.key">
        <a
          href="javascript:"
          class="emotion-categories__category"
          :class="{ current: props.activeCategory === item.key }"
          @click="emit('update:activeCategory', item.key)"
          >{{ item.value }}</a
        >
      </li>
    </ul>
    <!-- <div class="switch">
      <a href="javascript:" class="prev">«</a>
      <a href="javascript:" class="next">»</a>
    </div> -->
  </div>
</template>

<script setup>
import { getEmotionData } from './options'

const props = defineProps(['activeCategory'])
const emit = defineEmits(['update:activeCategory'])

const emotionData = getEmotionData()

const categories = Object.keys(emotionData).map((item) => {
  return {
    key: item,
    value: item
  }
})
</script>

<style lang="scss" scoped>
.emotion-categories {
  width: 100%;
  &__item {
    list-style: none;
  }
  &__category {
    color: #0a8cd2;
    cursor: pointer;
    padding: 3px 10px;
    border-radius: 4px;
    white-space: nowrap;
    text-decoration: none;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
    &.current,
    &.current:hover {
      color: #333;
      cursor: default;
      background: #e6e6e6;
      text-decoration: none;
    }
  }
  // .switch {
  //   .next,
  //   .prev {
  //     float: left;
  //     color: #555;
  //     width: 22px;
  //     height: 22px;
  //     font-size: 20px;
  //     margin-left: 5px;
  //     line-height: 20px;
  //     text-align: center;
  //     background: #f8f8f8;
  //     text-decoration: none;
  //     &:hover {
  //       background: #efeeee;
  //     }
  //   }
  // }
}
</style>
