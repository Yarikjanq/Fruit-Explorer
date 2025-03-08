export const fetchFruitsByNutrition = async (nutrition: string, min: number, max: number) => {
    try {
      const response = await fetch(`https://www.fruityvice.com/api/fruit/${nutrition}?min=${min}&max=${max}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching fruits:', error);
      throw error; // Обробка помилок
    }
  };
  