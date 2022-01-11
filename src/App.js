import { useState, useEffect } from "react"; 
import './App.css';
import { db } from "./firebase-config";
import { collection, doc, getDocs, updateDoc, deleteDoc, addDoc } from "firebase/firestore"; 

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users"); 

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));

    };

    getUsers();
  }, []);

  return (
    <div className="App">
      {users.map ((user) => {
        return (
        <div> 
          {" "}
          <h1>Name: {user.name} </h1>
          <h1>Surame: {user.surname} </h1>
          <h1>Age: {user.age} </h1>
          <h1>Occupation: {user.occupation} </h1>
        </div>
      }
      )}</div>
  );
}

export default App;
