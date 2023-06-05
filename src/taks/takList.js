import {
  onGetTasks,
  saveTask
} from "./takCRUD.js"
import {
  showMessage
} from "../showMessage.js";


const postList = document.querySelector(".taks-recent");

onGetTasks((querySnapshot) => {
  let html = "";
  querySnapshot.forEach((doc) => {
    const tak = doc.data();
    const li = `
        <div class="d-flex text-body-secondary pt-3 ">
          <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">${tak.author}</strong>
            ${tak.tak}<br/>
          ${tak.lugar}
            <a id="popoverButton" class="text-success" href="#" role="button" data-bs-toggle="popover"
              title="Custom popover" data-bs-content="This is a Bootstrap popover.">Example popover</a>
  
          </p>
        </div>
      `;
    html += li;
  });
  postList.innerHTML = html;

});




const taskForm = document.getElementById("taks-form");

const btnAddTak = document.querySelector("#save-tak");
// Función para cuando hagan click en boton y  autenticar con Google y guardar el usuario en Firestore
btnAddTak.addEventListener("click", async (e) => {
  e.preventDefault();
  const lugar = taskForm["lugar"];
  const estado = 1;
  const tak = taskForm["tarea"]
  saveTask(estado, lugar, tak)
  // show  message
  taskForm.reset();
  lugar.focus();
  showMessage("click tareasa");
})