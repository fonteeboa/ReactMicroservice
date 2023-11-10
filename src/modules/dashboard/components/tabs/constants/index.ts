import { ChartData } from '../../../../../common/components/base-layouts/ChartGrid/domain';

export const chartData: ChartData[] = [
  {
    type: 'line',
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Exemplo Line',
          fill: true,
          data: [123, 345, 500, 745, 8622, 901, 4000], // Defina seus próprios valores de dados aqui
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          lineTension: 0.2,
        },
      ],
    },
  }, 
  {
    type: 'line',
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Exemplo Line',
          fill: false,
          data: [300, 500, 200, 600, 350, 800, 400], // Defina seus próprios valores de dados aqui
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          lineTension: 0.1,
        },
      ],
    },
  }, 
  {
    type: 'line',
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: [300, 500, 200, 600, 350, 800, 400], // Defina seus próprios valores de dados aqui
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
  }, 
  {
    type: 'pie',
    chartData: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#024873', '#21BF48', '#0678BF', '#024873', '#21BF48'],
        },
      ],
    },
  },
  {
    type: 'doughnut',
    chartData: {
      labels: ['Apples', 'Bananas', 'Cherries'],
      datasets: [
        {
          data: [20, 15, 10],
          backgroundColor: ['#024873', '#21BF48', '#0678BF', '#024873', '#21BF48'],
        },
      ],
    },
  },
  {
    type: 'radar',
    chartData: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
      datasets: [
        {
          label: 'Exemplo Radar',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
  },
  {
    type: 'bubble',
    chartData: {
      datasets: [
        {
          label: 'Exemplo Bubble',
          data: [
            { x: 10, y: 20, r: 5 },
            { x: 15, y: 30, r: 8 },
            { x: 8, y: 15, r: 10 },
          ],
          backgroundColor: ['#024873', '#21BF48', '#0678BF', '#024873', '#21BF48'],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
  },
  {
    type: 'scatter',
    chartData: {
      datasets: [
        {
          label: 'Exemplo Scatter',
          data: [
            { x: 10, y: 20 },
            { x: 15, y: 30 },
            { x: 8, y: 15 },
          ],
          backgroundColor: ['#024873', '#21BF48', '#0678BF', '#024873', '#21BF48'],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
  },
  {
    type: 'bar',
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [350, 600, 300, 750, 500, 900, 400],
          backgroundColor: [ '#0678BF',  '#21BF48'],
        },
        {
          label: 'Dataset 2',
          data: [250, 400, 800, 300, 650, 300, 750],
          backgroundColor: ['#024873', '#21BF48'],
        },
      ],
    },
  },
  {
    type: 'bar2',
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [350, 600, 300, 750, 500, 900, 400],
          backgroundColor: [ '#0678BF',  '#21BF48'],
        },
        {
          label: 'Dataset 2',
          data: [250, 400, 800, 300, 650, 300, 750],
          backgroundColor: ['#024873', '#21BF48'],
        },
      ],
    },
  },
]