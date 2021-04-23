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
import { switchPosition } from '../_Mr_Paul/index';
let newChart 
function rendChart(data) {

    if (newChart) {
     newChart.destroy()
 }
    const grafikTemperature = data.map(temperature => {
        return temperature[0]
    })
 
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
        y.push(month[i] + ' ' + daily[i] + ', ' + year[i])
      
    }
   
    y[4]=' '


    const buttonChart = document.querySelector('.charts-open');
    buttonChart.innerHTML =
        ` <button class="button-chart-close"><span class="button-chart-text">Show Chart</span>
        <div class="chart-svg-box">
            <svg class="chart-svg" >
                <use href="./sprite.svg#icon-arrow_to_down"></use>
            </svg>
        </div>
    </button>`;
    
   document.querySelector('.charts-continer').classList.add('none')

    const onButtomChartClick = document.querySelector('.button-chart-close');
    onButtomChartClick.addEventListener('click', buttonChartRemove);

    function buttonChartRemove() {
        
        // document.querySelector('.charts').classList.toggle('compress');
        document.querySelector('.charts-continer').classList.toggle('none');
       
        switchPosition();
        if (document.querySelector(".button-chart-text").textContent === "Show Chart") {
            document.querySelector(".button-chart-text").textContent = "Hide Chart";
        } else {
            document.querySelector(".button-chart-text").textContent = "Show Chart";
        }
    }
    document.querySelector('.charts-open').addEventListener('click', () => {
        document.querySelector('.chart-svg').classList.toggle('rotate');
       document.querySelector('.charts-open').classList.toggle('grafic-canvas')
    })
  Chart.defaults.font.size = 14;
        Chart.defaults.color = 'rgba(255, 255, 255, 0.5)';
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.2)';
    // const arr = ['22.04','23.04','24.04','25.04','26.04']
newChart =   new Chart(document.getElementById("charts-line"), {
      
        
        type: 'line',
        data: {
            labels: [...y],
            datasets: [{
                
                data: [...temp],
                color: '#FFFFFF',
                label: "— Temperature, C° ",
                borderColor: "#FF6B09",
                backgroundColor: '#ff6b09',
                color: 'rgba(255, 255, 255, 0.5)',
                fill: false
            }, {
                data: [...humidity],
                label: "— Humidity, % ",
                borderColor: "#0906EB",
                 backgroundColor: '#0906EB',
                fill: false,
            
            }, {
                data: [...windSpeed],
                label: "— Wind Speed, m/s ",
                borderColor: "#EA9A05",
                 backgroundColor: '#EA9A05',
                fill: false
            }, {
                data: [...pressure],
                label: "— Atmosphere Pressure, m/m",
                borderColor: "#067806",
                 backgroundColor: '#067806',
                fill: false
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                   labels: {
               
                        boxWidth: 10,
                        boxHeight:10,
                        },
                },
                    
        title: {
        display: true,
            text: 'AVERAGE:',
         align: 'center',
      }
    },
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        align: 'start',
                        
                }
                },
               
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value of Indicators',
                        color: 'rgba(255, 255, 255, 0.5)',
                        font: {
                            family: 'Lato',
                            size: 14,
                            style: 'normal',
                            lineHeight: 1.2,
                            
                        },
                        padding: { top: 30, left: 0, right: 0, bottom: 0 }
                    }
                }
            }
        },
 })

};
// const Temperature = data.map(temp => temp[0]);
// console.log(Temperature);


export { rendChart };

