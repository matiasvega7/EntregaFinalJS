
const preguntas = [{

    pregunta: "Si estuvieras atrapado en una casa embrujada y necesitas salir de inmediato o te atacará un demonio poderoso ¿Qué harías?",
    opciones: {
       "Enfrentaría al demonio y luego saldría": "Gryffindor",
      "Engañaria al demonio y lo atraparía para utilizarlo contra mi enemigo" : "Slytherin",
      "Buscaría otras posibles salidas": "Revenclaw",
      "No me asustan los demonios, lo esquivo y saldría de la casa": "Hufflepuff"
    }
},
{
    pregunta: "Si tuvieses que elegir un animal que te defina, ¿Cuál de las siguientes opciones es más certera?",
    opciones: {
      "Conejo/Urón/Tejón":"Hufflepuff",
      "Rata/Araña/Serpiente":"Slytherin", 
      "Búo/Hamster/Cuervo":"Revenclaw" ,
      "Gato/León/Leopardo": "Gryffindor"
    }
},
{   pregunta: "¿Te consideras una persona...?",
    opciones:{
     "Sabia": "Ravenclaw",
     "Leal" :"Hufflepuff" ,
     "Valiente" : "Gryffindor",
      "Ambicioso": "Slytherin"
    }

},
{
     pregunta: "De las siguientes categorías, seleccione el tipo de película y/o libro que le guste:",
     opciones:{
        "Acción/Drama/Valentía": "Gryffindor",
        "Documentales/Enciclopedias/Biografrías": "Ravenclaw",
        "Terror/Thriller/Estafas":"Slytherin" ,
        "Ficción/Aventuras/Magia":"Hufflepuff" 
      
     }
}
];
 



let respuestas = { Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 };
let preguntaActual = 0;

const quizContainer = document.getElementById("quizContainer");
const nextBtn = document.getElementById("next-btn");
const resultado = document.getElementById("resultado");
const imagenCasa = document.getElementById("imagenCasa");
const nombreCasa = document.getElementById("nombreCasa");

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quizContainer");
  
  if (!quizContainer) {
      console.error("No se encontró el elemento #quizContainer");
      return;
  }

function mostrarPregunta() {
quizContainer.innerHTML = "";


  const pregunta = preguntas[preguntaActual];

  const preguntaElement = document.createElement("h2");

  preguntaElement.textContent = pregunta.pregunta;

  quizContainer.appendChild(preguntaElement);

  for (const [opcion, casa] of Object.entries(pregunta.opciones)) {
      const button = document.createElement("button");
      button.textContent = opcion;
      button.onclick = () => seleccionarRespuesta(casa);
      button.classList.add("quiz-btn");
      quizContainer.appendChild(button);
  }
}

function seleccionarRespuesta(casa) {
  respuestas[casa]++;

  preguntaActual++;

  if (preguntaActual < preguntas.length) {

      mostrarPregunta();
  } else {
      mostrarResultado();
  }
}

function mostrarResultado() {

  quizContainer.style.display = "none";

  nextBtn.style.display = "none";
  resultado.style.display = "block";

  let casaGanadora = Object.keys(respuestas).reduce((a, b) => respuestas[a] > respuestas[b] ? a : b);

  nombreCasa.textContent = casaGanadora;

  imagenCasa.src = `imagen/${casaGanadora.toLowerCase()}.png`; 

  resultado.style.animation = "fadeIn 1.5s ease-in-out";
}

nextBtn.addEventListener("click", () => mostrarPregunta());

mostrarPregunta()})
