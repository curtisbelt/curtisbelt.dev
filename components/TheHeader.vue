<template>
  <nav class="TheHeader px-4 md:px-12 py-5">
    <div class="flex justify-center items-center leading-none">
      <NuxtLink to="/" class="text-lg font-bold">Curtis Belt</NuxtLink>
      <div class="px-4 text-gray-600"></div>
      <div class="flex-1"></div>
      <a
        v-for="button in social"
        :key="button.text"
        :aria-label="button.text"
        :title="button.text"
        :href="button.url"
        target="_blank"
        rel="noreferrer noopener"
        class="text-xl hover:text-blue-500 p-2 sm:p-3"
      >
        <FontAwesome aria-hidden="true" :icon="['fab', button.icon]" />
      </a>
    </div>
  </nav>
</template>

<script>
import social from '~/data/social'

export default {
  name: 'TheHeader',
  data() {
    return {
      social: Object.freeze(social),
    }
  },
}
</script>
