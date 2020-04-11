<template>
  <div>
    <div class="sm:flex items-center mb-2 max-w-5xl py-2 md:py-8 px-4 md:px-12">
      <img
        src="~assets/images/curtisbelt.png"
        class="rounded-lg w-48 h-48 md:w-48 md:h-48 sm:mr-6 mx-auto mb-8 sm:mb-0"
        alt="Curtis Belt sitting at his desk, turned around, with computer monitors in the background"
      />
      <div>
        <div class="text-xl font-bold text-gray-700">Hey!</div>

        <p>
          I'm Curtis, a "<a
            class="underline text-blue-700"
            href="https://devopsinstitute.com/2017/11/15/from-i-shaped-to-t-shaped-why-devops-professionals-need-to-be-multi-skilled/"
            target="_blank"
            rel="noreferrer noopener"
            >T-shaped</a
          >" Developer, specializing in
          <strong>Front-end Development (7 yrs)</strong>.
        </p>

        <p>With additional experience in:</p>

        <ul class="list-disc pl-8">
          <li>Back-end Development (3 yrs)</li>
          <li>AWS Cloud Architecture (3 yrs)</li>
          <li>Linux Server Administration (2 yrs)</li>
          <li>Deployment Engineer (2 yrs)</li>
        </ul>
      </div>
    </div>

    <SectionTechnologies />
    <SectionWork />
  </div>
</template>

<script>
import SectionTechnologies from '~/components/SectionTechnologies'
import SectionWork from '~/components/SectionWork'

export default {
  name: 'Index',
  components: {
    SectionTechnologies,
    SectionWork,
  },
}
</script>
