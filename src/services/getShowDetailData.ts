import { getShowById, getShowCastByShowId } from "@/api/client";
import { Cast, Show } from "@/api/contract";

export type ShowDetail = {
    show: Show;
    cast: Cast[];
};

export async function getShowDetailData(id: string): Promise<ShowDetail> {
    const [showDetail, showCastDetail] = await Promise.all([getShowById(id), getShowCastByShowId(id)]);

    return { show: showDetail.data, cast: showCastDetail.data} as ShowDetail;
}