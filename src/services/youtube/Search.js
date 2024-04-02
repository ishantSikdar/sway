import axios from "axios"
import { YT_BASE_URL } from "../root"
import { YT_KEY } from "../keys";

const searchYouTubeVideo = async (searchTag) => {
    const videoDataResponse  = await axios.get(`${YT_BASE_URL}/search?key=${YT_KEY}&q=${searchTag}&safeSearch=strict&type=video&videoEmbeddable=true&part=snippet&videoDuration=medium`);
    return videoDataResponse.data.items[0];
}

export default searchYouTubeVideo;