import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(email, password);
