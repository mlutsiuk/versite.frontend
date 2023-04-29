<template>
  <div class="flex min-h-[2.5rem] flex-row space-x-1 bg-white px-2 py-1">
    <template v-if="editor">
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
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Editor } from '@tiptap/vue-3';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: Editor;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: Editor): void;
}>();

const editor = useVModel(props, 'modelValue', emit);

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

function toggleBulletedList() {
  editor.value.chain().focus().toggleBulletList().run();
}

function toggleOrderedList() {
  editor.value.chain().focus().toggleOrderedList().run();
}

function toggleCode() {
  editor.value.chain().focus().toggleCode().run();
}
</script>
