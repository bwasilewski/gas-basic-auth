const $ = require('jQuery');

module.exports = {
    target: $('#alert-wrap-global'),
    timerduration: 10*1000, // 10 seconds
    appendAlert: function (type, msg) {
        this.target.append('<div class="alert alert-' + type + '">' + msg + '</div>')
    },
    clearAlerts: function () {
        this.target.html('')
    },
    replaceAlertsWith: function (type, msg) {
        this.clearAlerts()
        this.appendAlert(type, msg)
    },
    startAlertTimer: function () {
        let that = this
        window.setTimeout(function () {
            that.clearAlerts()
        }, this.timerduration)
    }
}