
export const Filter = () => {
      const persons = [
    { id: 1, name: "RAli", age: 25 },
    { id: 2, name: "Ayşe", age: 30 },
    { id: 3, name: "Mehmet", age: 22 },
    { id: 4, name: "Fatma", age: 28 },
    { id: 5, name: "Ahmet", age: 35 },
    { id: 6, name: "Emine", age: 27 },
    { id: 7, name: "Can", age: 24 },
    { id: 8, name: "Selin", age: 32 },
    { id: 9, name: "Mert", age: 29 },
    { id: 10, name: "Zeynep", age: 26 },
    { id: 11, name: "Kerem", age: 31 },
    { id: 12, name: "Elif", age: 23 },
    { id: 13, name: "Deniz", age: 34 },
    { id: 14, name: "Ece", age: 21 },
    { id: 15, name: "Berk", age: 33 },
    { id: 16, name: "Ceren", age: 28 },
    { id: 17, name: "Tunç", age: 26 },
    { id: 18, name: "Seda", age: 27 },
    { id: 19, name: "Onur", age: 30 },
    { id: 20, name: "Melis", age: 25 },
  ];

  //  const responsePersons =   persons?.map((person) => {

  //     return {
  //       control: person.age > 25 ? true :false,
  //       ...person
  //     }

  //   })

  // TODO: Callback nedir, javascriptte callback kullanımı.

  const responsePersons =  persons.filter((person, index) => {
    return person.name.toLocaleLowerCase().includes("r") && index != 14;
  });


  console.log(responsePersons, 'responsepersons');
  

    return (
        <div>Filter</div>
    )
}