import React from 'react';
import './LanguageProficiency.css';
const LanguageProficiency = () => {
    const languageProficiency = [
        { language: 'English', level: 'Professional' },
        { language: 'Kannada', level: 'Native' },
        { language: 'Hindi', level: 'professional' },
        { language: 'Marathi', level: 'professional' },
    ];
    return (
        <div className="LanguageCard">
            <div className='lagProTitle'>Language Proficiency</div>
            <ul className="language-list">
                {languageProficiency.map((item, index) => (
                    <li key={index} className="language-item">
                        <span className="language-name">{item.language}:</span>
                        <div className="alignLevel"><span className="language-level">{item.level}</span></div> 
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default LanguageProficiency;