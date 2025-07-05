import axios from "axios";
import { serverApi } from "../../libs/config";
import { Recipe, RecipeInquiry } from "../../libs/types/recipe";

class RecipeService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getRecipes(input: RecipeInquiry): Promise<Recipe[]> {
    try {
      let url = `${this.path}/recipes/all?recipe=${input.recipe}&page=${input.page}&limit=${input.limit}`;
      if (input.recipeType) url += `&recipeType=${input.recipeType}`;
      if (input.search) url += `&search=${input.search}`;

      const result = await axios.get(url);
      console.log("getRecipes", result);

      return result.data;
    } catch (err) {
      console.log("Error, getRecipes", err);
      throw err;
    }
  }

  public async getRecipe(recipeId: string): Promise<Recipe> {
    try {
      let url = `${this.path}/recipe/${recipeId}`;

      const result = await axios.get(url, { withCredentials: true });
      console.log("getRecipe", result);

      return result.data;
    } catch (err) {
      console.log("Error, getRecipe", err);
      throw err;
    }
  }
}

export default RecipeService;