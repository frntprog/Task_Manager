<template>
  <div class="flex flex-col justify-center items-center p-10">
    <h1 class="text-3xl font-mono">Task manager</h1>
    <form class="mt-6" @submit.prevent="createTask({ name: task })">
      <input
        v-model="task"
        class="py-1 bg-slate-200 min-w-[300px] indent-3 rounded-lg"
        type="text"
        placeholder="e.g. wash dishes"
      />
      <button
        class="ml-5 bg-purple-300 py-1 px-2 text-white rounded-lg"
        type="submit"
      >
        Add task
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/tasks";

const task = ref("");

const { createTask } = useTaskStore();
</script>
