// My mapboxGL token

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVsaXplY2Fwc3RvbmV0ZWFtIiwiYSI6ImNrZnk2dWpzaDBzejIydm5vM2s2NWcxaDIifQ.DbWM6YOd-hVhlk8Nc6oJPg';

// Initial center point and zoom level
var initialCenterPoint = [-88.203689, 17.499550]
var initialZoom = 13.6

// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map', // put the map in this container
  style: 'mapbox://styles/belizecapstoneteam/ckgy7r1zd03rt19q1qx8e5oh5', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// disable map zoom when using scroll
map.scrollZoom.disable();

// wait for the initial style to Load
map.on('style.load', function() {

  map.on('load', function() {
    map.addSource('kroomanpoly', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [
                -88.20899248123168,
                17.498351245579787
              ],
              [
                -88.20794105529785,
                17.497880556150538
              ],
              [
                -88.20770502090454,
                17.496693594785576
              ],
              [
                -88.20802688598631,
                17.495608950898212
              ],
              [
                -88.20905685424805,
                17.49589546123335
              ],
              [
                -88.20955038070679,
                17.495035928873097
              ],
              [
                -88.21096658706664,
                17.49593639124436
              ],
              [
                -88.21083784103394,
                17.496304760928698
              ],
              [
                -88.21650266647339,
                17.49927215615463
              ],
              [
                -88.21624517440794,
                17.49998841670869
              ],
              [
                -88.21725368499756,
                17.50072513890468
              ],
              [
                -88.21725368499756,
                17.501154892139624
              ],
              [
                -88.21637392044067,
                17.501011641174248
              ],
              [
                -88.21596622467041,
                17.50047956517121
              ],
              [
                -88.21568727493286,
                17.500684209972142
              ],
              [
                -88.21512937545776,
                17.500622816556064
              ],
              [
                -88.21452856063843,
                17.500315849164544
              ],
              [
                -88.21467876434326,
                17.49990655850254
              ],
              [
                -88.21512937545776,
                17.500070274877967
              ],
              [
                -88.21536540985107,
                17.49941540849129
              ],
              [
                -88.21455001831055,
                17.498965186481527
              ],
              [
                -88.21362733840942,
                17.49998841670869
              ],
              [
                -88.21306943893433,
                17.500049810339096
              ],
              [
                -88.21178197860718,
                17.499476802315293
              ],
              [
                -88.21133136749268,
                17.499599589901074
              ],
              [
                -88.21043014526367,
                17.499394943878674
              ],
              [
                -88.21038722991943,
                17.499149368347606
              ],
              [
                -88.20995807647705,
                17.499087974412998
              ],
              [
                -88.20963621139525,
                17.499149368347606
              ],
              [
                -88.20944309234619,
                17.498699145678756
              ],
              [
                -88.20905685424805,
                17.49849449864237
              ]
            ]
          ]
        }
      }
    });

    map.addSource('buildings1', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [
                -88.21918487548827,
                17.50156417998986
              ],
              [
                -88.21703910827637,
                17.501891609606258
              ],
              [
                -88.2168674468994,
                17.503610605411705
              ],
              [
                -88.2150650024414,
                17.50418360039927
              ],
              [
                -88.21497917175293,
                17.503283178893156
              ],
              [
                -88.21334838867188,
                17.502955751784516
              ],
              [
                -88.21403503417969,
                17.50156417998986
              ],
              [
                -88.2121467590332,
                17.500909318986963
              ],
              [
                -88.21197509765624,
                17.501891609606258
              ],
              [
                -88.20605278015135,
                17.500254455624017
              ],
              [
                -88.20605278015135,
                17.49910843906017
              ],
              [
                -88.20467948913574,
                17.498699145678756
              ],
              [
                -88.20459365844727,
                17.49927215615463
              ],
              [
                -88.20236206054688,
                17.498617286891854
              ],
              [
                -88.20201873779297,
                17.497634978573103
              ],
              [
                -88.19961547851562,
                17.496325225889283
              ],
              [
                -88.19927215576172,
                17.500254455624017
              ],
              [
                -88.20176124572752,
                17.500909318986963
              ],
              [
                -88.20158958435059,
                17.502382752924525
              ],
              [
                -88.19944381713866,
                17.501400464960398
              ],
              [
                -88.19867134094238,
                17.5031194654126
              ],
              [
                -88.21257591247559,
                17.509094911868715
              ],
              [
                -88.21566581726074,
                17.507130403216035
              ],
              [
                -88.21901321411133,
                17.506802983041496
              ],
              [
                -88.21918487548827,
                17.50156417998986
              ]
            ]
          ]
        }
      }
    });

    map.addSource('buildings2', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [
                -88.22012901306152,
                17.500172597537702
              ],
              [
                -88.21901321411133,
                17.498289851375542
              ],
              [
                -88.2073402404785,
                17.49206846448821
              ],
              [
                -88.2063102722168,
                17.49313266418325
              ],
              [
                -88.20751190185547,
                17.49403313598254
              ],
              [
                -88.20682525634766,
                17.49493360332137
              ],
              [
                -88.20536613464354,
                17.49419685764865
              ],
              [
                -88.20013046264647,
                17.491413569271945
              ],
              [
                -88.1993579864502,
                17.493623831172172
              ],
              [
                -88.20055961608887,
                17.49386941416898
              ],
              [
                -88.20047378540039,
                17.49468802176225
              ],
              [
                -88.20536613464354,
                17.497471260003785
              ],
              [
                -88.20622444152832,
                17.496488945490906
              ],
              [
                -88.2073402404785,
                17.496980103410987
              ],
              [
                -88.20905685424805,
                17.49526104488411
              ],
              [
                -88.21085929870605,
                17.495015463767366
              ],
              [
                -88.21154594421387,
                17.494442439871335
              ],
              [
                -88.2118034362793,
                17.49378755320691
              ],
              [
                -88.21240425109863,
                17.494524300538508
              ],
              [
                -88.2121467590332,
                17.495015463767366
              ],
              [
                -88.21137428283691,
                17.49640708570853
              ],
              [
                -88.2172966003418,
                17.499354014646553
              ],
              [
                -88.21781158447266,
                17.49845356920744
              ],
              [
                -88.21600914001465,
                17.496898243849813
              ],
              [
                -88.2161808013916,
                17.495015463767366
              ],
              [
                -88.21918487548827,
                17.49706196293531
              ],
              [
                -88.21849822998047,
                17.498126133396152
              ],
              [
                -88.21849822998047,
                17.50066374550242
              ],
              [
                -88.22038650512695,
                17.49771683780246
              ],
              [
                -88.22098731994629,
                17.49853542806808
              ],
              [
                -88.21952819824217,
                17.49992702305754
              ],
              [
                -88.22012901306152,
                17.500172597537702
              ]
            ]
          ]
        }
      }
    });

    map.addSource('buildings3', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [
                -88.22012901306152,
                17.500172597537702
              ],
              [
                -88.21901321411133,
                17.498289851375542
              ],
              [
                -88.2073402404785,
                17.49206846448821
              ],
              [
                -88.2063102722168,
                17.49313266418325
              ],
              [
                -88.20751190185547,
                17.49403313598254
              ],
              [
                -88.20682525634766,
                17.49493360332137
              ],
              [
                -88.20536613464354,
                17.49419685764865
              ],
              [
                -88.20013046264647,
                17.491413569271945
              ],
              [
                -88.1993579864502,
                17.493623831172172
              ],
              [
                -88.20055961608887,
                17.49386941416898
              ],
              [
                -88.20047378540039,
                17.49468802176225
              ],
              [
                -88.20536613464354,
                17.497471260003785
              ],
              [
                -88.20622444152832,
                17.496488945490906
              ],
              [
                -88.2073402404785,
                17.496980103410987
              ],
              [
                -88.20905685424805,
                17.49526104488411
              ],
              [
                -88.21085929870605,
                17.495015463767366
              ],
              [
                -88.21154594421387,
                17.494442439871335
              ],
              [
                -88.2118034362793,
                17.49378755320691
              ],
              [
                -88.21240425109863,
                17.494524300538508
              ],
              [
                -88.2121467590332,
                17.495015463767366
              ],
              [
                -88.21137428283691,
                17.49640708570853
              ],
              [
                -88.2172966003418,
                17.499354014646553
              ],
              [
                -88.21781158447266,
                17.49845356920744
              ],
              [
                -88.21600914001465,
                17.496898243849813
              ],
              [
                -88.2161808013916,
                17.495015463767366
              ],
              [
                -88.21918487548827,
                17.49706196293531
              ],
              [
                -88.21849822998047,
                17.498126133396152
              ],
              [
                -88.21849822998047,
                17.50066374550242
              ],
              [
                -88.22038650512695,
                17.49771683780246
              ],
              [
                -88.22098731994629,
                17.49853542806808
              ],
              [
                -88.21952819824217,
                17.49992702305754
              ],
              [
                -88.22012901306152,
                17.500172597537702
              ]
            ]
          ]
        }
      }
    });


    map.addLayer({
      'id': 'krooman',
      'type': 'fill',
      'source': 'kroomanpoly',
      'layout': {
        'visibility': 'none'
      },
      'paint': {
        'fill-color': '#000000',
        'fill-opacity': 0.5,
        'fill-outline-color': '#2352ff'
      }
    });

    map.addLayer({
      'id': 'mimosa',
      'type': 'fill',
      'source': 'buildings1',
      'layout': {
        'visibility': 'none'
      },
      'paint': {
        'fill-color': '#EFC050',
        'fill-opacity': 0.9,
        'fill-outline-color': '#ffffff'
      }
    });

    map.addLayer({
      'id': 'mimosa2',
      'type': 'fill',
      'source': 'buildings2',
      'layout': {
        'visibility': 'none'
      },
      'paint': {
        'fill-color': '#EFC050',
        'fill-opacity': 0.9,
        'fill-outline-color': '#ffffff'
      }
    });

  });
});

