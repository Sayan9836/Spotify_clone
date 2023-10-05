console.log("Welcome to spotify")

// audioElement.play();
let songindex=0;
let audioElement=new Audio('spotify/songs/1.mp3')
let masterPlay=document.getElementById('masterplay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "spotify/songs/1.mp3", coverPath: "spotify/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "spotify/songs/2.mp3", coverPath: "spotify/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "spotify/songs/3.mp3", coverPath: "spotify/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "spotify/songs/4.mp3", coverPath: "spotify/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "spotify/songs/5.mp3", coverPath: "spotify/covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "spotify/songs/2.mp3", coverPath: "spotify/covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "spotify/songs/2.mp3", coverPath: "spotify/covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "spotify/songs/2.mp3", coverPath: "spotify/covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "spotify/songs/2.mp3", coverPath: "spotify/covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "spotify/songs/4.mp3", coverPath: "spotify/covers/10.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        gif.style.opacity=1
        masterSongName.innerHTML=songs[songindex].songName
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause()
        gif.style.opacity=0
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)* 100)
myProgressBar.value=progress
})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays()
songindex=parseInt(e.target.id)
audioElement.src=`spotify/songs/${songindex+1}.mp3`
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.currentTime=0
masterSongName.innerHTML=songs[songindex].songName
audioElement.play()
gif.style.opacity=1
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})
})

const makeAllPlays=()=>{
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
 })
}
document.getElementById('prev').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=9
    }
    songindex=songindex-1
    audioElement.src=`spotify/songs/${songindex}.mp3`
    audioElement.currentTime=0
    masterSongName.innerHTML=songs[songindex].songName
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0
    }
    songindex=songindex+1
    audioElement.src=`spotify/songs/${songindex}.mp3`
    audioElement.currentTime=0
    masterSongName.innerHTML=songs[songindex].songName
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

