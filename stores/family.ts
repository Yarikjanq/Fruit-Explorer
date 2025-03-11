import { defineStore } from "pinia";
import type { Fruit } from "~/types/fruits";
export const useSaveFamily = defineStore("useSaveFamily", () => {
  let saveFamily = ref<Fruit[]>([]);
  const loading = ref(false);

  const loadSaveFamily = async (family?: string) => {
    try {
        loading.value = true
      const getFamily = await $fetch<Fruit[]>(
        `https://www.fruityvice.com/api/fruit/family/${family}`
      );
      saveFamily.value = getFamily;
      loading.value = false
    } catch(error) {
    loading.value = false
     console.error("Error:", error)
        
    }
  };

  return {
    loadSaveFamily,
    saveFamily,
    loading
  };
});
