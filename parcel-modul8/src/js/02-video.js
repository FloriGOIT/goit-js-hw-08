
import Player from '@vimeo/player';


const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
let key = "videoplayer-current-time";

player.on('timeupdate', _.throttle(time => localStorage.setItem(key, time.seconds), 0));

const resumeTime = localStorage.getItem(key);

if (resumeTime != null) {player.setCurrentTime(resumeTime);}


// Ex 2 l-am copiat de la un coleg, l-am inteles...
// Exercitile cu librarii mi se par PREA avansate pentru lucrul cu ele "la prima mana" cum e in cazul acesta.
// Fara sa fi facut la clasa macar un exemplu sau doua pe acea librarie e greu de pornit, dar finalizat.
// Nu pot sa-ti descriu nivelul de frustrare si cat m-a impovarat, precum vezi, abia iti trimit tema 8.
// Cu acestea fiind zise: nu mi se pare deloc ok abordarea; 
// Varianta mea mai inalta va transmite totusi: Multumesc!..din diverse motive (prea mult de scris)