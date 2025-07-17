import { useState } from 'react'
import languageData from '../data/languageData'
import LanguageCard from './LanguageCard';

export default function Main(){
    const [activeIndex, setActiveIndex] = useState(null)
    let activeLanguage = languageData[activeIndex]
    function changeCard(index){
        setActiveIndex(index);
    }
    return(
        <>
            <div className="container">
                <div className='d-flex py-5'>
                    {languageData.map((language, index) => (
                        <button key={index} onClick={()=> changeCard(index)} type="button" className={`btn ${index === activeIndex ? "btn-success" : "btn-primary"} fs-5 me-3`}>{language.name}</button>
                    ))}
                </div>
                <LanguageCard activeLanguage={activeLanguage}></LanguageCard>
            </div>
        </>
    )
}