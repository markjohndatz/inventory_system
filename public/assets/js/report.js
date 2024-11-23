
$(function () {
        // =====================================
        // Populations
        // =====================================
        // Populations Script //
        var populations = {
            series: [
                { name: "Total", data: [totalResidents, totalFamilies, totalHouseholds] }, // Corrected series definition
            ],
            title: {
                text: "Total Residents = " + totalResidents + 
                    ", Total Families = " + totalFamilies +
                    ", Total Households = " + totalHouseholds,
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
            categories:['Total Residents', 'Total Families', 'Total Households'], // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#populations"), populations);
        chart.render();

        // =====================================
        // Demographics
        // =====================================
        // Genders Script // 
        var totalGenders = {
            series: [totalMale, totalFemale], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Male', 'Female'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#gender"), totalGenders);
        chart.render();

        // Total Indigenous Script //
        var totalIndigenous = {
            series: [totalIndigenousMembers, totalIndigenousNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#indigenous"), totalIndigenous);
        chart.render();


        // Total Civil Status Script //
        var civilStatus = {
            series: [
            { name: "Total", data: Object.values(civilTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(civilTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#civilStatus"), civilStatus);
        chart.render();

        // Total LGBTQ Members Script //
        var lgbtqMembers = {
            series: [
            { name: "Total", data: Object.values(lgbtqTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(lgbtqTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#lgbtqMembers"), lgbtqMembers);
        chart.render();

        // Total Religion Script //
        var totalReligions = {
            series: [
            { name: "Total", data: Object.values(religionTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(religionTypeCounts), // Fetch from Controller and Index // 
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
        var chart = new ApexCharts(document.querySelector("#religion"), totalReligions);
        chart.render();

        // 4Ps Members Script // 
        var total4psMembers = {
            series: [totalFourPsMembers, totalFourPsNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#fourpsMember"), total4psMembers);
        chart.render();

        // PWD Members Script // 
        var totalPwdMembers = {
            series: [totalPWDMembers, totalPWDNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#PWDMember"), totalPwdMembers);
        chart.render();

        // Senior Members Script // 
        var totalseniorMembers = {
            series: [totalSeniorMembers, totalSeniorNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#SeniorMember"), totalseniorMembers);
        chart.render();

        // Indigent Senior Members Script // 
        var totalindigentseniorMembers = {
            series: [totalIndigentseniorMembers, totalIndigentseniorNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#IndigentseniorMember"), totalindigentseniorMembers);
        chart.render();

        // Total Pensioner Members Script // 
        var totalpensionerMembers = {
            series: [totalPensionerMembers, totalPensionerNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#PensionerMember"), totalpensionerMembers);
        chart.render();

        // Total OFW Members Script // 
        var totalofwMembers = {
            series: [totalOFWMembers, totalOFWNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#OFWMember"), totalofwMembers);
        chart.render();

        // Total Solo Parent Members Script // 
        var totalSoloParentMembers = {
            series: [totalSoloparentMembers, totalSoloparentNotMembers], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Member', 'Not Member'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#SoloparentMember"), totalSoloParentMembers);
        chart.render();

        // Total Ethnicity Type Script //
        var totalethnicityType = {
            series: [
            { name: "Total", data: Object.values(EthnicityTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(EthnicityTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#ethnicityType"), totalethnicityType);
        chart.render();

        // Total Sitio Script //
        var totalSitio = {
            series: [
            { name: "Total", data: Object.values(SitioCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(SitioCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#sitio"), totalSitio);
        chart.render();
        

        // =====================================
        // Households
        // =====================================
        // Total House Type Script //
        var totalHouseType = {
            series: [
            { name: "Total", data: Object.values(houseTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalHouseholds,
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
            categories:  Object.keys(houseTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#houseType"), totalHouseType);
        chart.render();

        // Total Toilet Type Script //
        var totalToiletType = {
            series: [
            { name: "Total", data: Object.values(toiletTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalHouseholds,
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
            categories:  Object.keys(toiletTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#toiletType"), totalToiletType);
        chart.render();

        // Total Has Toilet Script // 
        var totalhasToilet = {
            series: [totalwithToilet, totalwithoutToilet], // Fetch from Controller and Index //
            title: {
                text: "Total = " + totalHouseholds,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['With', 'Without'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#hasToilet"), totalhasToilet);
        chart.render();

        // Total Water Script // 
        var totalhasWater = {
            series: [totalwithWater, totalwithoutWater], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalHouseholds,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['With', 'Without'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#hasWater"), totalhasWater);
        chart.render();

        // Total Electricity Script // 
        var totalhasElectricity = {
            series: [totalwithElectricity, totalwithoutElectricity], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalHouseholds,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['With', 'Without'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#hasElectricity"), totalhasElectricity);
        chart.render();

        // Total Internet Script // 
        var totalhasInternet = {
            series: [totalwithInternet, totalwithoutInternet], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalHouseholds,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['With', 'Without'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#hasInternet"), totalhasInternet);
        chart.render();

        // Total Source of Drinking Water Script //
        var totalSODW = {
            series: [
            { name: "Total", data: Object.values(drinkingWaterCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalHouseholds,
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
            categories:  Object.keys(drinkingWaterCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#SODW"), totalSODW);
        chart.render();

        var totalSOW = {
            series: [
            { name: "Total", data: Object.values(sourceWaterCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalHouseholds,
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
            categories:  Object.keys(sourceWaterCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#SOW"), totalSOW);
        chart.render();

        // Total Family Type Script //
        var totalfamilyType = {
            series: [
            { name: "Total", data: Object.values(familyTypeCounts) }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalHouseholds,
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
            categories:  Object.keys(familyTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#familyType"), totalfamilyType);
        chart.render();

        // =====================================
        // Birth and Death
        // =====================================
        // Total Date of Birth Script //
        var totaldateofbirth = {
            series: [
            { name: "Total", data: counts }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  months, // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#totalDateofBirth"), totaldateofbirth);
        chart.render();

        // Total Date of Death Script //
        var totalDateofDeath = {
            series: [
            { name: "Total", data: countsArray }, // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  monthsArray, // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#totalDateofDeath"), totalDateofDeath);
        chart.render();

        // =====================================
        // Eligible Voters
        // =====================================
        // Total Water Script // 
        var EligibleVoters = {
            series: [totaleligibleVoter, totalNoteligibleVoter], // Fetch from Controller and Index // 
            title: {
                text: "Total = " + totalResidents,
             },
            chart: {
                width: 380,
                toolbar: { show: true },
                type: 'pie',
            },
            labels: ['Eligible', 'Not Eligible'],
            fill: {
                type: 'gradient',
              },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#eligibleVoters"), EligibleVoters);
        chart.render();

        var eligibleVotersTypes = {
            series: [
            { name: "Total", data: Object.values(VotingCounts) },  // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(VotingCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#votersTypes"), eligibleVotersTypes);
        chart.render();
        
        // =====================================
        // Educations
        // =====================================
        var educationalTypes = {
            series: [
            { name: "Total", data: Object.values(educationalTypeCounts) },  // Fetch from Controller and Index // 
            ],
            title: {
                text: "Total = " + totalResidents,
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
            categories:  Object.keys(educationalTypeCounts), // Fetch from Controller // 
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
        var chart = new ApexCharts(document.querySelector("#educTypes"), educationalTypes);
        chart.render();
});