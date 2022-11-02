import React, {useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "Assets/scss/ChartNodes.scss"
am4core.useTheme(am4themes_animated);

const Chart = (props) => {
    const { PERSISTFINISHED, SYNC_STARTED, WAIT_FOR_SYNCING, PRUNING_DB, GENERATE_ID, SYNC_FINISHED, OFFLINE,INSTALLED,arrValueDistinceState } = props
    const style = {
 
        // Adding media query..
        '@media (max-width: 960px)': {
          height: '500px',
        }}
    useLayoutEffect(() => {
        let data = []

        let chart = am4core.create("chartdiv3", am4charts.PieChart);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(30);

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 0;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template
            // change the cursor on hover to make it apparent the object can be interacted with
            .cursorOverStyle = [
                {
                    "property": "cursor",
                    "value": "pointer"
                }
            ];

        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 3;
        pieSeries.labels.template.padding(0, 0, 0, 0);

        pieSeries.ticks.template.disabled = true;

        // Create a base filter effect (as if it's not there) for the hover to return to
        let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        // Add a legend
        chart.legend = new am4charts.Legend();

        chart.data = data
        for (let index = 0; index < arrValueDistinceState.length; index++) {
            data.push({country: arrValueDistinceState[index].state, litres:arrValueDistinceState[index].value})
        }
        // console.log(data)

    }, [PERSISTFINISHED, SYNC_STARTED, WAIT_FOR_SYNCING, PRUNING_DB, GENERATE_ID, SYNC_FINISHED, OFFLINE, arrValueDistinceState]);

    return (
        <div id="chartdiv3"></div>
    );
}

export default Chart;
