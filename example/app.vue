<template>
  <div class="demo">
    <textarea
      id="textarea"
      name="textarea"
      cols="60"
      rows="7"
      style="margin-bottom: 20px"
      v-model="content"
      ref="InputRef"
    ></textarea>
    <VueEmotionPicker v-model:visible="visible" @picked="onPicked">
      <template #reference>
        <button @click="visible = true">打开表情</button>
      </template>
    </VueEmotionPicker>
    <button @click="parse" style="margin-left: 15px">解析表情</button>
    <div class="result" style="margin-top: 15px" v-html="result"></div>
  </div>
</template>

<script setup>
import { parseEmotion } from '../src'
import { ref } from 'vue'

const visible = ref(false)
const content = ref('')
const result = ref('')
const InputRef = ref()

const onPicked = (emo) => {
  insertText(emo)
}

const parse = () => {
  result.value = parseEmotion(content.value)
}

const insertText = (text) => {
  const _this = InputRef.value
  if (document.selection) {
    _this.focus()
    const cr = document.selection.createRange()
    cr.text = text
    cr.collapse()
    cr.select()
  } else if (_this.selectionStart !== undefined) {
    const start = _this.selectionStart
    const end = _this.selectionEnd
    content.value = _this.value.substring(0, start) + text + _this.value.substring(end, _this.value.length)
    _this.selectionStart = _this.selectionEnd = start + text.length
  } else {
    content.value += text
  }
}
</script>

<style lang="scss" scoped>
.demo {
  font-size: 14px;
  width: 450px;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  font-family: 'Lato', sans-serif;
  padding: 20px 50px;
}
</style>
