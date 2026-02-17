import React, { useState, useEffect } from 'react';
import './CurtainEffect.css';
import { getAssetUrl } from '../utils/assets';

const CurtainEffect = () => {
    const [isSlidUp, setIsSlidUp] = useState(false);

    const handleEnter = () => {
        setIsSlidUp(true);
        document.body.style.overflowY = 'auto';
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40 && !isSlidUp) {
                setIsSlidUp(true);
                document.body.style.overflowY = 'auto';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Lock scroll initially
        if (!isSlidUp) {
            document.body.style.overflowY = 'hidden';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflowY = 'auto'; // Reset on unmount
        };
    }, [isSlidUp]);

    const letters = [
        { char: 'G', word: 'uiding' },
        { char: 'Y', word: 'oung' },
        { char: 'A', word: 'spirants' },
        { char: 'N', word: 'urturing' },
        { char: 'T', word: 'alent through' },
        { char: 'R', word: 'eal' },
        { char: 'I', word: 'nnovation and' },
        { char: 'X', word: 'cellence' }
    ];

    return (
        <section className={`curtain-banner ${isSlidUp ? 'slide-up' : ''}`}>
            <div className="curtain-left">
                {letters.map((item, index) => (
                    <div
                        key={index}
                        className="letter-line"
                        style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                    >
                        <div className="letter-box">{item.char}</div>
                        <div className="word">{item.word}</div>
                    </div>
                ))}
            </div>

            <div className="curtain-right">
                <img src={getAssetUrl('/images/bannerimage_ga.png')} alt="Gyantrix Academy Logo" />
            </div>

            <button className="enter-btn" onClick={handleEnter}>
                Enter Site ↓
            </button>
        </section>
    );
};

export default CurtainEffect;
