/*global define, describe, before, after, beforeEach, afterEach, it, expect */
define([
    'jscore/core',
    'project/widgets/messagebox/MessageBox'
], function (core, MessageBox){
    'use strict';
        var app,
            mb;

        beforeEach(function(done) {

            // Create a generic app with View and root DOM element.
            var TestApp = core.App.extend({

                View: core.View.extend({
                    getTemplate: function() {
                        return "<div></div>";
                    }
                }),

                onStart: function() {
                    this.messagebox = new MessageBox();
                    this.messagebox.attachTo(this.getElement());
                    mb = this.messagebox;
                }
            });
            app = new TestApp();
            app.start(document.getElementById('bitContainer'));
            done();
        });

        afterEach(function() {
            app.stop();
        });

    describe('MessageBox functionality ', function () {

        it('Send button is disabled by default', function () {

           var sendBtn = document.querySelector(".eaRest-wMessageBox-sendBtn");
           expect(sendBtn.hasAttribute("disabled")).to.be.true;
        });

     it('Enable button function enables send button when text box not empty', function () {
              var sendBtn = document.querySelector(".eaRest-wMessageBox-sendBtn");
              var textInput = document.querySelector(".eaRest-wMessageBox-teamArea");
              textInput.value = 'hello';
             // mb.enableButton();
           expect(sendBtn("disabled")).to.be.false;
        });


    });
});
