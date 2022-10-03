import { getShows } from "@/api/client";
import { Show } from "@/api/contract";

export type DashboardData = {[genre: string]: Show[]};

export async function getDashboardData() {
    const shows = await getShows();

    shows.data = shows.data.sort((a,b) => b.rating.average - a.rating.average);

    const genres = shows.data.flatMap(show => show.genres).sort();

    const dashboardData: DashboardData = {};
    genres.forEach(genre => {
        dashboardData[genre] = shows.data.filter(show => show.genres.some(g => g === genre));
    });

    return dashboardData;
}