<template>
  <editor-content :editor="editor" />
</template>

<script>

import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import { Heading, Bold, Italic, Link, HardBreak } from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        content: '<p>Initial editor content</p>',
        extensions: [
          new Heading(),
          new Bold(),
          new Italic(),
          new Link(),
          new HardBreak()
        ]
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>