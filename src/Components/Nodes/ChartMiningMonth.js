import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
let colors = new am4core.ColorSet();

const ChartMining = (props) => {
    const { arrBlockMonth } = props
    useLayoutEffect(() => {
        let arr = arrBlockMonth.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
        })
        const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))
        let data = uniqueArray(arr)
        // let chart = am4core.create("chartdivMiningMonth", am4charts.XYChart);
        // chart.data = data;
        // console.log(data)
        // chart.width = am4core.percent(45);
        // chart.height = 350;

        // chart.titles.template.fontSize = 10;
        // chart.titles.template.textAlign = "left";
        // chart.titles.template.isMeasured = false;
        // // chart.titles.create().text = title;

        // chart.padding(20, 0, 2, 10);

        // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        // dateAxis.renderer.grid.template.disabled = true;
        // dateAxis.renderer.labels.template.disabled = true;
        // dateAxis.startLocation = 0.5;
        // dateAxis.endLocation = 0.7;
        // dateAxis.cursorTooltipEnabled = false;

        // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // valueAxis.min = 0;
        // valueAxis.renderer.grid.template.disabled = true;
        // valueAxis.renderer.baseGrid.disabled = true;
        // valueAxis.renderer.labels.template.disabled = true;
        // valueAxis.cursorTooltipEnabled = false;

        // chart.cursor = new am4charts.XYCursor();
        // chart.cursor.lineY.disabled = true;
        // chart.cursor.behavior = "none";

        // let series = chart.series.push(new am4charts.LineSeries());
        // series.tooltipText = "[bold]{date.formatDate()}:[/] [bold]{value} Blocks";
        // series.dataFields.dateX = "date";
        // series.dataFields.valueY = "value";
        // series.tensionX = 0.8;
        // series.strokeWidth = 2;
        // series.stroke = colors;

        // // render data points as bullets
        // let bullet = series.bullets.push(new am4charts.CircleBullet());
        // bullet.circle.opacity = 0;
        // bullet.circle.fill = colors;
        // bullet.circle.propertyFields.opacity = "opacity";
        // bullet.circle.radius = 3;
        let chart = am4core.create("chartdivMiningMonth", am4charts.XYChart);
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
        let arr_Value = arrBlockMonth.sort(function (a, b) {
            var c = new Date(a.value);
            var d = new Date(b.value);
            return d - c;
        })

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.disabled = true;
        categoryAxis.cursorTooltipEnabled = false;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;
        valueAxis.min = 0;
        valueAxis.max = arr_Value[0].value + 50;
        valueAxis.cursorTooltipEnabled = false;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "date";
        series.tooltipText = `[bold]{date.formatDate("MMM yyyy")} : {valueY} Blocks[/]`;
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;
        let bullet = series.bullets.push(new am4charts.LabelBullet);
            bullet.label.text = "{valueY}";
            bullet.label.fill = am4core.color('#8206a1')
            bullet.label.rotation =360;
            bullet.label.truncate = false;
            bullet.label.hideOversized = false;
            bullet.label.y = "-10"

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

    }, [arrBlockMonth]);

    return (
        <div id="chartdivMiningMonth" style={{ width: "105%", height: "360px", marginLeft: "-30px", marginTop:"40px" }}></div>
    );
}

export default ChartMining;
