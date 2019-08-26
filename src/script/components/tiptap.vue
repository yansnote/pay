<template>
  
  <editor-content :editor="editor" />
</template>

<script>
// Import the editor
import { Editor, EditorContent } from 'tiptap'
import { Heading } from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>This is just a boring paragraph</p>',
      extensions: [
        new Heading()
      ]
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>