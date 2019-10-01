<template>
  <nav class="TheHeader">
    <div class="flex justify-center items-center leading-none">
      <NuxtLink to="/" class="text-2xl font-bold">
        CurtisBelt.dev
      </NuxtLink>
      <div class="px-4 text-xs text-gray-600">
        Full Stack Engineer <span class="font-bold px-1">/</span> AWS Cloud
        Architect <span class="font-bold px-1">/</span> IT Generalist
      </div>
      <div class="flex-1"></div>
      <a
        href="https://www.linkedin.com/in/curtisbelt/"
        class="text-3xl hover:text-blue-500 p-2"
      >
        <FontAwesome :icon="['fab', 'linkedin']" />
      </a>
      <a
        href="https://github.com/CurtisBelt"
        class="text-3xl hover:text-blue-500 p-2"
      >
        <FontAwesome :icon="['fab', 'github']" />
      </a>
      <a
        href="https://codepen.io/curtisbelt/"
        class="text-3xl hover:text-blue-500 p-2"
      >
        <FontAwesome :icon="['fab', 'codepen']" />
      </a>
      <a
        href="https://stackexchange.com/users/1306270/curtis?tab=accounts"
        class="text-3xl hover:text-blue-500 p-2"
      >
        <FontAwesome :icon="['fab', 'stack-overflow']" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
