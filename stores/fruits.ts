import { defineStore } from "pinia";
import { useFetch } from "#app";
interface Fruit {
    id: number;
    name: string;
  }
  
  export const useProductStore = defineStore("productStore", () => {
    const products = ref([]);
    const loading = ref(false)
    const fetchProducts = async () => {
        try {
            loading.value = true
            const response = await $fetch('https://www.fruityvice.com/api/fruit/all');
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