function myfunc(){
    setInterval(function(){
        alert("Attack successful")
        window.location = "https://www.facebook.com"
    },3000)
}
myfunc()