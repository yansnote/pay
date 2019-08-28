<template>
  <div class="editor">

    <editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">

      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="material-icons">format_bold</i>
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="material-icons">format_italic</i>
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="material-icons">format_quote</i>
        </button>

      </div>

    </editor-menu-bubble>

    <editor-content class="editor__content" :editor="editor" />

  </div> <!-- end of editor -->
</template>

<script>

import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBubble,
  },
  data() {
    return {
      keepInBounds: true,
      editor: new Editor({
        content: '<p>Initial editor content</p>',
        extensions: [
          new Heading(),
          new Bold(),
          new Italic(),
          new Link(),
          new HardBreak(),
          new Code(),
          new Blockquote(),
          new Link()
        ]
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>