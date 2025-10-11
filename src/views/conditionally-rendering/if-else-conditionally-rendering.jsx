

export const IfElseConditionallyRendering = () => {

    /**
     * false / Hayır
     * 
     * false
     * 0
     * '' ""
     * undefined
     * null
     */
 

    const isLogging = true
    if(isLogging === true) {
        return (
            <div>
                Ember bey hoşgeldiniz.
            </div>
        )
    } else {

        return (
            <div>
                Lütfen giriş yapmak için <a href="/">tıklayınız</a>
            </div>
        )
        
    }

}