<template>
  <div class="_transition-margin m-0 lg:m-16">
    <div class="mx-auto bg-white shadow-xl lg:max-w-6xl">
      <TheHeader />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style lang="postcss" scoped>
._transition-margin {
  transition: margin 0.5s;
}
</style>
