import { Header } from "../components/Header/Header";
import { useRef, useState, useEffect } from "react";

export const Register = () => {
  const userRef = useRef();
  const errorRef = userRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = userState(false);
  const [validFocus, setUserFocus] = userState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = userState(false);
  const [passwordFocus, setPasswordFocus] = userState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = userState(false);
  const [matchFocus, setMatchFocus] = userState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  return <Header title="Register" />;
};
