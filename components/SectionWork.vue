<template>
  <div class="SectionWork // px-4 md:px-12 p-5">
    <h2>Work</h2>

    <div
      v-for="(position, positionIndex) in work"
      :key="`position-${positionIndex}`"
      class="mr-4"
    >
      <div class="flex justify-between">
        <div class="font-bold">{{ position.title }}</div>
        <div>
          {{ printWorkDate(position.startDate, position.endDate) }}
        </div>
      </div>
      <div>{{ position.company }}, {{ position.location }}</div>

      <div class="my-4" v-html="position.intro"></div>

      <div
        class="text-sm py-3 px-4 my-4 bg-gray-100 border-l-2 border-gray-300"
      >
        <ul class="list-disc pl-3">
          <li
            v-for="(bulletPoint, bulletPointIndex) in position.description"
            :key="`bulletPoint-${bulletPointIndex}`"
          >
            <template v-if="typeof bulletPoint == 'object'">
              <div class="font-bold">{{ bulletPoint.label }}</div>
              <ul class="list-disc pl-3 mb-4">
                <li
                  v-for="(subBulletPoint,
                  subBulletPointIndex) in bulletPoint.children"
                  :key="`subBulletPoint-${subBulletPointIndex}`"
                >
                  {{ subBulletPoint }}
                </li>
              </ul>
            </template>
            <template v-else>
              {{ bulletPoint }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import work from '~/data/work'

export default {
  name: 'SectionWork',
  data() {
    return Object.freeze({
      work,
    })
  },

  methods: {
    printWorkDate(startDateString, endDateString) {
      if (isNaN(Date.parse(startDateString))) {
        return
      }

      let isCurrent = false
      if (isNaN(Date.parse(endDateString))) {
        endDateString = Date.now()
        isCurrent = true
      }

      const dateFormat = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric',
      }).format

      const startDate = new Date(startDateString)
      const endDate = new Date(endDateString)

      const totalMonths =
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())

      const totalYears = Math.floor(totalMonths / 12)
      let totalYearsString = ''
      if (totalYears) {
        totalYearsString =
          totalYears > 1 ? `${totalYears} yrs ` : `${totalYears} yr `
      }

      const remainingMonths = totalMonths % 12

      let remainingMonthsString = ''
      if (remainingMonths >= 1) {
        remainingMonthsString =
          remainingMonths > 1
            ? `${remainingMonths} months`
            : `${remainingMonths} month`
      } else {
        remainingMonthsString = '<1 month'
      }

      return `${dateFormat(startDate)} - ${
        isCurrent ? 'Current' : dateFormat(endDate)
      } (${totalYearsString}${remainingMonthsString})`
    },
  },
}
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-2xl font-bold pb-3;
}

h3 {
  @apply text-xl font-bold;
}
</style>
