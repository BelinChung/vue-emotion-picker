<template>
  <ul class="emotion-pages">
    <li class="emotion-pages__item" v-for="page in props.totalPages" :key="page">
      <a
        href="javascript:"
        class="emotion-pages__page"
        @click="emit('update:activePage', page)"
        :class="{ current: props.activePage === page }"
        >{{ page }}</a
      >
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['totalPages', 'activePage'])
const emit = defineEmits('update:activePage')
</script>

<style lang="scss" scoped>
.emotion-pages {
  float: right;
  margin-top: 8px;
  &__item {
    float: left;
    list-style: none;
  }
  &__page {
    float: left;
    height: 22px;
    padding: 0 8px;
    color: #0a8cd2;
    margin-left: 5px;
    line-height: 22px;
    border-radius: 1px;
    background: #f2f2f2;
    text-decoration: none;
    &.current {
      color: #333;
      cursor: default;
      background: #fff;
    }
  }
}
</style>
