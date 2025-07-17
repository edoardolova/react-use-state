import { useState } from 'react'
import languageData from '../data/languageData'

export default function Main(){
    const [activeIndex, setActiveIndex] = useState(0)
    let activeLanguage = languageData[activeIndex]
    function changeCard(index){
        setActiveIndex(index);
        console.log(`current index: ${index}`);
    }
    return(
        <>
            <div className="container">
                <div className='d-flex py-5'>
                    {languageData.map((language, index) => (
                        <button key={index} onClick={()=> changeCard(index)} type="button" className="btn btn-primary fs-5 me-3">{language.name}</button>
                    ))}
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{activeLanguage.name}</h5>
                        <p className="card-text">{activeLanguage.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}