<script>
import {  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'ChartTotalPatients',
    props: ['radarChartDatasets'],
    components: {
        Bar
    },
    data() {
        return {
            Bar,
            type: 'bar',
            data: {
                labels: ["", "", "", "", "", "", "", "", "", "", ""],
                datasets: [
                    {
                        barPercentage: 0.5,
                        barThickness: 20,
                        maxBarThickness: 25,
                        backgroundColor: '#DC143C',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12],
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        text: "15% d'augmentation par rapport à l'année dernière",
                        position: 'bottom',
                        align: 'end',
                        display: true,
                        padding: '-20',
                        color: '#000000'
                    }
                },
                categoryPercentage: 0,
                scales: {
                    x: {
                        grid: {
                            display: false,
                        }, 
                        beginAtZero: true,
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        beginAtZero: true,
                    },
                }
            },
        }
    }
}
</script>

<template>
  <Bar :data="data" :options="options" :type="type" class="w-auto h-auto"/>
</template>
