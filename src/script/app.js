import Vue from 'vue';

import { Editor } from 'tiptap'
export default {
  components: {
    Editor,
  },
}

new Vue({
    el: '#payvue',
    data: {
      message: 'Hello There! This is Vue.'
    }
});

