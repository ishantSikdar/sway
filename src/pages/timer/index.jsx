import { useState, useEffect } from "react";

const FocusTimer = ({ onClose }) => {

    const [ elapsedTime, setElapsedTime ] = useState(0);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ intervalId, setIntervalId ] = useState(null);

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000)
            setIntervalId(id);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning])

    const getTime = (seconds) => {
        return {
            hours: Math.floor(seconds / 3600),
            mins: Math.floor((seconds % 3600) / 60),
            seconds: seconds % 60,
        }
    }

    const printTime = (time) => {
        return `${time.hours}:${time.mins}:${time.seconds}`;
    }

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    }

    const resetTimer = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const saveTimer = () => {
        console.log(`Time Elapsed: ${printTime(getTime(elapsedTime))}`)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Focus Study</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-lg">Elapsed Time: {printTime(getTime(elapsedTime))}</p>
                    <div className="mt-4 flex justify-around gap-2">
                        <button onClick={toggleTimer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{isRunning ? 'Pause' : 'Start'}</button>
                        <button onClick={resetTimer} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Stop</button>
                        <button onClick={saveTimer} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FocusTimer;
