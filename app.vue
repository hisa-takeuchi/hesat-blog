<template>
  <NuxtLayout>
    <TheHeader />
    <div class="l-main">
      <div class="p-columnPost">
        <div class="l-container">
          <div class="l-row l-row--sidebar">
            <main>
              <NuxtPage />
            </main>
            <!--    TODO:トップと記事詳細でアサイド分岐        -->
            <aside class="c-sidebar">
              <h2 class="c-sidebar__title">カテゴリ</h2>
              <div id="js-getCategoryList">
                <ul class="c-linkList c-linkList--underLine">
                  <li v-for="category in data?.contents">
                    <button
                      class="c-linkList__contents js-switchCategory"
                      data-category="すべて"
                    >
                      {{ category.name }}
                    </button>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
  html {
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>
<script setup lang="ts">
  import { Category } from '~/types/category'

  const { data } = await useMicroCMSGetList<Category[]>({
    endpoint: 'categories'
  })
</script>
