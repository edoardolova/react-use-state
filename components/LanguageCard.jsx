export default function LanguageCard({activeLanguage}){
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{activeLanguage === undefined ? "Nessun linguaggio selezionato" : activeLanguage.name}</h2>
                    <p className="card-text">{activeLanguage === undefined ? "" : activeLanguage.description}</p>
                </div>
            </div>
        </>
    )
}