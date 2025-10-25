import { doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

function HeaderControlWithUseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = "Sayaç: " + count;
        console.log(1)

    }, [count])

    useEffect(() => {
        document.title = "Hoşgeldiniz";
        console.log(2)                            // BUNU Bİ SOR İLK ÇALIŞMADA REACT PROJECT-2 YAZIYOR NEDEN ?
    }, [])




    console.log(count, "count")
    return (
        <div>
            {document.title}
            <div>
                <button onClick={() => setCount(prev => prev + 1)}>
                    arttır
                </button>
            </div>
        </div>
    )
}

export default HeaderControlWithUseEffect