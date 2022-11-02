import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


const Chart = () => {
    useLayoutEffect(() => {
        // let chart = am4core.create("ChartMonth", am4charts.XYChart);
        let data = [
                { date: "2022-06-01T00:00:00.000Z", value: 2300},
                { date: "2022-07-01T00:00:00.000Z", value: 1000},
                { date: "2022-08-01T00:00:00.000Z", value: 3600},
            ]
        
        // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        // dateAxis.renderer.minGridDistance = 50;
        // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // // Create series
        // let series = chart.series.push(new am4charts.LineSeries());
        // series.dataFields.valueY = "value1";
        // series.dataFields.dateX = "date";
        // series.strokeWidth = 2;
        // series.minBulletDistance = 10;
        // series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}";
        // series.tooltip.pointerOrientation = "vertical";

        // // Add cursor
        // chart.cursor = new am4charts.XYCursor();
        // chart.cursor.xAxis = dateAxis;
        // let chart = am4core.create("chartdiv", am4charts.XYChart);
        let chart = am4core.create("ChartMonth", am4charts.XYChart);
        // chart.scrollbarX = new am4core.Scrollbar();

        // Add data
        chart.data = data

        prepareParetoData();

        function prepareParetoData() {
            let total = 0;

            for (var i = 0; i < chart.data.length; i++) {
                let value = chart.data[i].value;
                total += value;
            }
        }

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.disabled = true;
        categoryAxis.cursorTooltipEnabled = false;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "date";
        series.tooltipText = "[bold]{date.formatDate()} : {valueY} NKN[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })


        let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        paretoValueAxis.renderer.opposite = true;
        // paretoValueAxis.min = 0;
        // paretoValueAxis.max = 100;
        // paretoValueAxis.strictMinMax = true;
        // paretoValueAxis.renderer.grid.template.disabled = true;
        // paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
        // paretoValueAxis.numberFormatter.numberFormat = "#'%'"
        // paretoValueAxis.cursorTooltipEnabled = false;

        // Cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panX";

    }, []);

    return (
        <div id="ChartMonth" style={{ width: "100%", height: "200px", margin: "0 auto" }}></div>
    );
}

export default Chart;
