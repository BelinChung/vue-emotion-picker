<template>
  <div class="emotion-reference" ref="ReferenceRef">
    <slot name="reference"></slot>
  </div>
  <teleport to="body">
    <div
      class="emotion-picker"
      :style="position"
      v-click-outside="onClickOutside"
      v-show="props.visible"
      ref="PickerRef"
    >
      <Category v-model:activeCategory="activeCategory" />
      <Emotion :emotions="pageEmotions" @picked="onPicked" :baseUrl="prop.baseUrl" />
      <Page :totalPages="totalPages" v-model:activePage="activePage" />
    </div>
  </teleport>
</template>

<script setup>
import Category from './category.vue'
import Emotion from './emotion.vue'
import Page from './page.vue'
import vClickOutside from 'click-outside-vue3/src/v-click-outside'
import { getEmotionData, getBaseResUrl } from './options'
import { ref, computed, watch, nextTick } from 'vue'

import './style.scss'

const defaultProp = {
  pageSize: 72,
  baseUrl: getBaseResUrl(),
  offset: {
    top: 0,
    left: 0
  }
}

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  prop: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const emit = defineEmits(['update:visible', 'picked'])

const emotionData = getEmotionData()
const defaulCategory = Object.keys(emotionData)[0]

const activeCategory = ref(defaulCategory)
const activePage = ref(1)
const position = ref({
  position: 'absolute',
  inset: '0px auto auto 0px'
})
const ReferenceRef = ref()
const PickerRef = ref()

const prop = computed(() => {
  return {
    ...defaultProp,
    ...props.prop
  }
})

const emotions = computed(() => {
  return emotionData[activeCategory.value]
})
const pageEmotions = computed(() => {
  return emotions.value.slice((activePage.value - 1) * prop.value.pageSize, activePage.value * prop.value.pageSize)
})
const totalPages = computed(() => {
  return Math.ceil(emotions.value.length / prop.value.pageSize)
})

const onPicked = (emo) => {
  emit('picked', emo)
  emit('update:visible', false)
}

const onClickOutside = (e) => {
  if (e.target.closest('.emotion-reference')) return false
  emit('update:visible', false)
}

watch(activeCategory, () => {
  activePage.value = 1
})

const computedPosition = () => {
  const { top, left, height } = ReferenceRef.value.getBoundingClientRect()
  const { height: pickerHeight } = PickerRef.value.getBoundingClientRect()
  let offsetTop = top + height + 10
  let offsetLeft = left
  offsetLeft = offsetLeft + (prop.value.offset?.left ?? 0)
  offsetTop = offsetTop + (prop.value.offset?.top ?? 0)
  // 如果屏幕不够高度显示，则显示在上方
  if (offsetTop + pickerHeight > window.innerHeight) {
    offsetTop = offsetTop - pickerHeight - height - 20
  }
  position.value = {
    ...position.value,
    transform: `translate(
      ${offsetLeft + 'px'},
      ${offsetTop + 'px'}
    )`
  }
}

watch(
  () => props.visible,
  (val) => {
    if (!val) return false
    nextTick(() => {
      computedPosition()
    })
  }
)
</script>

<style lang="scss">
.emotion-reference {
  display: inline-block;
}
.emotion-picker {
  z-index: 999;
  width: 373px;
  padding: 10px;
  font-size: 12px;
  background: #fff;
  position: absolute;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
  box-sizing: content-box;
  * {
    box-sizing: content-box;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    .flex-rest-height {
      flex: 1;
      height: initial;
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;

    .flex-rest-width {
      flex: 1;
      width: initial;
    }
    .flex-rest-width-longger {
      flex: 1.2;
      width: initial;
    }
  }

  .flex-hc {
    align-items: center;
  }

  .flex-vc {
    justify-content: center;
  }
  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
}
</style>
