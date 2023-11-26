<template>
  <div
    class="absolute bg-slate-300 bg-opacity-60 w-full h-full top-0 left-0"
    v-if="showModal"
  >
    <div
      class="w-96 h-64 bg-yellow-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg py-3 px-5 opacity-100"
    >
      <button @click="emitEvent" class="absolute top-0 right-0 pt-1 pr-2">
        &#10006;
      </button>
      <div class="pt-4 opacity-100">
        <h2>Are you sure you want to delete this task?</h2>

        <div class="absolute bottom-0 right-0 pb-3 pr-3">
          <button @click="deleteSingleTask(taskId)" class="mr-4">Delete</button>
          <button @click="emitEvent">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  showModal: Boolean,
  taskId: String,
});

import { defineEmits } from "vue";
import { useTaskStore } from "../store/tasks";

const emit = defineEmits(["hideModal"]);

const { deleteSingleTask } = useTaskStore();

const emitEvent = () => {
  emit("hideModal", false);
};
</script>
