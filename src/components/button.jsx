import { projectColors } from "../config/constants";

const Button = (props) => {
  const defaultBtnText = "Kaydet";

  const styles = {
    primary: {
      backgroundColor: projectColors.btnPrimaryColor,
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
    },
    secondary: {
      backgroundColor: projectColors.btnSecondaryColor,
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
    },
    success: {},
    danger: {},
    warning: {},
    info: {},
    dark: {},
    light:{},
    link: {}
  };

  //   const sayHello = () => {
  //     alert('xx')
  //   }

  return (
    <button
      style={styles[props.variant]}
      //   onClick={() => {
      //     props.onClick()
      //   }}
      onClick={props.onClick}
    >
      {props.btnText ?? defaultBtnText}
    </button>
  );
};

export { Button };
