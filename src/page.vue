<template>
  <ul class="pages">
    <li class="item" v-for="page in props.totalPages" :key="page">
      <a
        href="javascript:"
        class="page"
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
.pages {
  float: right;
  margin-top: 8px;
  .item {
    float: left;
    list-style: none;
    .page {
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
}
</style>
