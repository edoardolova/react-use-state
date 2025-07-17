import { useState } from 'react'
import languageData from '../data/languageData'
import LanguageCard from './LanguageCard';
import LanguageButton from './LanguageButton';

export default function Main(){
    const [activeIndex, setActiveIndex] = useState(null)
    let activeLanguage = languageData[activeIndex]
    return(
        <>
            <div className="container">
                <LanguageButton languageData={languageData} setActiveIndex={setActiveIndex} activeIndex={activeIndex}></LanguageButton>
                <LanguageCard activeLanguage={activeLanguage}></LanguageCard>
            </div>
        </>
    )
}