const firebase = require('firebase')

module.exports = {
    getProfileData: function () {
        let thisuser = null
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('User: ', user)
                thisuser = user
            }
        })

        return thisuser
    },

    updateProfileData: function (data, onsuccess) {
        var user = firebase.auth().currentUser;

        if (typeof user !== null) {
            user.updateProfile(data).then(function (response) {
                onsuccess(data)
            }, function (err) {
                onfail(data)
            })
            
        }
    },

    updateProfileView: function (data) {
        $('#field-username').text(data.displayName)
    }
}