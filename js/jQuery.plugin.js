/**
 * Created by Vhitox
 * User: victor
 * Date: 11/23/16
 * Time: 12:25 PM
 * To change this template use File | Settings | File Templates.
 */
jQuery.fn.maxCaracter = function (options) {
    var settings = $.extend({
        limit: 500,
        startCounter: 0,
        textMax: "Max",
        textCaracter: "Counter",
        titleColor: "#1578AD",
        textColor: "#737577",
        textAlign: "right",
        width: this.width(),
        marginLeft: this.css("margin-left")
    }, options);
    this.prop("maxLength", settings.limit);
    this.after("<div id='counterResumen' class='textAreaCounter' style='text-align:" + settings.textAlign + "; padding-right: 20px !important; font-size: 12px; color: #CC6666; font-weight: bold; width:" + settings.width + "px; margin-left:" + settings.marginLeft + "; '><span style='color:" + settings.titleColor + "; display: inline !important;'>" + settings.textMax + "</span>:" + "<span style='color:" + settings.textColor + "; display: inline !important;'>" + settings.limit + "</span> " + "<span style='color:" + settings.titleColor + "; display: inline !important;'>" + settings.textCaracter + "</span>: " + "<span style='color:" + settings.textColor + "; display: inline !important;'>" + $(this).val().length + "</span></div>");
    this.keyup(function e() {
        $(this).next(".textAreaCounter").html("<span style='color:" + settings.titleColor + "; display: inline !important;'>" + settings.textMax + "</span>:" + "<span style='color:" + settings.textColor + "; display: inline !important;'>" + settings.limit + "</span> " + "<span style='color:" + settings.titleColor + "; display: inline !important;'>" + settings.textCaracter + "</span>: " + "<span style='color:" + settings.textColor + "; display: inline !important;'>" + $(this).val().length + "</span>");
    });
}