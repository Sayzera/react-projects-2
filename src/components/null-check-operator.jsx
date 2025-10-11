import { projectConfig } from "../config";


const NullCheckOperator = () => {
  const person = {
    userName: "Sezer",
    userPassword: "123456",
  };

  if (person && person.userName && projectConfig.nullCheckTestMode) {
    console.log("OK");
  }

  if (person && person.userName && person.age > 0 &&  projectConfig.nullCheckTestMode) {
    console.log("OK-2");
  }

  return <div>Merhaba Dünya {person?.age ?? "Person age bulanamadı"}</div>;
};

export { NullCheckOperator as NullCheck };
