<template>
  <div class="flex h-full w-full flex-grow overflow-auto text-neutral-700">
    <div class="flex flex-grow flex-col">
      <CourseCalendarHeader
        :date="date"
        @click-previous="changeMounth('previous')"
        @click-next="changeMounth('next')"
        :loading="pending"
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
          :lessons="groupedLessons"
          inactive
        />

        <CourseCalendarDay
          v-for="day in currentMounthDaysCount"
          :key="day"
          :date="date.set('date', day)"
          :lessons="groupedLessons"
        />

        <CourseCalendarDay
          v-for="day in 7 - 1 - lastDayOfMounth"
          :key="day"
          :date="nextMounth.set('date', day)"
          :lessons="groupedLessons"
          inactive
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { Lesson } from '~/api/models';
import { lessons } from '~/api/repositories';

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

const daysRange = computed(() => {
  let from, to;

  if (firstDayOfMounth.value === 0) {
    from = date.value.set('date', 1);
  } else {
    from = previousMounth.value.set(
      'date',
      previousMonthDaysCount.value - firstDayOfMounth.value + 1
    );
  }

  if (lastDayOfMounth.value === 6) {
    to = date.value.set('date', currentMounthDaysCount.value);
  } else {
    to = nextMounth.value.set('date', 7 - 1 - lastDayOfMounth.value);
  }

  return {
    from: from.format('YYYY-MM-DD'),
    to: to.format('YYYY-MM-DD')
  };
});

const queryParams = computed(() => {
  return {
    ...daysRange.value,
    include: 'course'
  };
});

const { data, execute, pending } = await lessons.calendar.fetch({
  immediate: false,
  query: queryParams
});

const groupedLessons = computed<Record<string, Lesson[]>>(() => {
  if (!data.value?.data) {
    return {};
  }

  return data.value.data.reduce((acc, lesson) => {
    const date = dayjs(lesson.date).format('YYYY-MM-DD');

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(lesson);

    return acc;
  }, {} as Record<string, Lesson[]>);
});

onMounted(execute);
</script>
