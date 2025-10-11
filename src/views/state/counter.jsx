import { useState } from "react"


const ReactCounter = () => {
    const [counter, setCounter] = useState(0);



    const incrementCounter = () => {
        

        setCounter( (prev) => {
            return prev + 1 
        })

        setCounter((prev) => prev + 1)



        // setCounter((prev) => {
        //     console.log(prev, 'prev')

        //     return prev
        // })
        
    }
    return (
        <div>
            React in stata page { counter }
        
        <button onClick={incrementCounter}>
         Arttır
        </button>
        </div>
    )
}

export default ReactCounter