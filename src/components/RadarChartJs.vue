<script>
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, RadarController } from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  RadarController,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

export default {
    name: 'RadarChartJs',
    props: ['radarChartDatasets'],
    components: {
        Radar
    },
    data() {
        return {
            Radar,
            type: 'radar',
            data: {
                labels: ["", "", "", "", "", ""],
                datasets: this.radarChartDatasets
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            pointCircle: 'circle',
                        },
                        position: "bottom",
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                },
            },
            fill: {
                target: 'dataset',
                above: 'datasetDisabled',
                
            },
        }
    }
}
</script>

<template>
  <Radar :data="data" :options="options" :type="type" class="w-auto h-auto"/>
</template>
