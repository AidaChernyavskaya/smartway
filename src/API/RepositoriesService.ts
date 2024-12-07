import axios from "axios";

const repositoriesUrl = `https://api.github.com/search/repositories`;

export default class RepositoriesService {
    static async getByParams (params = {}) {
        return axios.get(repositoriesUrl, { params: params });
    }
};