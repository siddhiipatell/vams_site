

var options = {
  series: [{
    name: "Desktops",
    data: [30, 41, 55, 51, 49, 62, 69, 41, 52, 55, 60]
  }],
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    },
    stroke: {
      width: 1
    },
    sparkline: {
      enabled: true,
    }

  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },

};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();





