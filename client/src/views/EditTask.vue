<template>
  <div
    class="absolute top-[50%] left-[50%] w-96 h-64 translate-x-[-50%] translate-y-[-70%] bg-white shadow-xl rounded-xl px-5 pt-3"
  >
    <h1 class="font-mono text-center">Edit Task</h1>
    <div class="grid grid-cols-3 grid-rows-3 gap-y-2 mt-5">
      <div><h3>Task ID</h3></div>
      <div class="col-span-2">
        <p class="text-center">{{ task.id }}</p>
      </div>
      <div><h3>Name</h3></div>
      <div class="col-span-2">
        <input
          v-model="name"
          class="py-1 bg-slate-200 min-w-[230px] indent-3 rounded-lg"
          type="text"
          placeholder="e.g. wash dishes"
        />
      </div>
      <div><label for="status">Checked</label></div>
      <div class="flex justify-center col-span-2">
        <input
          class="m-auto"
          type="checkbox"
          id="status"
          name="status"
          v-model="completed"
        />
      </div>
    </div>
    <div class="flex justify-center mt-6">
      <button
        @click="updateTaskById(task.id, { name, completed })"
        class="ml-5 bg-purple-300 py-1 px-2 text-white rounded-lg"
        type="submit"
      >
        Apply Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useTaskStore } from "../store/tasks";
import { toRefs } from "vue";

const { params: task } = useRoute();

const { getTaskById, updateTaskById } = useTaskStore();

const { name, completed } = toRefs(getTaskById(task.id)); // Access the value of the computed property
</script>
