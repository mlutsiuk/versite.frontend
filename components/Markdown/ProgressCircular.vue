<template>
  <div class="ProgressCircular">
    <svg
      :height="props.size"
      :width="props.size"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        cx="33"
        cy="33"
        fill="none"
        r="30"
        stroke-linecap="round"
        stroke-width="6"
      ></circle>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: string;
  }>(),
  {
    size: '1.5em'
  }
);
</script>

<style scoped lang="scss">
.ProgressCircular {
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
}

$offset: 187;
$duration: 1.4s;

svg {
  animation: rotator $duration linear infinite;
  transform: rotate(-90deg);
}

circle {
  stroke: currentColor;
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: calc($offset / 4);
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
