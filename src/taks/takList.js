import {
  onGetTasks,
  saveTask
} from "./takCRUD.js"
import {
  showMessage
} from "../showMessage.js";

export const showTareas= () => {

const postList = document.querySelector(".taks-recent");

onGetTasks((querySnapshot) => {
  let html = "";
  querySnapshot.forEach((taks) => {
       
    const user = taks.user;

     // Convertir el campo createdAt a una fecha legible
     const createdAt = new Date(taks.createdAt.seconds * 1000); // Multiplicar por 1000 para convertir a milisegundos
    
    const li = `
      <div class="d-flex text-body-secondary pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${user.name}"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>${user.name}</title>
          <rect width="100%" height="100%" fill="${user.color}" />
        </svg>
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">${user.name}</strong>
          ${taks.tak}<br/>
          ${taks.lugar}<br/>
          <small>${createdAt}</small>
          <a id="popoverButton" class="text-success" href="#" role="button" data-bs-toggle="popover"
            title="Custom popover" data-bs-content="This is a Bootstrap popover.">Example popover</a>
        </p>
      </div>
    `;
    html += li;
  });
  postList.innerHTML = html;
});
}




const taskForm = document.getElementById("taks-form");

const btnAddTak = document.querySelector("#save-tak");

// Función para cuando hagan click en boton y  autenticar con Google y guardar el usuario en Firestore
btnAddTak.addEventListener("click", async (e) => {
  e.preventDefault();
  const lugar = taskForm["lugar"];
  const estado = 1;
  const tak = taskForm["tarea"]
  if(saveTask(estado, lugar.value, tak.value)){
 // show  message
 taskForm.reset();
 lugar.focus();
      showMessage("Tarea Guardada!");
  }else{
    showMessage(" tareasa  Ree",error);
  }
 
})