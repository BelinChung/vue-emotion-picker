## vue-emotion-picker

基于 Vue3 的表情选择器组件

![screenshot](./example/screenshot.png)

### 使用方式

1. Usage with script tag

```
<script src="//localhost/vue-emotion-picker.js"></script>
```

2. Usage with npm

```
yarn add vue-emotion-picker
```

```
import VueEmotionPicker from 'vue-emotion-picker'
import 'vue-emotion-picker/dist/vue-emotion-picker.css'

createApp(App)
  .use(VueEmotionPicker, {
    baseResUrl: '//localhost/emotions/'
  })
  .mount('#app')

// 配置项
const prop = ref({
  baseUrl: '//localhost/emotions/',
  offset: {
    top: 0,
    left: 0
  }
})

<VueEmotionPicker v-model:visible="visible" @picked="onPicked" :prop="prop">
  <template #reference>
    <button @click="visible = true">打开表情</button>
  </template>
</VueEmotionPicker>
```

具体使用参考：[`example/app.vue`](./example/app.vue)

### License

Copyright (c) 2022 Belin Chung. MIT Licensed, see [LICENSE] for details.

[license]: https://github.com/BelinChung/vue-emotion-picker/blob/main/LICENSE.md
