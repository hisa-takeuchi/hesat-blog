<template>
  <div v-if="data">
    <h1 class="text-3xl font-semibold">
      {{ data.title }}
    </h1>
    <img
      :src="data.eyecatch?.url"
      :width="data.eyecatch?.width"
      :height="data.eyecatch?.height"
      alt=""
      class="mt-6 md:mt-10"
    />
    <div
      class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"
    >
      <div
        class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
      >
        {{ data.category?.name }}
      </div>
      <div class="text-sm text-gray-700">
        {{ dateFormat(data.publishedAt ?? data.createdAt) }}
      </div>
    </div>
    <template v-for="content in data.contents">
      <div v-if="content.fieldId === 'richEditor'" v-html="content.richEditor" class="prose mt-6 md:mt-10" />
      <div v-if="content.fieldId === 'html'" v-html="content.html" class="prose mt-6 md:mt-10" />
    </template>
    <div class="text-center mt-16">
      <nuxt-link to="/" class="btn btn-wide">
        戻る
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Blog } from '~/types/blog'

const { params } = useRoute()

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: 'blogs',
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
})
console.log(data)
</script>

<style scoped></style>
