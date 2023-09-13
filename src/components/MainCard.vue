<template>
  <section class="flex flex-col bg-white rounded-lg shadow w-1/2 pt-3 pb-2">
    <nav class="w-full border-b">
      <ul class="flex w-full gap-4 pl-5">
        <li
          class="font-bold text-lg px-1 pb-2 pt-1 text-slate-700 hover:text-slate-900 cursor-pointer border-b-2 border-white hover:border-b-2 hover:border-purple-600"
        >
          <a>Done</a>
        </li>
        <li
          class="font-bold text-lg px-1 pb-2 pt-1 text-slate-700 hover:text-slate-900 cursor-pointer border-b-2 border-white hover:border-b-2 hover:border-purple-600"
        >
          <a
            >Todo
            <span
              class="bg-[#f5f5f9] w-6 h-6 text-sm font-medium rounded-full text-center text-[#8084a8] inline-flex items-center justify-center ml-2"
              >3</span
            ></a
          >
        </li>
      </ul>
    </nav>
    <section class="pl-6 pr-5">
      <div v-if="todos?.length">
        <div v-for="(todo, index) in todos" :key="todo.id">
          <div class="flex py-3">
            <input
              :checked="todo.done"
              :id="todo.id"
              type="checkbox"
              value=""
              class="w-4 h-4 mt-1 text-purple-600 bg-gray-100 accent-purple-600 border-gray-300 rounded"
            />
            <label :for="todo.id" class="ml-2 flex flex-col">
              <span class="text-md font-medium text-gray-900">{{ todo.title }}</span>
              <span v-if="todo.description" class="text-sm text-gray-500">
                {{ todo.description }}
              </span>
            </label>
          </div>
          <hr v-if="index !== todos.length - 1" />
        </div>
      </div>
      <h3 v-else>You have nothing in your list yet!</h3>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/api/supabase'

type Todo = {
  id: string
  title: string
  description?: string
  done?: boolean
}

const todos = ref<Todo[] | null>([])

async function getTodos() {
  const { data } = await supabase.from('todos').select()
  todos.value = data
  console.log(todos.value)
}

onMounted(() => {
  getTodos()
})
</script>

<style lang="scss" scoped></style>
