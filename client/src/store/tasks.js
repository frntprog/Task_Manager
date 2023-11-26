import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useTaskStore = defineStore("tasks", () => {
  const tasks = ref([]);

  const fetchAllTasks = async () => {
    const response = await axios.get("tasks");
    tasks.value = response.data.tasks;
  };

  const deleteSingleTask = async (taskId) => {
    const response = await axios.delete(`tasks/${taskId}`);
    tasks.value = tasks.value.filter(
      (task) => task._id !== response.data.task._id
    );
  };

  const updateTaskById = async (taskId, updates) => {
    console.log(updates);
    const response = await axios.patch(`tasks/${taskId}`, updates);
    console.log(response);
  };

  const getAllTasks = computed(() => {
    return tasks;
  });

  const getTaskById = computed(() => (id) => {
    return tasks.value.find((el) => el._id === id);
  });

  const createTask = async (task) => {
    const response = await axios.post("tasks", task);
    tasks.value.push(response.data.task);
  };

  return {
    createTask,
    fetchAllTasks,
    updateTaskById,
    deleteSingleTask,
    getAllTasks,
    getTaskById,
  };
});
