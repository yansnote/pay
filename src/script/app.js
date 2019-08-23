/* import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import BuildBalloon from '@ckeditor/ckeditor5-build-balloon-block'

Vue.use(CKEditor)

var payvue = new Vue({
el: '#payvue',
data: {
    editor: BuildBalloon,
    editorData: '<p>Content of the editor.</p>',
    editorConfig: {
        // The configuration of the editor.
    }
  }
}); */

import Vue from 'vue';
import tiptap from './components/tiptap.vue';

new Vue({
    el: '#payvue',
    components: { tiptap }
});