import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

const Chart = ({ candleData, chartInfo }) => {
  let data = [];
  if (candleData.t) {
    data = candleData.t.map((el, index) => {
      //The multi-dimensional array format accepts [[Timestamp], [O, H, L, C]]
      return {
        x: el * 1000,
        y: [
          candleData.o[index],
          candleData.h[index],
          candleData.l[index],
          candleData.c[index],
        ],
      };
    });
  }

  const series = [
    {
      name: "candle",
      data,
    },
  ];
  const options = {
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    chart: {
      height: 350,
      type: "candlestick",
    },
    title: {
      margin: 50,
      floating: true,
      text: `DATE: ${dayjs(chartInfo.from_date).format(
        "DD MMM YYYY"
      )} - ${dayjs(chartInfo.end_date).format("DD MMM YYYY")}`,
      align: "left",
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val) {
          return dayjs(val).format("DD MMM YYYY");
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <>
      {chartInfo.name}
      stock prices in {chartInfo.currency}
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </>
  );
};
export default Chart;
