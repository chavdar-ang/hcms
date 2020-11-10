import axios from "axios";
import env from "../../config/env";

export async function get(slug) {
    try {
        let response = await axios.get(env.api + slug);
  
        return response.data;
    } catch (error) {
        throw Error(error);
    }
}