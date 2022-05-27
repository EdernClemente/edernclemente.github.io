(function() {
  'use strict'

  let M = {}, V = {}, C = {}

  M = {
    data: {
      projectName: "",
      companyName: "",
      companyAdress: "",
      companyZip: "",
      companyContactName: "",
      companyContactPhone: "",
      companyContactEmail: "",
      authorName: localStorage.getItem('authorName') || "",
      authorPhone: localStorage.getItem('authorPhone') || "",
      authorEmail: localStorage.getItem('authorEmail') || "",
      authorJob: localStorage.getItem('authorjob') || "",
      insideTemperature: "",
      departement: "",
      departementIndex: "",
      altitude: "",
      altitudeIndex: "",
      minimumOutsideTemperature: "",
      insulation: "",
      insulationIndex: "",
      gCoefficient: "",
      floorSpace: "",
      height: "",
      volume: "",
      heatLosses: "",
      heatPump: "",
      heatPumpIndex: "",
      heatLossesChosen: "",
      electricalSupply: "",
      electricalSupplyIndex: "",
      heaterInformation: "",
      heaterInformationIndex: "",
      thermostatiqueValve: "",
      thermostatiqueValveIndex: "",
      buffer: "",
      selectedHeatPump: "",
      heatCircuit: "",
      heatCircuitIndex: "",
    },
    array: {
      insulation: [0.15, 0.5, 0.6, 0.7, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 3],
      minimumOutsideTemperature: [[-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18],
                                  [-2,-4,-6,-8,-10,-12,-14,-16,-18,-20],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-5,-6,-7,-8,-9,-10,-11],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-2,-4,-6,-8,-10,-12,-14,-16,-18,-20],
                                  [-2,-4,-6,-8,-10,-12,-14,-16,-18,-20],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-12,-13,-15,-17,-19,-21,-23,-24],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-12,-13,-15,-17,-19,-21,-23,-24],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-15,-15,-19,-21,-23,-24,-25],
                                  [-12,-13,-15,-17,-19,-21,-23,-24],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-15,-15,-19,-21,-23,-24,-25],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-9,-10,-11,-12,-13],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-9,-10,-11,-12,-13],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-15,-15,-19,-21,-23,-24,-25],
                                  [-15,-15,-19,-21,-23,-24,-25],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-12,-13,-15,-17,-19,-21,-23,-24],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-9,-10,-11,-12,-13],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15],
                                  [-2,-4,-6,-8,-10,-12,-14,-16,-18,-20],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-4,-5,-6,-7,-8,-9,-10],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-8,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27],
                                  [-15,-15,-19,-21,-23,-24,-25],
                                  [-10,-11,-13,-14,-17,-19,-21,-23,-24,-25,-29],
                                  [-15,-15,-19,-21,-23,-24,-25],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15],
                                  [-7,-8,-9,-11,-13,-14,-15]],
      nameToReference : [['Compress 7400 5 OR-S', 'Compress 7400 7 OR-S', 'Compress 7000 5 OR-S', 'Compress 7000 7 OR-S', 'Compress 7000 9 OR-S', 'Compress 7000 13 OR-S', 'Compress 7000 13 OR-T', 'Compress 7000 17 OR-T', 'Compress 3400 4 OR-S', 'Compress 3400 6 OR-S', 'Compress 3400 8 OR-S', 'Compress 3400 10 OR-S', 'Compress 3400 12 OR-S', 'Compress 3400 14 OR-S', 'Compress 3400 10 OR-T', 'Compress 3400 12 OR-T', 'Compress 3400 14 OR-T'],
                         ['8738212888', '8738212889', '8738210255', '8738210256', '8738210257', '7738602089', '7738601997', '7738601998', '8750722680', '8750722681', '8750722682', '8750722683', '8750722684', '8750722685', '8750722686', '8750722687', '8750722688'],//Outdoor units
                         ['7736900513', '7736900513', '7736900513', '7736900513', '7736900513', '7736900514', '7736900514', '7736900514', '8738212147', '8738212147', '8738212147', '8738212147', '8738212148', '8738212148', '8738212148', '8738212148', '8738212148']],//Indoor units
      data_7000_7400:  [['5 OR-S','5 OR-S','5 OR-S','7 OR-S','7 OR-S','7 OR-S','9 OR-S','9 OR-S','9 OR-S','13 OR-S','13 OR-S','13 OR-S','17 OR-T','17 OR-T','17 OR-T'],
                        ['35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C'],
                        [5.34,5.23,4.95,7.31,6.99,6.20,10.18,10.06,8.41,12.56,12.45,11.66,15.32,14.18,12.66],
                        [5.22,5.12,4.84,7.15,6.84,6.06,9.93,9.81,8.20,12.28,12.18,11.40,14.98,13.87,12.38],
                        [5.10,5.00,4.73,6.98,6.68,5.92,9.68,9.56,7.98,12.00,11.90,11.14,14.64,13.55,12.09],
                        [4.99,4.89,4.62,6.82,6.53,5.79,9.43,9.32,7.77,11.72,11.62,10.88,14.30,13.24,11.81],
                        [4.87,4.77,4.51,6.66,6.37,5.65,9.18,9.07,7.56,11.44,11.34,10.62,13.95,12.92,11.53],
                        [4.75,4.65,4.40,6.50,6.21,5.51,8.93,8.82,7.35,11.16,11.07,10.36,13.61,12.60,11.25],
                        [4.63,4.54,4.29,6.33,6.06,5.37,8.68,8.58,7.13,10.88,10.79,10.10,13.27,12.29,10.96],
                        [4.51,4.42,4.18,6.17,5.90,5.23,8.43,8.33,6.92,10.60,10.51,9.84,12.93,11.97,10.68],
                        [4.39,4.30,4.07,6.01,5.74,5.09,8.21,8.11,6.74,10.32,10.23,9.58,12.59,11.65,10.40],
                        [4.27,4.19,3.96,5.85,5.59,4.95,7.99,7.89,6.56,10.04,9.96,9.32,12.25,11.34,10.12],
                        [4.15,4.07,3.85,5.68,5.43,4.81,7.76,7.67,6.37,9.76,9.68,9.06,11.91,11.02,9.83],
                        [4.04,3.96,3.74,5.52,5.28,4.68,7.54,7.45,6.19,9.48,9.40,8.80,11.57,10.71,9.55],
                        [3.92,3.84,3.63,5.36,5.12,4.54,7.32,7.23,6.01,9.20,9.12,8.54,11.22,10.39,9.27],
                        [3.80,3.72,3.52,5.20,4.96,4.40,7.10,7.01,5.83,8.92,8.85,8.28,10.88,10.07,8.99],
                        [3.68,3.61,3.41,5.03,4.81,4.26,6.87,6.79,5.64,8.64,8.57,8.02,10.54,9.76,8.70],
                        [3.56,3.49,3.30,4.87,4.65,4.12,6.65,6.57,5.46,8.36,8.29,7.76,10.20,9.44,8.42],
                        [3.44,3.37,3.19,4.71,4.49,3.98,6.43,6.35,5.28,8.08,8.01,7.50,9.86,9.12,8.14],
                        [3.32,3.26,3.08,4.55,4.34,3.84,6.21,6.13,5.10,7.80,7.74,7.24,9.52,8.81,7.86],
                        [3.20,3.14,2.97,4.38,4.18,3.70,5.98,5.91,4.91,7.52,7.46,6.98,9.18,8.49,7.57],
                        [3.09,3.03,2.86,4.22,4.03,3.57,5.76,5.69,4.73,7.24,7.18,6.72,8.84,8.18,7.29],
                        [2.97,2.91,2.75,4.06,3.87,3.43,5.54,5.47,4.55,6.96,6.90,6.46,8.49,7.86,7.01]],
      data_3400: [['4 OR-S','4 OR-S','4 OR-S','6 OR-S','6 OR-S','6 OR-S','8 OR-S','8 OR-S','8 OR-S','10 OR-S','10 OR-S','10 OR-S','12 OR-S','12 OR-S','12 OR-S','14 OR-S','14 OR-S','14 OR-S','10 OR-T','10 OR-T','10 OR-T','12 OR-T','12 OR-T','12 OR-T','14 OR-T','14 OR-T','14 OR-T'],
                  ['35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C','35°C','45°C','55°C'],
                  [5.21,4.76,4.33,5.96,5.50,4.89,7.51,7.01,6.37,8.69,8.15,7.19,11.94,11.24,8.40,13.85,13.16,9.32,9.97,9.70,9.80,11.81,11.35,11.49,13.58,12.93,12.86],
                  [5.06,4.63,4.24,5.81,5.36,4.75,7.33,6.83,6.19,8.47,7.94,6.99,11.70,11.01,8.23,13.55,12.88,9.13,9.78,9.54,9.66,11.58,11.15,11.29,13.32,12.70,12.64],
                  [4.92,4.51,4.14,5.66,5.21,4.61,7.15,6.65,6.01,8.26,7.73,6.78,11.45,10.78,8.06,13.26,12.60,8.93,9.58,9.37,9.51,11.35,10.95,11.10,13.06,12.47,12.41],
                  [4.77,4.38,4.04,5.52,5.07,4.47,6.96,6.47,5.83,8.05,7.52,6.58,11.21,10.56,7.89,12.96,12.32,8.74,9.39,9.20,9.36,11.13,10.75,10.91,12.79,12.23,12.19],
                  [4.62,4.25,3.95,5.37,4.93,4.34,6.78,6.28,5.65,7.83,7.31,6.38,10.97,10.33,7.72,12.66,12.03,8.54,9.20,9.04,9.21,10.90,10.55,10.72,12.53,12.00,11.97],
                  [4.48,4.12,3.85,5.22,4.79,4.20,6.59,6.10,5.47,7.62,7.10,6.18,10.73,10.10,7.56,12.36,11.75,8.35,9.01,8.87,9.07,10.67,10.35,10.52,12.27,11.76,11.75],
                  [4.33,3.99,3.76,5.08,4.64,4.06,6.41,5.92,5.29,7.41,6.89,5.98,10.49,9.88,7.39,12.06,11.47,8.15,8.82,8.71,8.92,10.45,10.15,10.33,12.01,11.53,11.53],
                  [4.18,3.87,3.66,4.93,4.50,3.92,6.22,5.74,5.12,7.20,6.68,5.78,10.25,9.65,7.22,11.77,11.18,7.96,8.63,8.54,8.77,10.22,9.95,10.14,11.74,11.30,11.31],
                  [4.03,3.74,3.57,4.78,4.36,3.78,6.04,5.56,4.94,6.98,6.47,5.58,10.00,9.42,7.05,11.47,10.90,7.76,8.44,8.38,8.62,9.99,9.75,9.95,11.48,11.06,11.08],
                  [3.89,3.61,3.47,4.63,4.22,3.64,5.85,5.38,4.76,6.77,6.26,5.38,9.76,9.19,6.88,11.17,10.62,7.57,8.25,8.21,8.48,9.76,9.55,9.75,11.22,10.83,10.86],
                  [3.74,3.48,3.38,4.49,4.07,3.50,5.67,5.20,4.58,6.56,6.05,5.18,9.52,8.97,6.71,10.87,10.34,7.37,8.05,8.04,8.33,9.54,9.35,9.56,10.96,10.59,10.64],
                  [3.59,3.35,3.28,4.34,3.93,3.36,5.49,5.02,4.40,6.34,5.84,4.98,9.28,8.74,6.54,10.57,10.05,7.18,7.86,7.88,8.18,9.31,9.15,9.37,10.69,10.36,10.42],
                  [3.45,3.23,3.19,4.19,3.79,3.22,5.30,4.84,4.22,6.13,5.63,4.78,9.04,8.51,6.37,10.28,9.77,6.98,7.67,7.71,8.04,9.08,8.95,9.18,10.43,10.12,10.20],
                  [3.30,3.10,3.09,4.05,3.65,3.08,5.12,4.66,4.04,5.92,5.42,4.58,8.79,8.29,6.20,9.98,9.49,6.79,7.48,7.55,7.89,8.86,8.75,8.98,10.17,9.89,9.98],
                  [3.15,2.97,3.00,3.90,3.50,2.94,4.93,4.48,3.86,5.70,5.21,4.38,8.55,8.06,6.03,9.68,9.21,6.59,7.29,7.38,7.74,8.63,8.55,8.79,9.91,9.66,9.76],
                  [3.00,2.84,2.90,3.75,3.36,2.80,4.75,4.30,3.69,5.49,5.00,4.17,8.31,7.83,5.86,9.38,8.92,6.40,7.10,7.22,7.59,8.40,8.35,8.60,9.64,9.42,9.53],
                  [2.86,2.71,2.80,3.60,3.22,2.66,4.56,4.12,3.51,5.28,4.79,3.97,8.07,7.60,5.69,9.08,8.64,6.20,6.91,7.05,7.45,8.18,8.15,8.41,9.38,9.19,9.31],
                  [2.71,2.59,2.71,3.46,3.08,2.52,4.38,3.94,3.33,5.06,4.58,3.77,7.83,7.38,5.53,8.78,8.36,6.01,6.72,6.88,7.30,7.95,7.95,8.21,9.12,8.95,9.09],
                  [2.56,2.46,2.61,3.31,2.94,2.38,4.19,3.75,3.15,4.85,4.37,3.57,7.58,7.15,5.36,8.49,8.08,5.81,6.53,6.72,7.15,7.72,7.75,8.02,8.86,8.72,8.87],
                  [2.41,2.33,2.52,3.16,2.79,2.24,4.01,3.57,2.97,4.64,4.16,3.37,7.34,6.92,5.19,8.19,7.79,5.62,6.33,6.55,7.01,7.50,7.55,7.83,8.60,8.49,8.65],
                  [2.27,2.20,2.42,3.02,2.65,2.10,3.83,3.39,2.79,4.43,3.95,3.17,7.10,6.70,5.02,7.89,7.51,5.42,6.14,6.39,6.86,7.27,7.35,7.64,8.33,8.25,8.43]],
      buffer_7000_7400:  [['5 OR-S','7 OR-S','9 OR-S','13 OR-S','17 OR-T','13 OR-T'],
                          [49, 64, 91, 113, 132, 113],
                          [98, 128, 181, 226, 264, 226]],
      buffer_3400:  [['4 OR-S','6 OR-S','8 OR-S','10 OR-S','12 OR-S','14 OR-S'],
                     [49, 64, 91, 113, 113, 132],
                     [98, 128, 181, 226, 226, 264]],
      priceDataBase:  [["1","Unité extérieure monophasée Compress 7000 AW 5 OR-S de 7 kW A7W35","8738210255","5575",""],
                        ["1","Unité extérieure monophasée Compress 7000 AW 7 OR-S de 8,4 kW A7W35","8738210256","6409",""],
                        ["1","Unité extérieure monophasée Compress 7000 AW 9 OR-S de 10,9kW A7W35","8738210257","7238",""],
                        ["1","Unité extérieure monophasée Compress 7000 AW 13 OR-S de 16,9 kW A7W35","7738602089","9209",""],
                        ["1","Unité extérieure triphasée Compress 7000 AW 13 OR-T de 16,9 kW A7W35","7738601997","9765",""],
                        ["1","Unité extérieure triphasée Compress 7000 AW 17 OR-T de 19,9 kW A7W35","7738601998","11429",""],
                        ["1","Unité extérieure monophasée Compress 7400 AW 5 OR-S de 7,6 kW A7W35","8738212888","7263",""],
                        ["1","Unité extérieure monophasée Compress 7400 AW 7 OR-S de 7,9 kW A7W35","8738212889","7868",""],
                        ["2","Unité intérieure appoint électrique - Module AWE 5-9","7736900513","3449","Boitier électrique avec une nouvelle régulation | Appoint électrique 9 kW bridable à 2/4/6/9 kW | Vase d'expansion 10 litres | Sondes de température de départ et de température extérieure | Circulateur primaire PC0, manomètre et vanne directionnelle, purgeur d'air | Module IP intégré pour la gestion à distance."],
                        ["2","Unité intérieure appoint électrique - Module AWE 13-17","7736900514","3977","Boitier électrique avec une nouvelle régulation | Appoint électrique 9 kW bridable à 2/4/6/9 kW | Vase d'expansion 10 litres | Sondes de température de départ et de température extérieure | Circulateur primaire PC0, manomètre et vanne directionnelle, purgeur d'air | Module IP intégré pour la gestion à distance."],
                        ["2","Module colonne appoint électrique et ECS - Module AWM 5-9","8738206614","5671","Appoint électrique 9 kW bridable à 2/4/6/9 kW | Vase d'expansion 14 litres | Ballon ECS 190 litres en Inox | Circulateur primaire PC0, manomètre et vanne directionnelle | Module IP intégré pour la gestion à distance."],
                        ["2","Module colonne appoint électrique et ECS - Module AWM 13-17","9071975315","6199","Appoint électrique 9 kW bridable à 2/4/6/9 kW | Vase d'expansion 14 litres | Ballon ECS 190 litres en Inox | Circulateur primaire PC0, manomètre et vanne directionnelle | Module IP intégré pour la gestion à distance."],
                        ["1","Unité extérieure monophasée Compress 3400 type CS3400iAWS 4 OR-S de 4.2kW A7W35 (Fluide R32)","8750722680","2972",""],
                        ["1","Unité extérieure monophasée Compress 3400 type CS3400iAWS 6 OR-S de 6,15 kW A7W35 (Fluide R32)","8750722681","3765",""],
                        ["1","Unité extérieure monophasée Compress 3400 type CS3400iAWS 8 OR-S de 8,02kW A7W35 (Fluide R32)","8750722682","4015",""],
                        ["1","Unité extérieure monophasée Compress 3400 type CS3400iAWS 10 OR-S de 9,41 kW A7W35 (Fluide R32)","8750722683","6395",""],
                        ["1","Unité extérieure monophasée Compress 3400 type CS3400iAWS 12 OR-S de 12,1 kW A7W35","8750722684","7189",""],
                        ["1","Unité extérieure monophasée Compress 3400 type CS3400iAWS 14 OR-S de 13,8 kW A7W35","8750722685","7981",""],
                        ["1","Unité extérieure triphasée Compress 3400CS3400iAWS 10 OR-T de 9,98 kW A7W35","8750722686","6928",""],
                        ["1","Unité extérieure triphasée Compress 3400 CS3400iAWS 12 OR-T de 11,6 kW A7W35","8750722687","7722",""],
                        ["1","Unité extérieure monophasée Compress 3400 CS3400iAWS 14 OR-T de 14,6 kW A7W35","8750722688","8516",""],
                        ["2","Module colonne appoint électrique et ECS - Module AWS 10M","8738213438","5227","Module colonne appoint électrique et ECS | Appoint électrique 6 kW bridable à 2/4/6 kW | Vase d'expansion 8 litres | Ballon ECS 190 litres en INOX | Circulateur primaire PC0, manomètre et vanne directionnelle."],
                        ["2","Module colonne appoint électrique et ECS - Module AWS 14M","8738213439","5773","Module colonne appoint électrique et ECS | Appoint électrique 6 kW bridable à 2/4/6 kW | Vase d'expansion 8 litres | Ballon ECS 190 litres en INOX | Circulateur primaire PC0, manomètre et vanne directionnelle."],
                        ["2","Module mural appoint électrique - Module AWS 10E","8738212147","3111","Appoint électrique 6 kW bridable à 2/4/6 kW | Condenseur/Evaporateur | Vase d'expansion 8 litres | Circulateur primaire PC0, manomètre | Bac à condensat inclus."],
                        ["2","Module mural appoint électrique - Module AWS 14E","8738212148","3655","Appoint électrique 6 kW bridable à 2/4/6 kW | Condenseur/Evaporateur | Vase d'expansion 8 litres | Circulateur primaire PC0, manomètre | Bac à condensat inclus."],
                        ["3","Module hydraulique circuit direct HS25/6. Circulateur Yonos Para  RS 25/6, 2 robinets d'isolement, coquille EPP, 2 thermomètres","7736601144","903","Débit possible jusqu'à 2,5 m³/h environ. A raccorder en PC1 sur unité intérieure"],
                        ["4","Module hydraulique circuit direct HSM25/6 MM100. Circulateur Yonos Para RS 25/6, 2 robinets d'isolement, coquille EPP, 2 thermomètres, V3V mélangeuse + MM100","7736601155","1487","Débit possible jusqu'à 2,5 m³/h environ. MM100 intégré"],
                        ["5","TB1 : thermostat de sécurité pour plancher chauffant","7719002255","62",""],
                        ["6","Distributeur HKV 2/25/25","8718599377","424","Permet le raccordement direct des groupes HS et HSM sur le dessus"],
                        ["7","Sonde d'ambiance CR10: chauffage seulement","7738111014","87","Sonde d'ambiance avec LCD, comptage d'énergie, Bus 2 fils."],
                        ["","Sonde à condensats : obligatoire si rafraichissement","7747204698","108",""],
                        ["8","Ballon tampon BST 120 Ehp : 120 litres.","8718543039","886",""],
                        ["8","Ballon tampon Puffer PS 50 : 50 litres.","7735500335","651",""],
                        ["","Pochette de raccords EHP 6/7/9/11 LW/LWM","7716900764","89",""],
                        ["","Vanne exogel","87168402200","127","A installer sur le retour au plus près de la PAC"],
                        ["","Sonde départ T0 dans le ballon tampon","3","0",""],
                        ["","Liaison frigorifiques modules intérieur et extérieur","1","","Liaisons frigorifiques en 3/8 5/8"],
                        ["","Liaison frigorifiques modules intérieur et extérieur","2","","Liaisons frigorifiques en 1/4 5/8"],
                        ["","Boitier K30 RF-setHP (disponible 2eme semestre 2022)","8750742716","428",""],
                        ["","Vanne directionnelle VCO à monter sur le groupe de sécurité","8738201409","304","Groupe de sécurité fourni, vanne VCO à prévoir."],
                        ["","Mise en service PAC Compress 7000","7716780371","368",""],
                        ["","Mise en service PAC Compress 3400","7716780371","516",""]],
    },
    computed: {
      powerValues: [],
      selectedWorkingPoint: [],
      productName: undefined,
    },
    setData: function(d) {
      this.data.projectName               = d.projectName
      this.data.companyName               = d.companyName
      this.data.companyAdress             = d.companyAdress
      this.data.companyZip                = d.companyZip
      this.data.companyContactName        = d.companyContactName
      this.data.companyContactPhone       = d.companyContactPhone
      this.data.companyContactEmail       = d.companyContactEmail
      this.data.authorName                = d.authorName
      this.data.authorPhone               = d.authorPhone
      this.data.authorEmail               = d.authorEmail
      this.data.authorJob                 = d.authorJob
      this.data.insideTemperature         = d.insideTemperature
      this.data.departement               = d.departement
      this.data.departementIndex          = d.departementIndex
      this.data.altitude                  = d.altitude
      this.data.altitudeIndex             = d.altitudeIndex
      this.data.minimumOutsideTemperature = d.minimumOutsideTemperature
      this.data.insulation                = d.insulation
      this.data.insulationIndex           = d.insulationIndex
      this.data.gCoefficient              = d.gCoefficient
      this.data.floorSpace                = d.floorSpace
      this.data.height                    = d.height
      this.data.volume                    = d.volume
      this.data.heatLosses                = d.heatLosses
      this.data.heatPump                  = d.heatPump
      this.data.heatPumpIndex             = d.heatPumpIndex
      this.data.heatLossesChosen          = d.heatLossesChosen
      this.data.electricalSupply          = d.electricalSupply
      this.data.electricalSupplyIndex     = d.electricalSupplyIndex
      this.data.heaterInformation         = d.heaterInformation
      this.data.heaterInformationIndex    = d.heaterInformationIndex
      this.data.thermostatiqueValve       = d.thermostatiqueValve
      this.data.thermostatiqueValveIndex  = d.thermostatiqueValveIndex
      this.data.buffer                    = d.buffer
      this.data.selectedHeatPump          = d.selectedHeatPump
      this.data.heatCircuit               = d.heatCircuit
      this.data.heatCircuitIndex          = d.heatCircuitIndex
    },
    getData: function() {
      return this.data
    },
    saveUserInformation: function() {
      localStorage.setItem('authorName', this.data.authorName)
      localStorage.setItem('authorPhone', this.data.authorPhone)
      localStorage.setItem('authorEmail', this.data.authorEmail)
      localStorage.setItem('authorJob', this.data.authorJob)
    },
    getArray: function() {
      return this.array
    },
    setComputed: function(name, d) {
      this.computed[name] = d
    },
    getComputed: function() {
      return this.computed
    },
    findInformation: function(reference) {
      for (var i = 0; i < this.array.priceDataBase.length; i++) {
        if(this.array.priceDataBase[i][2] == reference) { return this.array.priceDataBase[i] }
      }
    },
    getItemInformation: function(reference) {
      let item = this.findInformation(reference[0])

      return {
                reference: reference[0],
                designation: item[1],
                number: reference[1],
                PPHT: item[3]
              }
    },
  }

  V = {
    section: document.getElementById('items-section'),
    updatePage: function(page) {
      const linkColor = document.querySelectorAll('.nav__link'),
            pages = document.querySelectorAll('main div')

      linkColor.forEach(l => l.classList.remove('active'))
      pages.forEach(el => el.classList.remove('active'))

      document.getElementsByClassName(page.substring(1) + '-link')[0].classList.add('active')
      document.getElementById(page.substring(1) + '-page').classList.add('active')
    },
    getData: function() {
      let d = {}

      d.projectName               = document.querySelector('#projectName').value
      d.companyName               = document.querySelector('#companyName').value
      d.companyAdress             = document.querySelector('#companyAdress').value
      d.companyZip                = document.querySelector('#companyZip').value
      d.companyContactName        = document.querySelector('#companyContactName').value
      d.companyContactPhone       = document.querySelector('#companyContactPhone').value
      d.companyContactEmail       = document.querySelector('#companyContactEmail').value
      d.authorName                = document.querySelector('#authorName').value
      d.authorPhone               = document.querySelector('#authorPhone').value
      d.authorEmail               = document.querySelector('#authorEmail').value
      d.authorJob                 = document.querySelector('#authorJob').value
      d.insideTemperature         = document.querySelector('#insideTemperature').value
      d.departement               = document.querySelector('#departement').options[document.querySelector('#departement').selectedIndex].text
      d.departementIndex          = document.querySelector('#departement').selectedIndex
      d.altitude                  = document.querySelector('#altitude').options[document.querySelector('#altitude').selectedIndex].text
      d.altitudeIndex             = document.querySelector('#altitude').selectedIndex
      d.minimumOutsideTemperature = document.querySelector('#minimumOutsideTemperature').value
      d.insulation                = document.querySelector('#insulation').options[document.querySelector('#insulation').selectedIndex].text
      d.insulationIndex           = document.querySelector('#insulation').selectedIndex
      d.gCoefficient              = document.querySelector('#gCoefficient').value
      d.floorSpace                = document.querySelector('#floorSpace').value
      d.height                    = document.querySelector('#height').value
      d.volume                    = document.querySelector('#volume').value
      d.heatLosses                = document.querySelector('#heatLosses').value
      d.heatPump                  = document.querySelector('#heatPump').options[document.querySelector('#heatPump').selectedIndex].text
      d.heatPumpIndex             = document.querySelector('#heatPump').selectedIndex
      d.heatLossesChosen          = document.querySelector('#heatLossesChosen').value
      d.electricalSupply          = document.querySelector('#electricalSupply').options[document.querySelector('#electricalSupply').selectedIndex].text
      d.electricalSupplyIndex     = document.querySelector('#electricalSupply').selectedIndex
      d.heaterInformation         = document.querySelector('#heater').options[document.querySelector('#heater').selectedIndex].text
      d.heaterInformationIndex    = document.querySelector('#heater').selectedIndex
      d.thermostatiqueValve       = document.querySelector('#thermostatiqueValve').options[document.querySelector('#thermostatiqueValve').selectedIndex].text
      d.thermostatiqueValveIndex  = document.querySelector('#thermostatiqueValve').selectedIndex
      d.buffer                    = document.querySelector('#buffer').value
      d.selectedHeatPump          = document.querySelector('#selectedHeatPump').value
      d.heatCircuit               = document.querySelector('#heatCircuit').options[document.querySelector('#heatCircuit').selectedIndex].text
      d.heatCircuitIndex          = document.querySelector('#heatCircuit').selectedIndex

      return d
    },
    loadUserInformations: function(d) {
      document.querySelector('#authorName').value   = d.authorName
      document.querySelector('#authorPhone').value  = d.authorPhone
      document.querySelector('#authorEmail').value  = d.authorEmail
      document.querySelector('#authorJob').value    = d.authorJob
    },
    changeInputValue: function(selector, d) {
      document.querySelector(selector).value = d
    }, 
    addLine: function(item) {
      //When the button is clicked, we add the item to the section
      let itemHTML =  '<tr class="item-row">' +
                        '<td class="row-reference" contenteditable="">' + item.reference + '</td>' +
                        '<td class="row-name" contenteditable="">' + item.designation + '</td>' +
                        '<td class="euro row-price" contenteditable="">' + parseFloat((item.PPHT)).toFixed(2) + '</td>' +
                        '<td class="row-number" contenteditable="">' + item.number + '</td>' +
                        '<td class="euro row-total-price"></td>' +
                        '<td class="trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></td>'
                      '</tr>'

      this.section.insertAdjacentHTML('beforeend', itemHTML)

      const row = this.section.querySelector('.item-row:last-child')

      row.getElementsByClassName('trash')[0].addEventListener('click', () => {
          row.remove()
          C.handlerPriceUpdate.call(C)
      })

      row.getElementsByClassName('row-number')[0].addEventListener('input', (e) => {
          if(!isNaN(parseInt(e.srcElement.innerHTML))) {
              C.handlerPriceUpdate.call(C)
          }
      })

      row.getElementsByClassName('row-price')[0].addEventListener('input', (e) => {
          if(!isNaN(parseInt(e.srcElement.innerHTML))) {
              C.handlerPriceUpdate.call(C)
          }
      })
    },
    clearSection: function() {
      this.section.innerHTML = ''
    },
    unlockPage: function() {
      document.querySelector('.lock').classList.remove('locked')
      document.querySelector('.quote-link .icon').classList.remove('locked')
      document.querySelector('.quote-link span').classList.remove('locked')
    },
  }

  C = {
    model: M,
    view: V,
    handlerUpdatePage: function(link) {
      let checkedLink

      link = link || window.location.hash

      if(this.model.computed.productName != undefined || link != '#quote') {
        checkedLink = link
      }

      this.view.updatePage(checkedLink || "#informations")
    },
    HTMLToPDF: function() {
      let HTMLquote   = document.querySelector('#items-section') || [],
          quoteData   = [],
          details

      quoteData.push({totalPrice: document.querySelector('.quote-price').innerHTML})

      HTMLquote.querySelectorAll('.item-row').forEach(item => {
          details = this.model.findInformation(item.querySelector('.row-reference').innerHTML) || []

          quoteData.push({
              index: details[0] || '',
              description: details[4] || '',
              reference: item.querySelector('.row-reference').innerHTML,
              name: item.querySelector('.row-name').innerHTML,
              number: item.querySelector('.row-number').innerHTML,
              price: item.querySelector('.row-price').innerHTML,
              totalPrice: item.querySelector('.row-total-price').innerHTML
          })
      })

      return quoteData
    },
    handlerPrintPDF: function() {
      let imgData = {
            boschHeader: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png",
            boschLogo: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/BAD60DB3-3BE0-425C-987C-0D4E859D9CB5.png",
            compress3000: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/25F46AFA-C10A-427B-B177-F2C93C0EB12C.png",
            compress7000: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/BE2EC9A3-442A-420D-8667-9A7BCFCD4A11.png",
            logoAerothermie: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/B79209D5-9DBA-4D49-8CF7-0A5A6743948F.png",
            logoGarantie: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/382B7466-EA05-47CA-84D7-79DFCF11E122.png",
            logoHPKeymark: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/93A2B657-8BB4-432B-9FDD-4E158CAFC56B.png",
            logoImpots: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/A0645611-45AB-4825-8BB0-AB2B1BC6B152.png",
            logoLiaisonsHydro: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/C654C8FC-ABB2-4BFD-BA8D-4265C76030F9.png",
            logoMES: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/2D047176-3F15-4A63-A22F-4DE9FA80D650.png",
            logoEPP: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/5C5A11B7-71FE-417B-914D-A53A0F4F9FAE.png",
            logoTemperatureDepart: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/580473B7-3047-488E-971A-CD73AC439F6C.png",
            schemaCommande1CircuitRad: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/2D4F94D0-737F-4DF3-AE31-138B41EB642D.png",
            schema1CircuitRad: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/schema_1_circuit_radiateur.png",
            schema1CircuitPC: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/schema_1_circuit_PC.png",
            schema1CircuitRad1CircuitPC: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/schema_1_circuit_radiateur_1_circuit_PC.png",
            schema1CircuitRadECS: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/schema_1_circuit_radiateur_ECS.png",
            schema1CircuitPCECS: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/schema_1_circuit_PC_ECS.png",
            schema1CircuitRad1CircuitPCECS: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/schema_1_circuit_radiateur_1_circuit_PC_ECS.png",
            schemaMono: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/8663406D-E6FE-4377-9A94-BB8A2BAE1DE8.png",
            schemaTri: "https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/410D0AF7-D031-4E20-A5C3-01174129F858.png",
          }

      let data = this.model.getData()

      const { jsPDF } = window.jspdf
      const doc = new jsPDF('p' , 'mm', 'a4')

      let img,
          marginLeft = 15

      function getYToCenterImg(imgWidth) {
        return ((doc.internal.pageSize.getWidth() - imgWidth) / 2)
      }

      function getMeta(url) {
          img = new Image()
          img.addEventListener("load", function(){
              img.width = this.naturalWidth
              img.height = this.naturalHeight
          })
          img.src = url
      }

      //FIRST PAGE

      doc.addImage(imgData.boschHeader, "PNG", 0, 0, 1891/9, 25/9)
      doc.addImage(imgData.boschLogo, "PNG", 10, 20, 426/5, 96/5)

      doc.setFontSize(30)
      doc.setFont("helvetica", "bold")
      doc.text("Heat pump selector", 10, 55)

      doc.setDrawColor(242, 242, 242)
      doc.setFillColor(242, 242, 242)
      doc.rect(0, 80, 210, 140, "FD")

      doc.addImage(imgData.compress7000, "PNG", 30, 100, 100, 100)

      doc.addImage(imgData.logoLiaisonsHydro, "PNG", 160, 90, 22, 22)
      doc.addImage(imgData.logoAerothermie, "PNG", 155, 120, 27, 27)
      doc.addImage(imgData.logoEPP, "PNG", 161, 150, 26, 26)
      doc.addImage(imgData.logoTemperatureDepart, "PNG", 164, 188, 16, 16)

      doc.setFontSize(18)
      doc.text("Dimensionnement et sélection d'une pompe à chaleur", 10, 235)
      doc.setTextColor("#DE0000")
      doc.text("Offre indicative de prix", 10, 245)

      doc.addImage(imgData.logoMES, "PNG", 50, 260, 18, 18)
      doc.addImage(imgData.logoGarantie, "PNG", 80, 260, 18, 18)
      doc.addImage(imgData.logoImpots, "PNG", 110, 258, 22, 22)
      doc.addImage(imgData.logoHPKeymark, "PNG", 145, 260, 12, 18)

      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text("Date de fin de validité de l'offre : 28/02/2023", 10, 290)

      //SECOND 2
      doc.addPage()

      doc.addImage(imgData.boschHeader, "PNG", 0, 0, 1891/9, 25/9)
      doc.addImage(imgData.boschLogo, "PNG", marginLeft, marginLeft, 426/9, 96/9)
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(18)
      doc.text("Heat pump selector", 70, 23.8)
      doc.text("1) Données générales", marginLeft, 40)

      doc.setFontSize(15)
      doc.autoTable({
      theme: 'grid',
      headStyles: { fillColor: [90, 90, 90], textColor: 'white' },
      bodyStyles: { minCellWidth: 30 },
      startY: 48,
      head: [[{ content: ['Projet'], colSpan: 2 }, { content: ['Coordonnées'], colSpan: 2 }]],
      body: [
        ['Nom du projet', data.projectName, 'Nom de l\'entreprise', data.companyName],
        ['Référence', '', 'Adresse', data.companyZip],
        ['Commercial', data.authorName, 'CP', data.companyZip],
        ['Tel', data.authorPhone, 'Contact', data.companyContactName],
        ['Mail', data.authorEmail, 'Tel', data.companyContactPhone],
        ['Fonction', data.authorJob, 'Mail', data.companyContactEmail]
      ]})

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text("Le DTU 65.16 traite des “Installations de pompes à chaleur” : il propose des clauses types de spécifications de mise en œuvre de systèmes de chauffage et/ou production d’eau chaude sanitaire dans le bâtiment utilisant une pompe à chaleur (PAC) : air-air, air-eau, eau-eau, eau glycolée-eau, sol-sol, sol-eau, relève par une chaudière, et mise au point, ainsi que les chauffe-eaux thermodynamiques CET (air ambiant, air extrait, air extérieur). Il est disponible auprès de l’Afnor. Ce document s’adresse aux installateurs, il est la référence.", marginLeft, doc.lastAutoTable.finalY + 10, { maxWidth: 179, align: 'justify' })

      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("2) Récapitulatif des déperditions", marginLeft, 148)

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text("Le DTU 65.16 indique que les déperditions thermiques de base sont calculées selon la méthode de la NF EN 12831 en fonction des valeurs données dans son annexe nationale NF P 52-612/CN et à partir des caractéristiques du bâtiment fournies par le maître d’ouvrage. Il arrive cependant qu’une approche rapide et simplifiée soit utilisée (souvent la méthode GV), même si elle n’est pas reconnue par la profession.", marginLeft, 158, { maxWidth: 179, align: 'justify' })

      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Données géographiques", marginLeft, 180)

      doc.autoTable({
        theme: 'plain',
        startY: 184,
        head: [['Département', 'Altitude', 'Température de consigne', 'T° ext de base']],
        body: [
          [data.departement, data.altitude, data.insideTemperature + '°C', data.minimumOutsideTemperature + '°C'],
        ]
      })

      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Estimation des déperditions", marginLeft, doc.lastAutoTable.finalY + 7)

      doc.autoTable({
        theme: 'plain',
        startY: 209,
        head: [['Surface chauffée', 'Hauteur sous plafond', 'Volume']],
        body: [
          [data.floorSpace + 'm2', data.height + 'm', data.volume + 'm3'],
        ]
      })

      doc.setFontSize(13)
      doc.setFont("helvetica", "bold")
      doc.text("Méthode G x V x delta T", marginLeft, doc.lastAutoTable.finalY + 7)

      doc.autoTable({
        theme: 'plain',
        startY: 235,
        head: [['Coefficient G estimatif', 'Déperditions']],
        body: [
          [data.gCoefficient + 'W/°C/m3', data.heatLosses + 'kW'],
        ]
      })

      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Déperditions retenues :", marginLeft, doc.lastAutoTable.finalY + 7)

      doc.setTextColor('red')
      doc.text("10 kW", 65, doc.lastAutoTable.finalY + 7)

      doc.setFontSize(7)
      doc.setFont("helvetica", "normal")
      doc.setTextColor('black')
      doc.text("Nota : Ce document ne se substitue en aucun cas à une étude déperditive réglementaire réalisée par un bureau d'études thermiques compétent en la matière. L'entreprise elm.leblanc S.A.S ne pourrait être tenu responsable de l'utilisation de cet outil et ne garantit pas l'exactitude des résultats.", marginLeft, 277, { maxWidth: 179, align: 'justify' })

      //THIRD PAGE

      doc.addPage()

      doc.addImage(imgData.boschHeader, "PNG", 0, 0, 1891/9, 25/9)
      doc.addImage(imgData.boschLogo, "PNG", marginLeft, marginLeft, 426/9, 96/9)
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("Heat pump selector", 70, 23.8)
      doc.text("3) Choix de la PAC", marginLeft, 40)

      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Cas d'un appoint électrique", marginLeft, 50)

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.setTextColor('black')
      doc.text("Selon le DTU 65.16, la puissance de la PAC doit être comprise entre 70 et 100% des déperditions à la température extérieure de base si l'inertie des locaux desservis est moyenne à lourde. Autrement, c'est de 80 à 100% des déperditions dans le cas de locaux à inertie faible. L’appoint électrique doit être de tel sorte que la somme de la puissance de la PAC et la puissance de l’appoint soit supérieure à 1,2 fois les déperditions. La puissance de l’appoint électrique (6 kW) dans l’unité intérieure AWE, AWM ou AWMS satisfait ce point dans les maisons ayant des déperditions jusqu’à environ 18 kW.", marginLeft, 58, { maxWidth: 179, align: 'justify' })

      doc.setFontSize(10)
      doc.setFont("helvetica", "bold")
      doc.text("La PAC choisie pour ce projet est une " + this.model.computed.productName + " (unité extérieure) couplée à un appoint électrique.", marginLeft, 87)

      doc.setFontSize(15)
      doc.autoTable({
      theme: 'grid',
      headStyles: { fillColor: [90, 90, 90], textColor: 'white', halign: 'center'},
      startY: 95,
      head: [[{ content: ['Puissance PAC pour une application ' + data.heaterInformation], colSpan: 7 }]],
      body: [
        ['Tbase=-5°C', 'AW 5 OR-S', 'AW 7 OR-S', 'AW 9 OR-S', 'AW 13 OR-S', 'AW 13 OR-T', 'AW 17 OR-T'],
        ['Ppac (kW)', this.model.computed.powerValues[0], this.model.computed.powerValues[1], this.model.computed.powerValues[2], this.model.computed.powerValues[3], this.model.computed.powerValues[3], this.model.computed.powerValues[4]],
        ['Tx couverture', ((this.model.computed.powerValues[0] / data.heatLossesChosen)*100).toFixed(0) + '%', ((this.model.computed.powerValues[1] / data.heatLossesChosen)*100).toFixed(0) + '%', ((this.model.computed.powerValues[2] / data.heatLossesChosen)*100).toFixed(0) + '%', ((this.model.computed.powerValues[3] / data.heatLossesChosen)*100).toFixed(0) + '%', ((this.model.computed.powerValues[3] / data.heatLossesChosen)*100).toFixed(0) + '%', ((this.model.computed.powerValues[4] / data.heatLossesChosen)*100).toFixed(0) + '%'],
        ['Appoint élec', '9', '9', '9', '9', '9', '9'],
        ['Tx couverture', (((this.model.computed.powerValues[0] + 9) / data.heatLossesChosen)*100).toFixed(0) + '%', (((this.model.computed.powerValues[1] + 9) / data.heatLossesChosen)*100).toFixed(0) + '%', (((this.model.computed.powerValues[2] + 9) / data.heatLossesChosen)*100).toFixed(0) + '%', (((this.model.computed.powerValues[3] + 9) / data.heatLossesChosen)*100).toFixed(0) + '%', (((this.model.computed.powerValues[3] + 9) / data.heatLossesChosen)*100).toFixed(0) + '%', (((this.model.computed.powerValues[4] + 9) / data.heatLossesChosen)*100).toFixed(0) + '%'],
        ['Pression sonore à 1m (dBA)', '39', '39', '40', '47', '45', '45']
      ]})

      console.log()

      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Schéma de principe", marginLeft, doc.lastAutoTable.finalY + 7)

      let schema

      switch(data.heatCircuitIndex) {
        case 1:
          schema = imgData['schema1CircuitRad']
          break
        case 2:
          schema = imgData['schema1CircuitPC']
          break
        case 3:
          schema = imgData['schema1CircuitRad1CircuitPC']
          break
        case 4:
          schema = imgData['schema1CircuitRadECS']
          break
        case 5:
          schema = imgData['schema1CircuitRadECS']
          break
        case 6:
          schema = imgData['schema1CircuitRad1CircuitPCECS']
          break
      }

      doc.addImage(schema, "PNG", 70, 165, 556/8, 974/8)

      //FOURTH PAGE

      doc.addPage()

      doc.addImage(imgData.boschHeader, "PNG", 0, 0, 1891/9, 25/9)
      doc.addImage(imgData.boschLogo, "PNG", marginLeft, marginLeft, 426/9, 96/9)
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("Heat pump selector", 70, 23.8)
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Raccordement en puissance", marginLeft, 40)

      doc.addImage(imgData.schemaMono, "PNG", 35, 50, 959/20, 664/20)
      doc.addImage(imgData.schemaTri, "PNG", 115, 50, 959/20, 664/20)

      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text("Monophasé", 50, 90)
      doc.text("Triphasé", 130, 90)

      doc.setFontSize(10)
      doc.setTextColor('black')
      doc.text("Le raccordement électrique de la pompe à chaleur (à l’extérieur) et de ses éléments doit être réalisé à partir d’un circuit d’alimentation spécialisé spécifique. La pompe à chaleur ne doit pas être raccordée sur un circuit électrique alimentant un autre appareil. Le branchement et les raccordements électriques des différents éléments doivent être réalisés à partir des spécifications exigées par la  NF C 15-100.", marginLeft, 100, { maxWidth: 179, align: 'justify' })

      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Raccordement de la commande", marginLeft, 125)

      doc.addImage(imgData.schemaCommande1CircuitRad, "PNG", marginLeft, 135, 939/5.5, 544/5.5)

      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text("CAN BUS : blindage raccordé que d’un seul côté (30 m maximum)", marginLeft, 250)

      //FIFTH PAGE

      doc.addPage()
      doc.setFontSize(8)

      let quoteData = this.HTMLToPDF(),
          bodyContent = [],
          item

      for (var i = 1; i < quoteData.length; i++) {
        item = quoteData[i]
        bodyContent.push([item.index, {content: [item.reference], styles: {fontStyle: 'bold'}}, {content: [item.name], styles: {fontStyle: 'bold'}}, {content: [item.price + '€'], styles: {halign: 'right'}}, {content: [item.number], styles: {halign: 'right'}}, {content: [item.totalPrice + '€'], styles: {halign: 'right'}}])
        if(item.description) { bodyContent.push(['', '', item.description, '', '', '']) }    
      }

      bodyContent.push(['', '','','','',''])
      bodyContent.push(['', '', {content: ["Montant HT"], styles: {fontStyle: 'bold', fontSize: '10'}}, '', '', {content: [quoteData[0].totalPrice + '€'], styles: {fontStyle: 'bold', fontSize: '10', halign: 'right'}}])

      doc.autoTable({
        theme: 'plain',
        head: [['n°', 'Référence', 'Désignation', {content: ['PU'], styles: {halign: 'right'}}, {content: ['Quantité'], styles: {halign: 'right'}}, {content: ['PT TTC'], styles: {halign: 'right'}}]],
        body: bodyContent,
        didDrawPage: function(data) {
          //Header
          doc.addImage(imgData.boschHeader, 'PNG', 0, 0, 1891/9, 25/9)

          doc.text('Référence', marginLeft, 12)
          doc.text('0987654397', 38, 12)
          doc.text('Date de création', 65, 12)
          doc.text('09/03/2022', 90, 12)

          //Footer

          doc.text('elm.leblanc SAS – 124-126 rue de Stalingrad – 93711 Drancy Cedex', marginLeft, 290)
        },
      })

      //===== LAST PAGE =====
      doc.addPage()

      //Header
      doc.addImage(imgData.boschHeader, 'PNG', 0, 0, 1891/9, 25/9)

      doc.setFontSize(16)
      doc.autoTable({
      theme: 'plain',
      styles: {fontSize: 8},
      head: [['Conditions commerciales :']],
      body: [
        ['Les prix s’entendent en prix nets HT. Les prix indiqués sont des prix conseillés, les distributeurs restent libres de pratiquer le prix et la politique commerciale de leur choix.'],
        ['Conditions de règlement : habituelles Bosch, consultables dans nos conditions générales de vente.'],
        ['Vous avez la possibilité de consulter les principales notices techniques relatives à nos produits sur notre site www.bosch-industrial.fr'],
        ['Nous vous rappelons que cette offre est soumise à nos conditions générales de vente. Les textes complets de ces conditions figurent dans nos catalogues Chauffage et Climatisation en vigueurs, ainsi que sur www.bosch-industrial.fr'],
        ['Mentions particulières Chauffage :'],
        ['Pour le bon fonctionnement, la pérennité et la performance des système de chauffage, nous vous conseillons de suivre les recommandations de la norme NF EN 12828 « Systèmes de chauffage dans les bâtiments – conception des installations de chauffage à eau chaude ». En lien avec les recommandations de la norme, vous retrouverez l’ensemble des conditions d’exploitation de nos matériels au dernier chapitre de notre catalogue. Ces conditions incluent l’exploitation de nos générateurs, les équipements de sécurité ainsi que la qualité de l’eau en chaufferie. Enfin, nous vous rappelons que le Code de l’environnement exige la tenue d’un livret de chaufferie pour toute installation de chauffage.'],
        ['Mentions particulières Climatisation :'],
        ['La sélection et le dimensionnement des matériels sont fournis à titre indicatif sur la base des informations reçues. En l’absence d’une étude complète fournie par le demandeur, la sélection du matériel est faite selon les paramètres suivants :'],
        ['- Mode chaud : 50 W/m3 pour une température intérieure de 20 °C'],
        ['- Mode froid : 30 W/m3 pour un abaissement de 6 °C maximum, entre la température intérieure et la température extérieure'],
        ['- Taux d’hygrométrie non considéré'],
        ['- Taux de brassage d’air compris entre 6 et 8 vol/h'],
        ['La sélection basée sur ces paramètres ne peut en aucun cas remplacer une étude réalisée par un professionnel habilité et ne peut engager la responsabilité de elm.leblanc SAS.'],
        ['Conditions de garantie :'],
        ['L’ensemble des conditions de garantie de nos matériels peuvent être retrouvées dans nos conditions générales de vente.'],
        ['Chaudières, régulations, solaire thermique, traitement de l’eau, accessoires : 2 ans'],
        ['Cuves des ballons de stockage et préparateurs ECS : 3 ans'],
        ['Climatisation tertiaire VRF : 5 ans toutes pièces, compresseurs inclus, via mise en service réalisée et validée par un professionnel qualifié.'],
        ['Climatisation résidentielle Splits : 3 ans pièces, 5 ans compresseurs, via mise en service réalisée et validée par un professionnel qualifié.'],
        ['La garantie est portée à 5 ans pour les corps de chauffe des chaudières avec une mise en service réalisée et validée par notre service après-vente constructeur.'],
        ['Une extension de garantie à 10 ans peut être proposée pour les corps de chauffe des chaudières, à titre onéreux, par notre service après-vente constructeur.'],
        ['Si la mise en service de la Climatisation tertiaire VRF est réalisée par notre service après-vente constructeur, la main d’oeuvre est incluse pour les 2 premières années de garantie.'],
        ['Des informations sur les constituants conformément à l\'article 33 du règlement REACH sont disponibles sous l\'adresse suivante : www.reach.bosch-thermotechnology.com'],
      ]})

      //Footer
      doc.line(marginLeft, 270, 194, 270, 'F')

      doc.setFontSize(8)
      doc.text('elm.leblanc SAS – 124-126 rue de Stalingrad – 93711 Drancy Cedex', marginLeft, 275)
      doc.text('SAS au capital de 14 081 225,40 EUR – RCS Bobigny 542 097 944', marginLeft, 280)
      doc.text('N° TVA : FR 89 542 097 944 – Code APE : 2521Z – Code EORI (Site St Thégonnec) : FR54209794400822', marginLeft, 285)
      doc.text('IBAN : FR76 3000 3040 2500 0203 9568 468 – BIC : SOGEFRPP', marginLeft, 290)

      doc.save('a4.pdf')

    },
    fromNameToReference(name) {
      for (var i = 0; i < this.model.array.nameToReference[0].length; i++) {
        if(this.model.array.nameToReference[0][i] == name) {
          return [this.model.array.nameToReference[1][i], this.model.array.nameToReference[2][i]]
        }
      }
    },
    selectProducts(reference) {
      this.model.setData(this.view.getData())
      let d = this.model.getData(),
          bufferProduct

      d.buffer > 60 ? bufferProduct = 8718543039 : bufferProduct = 7735500335

      if(d.heatPumpIndex == 1) {
        switch(d.heatCircuitIndex) {
          case 1:
            return [[reference[0], 1], [reference[1], 1], [7736601144, 1], [bufferProduct, 1], [7738111014, 1], [87168402200, 2], [7716780371, 1]]
            break
          case 2:
            return [[reference[0], 1], [reference[1], 1], [7736601144, 1], [bufferProduct, 1], [7719002255, 1], [7738111014, 1], [87168402200, 2], [7747204698, 0], [7716780371, 1]]
            break
          case 3:
            return [[reference[0], 1], [reference[1], 1], [7736601144, 1], [7736601155, 1], [bufferProduct, 1], [7719002255, 1], [8718599377, 1], [7738111014, 2], [7747204698, 0], [87168402200, 2], [7716780371, 1]]
            break
          case 4:
            return [[reference[0], 1], [reference[1], 1], [7736601144, 1], [bufferProduct, 1], [8738201409, 1], [7738111014, 1], [7716900764, 1], [87168402200, 2], [7716780371, 1]]
            break
          case 5:
            return [[reference[0], 1], [reference[1], 1], [7736601144, 1], [bufferProduct, 1], [8738201409, 1], [7719002255, 1], [7738111014, 1], [7747204698, 0], [7716900764, 1], [87168402200, 2], [7716780371, 1]]
            break
          case 6:
            return [[reference[0], 1], [reference[1], 1], [7736601144, 1], [7736601155, 1], [bufferProduct, 1], [7719002255, 1], [8718599377, 1], [7738111014, 2], [7747204698, 0], [7716900764, 1], [8738201409, 1], [87168402200, 2], [7716780371, 1]]
            break
        }
      }
    },
    convertInformationToHTML: function(d) {
      d.forEach(reference => {
        this.view.addLine(this.model.getItemInformation(reference))
      })
    },
    handlerSave: function() {
      this.model.setData(this.view.getData())
      let d = this.model.getData()

      if(this.model.computed.productName && d.heatCircuitIndex != 0) {
        this.view.updatePage('#quote')
        this.model.saveUserInformation()
        this.view.clearSection()
        this.view.unlockPage('#quote')
        this.convertInformationToHTML(this.selectProducts(this.fromNameToReference(this.model.computed.productName)))
        this.handlerPriceUpdate()
        document.querySelector('.error-pop-up').innerHTML = ''
      } else {
        document.querySelector('.error-pop-up').innerHTML = 'Entrez toutes les informations pour continuer.'
      } 
    },
    handlerLoadUserInformations: function() {
      this.view.loadUserInformations(this.model.getData())
    },
    handlerComputeInformationsPage() {
      this.model.setData(this.view.getData())

      let d = this.model.getData(),
          array = this.model.getArray(), 
          minimumOutsideTemperature,
          gCoefficient,
          volume,
          heatLosses,
          heatPumpPower,
          productName

      //Outside temperature
      if(d.departementIndex !== 0 && d.altitudeIndex !== 0) {
        minimumOutsideTemperature = this.handlerDualInputArray('minimumOutsideTemperature', d.departementIndex - 1, d.altitudeIndex - 1)
        
        this.view.changeInputValue('#minimumOutsideTemperature', minimumOutsideTemperature)
      }

      //G coefficient
      if(d.insulationIndex !== 0) {
        gCoefficient = this.handlerSingleInputArray('insulation', d.insulationIndex - 1)
       
        this.view.changeInputValue('#gCoefficient', gCoefficient)
      }

      //Volume
      let floorSpace = parseFloat(d.floorSpace.replace(',', '.')),
          height = parseFloat(d.height.replace(',', '.'))

      if(!isNaN(floorSpace) && !isNaN(height)) {
        volume = floorSpace * height

        this.view.changeInputValue('#volume', volume.toFixed(1))
      }

      //Heat losses
      if(!isNaN(parseInt(gCoefficient)) && !isNaN(parseInt(volume)) && !isNaN(parseInt(minimumOutsideTemperature)) && !isNaN(parseInt(d.insideTemperature.replace(',', '.')))) {
        heatLosses = gCoefficient * volume * (d.insideTemperature.replace(',', '.') - minimumOutsideTemperature) / 1000
        
        this.view.changeInputValue('#heatLosses', heatLosses.toFixed(1))
      }

      //Heat pump selection
      if(d.heatPumpIndex !== 0 && d.electricalSupplyIndex !== 0 && d.heaterInformationIndex !== 0 && d.thermostatiqueValveIndex !== 0 && !isNaN(parseInt(d.heatLossesChosen)) && minimumOutsideTemperature <= 0) {
        let powerArray,
            workingTemperature,
            powerValues = [],//Power of each product
            selectedWorkingPoint,
            productChosen

        productName = undefined

        if(d.heatPump == 'Compress 7000' || d.heatPump == 'Compress 7400') {

          //We extract the power values of each heat pump
          powerArray = array.data_7000_7400[2 - minimumOutsideTemperature]

          //Selection of the working temperature (35, 45, 55)
          d.heaterInformationIndex == 4 ? workingTemperature = 2 : workingTemperature = d.heaterInformationIndex - 1

          //We extarct only the power at the working point
          for (var i = workingTemperature; i < powerArray.length; i = i + 3) {
            powerValues.push(powerArray[i])
          }

          //We choose the ideal power and the ideal heat pump
          for (var i = 0; i < powerValues.length; i++) {
            if(powerValues[i] / d.heatLossesChosen >= 0.7 && powerValues[i] / d.heatLossesChosen <= 1) {
              selectedWorkingPoint = [2 - minimumOutsideTemperature, i]
              break
            } else if (powerValues[0] > d.heatLossesChosen) {
              selectedWorkingPoint = [2 - minimumOutsideTemperature, 0]
              break
            } else {
              selectedWorkingPoint = undefined
            }
          }

          this.model.setComputed('powerValues', powerValues)
          this.model.setComputed('selectedWorkingPoint', selectedWorkingPoint)

          if(selectedWorkingPoint != undefined) {
            //We add the -T if needed for the 13 size
            if(array.buffer_7000_7400[0][selectedWorkingPoint[1]] == '13 OR-S' && d.electricalSupplyIndex == 2) {
              array.buffer_7000_7400[0][selectedWorkingPoint[1]] = '13 OR-T'
            }

            //We add an option for the 7400 product
            if (array.buffer_7000_7400[0][selectedWorkingPoint[1]] == '5 OR-S' || array.buffer_7000_7400[0][selectedWorkingPoint[1]] == '7 OR-S') {
              productName = d.heatPump + ' ' + array.buffer_7000_7400[0][selectedWorkingPoint[1]]
            } else {
              productName = 'Compress 7000' + ' ' + array.buffer_7000_7400[0][selectedWorkingPoint[1]]
            }
          }

          this.model.setComputed('productName', productName)

          productName ? productChosen = productName : productChosen = 'PAC + Chaudière. Veuillez contacter l\'avant-vente pour préconisation.'

          this.view.changeInputValue('#selectedHeatPump', productChosen)

        } else {

          powerArray = array.data_3400[2 - minimumOutsideTemperature]

          d.heaterInformationIndex == 4 ? workingTemperature = 2 : workingTemperature = d.heaterInformationIndex - 1

          for (var i = workingTemperature; i < powerArray.length; i = i + 3) {
            powerValues.push(powerArray[i])
          }

          for (var i = 0; i < powerValues.length; i++) {
            if(powerValues[i] / d.heatLossesChosen >= 0.7 && powerValues[i] / d.heatLossesChosen <= 1) {
              selectedWorkingPoint = [2 - minimumOutsideTemperature, i]
              break
            } else if (powerValues[0] > d.heatLossesChosen) {
              selectedWorkingPoint = [2 - minimumOutsideTemperature, 0]
              break
            }
          }

          //Faire fonctionner avec la 3400

          this.model.setComputed('powerValues', powerValues)
          this.model.setComputed('selectedWorkingPoint', selectedWorkingPoint)
          this.model.setComputed('productChosen', productChosen)

          selectedWorkingPoint ? productName = d.heatPump + ' ' + array.buffer_3400[0][selectedWorkingPoint[1]] : productName = 'Compress 7000 + Chaudière. Veuillez contacter l\'avant-vente pour préconisation.'

          this.view.changeInputValue('#selectedHeatPump', productName)
        }
      }

      //Buffer selection
      if(productName) {
        let powerVolumeRatio,
            circuitVolume,
            finalVolume,
            index

        switch(d.heaterInformationIndex) {
          case 1:
            powerVolumeRatio = 20
            break
          case 2:
            powerVolumeRatio = 5
            break
          case 3:
            powerVolumeRatio = 3
            break
          case 4:
            powerVolumeRatio = 1.5
            break
        }

        if(d.heatPump == 'Compress 7000' || d.heatPump == 'Compress 7400') {
          for (var i = 0; i < array.buffer_7000_7400[0].length; i++) {
            if(array.buffer_7000_7400[0][i] == productName.substring(14)) {
              if(d.thermostatiqueValveIndex == 1 && d.heaterInformationIndex !== 1) {
                circuitVolume = 0
              } else {
                circuitVolume = powerVolumeRatio * d.heatLossesChosen
              }

              d.heaterInformationIndex == 1 || d.heaterInformationIndex == 4 ? index = 2 : index = 1

              finalVolume = array.buffer_7000_7400[index][i] - circuitVolume

              if (finalVolume <= 0) { finalVolume = 0 }

              this.view.changeInputValue('#buffer', finalVolume)
              break
            }
          }
        } else {
          for (var i = 0; i < array.buffer_3400[0].length; i++) {
            if(array.buffer_3400[0][i] == productName) {
              if(d.thermostatiqueValveIndex == 1 && d.heaterInformationIndex !== 1) {
                circuitVolume = 0
              } else {
                circuitVolume = powerVolumeRatio * d.heatLossesChosen
              }

              d.heaterInformationIndex == 1 || d.heaterInformationIndex == 4 ? index = 2 : index = 1

              finalVolume = array.buffer_3400[index][i] - circuitVolume

              if (finalVolume <= 0) { finalVolume = 0 }

              this.view.changeInputValue('#buffer', finalVolume)
              break
            }
          }

        }
      }
    },
    handlerDualInputArray: function(name, row, column) {
      return this.model.getArray()[name][row][column] || 'Valeur inexistante'
    },
    handlerSingleInputArray: function(name, index) {
      return this.model.getArray()[name][index] || 'Valeur inexistante'
    },
    handlerPriceUpdate: function() {
      let section = document.getElementById('items-section'),
          sectionPrice = 0,
          quantity,
          productPrice,
          totalPrice

      section.querySelectorAll('.item-row').forEach(row => {
          quantity = parseFloat(row.querySelector('.row-number').innerHTML)
          productPrice = parseFloat(row.querySelector('.row-price').innerHTML)

          totalPrice = productPrice * quantity

          row.querySelector('.row-total-price').innerHTML = totalPrice.toFixed(2)

          sectionPrice = sectionPrice + totalPrice
      })
      
      document.querySelector('.quote-price').innerHTML = sectionPrice.toFixed(2)

      document.querySelector('.quote-eco-part').innerHTML = (sectionPrice * 1.2).toFixed(2)
    },
    handlerAddRow: function() {
      this.view.addLine({reference: 0, designation: 'Ligne à compléter', PPHT: 0, number: 1})
    }
  }
 
  C.handlerUpdatePage.call(C)
  C.handlerLoadUserInformations.call(C)

  document.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', function() { 
    C.handlerUpdatePage.call(C, this.getAttribute('href'))
  }))


  document.querySelector('.print-pdf').addEventListener('click', () => {
    C.handlerPrintPDF.call(C)
  })

  document.querySelector('#add-section-button').addEventListener('click', () => {
    C.handlerAddRow.call(C)
  })

  document.querySelector('.validateInformations').addEventListener('click', () => {
    C.handlerSave.call(C)
  })

  let informationsListener = ['#departement', '#altitude', '#floorSpace', '#height', '#insulation', '#heatPump', '#heatLossesChosen', '#electricalSupply', '#heater', '#thermostatiqueValve']

  informationsListener.forEach(el => {
    if(el == '#floorSpace' || el == '#height' || el == '#heatLossesChosen') {
      document.querySelector(el).addEventListener('input', () => {
        C.handlerComputeInformationsPage.call(C)
      })
    } else {
      document.querySelector(el).addEventListener('change', () => {
        C.handlerComputeInformationsPage.call(C)
      })
    }
  })

})()

/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId),
    icon = document.querySelector('#header-toggle path')

    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', () => {
            if(nav.classList.contains('show-menu')) {
                nav.classList.remove('show-menu')
                icon.style.d = "path('M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z')"
            } else {
                nav.classList.add('show-menu')
                icon.style.d = "path('M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z')"
            }
        })
    }
}
showMenu('header-toggle','navbar')
