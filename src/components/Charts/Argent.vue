<template>
  <apexchart
    type="radialBar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data: function() {
    return {
      series: [25],
      chartOptions: {
        chart: {
          height: 150,
          type: "radialBar",
          animations: {
            speed: 1000,
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%",
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#000",
                fontSize: "22px",
              },
              value: {
                  formatter: function(val) {
                    return (val * 6 + '€');
                  },
                color: "#111",
                fontSize: "46px",
                show: true,
              },
            },
          },
        },
        labels: ["Septembre"],
        stroke: {
          lineCap: "round",
        },
        fill: {
          colors: "#96e6b3",
        },
      },
    };
  },
};
</script>
