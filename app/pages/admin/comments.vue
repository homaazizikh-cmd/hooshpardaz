<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 p-6 md:p-10 font-sans transition-colors duration-500" dir="rtl">
    
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 text-xs font-black tracking-widest uppercase mb-3 border border-blue-100 dark:border-cyan-500/30">
          <span class="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse"></span>
          Control_Center
        </div>
        <h1 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
          مدیریت دیدگاه‌ها
          <span class="text-sm bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-lg">
            {{ comments.length }} کل
          </span>
        </h1>
      </div>
      
      <div class="flex items-center bg-white dark:bg-[#0f172a] p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button @click="activeTab = 'pending'" :class="activeTab === 'pending' ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'" class="px-5 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2">
          در انتظار تایید
          <span v-if="pendingComments.length" class="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full">{{ pendingComments.length }}</span>
        </button>
        <button @click="activeTab = 'approved'" :class="activeTab === 'approved' ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-cyan-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'" class="px-5 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2">
          تایید شده
        </button>
      </div>
    </div>

    <div class="relative">
      <div v-if="loading" class="absolute inset-0 z-10 flex items-center justify-center bg-slate-50/50 dark:bg-[#020617]/50 backdrop-blur-sm rounded-3xl min-h-[300px]">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-cyan-400"></div>
      </div>

      <div v-if="displayedComments.length === 0 && !loading" class="text-center py-20 bg-white dark:bg-[#090e1a] rounded-[2rem] border border-slate-200 dark:border-slate-800 border-dashed shadow-sm">
        <div class="text-6xl mb-4 opacity-50 grayscale">📭</div>
        <h3 class="text-xl font-black text-slate-800 dark:text-white mb-2">هیچ دیدگاهی در این بخش نیست!</h3>
        <p class="text-slate-500 text-sm">صندوق پیام‌های شما در حال حاضر خالی است.</p>
      </div>

      <TransitionGroup name="list" tag="div" class="space-y-6">
        <div v-for="comment in displayedComments" :key="comment.id" 
             class="bg-white dark:bg-[#090e1a] rounded-2xl p-6 border transition-all duration-300 shadow-sm hover:shadow-md"
             :class="comment.is_admin_reply ? 'border-l-4 border-blue-500 dark:border-cyan-500 dark:border-slate-800' : 'border-slate-200 dark:border-slate-800'">
          
          <div class="flex flex-col md:flex-row justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="font-black text-lg text-slate-800 dark:text-white flex items-center gap-2">
                  {{ comment.user_name }}
                  <span v-if="comment.is_admin_reply" class="bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-200 dark:border-cyan-500/30 uppercase">پاسخ مدرس</span>
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500 font-mono bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">Post ID: {{ comment.post_id }}</span>
              </div>
              <span class="text-xs text-slate-500 font-medium">{{ formatDate(comment.created_at) }}</span>
            </div>
            
            <div class="flex items-center gap-2 shrink-0">
              <button v-if="!comment.is_approved" @click="approveComment(comment.id)" class="px-4 py-2 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20 rounded-lg text-sm font-bold hover:bg-green-500 hover:text-white transition-colors">
                تایید نمایش
              </button>
              <button @click="toggleReply(comment.id)" class="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-blue-500/20 rounded-lg text-sm font-bold hover:bg-blue-500 hover:text-white transition-colors">
                پاسخ دادن
              </button>
              <button @click="deleteComment(comment.id)" class="p-2 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-colors" title="حذف دیدگاه">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>

          <p class="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#0f172a] p-4 rounded-xl text-sm border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
            {{ comment.content }}
          </p>

          <div v-if="replyingTo === comment.id" class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div class="flex gap-3">
              <div class="w-10 h-10 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">شما</div>
              <div class="flex-1">
                <textarea v-model="replyText" rows="3" placeholder="پاسخ خود را به عنوان مدرس بنویسید..." class="w-full bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none text-sm"></textarea>
                <div class="flex justify-end gap-2 mt-3">
                  <button @click="replyingTo = null" class="px-4 py-2 text-slate-500 text-sm font-bold hover:text-slate-700 dark:hover:text-slate-300">انصراف</button>
                  <button @click="submitReply(comment)" :disabled="!replyText.trim() || isReplying" class="px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 transition-colors">
                    <span v-if="isReplying">در حال ثبت...</span>
                    <span v-else>ثبت پاسخ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// اعمال Layout ادمین و امنیت
definePageMeta({
  layout: 'admin',
})

useSeoMeta({ title: 'مدیریت نظرات | داناورس' })

const supabase = useSupabaseClient()
const loading = ref(true)
const comments = ref([])

// وضعیت‌ها
const activeTab = ref('pending') // 'pending' | 'approved'
const replyingTo = ref(null)
const replyText = ref('')
const isReplying = ref(false)

// دریافت کامنت‌ها از دیتابیس
const fetchComments = async () => {
  loading.value = true
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (data) comments.value = data
  loading.value = false
}

onMounted(() => {
  fetchComments()
})

// فیلتر کردن لیست‌ها بر اساس تب
const pendingComments = computed(() => comments.value.filter(c => !c.is_approved))
const approvedComments = computed(() => comments.value.filter(c => c.is_approved))
const displayedComments = computed(() => activeTab.value === 'pending' ? pendingComments.value : approvedComments.value)

// عملیات: تایید کامنت
const approveComment = async (id) => {
  const { error } = await supabase.from('comments').update({ is_approved: true }).eq('id', id)
  if (!error) {
    // آپدیت در لحظه بدون رفرش
    const index = comments.value.findIndex(c => c.id === id)
    if (index !== -1) comments.value[index].is_approved = true
  } else {
    alert('خطا در تایید دیدگاه!')
  }
}

// عملیات: حذف کامنت
const deleteComment = async (id) => {
  if(!confirm('آیا از حذف این دیدگاه مطمئن هستید؟')) return
  const { error } = await supabase.from('comments').delete().eq('id', id)
  if (!error) {
    comments.value = comments.value.filter(c => c.id !== id)
  }
}

// عملیات: باز کردن باکس پاسخ
const toggleReply = (id) => {
  replyText.value = ''
  replyingTo.value = replyingTo.value === id ? null : id
}

// عملیات: ثبت پاسخ مستقیم ادمین
const submitReply = async (parentComment) => {
  if (!replyText.value.trim()) return
  isReplying.value = true

  const { data, error } = await supabase.from('comments').insert({
    post_id: parentComment.post_id,
    user_name: 'پشتیبانی داناورس',
    content: replyText.value.trim(),
    is_approved: true, // پاسخ ادمین مستقیماً تایید می‌شود
    is_admin_reply: true // تیک ویژه برای سایت
  }).select()

  isReplying.value = false

  if (!error && data) {
    comments.value.unshift(data[0]) // اضافه کردن پاسخ به ابتدای لیست
    replyingTo.value = null
    replyText.value = ''
    activeTab.value = 'approved' // سوییچ به تب تایید شده‌ها
  } else {
    alert('خطا در ثبت پاسخ!')
  }
}

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(dateString));
}
</script>

<style scoped>
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateX(30px) scale(0.98); }
.list-leave-active { position: absolute; width: 100%; }
</style>