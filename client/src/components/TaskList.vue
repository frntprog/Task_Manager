<template>
  <div class="pb-5">
    <SingleTask v-for="task in tasks" :key="task._id" :singleTask="task" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useTaskStore } from "../store/tasks";
import SingleTask from "./SingleTask.vue";

const { getAllTasks: tasks } = useTaskStore();

onMounted(() => {
  const { fetchAllTasks } = useTaskStore();
  fetchAllTasks();
});
</script>
