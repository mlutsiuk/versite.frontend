<template>
  <div class="flex min-h-[2.5rem] flex-row space-x-1 bg-white px-4 py-1">
    <template v-if="editor">
      <LessonEditorMenuButton
        :active="editor.isActive('heading', { level: 1 })"
        icon="mdi:number-1-box-outline"
        @click="toggleHeading(1)"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('heading', { level: 2 })"
        icon="mdi:number-2-box-outline"
        @click="toggleHeading(2)"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('heading', { level: 3 })"
        icon="mdi:number-3-box-outline"
        @click="toggleHeading(3)"
      />

      <div class="border-r-2"></div>

      <LessonEditorMenuButton
        :active="editor.isActive('bold')"
        icon="mdi:format-bold"
        @click="toggleBold"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('italic')"
        icon="mdi:format-italic"
        @click="toggleItalic"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('underline')"
        icon="mdi:format-underline"
        @click="toggleUnderline"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('strike')"
        icon="mdi:format-strikethrough-variant"
        @click="toggleStrike"
      />

      <div class="mx-2 border-r-2"></div>

      <LessonEditorMenuButton
        :active="editor.isActive({ textAlign: 'left' })"
        icon="mdi:format-align-left"
        @click="setTextAlign('left')"
      />
      <LessonEditorMenuButton
        :active="editor.isActive({ textAlign: 'center' })"
        icon="mdi:format-align-center"
        @click="setTextAlign('center')"
      />
      <LessonEditorMenuButton
        :active="editor.isActive({ textAlign: 'right' })"
        icon="mdi:format-align-right"
        @click="setTextAlign('right')"
      />
      <LessonEditorMenuButton
        :active="editor.isActive({ textAlign: 'justify' })"
        icon="mdi:format-align-justify"
        @click="setTextAlign('justify')"
      />

      <div class="border-r-2"></div>

      <LessonEditorMenuButton
        :active="editor.isActive('bulletList')"
        icon="mdi:format-list-bulleted"
        @click="toggleBulletedList"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('orderedList')"
        icon="mdi:format-list-numbered"
        @click="toggleOrderedList"
      />

      <LessonEditorMenuButton
        :active="editor.isActive('code')"
        icon="mdi:code-tags"
        @click="toggleCode"
      />
      <LessonEditorMenuButton
        icon="mdi:horizontal-line"
        @click="setHorizontalLine"
      />
      <LessonEditorMenuButton
        :active="editor.isActive('blockquote')"
        icon="mdi:format-quote-open"
        @click="toggleBlockquote"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Editor } from '@tiptap/vue-3';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: Editor;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: Editor): void;
}>();

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
