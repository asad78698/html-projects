var AbuttonElement = document.getElementById('Abtn')
var BbuttonElement = document.getElementById('Bbtn')
var CbuttonElement = document.getElementById('Cbtn')
var DbuttonElement = document.getElementById('Dbtn')
var EbuttonElement = document.getElementById('Ebtn')
var FbuttonElement = document.getElementById('Fbtn')
var GbuttonElement = document.getElementById('Gbtn')
var HbuttonElement = document.getElementById('Hbtn')
var IbuttonElement = document.getElementById('Ibtn')

var Aaudio = document.getElementById('AudioA')
var Baudio = document.getElementById('AudioB')
var Caudio = document.getElementById('AudioC')
var Daudio = document.getElementById('AudioD')
var Eaudio = document.getElementById('AudioE')
var Faudio = document.getElementById('AudioF')
var Gaudio = document.getElementById('AudioG')
var Haudio = document.getElementById('AudioH')
var Iaudio = document.getElementById('AudioI')



AbuttonElement.addEventListener('click', function(){

    Aaudio.currentTime = 0;
    Aaudio.play();
})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'a' || keynote === 'A'){
        Aaudio.currentTime = 0;
        Aaudio.play();
    }
    
   })



BbuttonElement.addEventListener('click', function(){

    Baudio.currentTime = 0;
    Baudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'B' || keynote === 'b'){
        Baudio.currentTime = 0;
        Baudio.play();
    }
    
   })


CbuttonElement.addEventListener('click', function(){

    Caudio.currentTime = 0;
    Caudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'C' || keynote === 'c'){
        Caudio.currentTime = 0;
        Caudio.play();
    }
    
   })


DbuttonElement.addEventListener('click', function(){

    Daudio.currentTime = 0;
    Daudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'D' || keynote === 'd'){
        Daudio.currentTime = 0;
        Daudio.play();
    }
    
   })


EbuttonElement.addEventListener('click', function(){

    Eaudio.currentTime = 0;
    Eaudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'E' || keynote === 'e'){
        Eaudio.currentTime = 0;
        Eaudio.play();
    }
    
   })


FbuttonElement.addEventListener('click', function(){

    Faudio.currentTime = 0;
    Faudio.play();

})


document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'F' || keynote === 'f'){
        Faudio.currentTime = 0;
        Faudio.play();
    }
    
   })


GbuttonElement.addEventListener('click', function(){

    Gaudio.currentTime = 0;
    Gaudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'G' || keynote === 'g'){
        Gaudio.currentTime = 0;
        Gaudio.play();
    }
    
   })


HbuttonElement.addEventListener('click', function(){

    Haudio.currentTime = 0;
    Haudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'H' || keynote === 'h'){
        Haudio.currentTime = 0;
        Haudio.play();
    }
    
   })

IbuttonElement.addEventListener('click', function(){

    Iaudio.currentTime = 0;
    Iaudio.play();

})

document.body.addEventListener('keypress', function(e){
    var keynote = e.key;

    if(keynote === 'I' || keynote === 'i'){
        Iaudio.currentTime = 0;
        Iaudio.play();
    }
    
   })


