import { addDoc, collection, deleteDoc } from "firebase/firestore";
import { firebaseDB } from "../../config/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";

async function addData(tableName, data) {
    // Add a new document in collection "cities"
    // await setDoc(doc(firebaseDB, "cities"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });

    const docRef = await addDoc(collection(firebaseDB, tableName), data);

    console.log("Document written with ID: ", docRef.id);

}

async function deleteData(tableName, docId) {

    const todoRef = doc(firebaseDB, tableName, docId);

    try {
        await deleteDoc(todoRef);
        console.log("OK")
    } catch (error) {
        // ...
        console.log(error, 'error')
        console.log("sistemde hata var")

    }
}

// async function updateData(tableName, todo, editedTodo) {
//     const todoEdit = doc(firebaseDB, tableName, todo)
//     await setDoc(todoEdit, { text: editedTodo });
// }

const updateData = async (tableName, docId, data) => {
    const docRef = doc(firebaseDB, tableName, docId);
    await updateDoc(docRef, data);
    console.log("Veri güncellendi:", docId);
};

export {
    addData,
    deleteData,
    updateData
}