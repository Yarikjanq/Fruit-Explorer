import { defineStore } from "pinia";
import { useFetch } from "#app";
import type { Fruit } from "~/types/fruits";


  
  export const useProductStore = defineStore("productStore", () => {
    const products = ref<Fruit[]>([]);
    const loading = ref(false)
    const fetchProducts = async () => {
        try {
            loading.value = true
            const response = await $fetch<Fruit[]>('https://www.fruityvice.com/api/fruit/all');
            console.log(response);
            products.value = response
          
            loading.value = false;
        } catch(error) {
            loading.value = false;
            if(error instanceof Error) {
                console.log(error.message)
            }
        }
    };

    return {
        loading,
        products,
        fetchProducts
    }
});