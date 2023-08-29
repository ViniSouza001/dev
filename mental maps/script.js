
console.log(ML)

ML.authorize({
    onSuccess: function () { },
    onError: function () { },
    persist: true,
    scope: 'userinfo.email userinfo.profile mindmeister'

})