function fun(){
    var email=document.getElementById('mail').value
    var password=document.getElementById('password').value
    if(email==='sankey901@solutions.com' && password==='mindset'){
        var err= document.getElementById('err')
        err.style.display='none'
        window.open('Welcome.html','_blank')
    }
    else{
        var err= document.getElementById('err')
        err.style.display='block'
        err.style.backgroundColor='red'
        err.style.color='white'
    }
}