define([
    'jscore/core',
    './MessageBoxView',
    '../teamtable/UserTable',
    'layouts/Form',
    'container/api'
], function (core, View, UserTable, Form, container) {


    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            this.view.disableSendButton();
            this.view.addSendActionEventHandler(function(){
                var msg = this.view.getTeamName().getValue();
                var msg1 = this.view.getTeamProject().getValue();
                var msg2 = this.view.getTeamArea().getValue();

                if(msg === ''){
                    this.view.disableSendButton();
                }
                else {
                    this.view.enableSendButton();
                }
            }.bind(this));
            this.view.getButton().addEventHandler('click', this.sendFormData, this);
        },

        sendFormData: function () {

           var object = {};

            var messageInputElt = this.view.getTeamName();
            object["teamName"] = messageInputElt.getValue();

            var messageInputElt1 = this.view.getTeamProject();
            object["teamProject"] = messageInputElt1.getValue();

            var messageInputElt2 = this.view.getTeamArea();
            object["teamArea"] = messageInputElt2.getValue();



            messageInputElt.setValue('');
            messageInputElt1.setValue('');
            messageInputElt2.setValue('');

            var data1 = JSON.parse(JSON.stringify(object));
            container.getEventBus().publish('usertable:data', data1);
        }
    });
});