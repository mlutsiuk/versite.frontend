<template>
  <div class="flex h-full flex-col items-stretch bg-white">
    <SubmissionEditorMenu v-if="editor" v-model="editor" class="border-b" />

    <div class="flex w-full grow justify-center overflow-auto">
      <ClientOnly>
        <EditorContent
          :editor="editor"
          class="Tiptap-LessonMaterial h-full min-h-[10rem] w-full max-w-[85ch] self-center px-4 py-4"
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
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const title = ref('Auto-layout - Beginning');
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
    Heading.configure({
      levels: [1, 2, 3]
    }),
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
    TextAlign.configure({
      types: ['heading', 'paragraph']
    }),
    Underline
  ]
});
</script>
