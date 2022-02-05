


let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');

let myprogressbar=document.getElementById('progressbar');


let songs={
    songName:"1",filepath: "1.mp3",coverPath:"Loseyoutoloveme.jpg",
    songName:"1",filepath: "2.mp3",coverPath:"cigrattesafter.jfif",
    songName:"1",filepath: "3.mp3",coverPath:"friends1.jpg",
    songName:"1",filepath: "4.mp3",coverPath:"coutingstars.jfif",
    songName:"1",filepath: "5.mp3",coverPath:"2002.jpg",
    songName:"1",filepath: "6.mp3",coverPath:"treatyoubetter.jpg",
    songName:"1",filepath: "7.mp3",coverPath:"believer.jpg",
    songName:"1",filepath: "8.mp3",coverPath:"perfect.jfif",
    songName:"1",filepath: "9.mp3",coverPath:"umbrealla.jfif",
    songName:"1",filepath: "10.mp3",coverPath:"holdon.jpg",
}

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        makeAllPlays();
    }
})


audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=(audioElement.currentTime/audioElement.duration)*100;
    myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    });
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})