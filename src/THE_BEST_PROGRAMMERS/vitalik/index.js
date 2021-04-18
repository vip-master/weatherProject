// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="./sprite.svg#icon-clouds-and-sun"></use>
//     </svg>`)


function rendChart(data) {
    console.log('vitalik')
}
const arr = ['16.04', '17.04', '18.04', '19.04', '20.04']
    // new Chart(document.getElementById("line-chart"), {
    //     type: 'line',
    //     data: {
    //         labels: [...arr],
    //         datasets: [{

//             data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],

//             label: "— Temperature, C° ",
//             borderColor: "#FF6B09",
//             fill: false
//         }, {
//             data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
//             label: "— Humidity, % ",
//             borderColor: "#0906EB",
//             fill: false,

//         }, {
//             data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
//             label: "— Wind Speed, m/s ",
//             borderColor: "#EA9A05",
//             fill: false
//         }, {
//             data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
//             label: "— Atmosphere Pressure, m/m",
//             borderColor: "#067806",
//             fill: false
//         }]
//     },
//     options: {
//         backgroundColor: "rgba(16, 33, 54, 0.8)",
//         title: {
//             display: true,
//             text: 'Hide Chart',
//             color: '#FF6B09'
//         }
//     }
// });
export { rendChart };