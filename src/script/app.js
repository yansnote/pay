import Vue from 'vue';

new Vue({
    el: '#pay-vue'
});


import { Editor, EditorContent } from 'tiptap'

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        content: '<p>Initial editor content</p>'
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}