const alert = require('../alert/alert.js')
const firebase = require('firebase')
const $ = require('jquery')

module.exports = {
    initAuth: function (config) {
        firebase.initializeApp(config)
    },

    logIn: function (email, pass) {
        firebase.auth().signInWithEmailAndPassword(email, pass).then(function (response) {
            window.location.href = '/home.html'
        }, function (err) {
            alert.appendAlert('warning', err.message)
        })
    },

    logOut: function () {
        firebase.auth().signOut()
        .then(function () {
            console.log('The user signed out')
        }, function (err) {
            console.warn(err.message)
        })
    },

    createUser: function (email, pass) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(function (user) {
                console.log('Success: ', user)
            }, function (err) {
                alert.appendAlert('warning', err.message)
            })
    },

    detectUser: function () {
        let that = this
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                that.handleUser(user)
            } else {
                
            }
        })
    },

    handleUser: function (user) {
        let path = window.location.pathname
        if (path === '/' || path === '/index.html') {
            window.location.href = '/home.html'
        }

        if (!user.emailVerified) {
            alert.appendAlert('warning', 'Please take a moment to verify your email address.')
        }

        $('#email-label').text(user.email)
    }
}

