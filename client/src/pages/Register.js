import { Header } from "../components/Header/Header";
import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password, matchPassword]);

  return <Header title="Register" />;
};
