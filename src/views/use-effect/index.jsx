import { Fragment, useEffect, useState } from "react";

function ExampleUseEffect() {
  const [count, setCounter] = useState(0);
  const [count1, setCounter1] = useState(0);

  /**
   * Bir kez çalışır (mount) sonrasında çalışmaz
   */
  useEffect(() => {
    console.log("Bileşen render edildi");
  }, []);

  // useEffect(() => {
  //     /**
  //      * Herhangi bir state değişirse tekrardan çalışır
  //      */
  //     console.log("Bileşen render edildi")
  // })

  /**
   * (infinite loop!!!)
   */

  //   useEffect(() => {

  //     console.log(count, "count");
  //     // !!!
  //     setCounter((prev) => prev +1 )
  //   }, [count, count1]);

  /**
   * Dependency (bağımlılık)
   * Kural bağımlılık olarak dinlediğimiz kısmı içeride tekrardan setlemiyoruz ki sonsuz döngü olmasın  (infinite loop)
   */

  useEffect(() => {
    console.log(count, "count");
  }, [count, count1]);


  useEffect(() => {
    const interval = setInterval(() => {
        console.log(new Date().getTime())
    }, 1000);


    return () => {
        clearInterval(interval)
    }

  }, [count])

  return (
    <Fragment>
      <div
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        ExampleUseEffect
      </div>

      <div
        onClick={() => {
          setCounter1((prev) => prev + 1);
        }}
      >
        ExampleUseEffect
      </div>
    </Fragment>
  );
}

export default ExampleUseEffect;
