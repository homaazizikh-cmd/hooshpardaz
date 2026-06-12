<template>
  <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-[#020617] focus-within:border-blue-500 transition-colors">
    
    <!-- نوار ابزار (Toolbar) -->
    <div v-if="editor" class="bg-slate-50 dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-700 p-2 flex flex-wrap gap-1">
      
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" type="button"
              :class="{ 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-cyan-400': editor.isActive('heading', { level: 2 }) }"
              class="px-3 py-1.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        تیتر اصلی (H2)
      </button>
      
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" type="button"
              :class="{ 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-cyan-400': editor.isActive('heading', { level: 3 }) }"
              class="px-3 py-1.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        تیتر فرعی (H3)
      </button>

      <div class="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1 self-center"></div>

      <button @click="editor.chain().focus().toggleBold().run()" type="button"
              :class="{ 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-cyan-400': editor.isActive('bold') }"
              class="w-8 h-8 flex items-center justify-center rounded-lg font-black text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        B
      </button>

      <button @click="editor.chain().focus().toggleItalic().run()" type="button"
              :class="{ 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-cyan-400': editor.isActive('italic') }"
              class="w-8 h-8 flex items-center justify-center rounded-lg italic font-serif text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        I
      </button>

      <div class="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1 self-center"></div>

      <button @click="editor.chain().focus().toggleBulletList().run()" type="button"
              :class="{ 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-cyan-400': editor.isActive('bulletList') }"
              class="px-3 py-1.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        لیست •
      </button>
      
      <button @click="editor.chain().focus().toggleOrderedList().run()" type="button"
              :class="{ 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-cyan-400': editor.isActive('orderedList') }"
              class="px-3 py-1.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        لیست ۱.۲.۳
      </button>

      <div class="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1 self-center"></div>

      <button @click="editor.chain().focus().clearNodes().run()" type="button"
              class="px-3 py-1.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors ml-auto">
        پاک کردن فرمت
      </button>
    </div>

    <!-- محیط تایپ -->
    <editor-content :editor="editor" class="p-4 min-h-[300px] text-slate-800 dark:text-slate-200 prose dark:prose-invert max-w-none focus:outline-none" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],
  onUpdate: () => {
    // ارسال کد HTML تولید شده به فرم اصلی
    emit('update:modelValue', editor.value.getHTML())
  },
})

// هماهنگ‌سازی دیتا اگر از بیرون تغییر کرد
watch(() => props.modelValue, (value) => {
  const isSame = editor.value.getHTML() === value
  if (isSame) return
  editor.value.commands.setContent(value, false)
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>

<style>
/* از بین بردن حاشیه آبی زشت دور ادیتور هنگام تایپ */
.ProseMirror:focus {
  outline: none;
}
/* استایل‌های پایه برای تگ‌های تولید شده */
.ProseMirror p {
  margin-bottom: 1em;
  line-height: 1.8;
}
.ProseMirror h2 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.ProseMirror h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.ProseMirror ul {
  list-style-type: disc;
  padding-right: 1.5rem;
  margin-bottom: 1em;
}
.ProseMirror ol {
  list-style-type: decimal;
  padding-right: 1.5rem;
  margin-bottom: 1em;
}
</style>