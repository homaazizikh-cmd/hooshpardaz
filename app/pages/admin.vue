<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark p-4 md:p-8 pt-24">
    <div class="container mx-auto max-w-6xl">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-black text-gray-800 dark:text-white">پنل مدیریت هوش‌پرداز</h1>
        <button @click="refreshData" class="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700">به‌روزرسانی لیست</button>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        <table class="w-full text-right border-collapse">
          <thead class="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th class="p-4 font-bold dark:text-white">نام کامل</th>
              <th class="p-4 font-bold dark:text-white">شماره تماس</th>
              <th class="p-4 font-bold dark:text-white">دوره انتخابی</th>
              <th class="p-4 font-bold dark:text-white">تاریخ ثبت</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id" class="border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
              <td class="p-4 dark:text-gray-300">{{ student.full_name }}</td>
              <td class="p-4 dark:text-gray-300" dir="ltr">{{ student.phone }}</td>
              <td class="p-4 dark:text-gray-300">{{ student.course }}</td>
              <td class="p-4 dark:text-gray-300 text-sm">{{ new Date(student.created_at).toLocaleDateString('fa-IR') }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="students.length === 0" class="p-10 text-center text-gray-500">هنوز هنرجویی ثبت‌نام نکرده است.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const students = ref([])

// خواندن اطلاعات از دیتابیس
const fetchStudents = async () => {
  const { data, error } = await client
    .from('registrations')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (!error) students.value = data
}

const refreshData = () => fetchStudents()

onMounted(fetchStudents)

// اضافه کردن قابلیت Real-time (لحظه‌ای)
onMounted(() => {
  client.channel('registrations')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'registrations' }, (payload) => {
      students.value.unshift(payload.new)
    })
    .subscribe()
})
</script>