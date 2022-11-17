// Add js here.
const play_button = document.querySelector('#play');
const pause_button = document.querySelector('#pause');
const slow_button = document.querySelector('#slower');
const faster_button = document.querySelector('#faster');
const skip_button = document.querySelector('#skip');
const video_player = document.querySelector('#videoplayer');
const mute_button = document.querySelector('#mute');
const vol_slider = document.querySelector('#slider');
const vol = document.querySelector('#volume');


window.addEventListener('load', load);
play_button.addEventListener('click', play);
pause_button.addEventListener('click', pause);
slow_button.addEventListener('click', slow);
faster_button.addEventListener('click', fast);
skip_button.addEventListener('click', skip);
mute_button.addEventListener('click', quiet);
vol_slider.addEventListener('change', change_volume);


function load(){
    video_player.load()
    video_player.autoplay = false;
    video_player.loop = false;

}

function play(){
    video_player.play()
}

function pause(){
    video_player.pause()
}

function slow(){
    if (video_player.playbackRate == 2){
        video_player.playbackRate = 1
    }
    else if (video_player.playbackRate == 1)
    {video_player.playbackRate = 0.5}

    else if (video_player.playbackRate == 0.5){
        window.alert("Video is at Slowest Speed!")
    }




}

function fast(){
    if (video_player.playbackRate == 2){
        window.alert("Video is at Fastest Speed!")
    }
    else if (video_player.playbackRate == 1)
    {video_player.playbackRate = 2}

    else if (video_player.playbackRate == 0.5)
    {video_player.playbackRate = 1}
}

function skip(){
    video_player.currentTime += 15;
    if (video_player.currentTime >= video_player.duration){
        video_player.currentTime = 0;
    }
}
        
function quiet(){
    if (video_player.muted == true)
    {video_player.muted = false;
    mute_button.innerHTML = 'mute';
}
    else if (video_player.muted == false)
    {
    video_player.muted = true;
    mute_button.innerHTML = 'unmute';

    }

}

function change_volume(){
    video_player.volume = vol_slider.value/100;
    vol.innerHTML = vol_slider.value + '%';
    console.log(video_player.volume)

}





