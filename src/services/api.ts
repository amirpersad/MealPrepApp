const API_KEY = 'caa676c2603d400794c4c73cc704ba05'
const BASE_URL = 'https://api.spoonacular.com/recipes/'

export const getTrendingRecipes = async () => {
    const response = await fetch(`${BASE_URL}random?apiKey=${API_KEY}&number=6&includeNutrition=true`)
    console.log("API-Quota-Used:", response.headers.get("x-api-quota-used"));
    console.log("API-Quota-Left:", response.headers.get("x-api-quota-left"));
    const data = await response.json()
    return data.recipes
}