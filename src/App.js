import { useState, useEffect } from "react"; 
import './App.css';
import { db } from ".firebase-config";
import { collection } from "firebase/firestore"; 

function App() {
  const [user, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users"); 
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await

    }
  }, [])

  return (
    <div className="App"></div>
  );
}

export default App;
