import React, { useRef, useLayoutEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


const Chart = (props) => {
    const { getAddress, getBalanceHistory } = props
    // console.log(getBalanceHistory)
    console.log(getAddress)
    useLayoutEffect(() => {
        setTimeout(() => {
            let data = [
            ]
            let data_2 = []
            let data_3 = []
            let today = ""
            let countBalanceDay = 0
            let countBalance = 0
            //lay balance cua 7 ngay gan day cua 3 vi
            for (let index = 0; index < getBalanceHistory.length; index++) {
                const boolenDate = 1 <= new Date().getDate() - new Date(getBalanceHistory[index].attributes.createdAt).getDate() <= 7
                && new Date().getDate() - new Date(getBalanceHistory[index].attributes.createdAt).getDate() !== 0
                const boolenMonth = new Date().getMonth() === new Date(getBalanceHistory[index].attributes.createdAt).getMonth()
                if (boolenDate === true && boolenMonth === true) {
                    data.push({date: (new Date(getBalanceHistory[index].attributes.createdAt).toISOString().split('T')[0])})
                    data_2.push({date: (new Date(getBalanceHistory[index].attributes.createdAt).toISOString().split('T')[0]),value:getBalanceHistory[index].attributes.balance})
                }
            }
            //loc 7 ngay
            const uniqBy = (data, key) => {
                let seen = new Set();
                return data.filter(item => {
                    let k = key(item);
                    return seen.has(k) ? false : seen.add(k);
                });
            }
            const b = uniqBy(data, JSON.stringify)
            for (let index = 0; index < b.length; index++) {
                for (let j = 0; j < data_2.length; j++) {
                    if (b[index].date === data_2[j].date) {
                        countBalanceDay += data_2[j].value
                    }
                }
                data_3.push({date: b[index].date,value:countBalanceDay})
                countBalanceDay=0
            }
            //tinh tong balace hnay
            for (let index = 0; index < getAddress.length; index++) {
                // data.push({date: getAddress[index].last_transaction, value: getAddress[index].balance * 0.00000001})
                const boolenDate = new Date().getDate() <= new Date(getAddress[index].last_transaction).getDate() && new Date().getMonth() === new Date(getAddress[index].last_transaction).getMonth()
                if (boolenDate === true) {
                    today = getAddress[index].last_transaction
                }
                countBalance+= getAddress[index].balance * 0.00000001
            }
            data_3.push({date: today, value: countBalance})
            let chart = am4core.create("chartdiv11", am4charts.XYChart);
            chart.data = data_3
            // chart.data = data
            console.log(data_3)

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
        
        valueAxis.renderer.minWidth = 20;
        valueAxis.min = 0;
        valueAxis.max = data_3[0].value+ 300;
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
        series.columns.template.column.fillOpacity = 1;
        let bullet = series.bullets.push(new am4charts.LabelBullet);
            bullet.label.text = "{valueY}";
            bullet.label.y = "-10"
            bullet.label.fill = am4core.color('#8206a1')
            bullet.label.rotation =360;
            bullet.label.truncate = false;
            bullet.label.hideOversized = false;

        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })


        // let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // paretoValueAxis.renderer.opposite = true;
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
        }, 0);

    }, [getAddress,getBalanceHistory]);

    return (
        <div id="chartdiv11" style={{ width: "100%", height: "200px", margin: "0 auto" }}></div>
    );
}

export default Chart;
