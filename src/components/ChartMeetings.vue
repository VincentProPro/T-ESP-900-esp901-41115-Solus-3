<script>
import {  Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
import { Line as LineChart } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, Filler)


export default {
    name: 'ChartMeetings',
    props: ['radarChartDatasets'],
    components: {
        LineChart,
    },
    data() {
        return {
            LineChart,
            type: 'line',
            data: {
                labels: ["", "", "", "", "", "", "",],
                datasets: [
                    {
                        data: [40, 29, 10, 45, 30, 60, 50],
                        borderColor: 'rgba(79, 183, 131, 0.32)',
                        pointBackgroundColor: '#4FB783',
                        fill: true,
                        backgroundColor: 'rgba(79, 183, 131, 0.1)',
                    }
                ],
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
                scales: {
                    x: {
                        grid: {
                            display: false,
                        }, 
                        border: {
                            display: false,
                        },
                        beginAtZero: true,
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
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
  <LineChart :data="data" :options="options" :type="type" class="w-auto h-auto" id="lineChart"/>
</template>
