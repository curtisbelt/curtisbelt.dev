<template>
  <div class="_transition-margin m-0 xl:m-16">
    <div class="mx-auto bg-white shadow-xl xl:max-w-6xl">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter: () => import('~/components/TheFooter')
  }
}
</script>

<style lang="postcss" scoped>
._transition-margin {
  transition: margin 0.5s;
}
</style>
