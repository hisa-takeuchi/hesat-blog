<template>
  <article>
    <header class="p-columnPostHeader">
      <div v-if="data?.category" id="js-postCategory">
        <ul class="p-columnPostCategories text-[0.75rem]">
          <li>
            <span class="c-label">{{ data.category.name }}</span>
          </li>
        </ul>
      </div>
      <h1 class="p-columnPostTitle" id="js-postTitle">{{ data?.title }}</h1>

      <!-- 投稿日と更新日 -->
      <div class="p-columnPostDate text-[0.875rem]">
        <p class="c-iconText">
          <img
            class="c-iconText__icon"
            src="https://d33wubrfki0l68.cloudfront.net/365e10b6774b6869f1f14621177209f46a659da0/a3048/assets/images/icon_pen.svg"
            alt="投稿日"
            width="20"
            height="20"
          />
          <span id="js-publishedDate">{{
            dateFormat(data.publishedAt ?? data.createdAt)
          }}</span>
        </p>
        <p class="c-iconText">
          <img
            class="c-iconText__icon"
            src="https://d33wubrfki0l68.cloudfront.net/82e58d61b8a184983ae0daa4472296327c2eecd2/2eab1/assets/images/icon_update.svg"
            alt="更新日"
            width="20"
            height="20"
          />
          <time datetime="2023-07-11T14:18:52.952Z" id="js-updatedDate">{{
            dateFormat(data.updatedAt ?? data.createdAt)
          }}</time>
        </p>
      </div>
    </header>

    <!-- サムネイル -->
    <div id="js-postThumbnail">
      <figure class="p-columnThumbnail">
        <img
          :src="data.eyecatch?.url"
          :width="data.eyecatch?.width"
          :height="data.eyecatch?.height"
          class="max-w-[1200px] max-h-[630px]"
        />
      </figure>
    </div>

    <!-- 投稿 -->
    <div class="c-post">
      <div id="js-post">
        <div class="c-postEditor">
          <template v-for="content in data.contents">
            <div
              v-if="content.fieldId === 'richEditor'"
              v-html="content.richEditor"
              class="prose mt-6 md:mt-10"
            />
            <div
              v-if="content.fieldId === 'html'"
              v-html="content.html"
              class="prose mt-6 md:mt-10"
            />
          </template>
        </div>
      </div>
    </div>

    <!-- SNSシェア -->
    <div class="c-snsShare u-mt-sp-40 u-mt-tab-80 mt-52">
      <section>
        <h2 class="c-snsShare__heading">
          <span class="c-snsShare__headingText">share</span>
        </h2>
        <p class="c-snsShare__lead">この記事がよかったらシェアお願いします！</p>
        <ul class="c-snsShare__list" id="js-snsShareList">
          <li>
            <a
              :href="`https://twitter.com/share?text=${data.title}&amp;url=${url}`"
              class="c-snsShare__button js-getSnsLink"
              data-sns="twitter"
              title="Twitterでシェア"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/17ba6d9af878da74bedd74602c706eef2656650c/7b306/assets/images/icon_twitter_lg.svg"
                alt="Twitter"
                width="64"
                height="64"
              />
            </a>
          </li>
          <li>
            <a
              :href="`http://www.facebook.com/share.php?u=${url}`"
              class="c-snsShare__button js-getSnsLink"
              data-sns="facebook"
              title="Facebookでシェア"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1c68e6b9949883b0e25e0166534b531176caeaac/1beab/assets/images/icon_facebook_lg.svg"
                alt="Facebook"
                width="64"
                height="64"
            /></a>
          </li>
          <li>
            <a
              :href="`https://social-plugins.line.me/lineit/share?url=${url}`"
              class="c-snsShare__button js-getSnsLink"
              data-sns="line"
              title="LINEでシェア"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                src="https://d33wubrfki0l68.cloudfront.net/d9ca489b2ec87d4d75f03db8babafa40f230fe9b/a0b01/assets/images/icon_line_lg.svg"
                alt="LINE"
                width="64"
                height="64"
            /></a>
          </li>
          <li>
            <button
              type="button"
              class="c-snsShare__button js-getSnsLink js-copyLink"
              :data-link="url"
              data-sns=""
              title="リンクをコピー"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d13dd318a2d73f5cc910ce298d90a80883c05ee1/c0937/assets/images/icon_link_lg.svg"
                alt="リンク"
                width="64"
                height="64"
              />
            </button>
          </li>
        </ul>
      </section>
    </div>
  </article>
  <div class="p-columnBottomLink">
    <p>
      <NuxtLink class="u-link-leftArrow" to="/">記事一覧に戻る</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
  import { Blog } from '~/types/blog'

  const runtimeConfig = useRuntimeConfig()

  const { params, fullPath } = useRoute()

  const url = runtimeConfig.public.appUrl + fullPath

  const { data } = await useMicroCMSGetListDetail<Blog>({
    endpoint: 'blogs',
    contentId: Array.isArray(params.id) ? params.id[0] : params.id
  })

  const article = data.value

  useHead({
    title: article?.title,
    meta: [
      { property: 'og:title', content: article?.title },
      { property: 'og:description', content: article?.title },
      { property: 'og:image', content: article?.eyecatch.url }
    ]
  })
</script>

<style scoped></style>
