// My mapboxGL token

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVsaXplY2Fwc3RvbmV0ZWFtIiwiYSI6ImNrZnk2dGlxbDF4bG0ycnMzbjE0bW93d2EifQ.kGTmcCz-Kbts-Do75nSk0Q';

// Initial center point and zoom level
var initialCenterPoint = [-88.203689, 17.499550]
var initialZoom = 13.6

// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map', // put the map in this container
  style: 'mapbox://styles/belizecapstoneteam/ckhb6bf8p09g619mufeji7wpv', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// disable map zoom when using scroll
map.scrollZoom.disable();

// wait for the initial style to Load
map.on('style.load', function() {

map.addSource('buildings', {
  type: 'geojson',
  data: './data/buildings.geojson',
});

map.addLayer({
  'id': 'mimosa',
  'type': 'fill',
  'source': 'buildings',
  'layout': {
    'visibility': 'none'
  },
  'paint': {
    'fill-color': '#EFC050',
    'fill-opacity': .8,
    'fill-outline-color': '#EFC050'
  }
});

map.addSource('buildings-red', {
  type: 'geojson',
  data: './data/buildings-red.geojson',
});


map.addLayer({
  'id': 'red',
  'type': 'fill',
  'source': 'buildings-red',
  'layout': {
    'visibility': 'none'
  },
  'paint': {
    'fill-color': '#f60040',
    'fill-opacity': .6,
    'fill-outline-color': '#f60040'
  }
});

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


map.addSource('crime', {
  type: 'geojson',
  data: './data/crime.geojson',
});


map.addLayer({
  'id': 'crime',
  'type': 'fill',
  'source': 'crime',
  'layout': {
    'visibility': 'none'
  },
  'paint': {
    'fill-color': '#f60040',
    'fill-opacity': .8,
    'fill-outline-color': '#000000'
  }
});

map.addSource('ladyville', {
  type: 'geojson',
  data: './data/ladyville.geojson',
});


map.addLayer({
  'id': 'ladyville',
  'type': 'fill',
  'source': 'ladyville',
  'layout': {
    'visibility': 'none'
  },
  'paint': {
    'fill-color': '#f600f5',
    'fill-opacity': .4,
    'fill-outline-color': '#000000'
  }
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
    zoom: 14.45,
    pitch: 0
  },

  'buildings': {
    center: [-88.203689, 17.499550],
    zoom: 13.6,
  },

  'krooman': {
    duration: 6000,
    center: [-88.218718, 17.497795],
    zoom: 14.45,
    pitch: 0
  },

  'sprawlinfo': {
    center: [-88.203689, 17.499550],
    zoom: 12.75,
    essential: true,
  },

  'lady': {
    center: [-88.333221, 17.555131],
    zoom: 12.75,
   essential: true,
  },

  'vibchap': {
    center: [-88.196192, 17.491884],
    zoom: 14.45,
  },

  'crimechap': {
    center: [-88.196192, 17.491884],
    zoom: 14.45,
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
    map.setLayoutProperty('red', 'visibility', 'visible');
  else map.setLayoutProperty('red', 'visibility', 'none');

  if (activeChapterName === 'crimechap')
    map.setLayoutProperty('crime', 'visibility', 'visible');
  else map.setLayoutProperty('crime', 'visibility', 'none');

  if (activeChapterName === 'lady')
    map.setLayoutProperty('ladyville', 'visibility', 'visible');
  else map.setLayoutProperty('ladyville', 'visibility', 'none');


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
