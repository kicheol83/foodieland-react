import axios from "axios";
import { serverApi } from "../../libs/config";
import { Recipe } from "../../libs/types/recipe";

class LikeService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async toggleRecipeLike(recipeId: string): Promise<Recipe> {
    try {
      const url = `${this.path}/admin/recipe/like/${recipeId}`;

      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("toggleRecipeLike", result);

      return result.data;
    } catch (err) {
      console.log("Error, toggleRecipeLike", err);
      throw err;
    }
  }
}

export default LikeService;
