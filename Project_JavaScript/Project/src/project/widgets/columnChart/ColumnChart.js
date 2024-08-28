/*global define*/
define([
    'jscore/core',
    'chartlib/charts/Column'
], function (core, Column) {
    'use strict';

    return core.Widget.extend({

        id: 'ColumnChart',

        init: function (options) {
            this.chartName = 'groupedColumn';

        },
        onViewReady: function () {
            this.getElement().setStyle('height', '300px');
            this.initChart(this.chartName);
        },
        initChart: function (chartName) {
            var chart,
                multi = false;

                chart = new Column({
                    element: this.getElement(),
                    data: createMultiArray(),
                    plotOptions: {
                        column: {
                            grouped: true
                        }
                    },
                    legend: true
                });


            if (chart !== undefined) {
                this.interval = core.Window.setInterval(function () {

                    var data = multi ? createMultiArray() : createSingleArray();
                    chart.update(data);

                }, 4000);
            }
        },
        onDestroy: function () {
            if (this.interval !== undefined) {
                this.interval.stop();
            }
        }
    });

    //---------------------------------------------------------------

    function createMultiArray(entries, count) {
        var labelsArr = ['B-Team', 'ATeam', 'Indespicable Me', 'Ajeya', 'Totoro'];

        labelsArr = entries === undefined ? labelsArr : labelsArr.slice(0, entries);

        return labelsArr.map(function (label) {
            return {
                label: label,
                data: [{label: "Bugs", value: 73}, {label: "No. Of Commits", value: 58}, {label: "Avg Story Points", value: 58}, {label: "No of tests", value: 78}]
            };
        });
    }

    //---------------------------------------------------------------

});