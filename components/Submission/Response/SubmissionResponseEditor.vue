<template>
  <div class="flex flex-col items-stretch bg-white">
    <SubmissionResponseEditorMenu
      v-if="editor"
      v-model="editor"
      class="border-b"
    />

    <div class="flex grow justify-center">
      <ClientOnly>
        <EditorContent
          :editor="editor"
          class="Tiptap-LessonMaterial h-[20vh] w-full self-center overflow-auto px-4 py-3"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EditorContent, useEditor } from '@tiptap/vue-3';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import Document from '@tiptap/extension-document';
import DropCursor from '@tiptap/extension-dropcursor';
import HardBreak from '@tiptap/extension-hard-break';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML());
  },
  extensions: [
    Bold,
    BulletList,
    Code,
    Document,
    DropCursor,
    HardBreak,
    History,
    Italic,
    Link.configure({
      openOnClick: true,
      linkOnPaste: true,
      HTMLAttributes: {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    }),
    ListItem,
    OrderedList,
    Paragraph,
    Strike,
    Text,
    Underline
  ]
});
</script>
