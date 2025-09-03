import axios from "axios";
import { serverApi } from "../../libs/config";
import { Recipe, RecipeInquiry } from "../../libs/types/recipe";
import { Author } from "../../libs/types/author";

class AuthorService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getAuthors(): Promise<Author[]> {
    try {
      console.log("URL:", `${serverApi}/author/all`);
      let url = `${this.path}/author/all`;

      const result = await axios.get(url, { withCredentials: true });
      console.log("getAuthors", result);

      return result.data;
    } catch (err) {
      console.log("Error, getAuthors", err);
      throw err;
    }
  }

  public async getAuthor(authorId: string): Promise<Author> {
    try {
      let url = `${this.path}/author/${authorId}`;

      const result = await axios.get(url, { withCredentials: true });
      console.log("getAuthor", result);

      return result.data;
    } catch (err) {
      console.log("Error, getAuthor", err);
      throw err;
    }
  }
}

export default AuthorService;