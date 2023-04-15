<template>
  <div class="flex h-full w-full flex-grow overflow-auto text-neutral-700">
    <div class="flex flex-grow flex-col">
      <CourseCalendarHeader
        :date="date"
        @click-previous="changeMounth('previous')"
        @click-next="changeMounth('next')"
      />

      <CourseCalendarDaysHeader class="border border-gray-200" />
      <div
        class="grid h-auto w-full flex-grow grid-cols-7 gap-px border-x border-b border-gray-200 bg-gray-200"
      >
        <!-- Previous month days -->
        <CourseCalendarDay
          v-for="day in firstDayOfMounth"
          :key="day"
          :date="
            previousMounth.set(
              'date',
              previousMonthDaysCount - firstDayOfMounth + day
            )
          "
          inactive
        />

        <CourseCalendarDay
          v-for="day in currentMounthDaysCount"
          :key="day"
          :date="date.set('date', day)"
        />

        <CourseCalendarDay
          v-for="day in 7 - 1 - lastDayOfMounth"
          :key="day"
          :date="nextMounth.set('date', day)"
          inactive
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

const date = ref(dayjs());

function changeMounth(direction: 'previous' | 'next') {
  date.value = date.value.add(direction === 'previous' ? -1 : 1, 'month');
}

const previousMounth = computed(() => {
  return date.value.subtract(1, 'month');
});
const nextMounth = computed(() => {
  return date.value.add(1, 'month');
});

const currentMounthDaysCount = computed(() => {
  return date.value.daysInMonth();
});

const previousMonthDaysCount = computed(() => {
  return previousMounth.value.daysInMonth();
});

const firstDayOfMounth = computed(() => {
  return date.value.startOf('month').weekday();
});
const lastDayOfMounth = computed(() => {
  return date.value.endOf('month').weekday();
});
</script>
