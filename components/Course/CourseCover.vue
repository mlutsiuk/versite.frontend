<template>
  <canvas ref="canvas" @click="mouseClicked" width="5000" height="10000"/>
</template>

<script setup lang="ts">
import shuffle from "lodash-es/shuffle";
import random from "lodash-es/random";

const canvas = ref<HTMLCanvasElement | null>(null);

const colorPalettes = [
  ['#152A3B', '#0D809C', '#F5C03E', '#D63826', '#EBEBD6'],
  ['#0F4155', '#5399A1', '#8CA96B', '#CB5548', '#E7E6F5'],
  ['#E8614F', '#F3F2DB', '#79C3A7', '#668065', '#4B3331'],
  ['#DBE5EC', '#336B87', '#2A3132', '#E94D35', '#EFAC55']
];
let queueNumber = [0, 1, 2, 3, 4];
let size = 5000;
let num = 8;
let colorThemeIndex = 2;
let currentPalette, tileLen;

function getContext() {
  if (!canvas.value) {
    return null;
  }
  return canvas.value.getContext('2d');
}

function fill(color: string) {
  let context = getContext();
  if (!context) {
    return;
  }
  context.fillStyle = color;
  context.fill();
}

function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
  let context = getContext();
  if (!context) {
    return;
  }
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.closePath();
}

function rect(x: number, y: number, width: number, height: number) {
  let context = getContext();
  if (!context) {
    return;
  }
  context.beginPath();
  context.rect(x, y, width, height);
  context.closePath();
}

function clear() {
  let context = getContext();
  if (!context)
    return;

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function draw() {
  clear();

  tileLen = size / num;
  currentPalette = colorPalettes[colorThemeIndex];
  for (let x = 0; x < size; x += tileLen) {
    for (let y = 0; y < size * 2; y += tileLen) {
      queueNumber = shuffle(queueNumber);
      rect(x, y, tileLen, tileLen);
      fill(currentPalette[queueNumber[0]]);
    }
  }

  for (let x = 0; x < size; x += tileLen) {
    for (let y = 0; y < size * 2; y += tileLen) {
      switch (Math.round(random(0.51, 4.49))) {
        case 1:
          triangle(x + tileLen, y, x + tileLen, y + tileLen, x, y);    // Right Top
          break;
        case 2:
          triangle(x + tileLen, y + tileLen, x,y + tileLen, x + tileLen, y);    // Right Bottom
          break;
        case 3:
          triangle(x, y + tileLen, x, y, x + tileLen, y + tileLen);    // Left Bottom
          break;
        case 4:
          triangle(x, y,x + tileLen, y, x, y + tileLen);    // Left Top
          break;
      }

      queueNumber = shuffle(queueNumber);
      fill(currentPalette[queueNumber[0]]);
    }
  }
}

function mouseClicked() {
  colorThemeIndex = (colorThemeIndex + 1) % 4;
  draw();
}

onMounted(() => {
  draw();
})
</script>
