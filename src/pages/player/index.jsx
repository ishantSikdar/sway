import { useParams } from "react-router";
import { useState, useEffect } from "react";
import searchYouTubeVideo from "../../services/youtube/Search";
import { toTitleCase } from "../../utils/StringUtil";

export default function PlayerPage() {

    const { data } = useParams();
    const parsedData = JSON.parse(data);
    console.log(parsedData);

    const [ videoData, setVideoData ] = useState({});
    const videoTitle = toTitleCase(videoData.snippet?.title);

    useEffect(() => {
        searchYouTubeVideo(`${parsedData.content?.subTopic} in ${parsedData?.title}`)
            .then((response) => {
                setVideoData(response);
            })
            .catch((err) => {
                console.error(`Error Occurred Fetching the Video: ${err}`);

                // quota exceeded
                if (err?.response?.data?.error?.errors?.[0]?.reason === "quotaExceeded") {
                    alert("YouTube API quota of App has exceeded. Please try again later.");
                }
            });
    }, []);


    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="w-full">
                <iframe
                    title={videoTitle}
                    className="w-full aspect-video h-52 rounded-md md:h-96 lg:h-[500px]"
                    src={`https://www.youtube.com/embed/${videoData.id?.videoId}`}
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-center font-bold m-5 text-md md:text-xl lg:text-3xl">{videoTitle}</div>
        </div>


    )
}