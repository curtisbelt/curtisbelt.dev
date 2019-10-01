<template>
  <div class="min-h-screen h-full flex justify-center items-center flex-col">
    <img src="~assets/images/nuxtjs-logo.png" class="w-32 mb-4" />
    <div
      class="bg-gray-300 px-4 py-3 rounded text-base leading-none font-medium"
    >
      Ready to go.
    </div>
    <br />
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
</template>

<script>
export default {
  name: 'Index'
}
</script>
