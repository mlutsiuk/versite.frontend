<template>
  <div class="flex h-full flex-col items-stretch rounded-lg bg-white shadow-lg">
    <div class="flex flex-col items-baseline border-b px-4 py-2">
      <LessonEditorTitleField v-model="title" class="mb-1" />

      <!-- <LessonEditorPublicationDatePopover v-model="date" /> -->
    </div>

    <LessonEditorMenu v-if="editor" v-model="editor" class="border-b" />

    <div class="flex w-full grow justify-center overflow-auto">
      <ClientOnly>
        <EditorContent
          :editor="editor"
          class="Tiptap-LessonMaterial h-full w-full max-w-[85ch] self-center px-4 py-5"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import Document from '@tiptap/extension-document';
import DropCursor from '@tiptap/extension-dropcursor';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useDebounceFn } from '@vueuse/core';
import { Editor } from '@tiptap/core';
import { lessons } from '~/api/repositories';

const props = defineProps<{
  lessonId: string;
}>();

const updateLessonMaterial = useDebounceFn(async (editor: Editor) => {
  await lessons.updateMaterial.asyncData({
    body: {
      content: editor.getHTML()
    },
    routeParams: {
      id: props.lessonId
    }
  });
}, 700);

const title = ref('Auto-layout - Beginning');
const editor = useEditor({
  extensions: [
    Blockquote,
    Bold,
    BulletList,
    Code,
    CodeBlock,
    Document,
    DropCursor,
    HardBreak,
    Heading.configure({
      levels: [1, 2, 3]
    }),
    History,
    HorizontalRule,
    Italic,
    ListItem,
    OrderedList,
    Paragraph,
    Strike,
    Text,
    TextAlign.configure({
      types: ['heading', 'paragraph']
    }),
    Underline
  ],
  onUpdate: ({ editor }) => updateLessonMaterial(editor)
});

const { data, execute } = await lessons.findMaterial.asyncData({
  immediate: false,
  routeParams: {
    id: props.lessonId
  }
});

onMounted(async () => {
  await execute();

  if (data.value?.data) {
    editor.value?.commands.setContent(data.value.data.content);
  }
});
</script>
