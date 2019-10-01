<template>
  <div class="p-6 m-auto max-w-6xl">
    <TheHeader />
    <Nuxt />
    <TheFooter />
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
