import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const showOrHideToggle = () => {
    // setToggle((prev) => {
    //     if(prev) {
    //         return false
    //     } else {
    //         return true
    //     }
    // })

    // setToggle(!toggle)
    setToggle((prev) => !prev)
  }
  return (
    <div>
      {toggle && (
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          laborum delectus fuga deleniti necessitatibus animi consequatur earum
          ad error mollitia maxime doloribus accusantium vitae ut facilis non,
          perspiciatis velit tempora aliquam? Commodi officiis non, iusto
          nesciunt maxime quaerat totam expedita, magnam libero animi labore
          accusantium quae consectetur porro ipsum dolorem aperiam excepturi
          quam eius perferendis, delectus esse tempora minus. Rem enim natus
          architecto porro, accusamus suscipit itaque necessitatibus nisi
          impedit?
        </div>
      )}

      <button onClick={showOrHideToggle}>
        {
            toggle ? 'Gizle' : 'Göster'
        }
      </button>
    </div>
  );
}

export default Toggle;
