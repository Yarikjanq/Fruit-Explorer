import { defineStore } from "pinia";
import type { Fruit } from "~/types/fruits";
    export const useSaveProduct = defineStore("saveProductStore", () => {
        let savedFruits = ref <Fruit[]>([]);
        const loadSavedFruits = () => {
            savedFruits.value = JSON.parse(localStorage.getItem("fruits") || "[]");
          };
          const toggleFavorite  = (fruit: Fruit) => {
            savedFruits.value = JSON.parse(localStorage.getItem("fruits") || "[]");
    
            const isFavourite = savedFruits.value?.some((item: Fruit) => item.id === fruit.id);
          
            if (isFavourite) {
              savedFruits.value = savedFruits.value.filter(
                (item: Fruit) => item.id !== fruit.id
              );
         
            } else {
              savedFruits.value?.push(fruit);
    
            }
            localStorage.setItem("fruits", JSON.stringify(savedFruits.value));
       
          }
   
          onMounted(() => {
            loadSavedFruits();
          });

          return{
            toggleFavorite,
            savedFruits
          }
    })