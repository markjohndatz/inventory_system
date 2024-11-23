$(function () {

  // =====================================
  // Demographics
  // =====================================

  var chartOptions = {
    series: [
      { name: "Total", data: Object.values(stageCounts) },
    ],
    title: {
       text: "Total = " + totalResident,
    },
    
    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },
  
    colors: ["#f3657e", "#ffc0cb59"],
  
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },
  
    dataLabels: {
      enabled: true,
    },
  
    legend: {
      show: true,
    },
  
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  
    xaxis: {
      type: "category",
      categories:  Object.keys(stageCounts), // Use keys of stageCounts from dashboard script // 
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },
  
    yaxis: {
      show: true,
      min: 0,
     tickAmount: 5,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },
  
    tooltip: { theme: "light" },
  
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
  chart.render();
  


  // =====================================
  // Residents
  // =====================================
  var residents = {
    color: "#adb5bd",
    series: [totalResident, 0, 0],
    labels: ["2024", "2025", "2026"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    fill: {
      type: 'gradient',
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#f3657e", "#ffc0cb59", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#residents"), residents);
  chart.render();

  // =====================================
  // Households
  // =====================================

  var households = {
    color: "#adb5bd",
    series: [totalHousehold, 0, 0],
    labels: ["2024", "2025", "2026"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    fill: {
      type: 'gradient',
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#f3657e", "#ffc0cb59", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#households"), households);
  chart.render();

})