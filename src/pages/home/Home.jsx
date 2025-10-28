import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default Home;
