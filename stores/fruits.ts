import { defineStore } from "pinia";
import { useFetch } from "#app";
import type { Fruit } from "~/types/fruits";


  
  export const useProductStore = defineStore("productStore", () => {
    const products = ref<Fruit[]>([]);
    const filteredProducts = ref<Fruit[]>([])
    const loading = ref(false)
  
    const fetchProducts = async () => {
        try {
            loading.value = true
            const response = await $fetch<Fruit[]>('https://www.fruityvice.com/api/fruit/all');
            console.log(response);
            products.value = response
            filteredProducts.value = response;
            loading.value = false;
        } catch(error) {
            loading.value = false;
            console.error("Error:", error);
        }
    };
    const filterProducts = async (nutrition: string, min: number, max: number) => {
        try {
          loading.value = true;
          const response = await fetch(`https://www.fruityvice.com/api/fruit/${nutrition}?min=${min}&max=${max}`);
          const filteredData = await response.json();
    
 
          filteredProducts.value = filteredData;
          loading.value = false;
        } catch (error) {
          loading.value = false;
          console.error("Error:", error);
        }
      };
    
    return {
        loading,
        products,
        filteredProducts,
        fetchProducts,
        filterProducts,
    
    }
});