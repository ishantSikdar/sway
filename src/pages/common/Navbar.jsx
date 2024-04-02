import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center rounded-xl border-2 p-2">
            <div>
                {/* Timer */}
                <Link to="/timer">
                    <img src="/timer.svg" alt="Focus Timer" />
                </Link>
            </div>

            <div className="flex justify-around gap-2 items-center md:gap-5">
                <div>
                    {/* Resources */}
                    <Link to="/">
                        <img src="/resources.svg" alt="Resources" className="h-14"/>
                    </Link>
                </div>
                <div>
                    {/* Courses */}
                    <Link to="/courses">
                        <img src="/graduate.svg" alt="Courses" className="h-14" />
                    </Link>
                </div>
                <div>
                    {/* Shorts */}
                    <Link to="/shorts">
                        <img src="/play.svg" alt="Education Shorts" />
                    </Link>
                </div>
                <div>
                    {/* Communities */}
                    <Link to="/communities">
                        <img src="/chat.svg" alt="Communities" className="h-12" />
                    </Link>
                </div>
            </div>
        </div>
    )
}