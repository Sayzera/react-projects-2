import { useState } from "react";

function DateAndCondition() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [lastname, setLastName] = useState("");

  const [persons, setPersons] = useState([]);

  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnchangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleOnchangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersons((prev) => [
      ...prev,
      {
        name,
        age,
        soyad: lastname,
      },
    ]);
  };

  console.log(persons);

  /**
   * Form içerisinde bir buton kullandıysanız bunun tipi default olarak submit submit butonlara tıklanınca
   * sayfayı yenilemeye zorlar
   */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleOnchangeName}
      />
      <input
        type="text"
        placeholder="Lastname"
        value={lastname}
        onChange={handleOnchangeLastName}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={handleOnchangeAge}
      />

      <button type="submit">Kaydet</button>
    </form>
  );
}

export default DateAndCondition;
