/*global define*/
define([
    'jscore/core',
    'tablelib/Table',
    'tablelib/plugins/ExpandableRows',
    'tablelib/plugins/Selection',
    'tablelib/plugins/ResizableHeader',
    './custom-row-content/CustomRowContent',
    './UserTableView',
    'i18n!project/dictionary.json',
    '../../services/TeamService',
    'container/api'
], function (core, Table, ExpandableRows, Selection, ResizableHeader, CustomRowContent, View, dictionary, teamService, container) {
    'use strict';


    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            var tableOptions = this.buildTableOptions();
            this.tableW = new Table(tableOptions);
            this.tableW.attachTo(this.getElement());

            teamService.fetchTeams(this.updateTable.bind(this));

            container.getEventBus().subscribe("usertable:data", function (data) {
                container.getEventBus().publish("flyout:hide");
                this.tableW.addRow(data)
            }.bind(this));
        },

        buildTableOptions: function () {
            return {
                data: [

                ],
                columns: [
                    {title: dictionary.get("table.teamName"), resizable: true, attribute: 'teamName'},
                    {title: dictionary.get("table.teamProject"), resizable: true, attribute: 'teamProject'},
                    {title: dictionary.get("table.teamArea"), resizable: true, attribute: 'teamArea'}
                ],
                plugins: [
                    new ExpandableRows({
                        content: CustomRowContent,
                        args: {
                            keyToLabel: [
                               {key: 'teamMember1', label: dictionary.get('table.teamMember1'), attribute: 'teamMember1'},
                               {key: 'teamMember2', label: dictionary.get('table.teamMember2'), attribute: 'teamMember2'},
                            ]
                        }
                    }),
                    new ResizableHeader(),
                    new Selection({
                        checkboxes: true,
                        selectableRows: true,
                        multiselect: true,
                        bind: true
                    })
                ],
                modifiers: [
                    {name: 'expandableStriped'} // Applying a different table style
                ]
            };
        },

        updateTable: function (data) {
            this.tableW.setData(data.teams);
        }
    });

});
