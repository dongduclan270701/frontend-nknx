import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Day, prevDayOfWeek, nextDayOfWeek } from '@progress/kendo-date-math';
am4core.useTheme(am4themes_animated);


const Chart = (props) => {
    const { getAddress } = props
    useLayoutEffect(() => {
        const prevDate = prevDayOfWeek(new Date(), Day.Sunday)
        // console.log(new Date(prevDate))
        const prevDate_2 = prevDayOfWeek(new Date(prevDate.setDate(prevDate.getDate() -1 )), Day.Sunday)
        const prevDate_3 = prevDayOfWeek(new Date(prevDate_2.setDate(prevDate_2.getDate() -1 )), Day.Sunday)
        let data = [
            { date: prevDate.toISOString().split('T')[0], value1: 1 * 0.00000001 },
            { date: prevDate_2.toISOString().split('T')[0], value1: 2 * 0.00000001 },
            // { date: prevDate_3.toISOString().split('T')[0], value1: 3 * 0.00000001 },
        ]
        let today = ""
        let countBalance = 0

        for (let index = 0; index < getAddress.length; index++) {
            // data.push({date: getAddress[index].last_transaction, value1: getAddress[index].balance * 0.00000001})
            const boolenDate = new Date().getDate() <= new Date(getAddress[index].last_transaction).getDate() && new Date().getMonth() === new Date(getAddress[index].last_transaction).getMonth()
            if (boolenDate === true) {
                today = getAddress[index].last_transaction
            }
            countBalance += getAddress[index].balance * 0.00000001
        }
        data.push({ date: today, value1: countBalance })

        let chart = am4core.create("ChartWeek", am4charts.XYChart);
        chart.data = data
            // chart.data = data

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
        series.dataFields.valueY = "value1";
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
        <div id="ChartWeek" style={{ width: "100%", height: "200px", margin: "0 auto" }}></div>
    );
}

export default Chart;
