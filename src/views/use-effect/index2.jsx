import React, { useEffect, useState } from 'react'

function SimpleExampleofUseEffect() {
    const [count, setCount] = useState(0);
    const [deneme, setDeneme] = useState(0);
    useEffect(() => {
        console.log("count render edildi", count)

    }, [count])

    useEffect(() => {
        console.log("her seferinde çalıştırdı her şeyi")
    })

    return (
        <div>
            count: {count} <br />
            deneme: {deneme}
            <div>
                <button onClick={() => setCount(prev => prev + 1)}>
                    Arttır
                </button>
                <button onClick={() => setCount(prev => prev - 1)}>
                    Azalt
                </button>
                <button onClick={() => setDeneme(prev => prev + 1)}>
                    Deneme button
                </button>
            </div>
        </div>
    )
}

export default SimpleExampleofUseEffect