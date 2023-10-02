import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
