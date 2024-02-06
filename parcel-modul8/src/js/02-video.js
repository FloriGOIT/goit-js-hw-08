
import Player from '@vimeo/player';


const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(time => localStorage.setItem("key", time.seconds), 0));

const resumeTime = localStorage.getItem("key");

if (resumeTime != null) {player.setCurrentTime(resumeTime);}