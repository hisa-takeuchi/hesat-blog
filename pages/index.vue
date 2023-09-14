<template>
  <div id="js-getCategoryName"></div>
  <div id="js-getColumnList">
    <ol class="c-columnList">
      <li class="c-card" v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`">
          <section class="c-card">
            <div class="c-card__inner">
              <div class="c-card__textContents">
                <h3 class="c-card__title">{{ blog.title }}</h3>
                <ul v-if="blog.category" class="c-card__tagList mb-[8px]">
                  <li class="c-card__tag">{{ blog.category?.name }}</li>
                </ul>
                <p>{{ dateFormat(blog.publishedAt ?? blog.createdAt) }}</p>
              </div>
              <figure class="c-card__image relative pt-[60%]">
                <img
                  :src="blog.eyecatch?.url"
                  :width="blog.eyecatch?.width"
                  :height="blog.eyecatch?.height"
                  alt=""
                  class="absolute inset-0 w-full h-full"
                />
              </figure>
            </div>
          </section>
        </NuxtLink>
      </li>
    </ol>
  </div>
  <div id="js-setPagination"></div>
  <!-- / main -->
</template>

<script setup lang="ts">
  import { Blog } from '~/types/blog'

  const { data } = await useMicroCMSGetList<Blog>({
    endpoint: 'blogs'
  })
</script>

<style scoped></style>
