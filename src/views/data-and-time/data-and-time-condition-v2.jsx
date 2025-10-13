import { useState } from "react";

function DateAndConditionV2() {
  const date = new Date();
  const [formData, setFormData] = useState({});

  const [persons, setPersons] = useState([]);

  const handleFormData = (e) => {
    const inputName = e.target.name;
    const inputVal = e.target.value;
  
    const expireTime =  new Date(date.getTime() +  5 * 60 * 1000)

    setFormData((prev) => {
      return {
        ...prev,
        [inputName]: inputVal,
        expireTime
      };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setPersons((prev) => [
      ...prev,
      formData
    ]);
  };

 

  /**
   * Form içerisinde bir buton kullandıysanız bunun tipi default olarak submit submit butonlara tıklanınca
   * sayfayı yenilemeye zorlar
   */
  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleFormData}
      />
      <input
        type="text"
        placeholder="Lastname"
        name="lastname"
        onChange={handleFormData}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        onChange={handleFormData}
      />

      <button type="submit">Kaydet</button>
    </form>

    {
      persons.filter((person) => {
        if(date < persons.expireTime) {
          return false
        } else {
          return true
        }
      })
      .map((person, index) => {
        return (
          <div key={index}>
            {person.name}
            {person.age}
            {person.expireTime.toLocaleDateString('tr-TR')}
          </div>
        )
      })
    }



    </>
  );
}

export default DateAndConditionV2;
