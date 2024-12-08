import axios, {AxiosResponse} from "axios";
import {Params} from "../types";

const API_URL = `https://api.github.com`;

export default class RepositoriesService {
    static async getByParams (params: Params): Promise<AxiosResponse> {
        return axios.get(`${API_URL}/search/repositories`, { params: params });
    }

    static async getDetailedRepository (owner: string, repoName: string): Promise<AxiosResponse> {
        return axios.get(`${API_URL}/repos/${owner}/${repoName}`);
    }
};