<template>
  <div class="h-full flex flex-col shadow-lg bg-white rounded-lg">
    <div class="border-b px-4 py-2 flex flex-col items-baseline">
      <LessonEditorTitleField v-model="title" class="mb-1"/>

      <div class="flex flex-row space-x-2 items-center text-gray-600 hover:border-gray-200 border-transparent px-1 cursor-pointer hover:bg-gray-100 rounded">
        <MdIcon
          class="text-gray-600"
          :icon="iconCalendar"
        />
        <span>
          03.12.2022
        </span>
      </div>
    </div>

    <LessonEditorMenu
      v-model="editor"
      class="border-b"
    />

    <EditorContent
      :editor="editor"
      class="h-full prose mx-auto"
    />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
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

import iconCalendar from "@iconify-icons/mdi/calendar";

const editor = useEditor({
  content: '<h1>I’m running Tiptap with Vue.js. 🎉</h1>',
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
      types: ['heading', 'paragraph'],
    }),
    Underline
  ]
});

const title = 'Auto-layout - Beginning';
</script>