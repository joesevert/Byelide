<script setup lang='ts'>
import { useEditor,EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { TextBold, TextItalic, Strikethrough} from '@icon-park/vue-next'
import { ColorHighLight } from './Extensions/ColorHighLighter';

const editor = useEditor({
  content:`
    <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
    <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
    <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
    `,
    extensions: [
    StarterKit.configure({
      bold: {
        HTMLAttributes: {
          class: 'custom-bold'
        }
      }
    }),
    ColorHighLight
  ]
})
</script>
<template>
  <div class="notes-editor-wrapper">
    <div class="notes-editor-header">
      <button 
        class="note-editor-header-button"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        <TextBold/>
      </button>
      <button 
        class="note-editor-header-button"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        <TextItalic/>
      </button>
      <button 
        class="note-editor-header-button"
        @click="editor?.chain().focus().toggleStrike().run()"
      >
        <Strikethrough/>
      </button>
    </div>
    <editor-content :editor="editor" class="notes-editor-content"/>
  </div>
</template>


<style scoped>
.notes-editor-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 6px;
  border: 1px solid var(--color-gray-300);
  overflow: hidden;
}

.notes-editor-header {
  display: flex;
  padding: 10px 12px;
  border-style: none;
  background-color: var(--color-gray-200);

}

.note-editor-header-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
}

.note-editor-header-button:hover {
  background-color: var(--color-gray-300);
}

.notes-editor-content {
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  font-size: 14px;
}

</style>

<style lang="css">
.ProseMirror {
  font-size: var(--font-size-large);
  outline: none;
  font-weight: normal;
  > * + * {
    margin-top: 0.75em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

/* Color swatches */
.color {
  white-space: nowrap;

  &::before {
    content: ' ';
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 1px solid rgba(128, 128, 128, 0.3);
    vertical-align: middle;
    margin-right: 0.1em;
    margin-bottom: 0.15em;
    border-radius: 2px;
    background-color: var(--color);
  }
}
</style>