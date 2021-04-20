// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="./sprite.svg#icon-clouds-and-sun"></use>
//     </svg>`)
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
// Оnpm start
import Chart from 'chart.js/auto';
function rendChart(data) {
    console.log('vitalik')
    console.log(data);
    const Temperature = data[0,7]
    console.log(Temperature);
}
// const Temperature = data.map(temp => temp[0]);
// console.log(Temperature);
Chart.defaults.font.size = 14;
const arr = ['16.04','17.04','18.04','19.04','20.04']
new Chart(document.getElementById("charts-line"), {
    type: 'line',
    data: {
        labels: [...arr],
        datasets: [{
            
            data: [-5, -4.5, -4, -3.5, -3, 2.5, -2, -1.5, -1],
            color: '#FFFFFF',
            label: "— Temperature, C° ",
            borderColor: "#FF6B09",
            fill: false
        }, {
            data: [-5, -4.5, -4, -3.5, -3, 2.5, -2, -1.5, -1],
            label: "— Humidity, % ",
            borderColor: "#0906EB",
            fill: false,
            
        }, {
            data: [-5, -4.5, -4, -3.5, -3, 2.5, -2, -1.5, -1],
            label: "— Wind Speed, m/s ",
            borderColor: "#EA9A05",
            fill: false
        }, {
            data: [-5, -4.5, -4, -3.5, -3, 2.5, -2, -1.5, -1],
            label: "— Atmosphere Pressure, m/m",
            borderColor: "#067806",
            fill: false
        }
        ]
    },
    options: {
        //  layout: {
        //     padding: {
        //          left: 20,
        //          reight: 20,
        //          top: 20,
        //         botton:20,
        //     }
        // },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    // display: true,
                    // title: {
                    //     display: true,
                    //     text:'Value of Indicators',
                    //     color: 'rgba(255, 255, 255, 0.5)',
                    //     font:{
                    //         family: 'Lato',
                    //         size: 12,
                    //         weight: 400,
                    //     },
                    //     padding:{bottom:10}
                    // },
                    stacked: true,
                    beginAtZero: false,
                    gridLines: {
                        display: true,
                        color: "rgba(255,99,132,0.2)",
                    }
                },
                
            x: {
                gridLines: {
                    display: false,
                }
            }
            },
            plugins:{
                legend:{
                    position: 'top',
                    align: 'center',
                    display: 'flex',
                    //прописати позицыю 
    
                    labels: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        boxWidth: 10,
                        boxHeight:10,
                        },
                },
                title:{
                    display: true,
                    text: 'AVERAGE:',
                    color: 'rgba(255, 255, 255, 0.5)',
                    align: 'start',
                    font: {
                        size: 12,
                        family: "Lato",
                        weight: 400,
                        },
                },
            },
        }
        
    });
const buttonChart = document.querySelector('.charts-open');
buttonChart.innerHTML=`<div><p><button class="button-chart-close">Hide Chart <svg width="28"height="28"><use href="./sprite.svg#icon-arrow_to_up"></use></svg></button></p></div>
`
  
         
         
//  function buttonChart() {
//      document.querySelector('#charts-line').innerHTML=`   <div> <p><button>Hide Chart <svg>   <use href="./sprite.svg#icon-arrow_to_up"></use></svg></button></p></div>`
         
   
      
//  }


export { rendChart };
const buttonChart = document.querySelector('.charts-open');
buttonChart.innerHTML=`<div>
    <p><button class="button-chart-close">Hide Chart<svg width="28px" height="28px">
                <use href="./sprite.svg#icon-arrow_to_up"></use>
            </svg></button></p>
</div>`

    // options: {
     
    //         // responsive: true,
    //         // maintainAspectRatio: true,
    //         scales: {
    //             y: {
    //                 // display: true,
    //                 // title: {
    //                 //     display: true,
    //                 //     text:'Value of Indicators',
    //                 //     color: 'rgba(255, 255, 255, 0.5)',
    //                 //     font:{
    //                 //         family: 'Lato',
    //                 //         size: 12,
    //                 //         weight: 400,
    //                 //     },
    //                 //     padding:{bottom:10}
    //                 // },
    //                 stacked: true,
    //                 beginAtZero: false,
    //                 gridLines: {
    //                     display: true,
    //                     color: "rgba(255,99,132,0.2)",
    //                 }
    //             },
                
    //         x: {
    //             gridLines: {
    //                 display: false,
    //             }
    //         }
    //         },
    //         plugins:{
    //             legend:{
    //                 position: 'top',
    //                 align: 'center',
    
    //                 labels: {
    //                     color: 'rgba(255, 255, 255, 0.5)',
    //                     boxWidth: 10,
    //                     boxHeight:10,
    //                     },
    //             },
    //             title:{
    //                 display: true,
    //                 text: 'AVERAGE:',
    //                 color: 'rgba(255, 255, 255, 0.5)',
    //                 align: 'start',
    //                 font: {
    //                     size: 12,
    //                     family: "Lato",
    //                     weight: 400,
    //                     },
    //             },
    //         },
    //     }
        
    // });



