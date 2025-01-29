<script>
import {  Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)


export default {
    name: 'ChartDiseasesFrequency',
    props: ['radarChartDatasets'],
    components: {
        Doughnut,
    },
    data() {
        return {
            Doughnut,
            type: 'doughnut',
            data: {
                labels: ['Fièvre', 'Paludisme', 'Tuberculose', 'Toux'],
                datasets: [
                    {
                        backgroundColor: ['#3E68FF', '#4FB783', '#FEE889', '#DC143C'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            options: {
                // responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            useBorderRadius: true,
                            borderRadius: 10,
                        }
                    },
                },
                aspectRatio: 2,
                // scales: {
                //     x: {
                //         grid: {
                //             display: false,
                //         }, 
                //         border: {
                //             display: false,
                //         },
                //         beginAtZero: true,
                //     },
                //     y: {
                //         grid: {
                //             display: false,
                //         },
                //         border: {
                //             display: false,
                //         },
                //         ticks: {
                //             display: false,
                //         },
                //         beginAtZero: true,
                //     },
                // }
            },
        }
    }
}
</script>

<template>
  <Doughnut :data="data" :options="options" :type="type" class="w-auto h-auto"/>
</template>
