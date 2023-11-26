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
        <p class="text-center">{{ getTaskById.name }}</p>
      </div>
      <div><label for="status">Checked</label></div>
      <div class="flex justify-center col-span-2">
        <input
          class="m-auto"
          type="checkbox"
          id="status"
          name="status"
          checked
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useTaskStore } from "../store/tasks";

const { params: task } = useRoute();

const { getTaskById } = useTaskStore();
</script>
