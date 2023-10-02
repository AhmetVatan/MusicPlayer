let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let backIcon = document.getElementById("backIcon");
let nextIcon =document.getElementById("nextIcon");


song.addEventListener("onloadedmetadata",function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

})

controlIcon.addEventListener("click",function(){
    playPouse();
})



function playPouse(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}



progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}

backIcon.addEventListener("click",function(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        song.currentTime=0;
        progress.value=song.currentTime;
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.currentTime=0;
        progress.value=song.currentTime;
    }

})

nextIcon.addEventListener("click",function(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        song.currentTime=100;
        progress.value=song.currentTime;
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.currentTime=100;
        progress.value=song.currentTime;

    }

})

// Düzeltilmesi Gereken Yapılar
// iconların dışına tıklandığında(buton içi fakat iconu kapsamayan yerler) fonksiyonlar çalışmıyor çünkü tamamlamadım.
// next iconuna tıklandığında progressin sonuna geliyor ve şarkı duruyor. Fakat şarkıyı tekrar çalıştırdığımızda progress 100 olmasına rağmen şarkı çalmaya devam ediyor.


