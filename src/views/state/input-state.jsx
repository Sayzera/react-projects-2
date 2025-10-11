import { useState } from "react";

const InputState = () => {
  const [name, setName] = useState();
  const [persons, setPersons] = useState([]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const addPerson = () => {
    if (name.trim() === "") return;
    if (name.length < 2) return;

    // setPersons([...persons, name])
    setPersons((prev) => {
      if (prev.includes(name)) {
        setName("");
        return prev;
      }

      return [...prev, name];
    });
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChangeName} />

      {name || "Merhaba Ziyaretçi"}

      <br />
      <br />
      <button onClick={addPerson}>Kaydet</button>

      <br />
      <br />
      <div>
        <ul>
          {persons.map((person) => (
            <li>{person}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputState;