var chapters = {
  'begin': {
    center: [-88.203689, 17.499550],
    zoom: 13.6,
  },

  'informals': {
    duration: 6000,
    center: [-88.218718, 17.497795],
    zoom: 15.45,
    pitch: 0
  },

  'krooman': {
    duration: 6000,
    center: [-88.218718, 17.497795],
    zoom: 15.45,
    pitch: 0
  },

  'buildings': {
    center: [-88.203689, 17.499550],
    zoom: 13.6,
  }
};


// On every scroll event, check which element is on screen
window.onscroll = function() {
  console.log('scroll')
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    console.log(chapterName)
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = 'begin';

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;
  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;

  if (activeChapterName === 'krooman')
    map.setLayoutProperty('krooman', 'visibility', 'visible');
  else map.setLayoutProperty('krooman', 'visibility', 'none');

  if (activeChapterName === 'buildings')
    map.setLayoutProperty('mimosa', 'visibility', 'visible');
  else map.setLayoutProperty('mimosa', 'visibility', 'none');

  if (activeChapterName === 'buildings')
    map.setLayoutProperty('mimosa2', 'visibility', 'visible');
  else map.setLayoutProperty('mimosa2', 'visibility', 'none');

}

//scroller
function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

//floods slider
/**
 * @param  {number} interval (in milliseconds)
 */
function cycleBackgrounds(interval) {
  let index = 0

  const $imageEls = document.querySelectorAll('.container .slide') // Get the images to be cycled.

  setInterval(() => {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0

    // Show the next
    $imageEls[index].classList.add('show')

    // Find the previous.
    const previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;

    // Hide the previous
    $imageEls[previous].classList.remove('show')
  }, interval)
}
document.addEventListener("DOMContentLoaded", function() {
  cycleBackgrounds(2000);
});
