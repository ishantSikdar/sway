import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";

import Navbar from "./pages/common/Navbar";
import Footer from "./pages/common/Footer";
import Resources from "./pages/resources";
import Courses from "./pages/courses";
import FocusTimer from "./pages/timer";
import Communities from "./pages/communities"
import Shorts from "./pages/shorts"
import PlayerPage from "./pages/player";
import NotFound from "./pages/common/NotFound"

function App() {

	const [ isTimerOpen, setIsTimerOpen ] = useState(false);

	const toggleFocusTimer = () => {
		setIsTimerOpen(!isTimerOpen)
	}

	return (
		<div className="m-2 relative">
			<BrowserRouter >
				<Navbar
					timer={toggleFocusTimer}
				/>
				<div className="mt-2 overflow-hidden">
					<Routes>
						<Route path="/" element={<Resources />} />
						{/* <Route path="/communities" element={<Communities />} /> */}
						{/* <Route path="/shorts" element={<Shorts />} /> */}
						{/* <Route path="/courses" element={<Courses />} /> */}
						<Route path="/subject/:data" element={<PlayerPage />} />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<Footer />
				{isTimerOpen && <FocusTimer onClose={toggleFocusTimer} />}
			</BrowserRouter>
		</div>
	)
}

export default App
