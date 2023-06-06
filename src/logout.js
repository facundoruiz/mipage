import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import {
  showMessage
} from "./showMessage.js";
const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    showMessage("Saliste!");
    window.location.href = "./";
  } catch (error) {
    showMessage("Ocurrio un error" + error,error);
  }
});