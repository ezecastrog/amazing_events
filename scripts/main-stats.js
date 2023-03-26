let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing';
let events = [];
let categories =[];
const contenedorTabla = document.getElementById('table-stats');

//Llamada de funciones
getEvents();



//Funciones
function loadStats(categorias){
    let container = document.querySelector("tbody");
    let tableBodyHTML = "";
    categorias.forEach(category=>{
        let filtradosEventos = extractEventByCategory(category,events);
        let promedioAsistencia = getPromedioAsistencia(filtradosEventos);
        let masAsistido = getMostAssisted(filtradosEventos);
        let gananciasMasAsistido = masAsistido * category.capacity/100;
        let menosAsistido = getLessAssisted(filtradosEventos);
        tableBodyHTML += `<tr>
        <td>${category}</td>
        <td>${promedioAsistencia}</td>
        <td>${masAsistido.assistance} (${masAsistido.name})</td>
        <td>${menosAsistido.assistance} (${menosAsistido.name})</td>
    </tr>
        `
    })
    container.innerHTML = tableBodyHTML;
}




function extractCategories(arrayEventos){
    let categorias=[];
    let categoriasRepetidas = arrayEventos.map(eventos => eventos.category); 
    categories = new Set(categoriasRepetidas)
    console.log(categories)
}

function extractEventByCategory(category,events){
return events.filter(evento=>evento.category.includes(category));
}
function getPromedioAsistencia(eventos){
    let sumaAsistencia = 0;
    eventos.forEach(evento=>sumaAsistencia += evento.assistance|| evento.estimate);
    return Math.round(sumaAsistencia/eventos.length)
}
// function getPromedioEstimado(eventos){
    // let sumaEstimado = 0;
    // eventos.forEach(evento=>sumaEstimado += evento.estimate);
    // return Math.round(sumaEstimado/eventos.length);
// }
function getMostAssisted(events){
    return events.reduce((acumulador,valorActual)=>{
        if (valorActual.assistance>acumulador.assistance){
            return valorActual;
        } else {
            return acumulador;
        }
    })
}
function getLessAssisted(events){
    return events.reduce((acumulador,valorActual)=>{
        if (valorActual.assistance<acumulador.assistance){
            return valorActual;
        } else{
            return acumulador;
        }
    })
}


async function getEvents () {
    try {
        let response = await fetch(urlAPI);
        let dataAPI = await response.json();
        console.log(dataAPI)
        events = dataAPI.events;
        currentDate = dataAPI.currentDate;
        categories = extractCategories(events);
        console.log(categories);
extractCategories(events);
loadStats(categories);

} catch (error){
        console.log(error.message);
    }}
