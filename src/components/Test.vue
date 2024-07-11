<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  msg: String,
})

const errorMsg = {}
let message = ''
Object.values(errorMsg).forEach((e) => {
  e.forEach(({ rowIndex, column }) => {
    const title = `第${rowIndex + 1}行的${column.title}信息`
    message += `请完善${title}\n`
  })
})

const count = ref(0)

const { t } = useI18n()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      {{t('1')}}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
a:before {
  content: 'css中的文字'
}
</style>
