<template>
  <div class="flex flex-row space-x-1 px-4 py-1 bg-white min-h-[2.5rem]">
    <template v-if="editor">
      <LessonEditorMenuButton
        @click="toggleHeading(1)"
        :active="editor.isActive('heading', { level: 1 })"
        :icon="iconHeadingOne"
      />
      <LessonEditorMenuButton
        @click="toggleHeading(2)"
        :active="editor.isActive('heading', { level: 2 })"
        :icon="iconHeadingTwo"
      />
      <LessonEditorMenuButton
        @click="toggleHeading(3)"
        :active="editor.isActive('heading', { level: 3 })"
        :icon="iconHeadingThree"
      />

      <div class="border-r-2"></div>

      <LessonEditorMenuButton
        @click="toggleBold"
        :active="editor.isActive('bold')"
        :icon="iconBold"
      />
      <LessonEditorMenuButton
        @click="toggleItalic"
        :active="editor.isActive('italic')"
        :icon="iconItalic"
      />
      <LessonEditorMenuButton
        @click="toggleUnderline"
        :active="editor.isActive('underline')"
        :icon="iconUnderline"
      />
      <LessonEditorMenuButton
        @click="toggleStrike"
        :active="editor.isActive('strike')"
        :icon="iconStrikethrough"
      />

      <div class="border-r-2 mx-2"></div>

      <LessonEditorMenuButton
        @click="setTextAlign('left')"
        :active="editor.isActive({ textAlign: 'left' })"
        :icon="iconAlignLeft"
      />
      <LessonEditorMenuButton
        @click="setTextAlign('center')"
        :active="editor.isActive({ textAlign: 'center' })"
        :icon="iconAlignCenter"
      />
      <LessonEditorMenuButton
        @click="setTextAlign('right')"
        :active="editor.isActive({ textAlign: 'right' })"
        :icon="iconAlignRight"
      />
      <LessonEditorMenuButton
        @click="setTextAlign('justify')"
        :active="editor.isActive({ textAlign: 'justify' })"
        :icon="iconAlignJustify"
      />

      <div class="border-r-2"></div>

      <LessonEditorMenuButton
        @click="toggleBulletedList"
        :active="editor.isActive('bulletList')"
        :icon="iconListBulleted"
      />
      <LessonEditorMenuButton
        @click="toggleOrderedList"
        :active="editor.isActive('orderedList')"
        :icon="iconListNumbered"
      />

      <LessonEditorMenuButton
        @click="toggleCode"
        :active="editor.isActive('code')"
        :icon="iconCodeTags"
      />
      <LessonEditorMenuButton
        @click="setHorizontalLine"
        :icon="iconHorizontalLine"
      />
      <LessonEditorMenuButton
        @click="toggleBlockquote"
        :active="editor.isActive('blockquote')"
        :icon="iconQuoteOpen"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Editor } from '@tiptap/vue-3';
import { useVModel } from "@vueuse/core";
import iconBold from '@iconify-icons/mdi/format-bold';
import iconItalic from '@iconify-icons/mdi/format-italic';
import iconStrikethrough from '@iconify-icons/mdi/format-strikethrough-variant';
import iconUnderline from '@iconify-icons/mdi/format-underline';

import iconHeadingOne from '@iconify-icons/mdi/number-1-box-outline';
import iconHeadingTwo from '@iconify-icons/mdi/number-2-box-outline';
import iconHeadingThree from '@iconify-icons/mdi/number-3-box-outline';

import iconAlignLeft from '@iconify-icons/mdi/format-align-left';
import iconAlignCenter from '@iconify-icons/mdi/format-align-center';
import iconAlignRight from '@iconify-icons/mdi/format-align-right';
import iconAlignJustify from '@iconify-icons/mdi/format-align-justify';

import iconListBulleted from '@iconify-icons/mdi/format-list-bulleted';
import iconListNumbered from '@iconify-icons/mdi/format-list-numbered';
import iconCodeTags from '@iconify-icons/mdi/code-tags';
import iconHorizontalLine from '@iconify-icons/mdi/horizontal-line';
import iconQuoteOpen from '@iconify-icons/mdi/format-quote-open';

const props = defineProps<{
  modelValue: Editor
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: Editor): void
}>()

const editor = useVModel(props, 'modelValue', emit);


function toggleHeading(level: 1 | 2 | 3) {
  editor.value.chain().focus().toggleHeading({ level }).run();
}

function toggleBold() {
  editor.value.chain().focus().toggleBold().run();
}
function toggleItalic() {
  editor.value.chain().focus().toggleItalic().run();
}
function toggleUnderline() {
  editor.value.chain().focus().toggleUnderline().run();
}
function toggleStrike() {
  editor.value.chain().focus().toggleStrike().run();
}

function setTextAlign(alignment: 'left' | 'center' | 'right' | 'justify') {
  editor.value.chain().focus().setTextAlign(alignment).run();
}

function toggleBulletedList() {
  editor.value.chain().focus().toggleBulletList().run();
}
function toggleOrderedList() {
  editor.value.chain().focus().toggleOrderedList().run();
}

function toggleCode() {
  editor.value.chain().focus().toggleCode().run();
}
function setHorizontalLine() {
  editor.value.chain().focus().setHorizontalRule().run();
}
function toggleBlockquote() {
  editor.value.chain().focus().toggleBlockquote().run();
}
</script>
