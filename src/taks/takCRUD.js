import { auth,db } from "../firebase.js";
import {   getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,serverTimestamp } from "firebase/firestore"
    


    const coleccion = "taks"

export const saveTask = async (estado,lugar,tak) =>
{
    //addDoc(collection(db, coleccion), { estado,lugar,tak,uid ,serverTimestamp()});
    try {

      // Obtener el usuario autenticado actualmente
const user = auth().currentUser;
console.log(user);
      const docRef = await addDoc(collection(db, coleccion), {
        estado: estado,
        lugar: lugar,
        tak: tak,
        uid: user.uid,
        createdAt: serverTimestamp()
      });
      console.log("Documento guardado con ID:", docRef.id);
    } catch (error) {
      console.error("Error al guardar el documento:", error);
    }
  };
  
  
  
  
  
  
  
  

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, coleccion), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => 
deleteDoc(doc(db, coleccion, id)
);

export const getTask = (id) => 
getDoc(doc(db, coleccion, id)
);

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, coleccion, id), newFields);


  export const getTasks = () => getDocs(collection(db, coleccion));