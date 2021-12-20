import { useRef, useLayoutEffect } from "react";
import useStyles from "./styles";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { get } from "lodash";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

interface DonutChartProps {}
const DonutChart = (props: DonutChartProps) => {
  const classes = useStyles();
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_dataviz);

  const chart = useRef(null);

  useLayoutEffect(() => {
    const x: any = am4core.create("chartdiv", am4charts.PieChart);

    const data = [
      {
        title: "VIP",
        value: 25,
        color: "#304D95",
      },
      {
        title: "Exculsive",
        value: 25,
        color: "#006F26",
      },
      {
        title: "Regular",
        value: 25,
        color: "#FF6D03",
      },
      {
        title: "Economy",
        value: 25,
        color: "#FFD834",
      },
    ];

    x.data = data;
    x.hiddenState.properties.opacity = 0;
    
    // Add and configure Series
    const series = x.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.slices.template.propertyFields.fill = "color";
    series.dataFields.category = "title";
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;
    x.innerRadius = am4core.percent(25);
    // series.hiddenState.properties.endAngle = -90;

    // Custom hover
    const hs = series.slices.template.states.getKey("hover");
    hs.properties.scale = 1.2;
    hs.properties.shiftRadius = 0;
    hs.properties.innerRadius = 25;
    hs.properties.cornerRadius = 10;
    hs.properties.innerCornerRadius = -10;

    // // Disable tooltips
    // pieSeries.slices.template.tooltipText = "";

    // Add a legend
    // x.legend = new am4charts.Legend();
    // x.legend.useDefaultMarker = true;
    // const marker: any = x.legend.markers.template.children.getIndex(0);
    // marker.cornerRadius(12, 12, 12, 12);
    // marker.strokeWidth = 2;
    // marker.strokeOpacity = 1;
    // marker.stroke = am4core.color("#ccc");

    // Custom legend
    x.events.on("ready", function(event) {
      // populate our custom legend when chart renders
      x.customLegend = document.getElementById("legend");
      series.dataItems.each(function(row, i) {
        const colorPrimary = get(x, ["data", i, "color"]);

        var percent = Math.round(row.values.value.percent * 100) / 100;
        // var value = row.value;

        x.customLegend.innerHTML +=
          '<div id="legend-item-' +
          ');" style="color: ' +
          "black" +
          `;"><div><div style="width: 20px;height: 20px;background: ${colorPrimary};border-radius: 10px;margin-right: 10px;"/></div>` +
          "<div>" +
          row.category +
          "<div>" +
          percent +
          "%</div></div>";
      });
    });

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return (
    <>
      <div id="chartdiv" className={classes.chartdiv} />
      <div id="legend" className={classes.legend}></div>
    </>
  );
};

export default DonutChart;
