<template>
  <div>
    <div
      class="sm:flex items-center mb-2 mx-auto max-w-3xl py-2 md:py-8 px-4 md:px-12"
    >
      <img
        src="~assets/images/curtisbelt.png"
        class="rounded-lg w-48 h-48 md:w-64 md:h-64 sm:mr-6 mx-auto mb-8 sm:mb-0"
        alt="Curtis Belt sitting at his desk, turned around, with computer monitors in the background"
      />
      <div class="text-sm">
        <div class="text-xl font-bold text-gray-700">Hey!</div>

        <p class="font-serif">
          I'm Curtis, a Full Stack + Cloud Engineer and IT Generalist. Currently
          residing in Chicago, although I have enjoyed working remote for the
          past 2 years.
        </p>

        <p class="font-serif">
          My latest focus has been with custom headless WordPress themes, using
          custom PHP API, and Vue.js/Nuxt.js as the front-end. All of which are
          hosted on a AWS, with multi-instance fault-tolerance and
          high-availability deployments.
        </p>
        <p class="font-serif">
          When I'm not working, I'm playing Overwatch or League of Legends, but
          let's face it I'm mostly working.
        </p>
      </div>
    </div>

    <SectionTechnologies />
  </div>
</template>

<script>
import SectionTechnologies from '~/components/SectionTechnologies'

export default {
  name: 'Index',
  components: {
    SectionTechnologies
  }
}
</script>
