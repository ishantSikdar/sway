import { Link } from "react-router-dom";
import { useState } from "react";

export default function Subject({ title, contents }) {

    const [ isClicked, setIsClicked ] = useState(false);

    const handleButtonClicker = () => {
        setIsClicked((prevClick) => !prevClick);
    }

    return (
        <>
            <div className="px-2 py-5 border-2 rounded-full text-center">
                <button onClick={handleButtonClicker} className="font-bold mx-auto">{title}</button>
            </div>

            {isClicked &&
                <div className="flex flex-col gap-2 rounded-xl border-2 p-4">
                    {contents?.map((content) => <div key={content.id}>
                        <Link to={`/subject/${encodeURIComponent(JSON.stringify({title, content}))}`}>{content.subTopic}</Link>
                    </div>)}
                </div>}
        </>
    )
}