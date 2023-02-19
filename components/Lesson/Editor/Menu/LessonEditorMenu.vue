<template>
  <div class="flex flex-row space-x-1 px-4 py-1 bg-white min-h-[2.5rem]">
    <template v-if="editor">
      <LessonEditorMenuButton
        @click="toggleHeading(1)"
        :active="editor.isActive('heading', { level: 1 })"
        icon="mdi:number-1-box-outline"
      />
      <LessonEditorMenuButton
        @click="toggleHeading(2)"
        :active="editor.isActive('heading', { level: 2 })"
        icon="mdi:number-2-box-outline"
      />
      <LessonEditorMenuButton
        @click="toggleHeading(3)"
        :active="editor.isActive('heading', { level: 3 })"
        icon="mdi:number-3-box-outline"
      />

      <div class="border-r-2"></div>

      <LessonEditorMenuButton
        @click="toggleBold"
        :active="editor.isActive('bold')"
        icon="mdi:format-bold"
      />
      <LessonEditorMenuButton
        @click="toggleItalic"
        :active="editor.isActive('italic')"
        icon="mdi:format-italic"
      />
      <LessonEditorMenuButton
        @click="toggleUnderline"
        :active="editor.isActive('underline')"
        icon="mdi:format-underline"
      />
      <LessonEditorMenuButton
        @click="toggleStrike"
        :active="editor.isActive('strike')"
        icon="mdi:format-strikethrough-variant"
      />

      <div class="border-r-2 mx-2"></div>

      <LessonEditorMenuButton
        @click="setTextAlign('left')"
        :active="editor.isActive({ textAlign: 'left' })"
        icon="mdi:format-align-left"
      />
      <LessonEditorMenuButton
        @click="setTextAlign('center')"
        :active="editor.isActive({ textAlign: 'center' })"
        icon="mdi:format-align-center"
      />
      <LessonEditorMenuButton
        @click="setTextAlign('right')"
        :active="editor.isActive({ textAlign: 'right' })"
        icon="mdi:format-align-right"
      />
      <LessonEditorMenuButton
        @click="setTextAlign('justify')"
        :active="editor.isActive({ textAlign: 'justify' })"
        icon="mdi:format-align-justify"
      />

      <div class="border-r-2"></div>

      <LessonEditorMenuButton
        @click="toggleBulletedList"
        :active="editor.isActive('bulletList')"
        icon="mdi:format-list-bulleted"
      />
      <LessonEditorMenuButton
        @click="toggleOrderedList"
        :active="editor.isActive('orderedList')"
        icon="mdi:format-list-numbered"
      />

      <LessonEditorMenuButton
        @click="toggleCode"
        :active="editor.isActive('code')"
        icon="mdi:code-tags"
      />
      <LessonEditorMenuButton
        @click="setHorizontalLine"
        icon="mdi:horizontal-line"
      />
      <LessonEditorMenuButton
        @click="toggleBlockquote"
        :active="editor.isActive('blockquote')"
        icon="mdi:format-quote-open"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Editor } from '@tiptap/vue-3';
import { useVModel } from "@vueuse/core";

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
