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

    const grafikTemperature = data.map(temperature => {
        return temperature[0]
    })
    console.log(grafikTemperature);
    const temp = [];
    const humidity = [];
    const windSpeed = [];
    const pressure = [];
    const month = [];
    const daily = [];
    const year = [];
    const y = [];
    grafikTemperature.forEach(element => {
        temp.push(element.main.temp);
        humidity.push((element.main.humidity));
        pressure.push((element.main.pressure));
        windSpeed.push(element.wind.speed);
        const dataGrafik = element.dt.split(' ')
        
        month.push(dataGrafik[1])
        daily.push(dataGrafik[2]);
        year.push(dataGrafik[3])
    });
  for (let i = 0; i < 5; i++) {
   y.push(month[i]+' '+daily[i]+', '+year[i])
      
  }
    console.log(y);
  
    // const Temperature = data[0,7]
    // console.log(Temperature);
    
 document.querySelector('.charts').insertAdjacentHTML('beforebegin', `<div class="chart-position">
   <button class="button-chart-show"><span class="button-chart-text">Show Chart</span><div class="chart-svg-box">
   <svg class="chart-svg" >
                <use href="./sprite.svg#icon-arrow_to_down"></use>
            </svg>
            </div></button>
</div>`);
           document.querySelector('.charts').classList.add('none')
      const onButtomChartClickShow = document.querySelector('.button-chart-show');
    onButtomChartClickShow.addEventListener('click', buttonChartShow)
    console.log(onButtomChartClick);
    function buttonChartShow() {
        document.querySelector('.charts').classList.remove('none')
            document.querySelector('.button-chart-show').classList.add('none')
    }
    
    const buttonChart = document.querySelector('.charts-open');
    buttonChart.innerHTML = `<div class="chart-position">
   <button class="button-chart-close"><span class="button-chart-text">Hide Chart</span><div class="chart-svg-box">
   <svg class="chart-svg" >
                <use href="./sprite.svg#icon-arrow_to_up"></use>
            </svg>
            </div></button>
</div>`;
     const onButtomChartClick = document.querySelector('.button-chart-close');
    onButtomChartClick.addEventListener('click', buttonChartRemove)
    console.log(onButtomChartClick);
    function buttonChartRemove() {
        document.querySelector('.charts').classList.add('none')
            document.querySelector('.button-chart-show').classList.remove('none')
    }

    Chart.defaults.font.size = 14;
// const arr = ['22.04','23.04','24.04','25.04','26.04']
new Chart(document.getElementById("charts-line"), {
    type: 'line',
    data: {
        labels: [...y],
        datasets: [{
            
            data: [...temp],
            color: '#FFFFFF',
            label: "— Temperature, C° ",
            borderColor: "#FF6B09",
            fill: false
        }, {
            data: [...humidity],
            label: "— Humidity, % ",
            borderColor: "#0906EB",
            fill: false,
            
        }, {
            data: [...windSpeed],
            label: "— Wind Speed, m/s ",
            borderColor: "#EA9A05",
            fill: false
        }, {
            data: [...pressure],
            label: "— Atmosphere Pressure, m/m",
            borderColor: "#067806",
            fill: false
        }
        ]
    },
    options: {
     
            // responsive: true,
            // maintainAspectRatio: true,
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

}
// const Temperature = data.map(temp => temp[0]);
// console.log(Temperature);


export { rendChart };


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



