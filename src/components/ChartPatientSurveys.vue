<script>
import {  Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
import { Line as LineChart } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, Filler)


export default {
    name: 'ChartPatientSurveys',
    props: ['radarChartDatasets'],
    components: {
        LineChart,
    },
    data() {
        return {
            LineChart,
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Nouveaux patients",
                        data: [10, 29, 5, 35, 40, 50, 55, 23, 45, 10, 47, 67],
                        borderColor: '#3E68FF',
                        pointBackgroundColor: 'rgba(62, 104, 255, 0.3)',
                        fill: true,
                        backgroundColor: 'rgba(62, 104, 255, 0.3)',
                    },
                     {
                        label: "Anciens patients",
                        data: [40, 29, 10, 45, 30, 60, 50, 77, 27, 30, 44, 12],
                        borderColor: '#FEEB97',
                        pointBackgroundColor: 'rgba(254, 235, 151, 0.4)',
                        fill: true,
                        backgroundColor: 'rgba(254, 235, 151, 0.4',
                    }
                ],
            },
            options: {
                responsive: true,
            },
        }
    }
}
</script>

<template>
  <LineChart :data="data" :options="options" :type="type" class="w-auto h-auto" id="lineChart"/>
</template>
