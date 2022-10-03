import axios from "axios";
import { Cast, Show, ShowSearch } from "./contract";

const httpClient = axios.create({
    baseURL: "https://api.tvmaze.com",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
});

const getShows = () => httpClient.get<Show[]>("/shows");

const searchShows = (query: string) => httpClient.get<ShowSearch[]>(`/search/shows?q=${query}`);

const getShowById = (id: string) => httpClient.get<Show>(`/shows/${id}`);

const getShowCastByShowId = (id: string) => httpClient.get<Cast[]>(`/shows/${id}/cast`);

export { getShows, searchShows, getShowById, getShowCastByShowId };