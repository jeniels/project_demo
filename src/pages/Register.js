import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerWithEmailAndPassword(email, password, name, gender);
      navigate("/login"); // Redirect to dashboard after successful registration
    } catch (error) {
      console.log(error.message);
      alert(error);
    }
  };

  return (
    <div className="register__container">
      <input
        type="text"
        className="register__textBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="text"
        className="register__textBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <input
        type="text"
        className="register__textBox"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      />
      <input
        type="password"
        className="register__textBox"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="register__btn" onClick={handleRegister}>
        Register
      </button>
      <div>
      Already have an account? <Link to="/login">Login</Link> now.
      </div>
    </div>
  );
}

export default Register;
