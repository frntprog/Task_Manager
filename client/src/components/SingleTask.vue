<template>
  <div
    class="flex justify-between max-w-xl mx-auto border-2 border-sky-200 py-2 px-4 rounded-lg mt-4"
  >
    <p>{{ name }}</p>
    <div>
      <router-link :to="{ name: 'editTask', params: { id: singleTask._id } }">
        <button class="rotate-90 mr-2">&#9998;</button>
      </router-link>

      <button @click="showModal = true">&#10006;</button>
    </div>
    <Modal
      @hideModal="(val) => (showModal = val)"
      :taskId="singleTask._id"
      :showModal="showModal"
    />
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import Modal from "./Modal.vue";

const props = defineProps({
  singleTask: Object,
});

const showModal = ref(false);

const { name } = toRefs(props.singleTask);
</script>
