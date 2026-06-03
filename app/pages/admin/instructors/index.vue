<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">مدیریت اساتید</h1>
    
    <!-- فرم اضافه کردن استاد جدید -->
    <div class="bg-white p-6 rounded-xl shadow mb-8">
      <h2 class="font-bold mb-4">افزودن استاد جدید</h2>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="newInstructor.name" placeholder="نام استاد" class="border p-2 rounded">
        <input v-model="newInstructor.specialty" placeholder="تخصص" class="border p-2 rounded">
        <textarea v-model="newInstructor.bio" placeholder="بیوگرافی" class="col-span-2 border p-2 rounded"></textarea>
        <button @click="addInstructor" class="bg-blue-600 text-white py-2 rounded">ذخیره استاد</button>
      </div>
    </div>

    <!-- لیست اساتید برای ویرایش/حذف -->
    <div class="grid gap-4">
      <div v-for="ins in instructors" :key="ins.id" class="flex items-center justify-between p-4 bg-white rounded shadow">
        <span>{{ ins.name }} - {{ ins.specialty }}</span>
        <div class="flex gap-2">
          <button @click="deleteInstructor(ins.id)" class="text-red-500">حذف</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
const supabase = useSupabaseClient()
const instructors = ref([])
const newInstructor = ref({ name: '', bio: '', specialty: '' })

// دریافت لیست اساتید
const fetchInstructors = async () => {
  const { data } = await supabase.from('instructors').select('*')
  instructors.value = data
}

// اضافه کردن
const addInstructor = async () => {
  await supabase.from('instructors').insert([newInstructor.value])
  newInstructor.value = { name: '', bio: '', specialty: '' }
  fetchInstructors()
}

// حذف کردن
const deleteInstructor = async (id) => {
  await supabase.from('instructors').delete().eq('id', id)
  fetchInstructors()
}

onMounted(fetchInstructors)
</script>