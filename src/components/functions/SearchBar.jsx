import { useState } from "react"
import searchYouTubeVideo from "../../services/youtube/Search";

export default function Search() {
    const [ searchTag, setSearchTag ] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchTag(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchYouTubeVideo(searchTag);
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex m-2 rounded-full border-2">
                <input
                    type="text"
                    value={searchTag}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Try typing a Topic"
                    className="w-full text-center outline-none border-l-2 rounded-full"
                />
                <button onClick={() => searchYouTubeVideo(searchTag)} className="border-l-2 p-2">
                    <img src="/search.svg" alt="Find" />
                </button>
            </div>
        </div>
    )
}