<template>
  <div class="px-4 md:px-12 p-5">
    <h2>Technologies</h2>
    <div class="pb-5 md:pl-6">
      <div class="mb-2 md:mb-0">
        <span class="text-red-600 font-bold">Advanced Production</span>:
        <span class="text-gray-600">
          In-depth experience and/or extensive usage in a production
          environment.
        </span>
      </div>
      <div class="mb-2 md:mb-0">
        <span class="text-blue-600 font-bold">Production</span>:
        <span class="text-gray-600">
          Professional experience in a production environment.
        </span>
      </div>
      <div class="mb-2 md:mb-0">
        <span class="text-green-600 font-bold">Recreational</span>
        <span class="text-gray-600">
          Familiar, have a good baseline experience; have taken a course and/or
          used on a personal project.
        </span>
      </div>
    </div>

    <ul>
      <li
        v-for="(category, categoryIndex) in technologies"
        :key="`category-${categoryIndex}`"
        class="font-bold pb-2"
      >
        {{ category.title }}
        <ul class="pt-2 pb-4">
          <template
            v-for="(rating, technologyRating, ratingIndex) in category.items"
          >
            <li
              v-for="(technology, technologyIndex) in rating"
              :key="`rating-${ratingIndex}-technology-${technologyIndex}`"
              class="my-0 font-normal pl-1"
            >
              <span
                class="absolute __bullet-position"
                :data-rating="technologyRating"
              />
              <div class="pl-4">{{ technology }}</div>
            </li>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import technologies from '~/data/technologies'

export default {
  name: 'SectionTechnologies',
  data() {
    return Object.freeze({
      technologies
    })
  }
}
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-2xl font-bold pb-3;
}

ul {
  list-style-position: inside;
  @media (min-width: 485px) {
    column-count: 2;
  }
  @media (min-width: 660px) {
    column-count: 3;
  }
  @media (min-width: 888px) {
    column-count: 4;
  }
  @media (min-width: 1218px) {
    column-count: 5;
  }
}

li {
  break-inside: avoid;
}

ul ul {
  column-count: 1;
}

[data-rating] {
  @apply w-2 h-2 rounded-full inline-block align-middle;
}
[data-rating='3'] {
  @apply bg-green-400;
}
[data-rating='2'] {
  @apply bg-blue-400;
}
[data-rating='1'] {
  @apply bg-red-400;
}

.__bullet-position {
  margin-top: 6px;
}
</style>
