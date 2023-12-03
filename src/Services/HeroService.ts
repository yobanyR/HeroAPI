import axios from "axios";

export default {
  async getHeroes() {
    try {
      const response = await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  async getHeroe(id: any) {
    try {
      const response = await axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  },
};
