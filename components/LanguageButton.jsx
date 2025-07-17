export default function LanguageButton({languageData, setActiveIndex, activeIndex}){
    function changeCard(index){
        setActiveIndex(index);
    }

    return(
        <div className='d-flex py-5'>
            {languageData.map((language, index) => (
                <button key={index} onClick={()=> changeCard(index)} type="button" className={`btn ${index === activeIndex ? "btn-success" : "btn-primary"} fs-5 me-3`}>{language.name}</button>
            ))}
        </div>
    )
}