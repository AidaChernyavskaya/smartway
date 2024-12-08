import axios from "axios";

const repositoriesUrl = `https://api.github.com/search/repositories`;
const detailedRepositoryUrl = `https://api.github.com/repos`;

export default class RepositoriesService {
    static async getByParams (params = {}) {
        return axios.get(repositoriesUrl, { params: params });
    }

    static async getDetailedRepository (owner: string, repoName: string) {
        return axios.get(`${detailedRepositoryUrl}/${owner}/${repoName}`);
    }
};