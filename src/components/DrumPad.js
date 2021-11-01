import React, { useEffect, useState } from 'react';

export default function DrumPad ({ pad }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    });

    const handleKeyPress = (e) => {
        if (e.keyCode === pad.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audio = document.getElementById(pad.kB);
            setActive(true);
            setTimeout(() => setActive(false), 100);
            audio.currentTime = 0;
            audio.play();
    };

    return (
        <>
            <div className={`flex justify-center items-center border w-24 h-24 bg-gray-400 rounded-md shadow-lg m-auto ${active && 'bg-yellow-300'}`} onClick={playSound}>
                <audio id={pad.kB} src={pad.url} />
                <div className="text-4xl font-black">{pad.kB}</div>
            </div>
        </>
    )
};