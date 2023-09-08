<template>
  <section class="flex flex-col items-center bg-white rounded-lg shadow w-1/2 p-3">
    <nav class="w-full">
      <ul class="flex border-b w-full gap-4 pl-2">
        <li
          class="font-bold px-1 py-2 text-slate-700 hover:text-slate-900 cursor-pointer border-b-2 border-white hover:border-b-2 hover:border-purple-600"
        >
          <a>Done</a>
        </li>
        <li
          class="font-bold px-1 py-2 text-slate-700 hover:text-slate-900 cursor-pointer border-b-2 border-white hover:border-b-2 hover:border-purple-600"
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
    <div></div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
