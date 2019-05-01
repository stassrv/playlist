; (function () {
//   const peopleInSpace = {
//     "message": "success",
//     "number": 6,
//     "crew": [
//         { "craft": "ISS", "name": "Oleg Kononenko" },
//         { "craft": "BA", "name": "David Saint-Jacques" },
//         { "craft": "FBI", "name": "Anne McClain" },
//         { "craft": "SBU", "name": "Alexey Ovchinin" },
//         { "craft": "BA", "name": "Nick Hague" },
//         { "craft": "ISS", "name": "Christina Koch" }
//     ]
// };
var playList = [{
  author: "led zeppelin",
  song: "stairway to heaven",
  duration: "2:03"
},
{
  author: "queen",
  song: "bohemian rhapsody",
  duration: "2:30"
},
{
  author: "lynyrd skynyrd",
  song: "free bird",
  duration: "1:56"
},
{
  author: "deep purple",
  song: "smoke on the water",
  duration: "3:03"
},
{
  author: "jimi hendrix",
  song: "all along the watchtower",
  duration: "2:53"
},
{
  author: "AC/DC",
  song: "back in black",
  duration: "2:43"
},
{
  author: "queen",
  song: "we will rock you",
  duration: "2:13"			
},
{
  author: "metallica",
  song: "enter sandman",
  duration: "3:03"			
}
];

  let playlistList = document.querySelector('.ba-playlist__list');

  let liTmpl = document.getElementById('li-tmpl');
  liTmpl = liTmpl.innerHTML;

  playlistList.innerHTML = '';
  
  for (let index = 0; index < playList.length; index++) {
    let crewmanHtml = liTmpl
    .replace(/{{author}}/ig, playList[index].author)
    .replace(/{{song}}/ig, playList[index].song)
    .replace(/{{duration}}/ig, playList[index].duration)
    ;
    playlistList.innerHTML += crewmanHtml;
  }

})();