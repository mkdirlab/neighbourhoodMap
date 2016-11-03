// -----------------------------------------------------------------------------
//                                                                    PlacesData

// serve placesData as array of objects instead of from a server
var placesData = [
    {
        name:         'Coffee Nerd',
        category:     'Café',
        description:  'Lovely café with the best coffee in town. Always the ' +
                      'perfect mix between a young vibrant and chillout ' +
                      'atmosphere. Perfect for sitting outside at a sunny day.',
        location:     { lat: 49.407522, lng: 8.693017 }
    },
    {
        name:         'Ginsburg',
        category:     'Bar / Club',
        description:  'Chillout House. Beautiful People. Great location and ' +
                      'a cold Vodka Soda. Everything you need for a saturday ' +
                      'night out.',
        location:     { lat: 49.407789, lng: 8.694783 }
    },
    {
        name:         'Soban',
        category:     'Restaurant',
        description:  'Small, hidden and inconspicuous. The best and most ' +
                      'authentic korean food in the region. The Bibimbap ' +
                      'will "Wow" you. Always packed, better reserve a table.',
        location:     { lat: 49.411383, lng: 8.711636 }
    },
    {
        name:         "Mahmoud's",
        category:     'Restaurant',
        description:  'This small & cozy place, situatied in a small side ' +
                      'street in the old town, offers the best Falafel and lentil soup in town.',
        location:     { lat: 49.41142, lng: 8.707756 }
    },
    {
        name:         'Schloß Heidelberg',
        category:     'Castle',
        description:  'Up up, the hill you discover this majestic castle. ' +
                      'Enjoy a stunning view over Heidelberg.',
        location:     { lat: 49.41062, lng: 8.715309 }
    },
    {
        name:         'P11 Café Bar',
        category:     'Café / Bar',
        description:  'Wonderful café which turns to a bar at night. ' +
                      'Perfect to sit outside at a warm summer evening.',
        location:     { lat: 49.404899, lng: 8.684883 }
    },
    {
        name:         "Mildner's",
        category:     'Café',
        description:  'Small café in Heidelberg Bergheim. ' +
                      'Always packed with students. Cozy atmosphere.',
        location:     { lat: 49.407745, lng: 8.68493 }
    },
    {
        name:         'urban kitchen',
        category:     'Restaurant',
        description:  'Bio, healhy and super delicious. ' +
                      'Great Lunch buffet. Great to sit outside in summer.',
        location:     { lat: 49.407818, lng: 8.688476 }
    },
    {
        name:         'Destille',
        category:     'Bar',
        description:  'Small bar with lots of students. ' +
                      'Down to earth, always packed and famous for their meters of snaps.',
        location:     { lat: 49.4121, lng: 8.70746 }
    },
    {
        name:         'Tangente',
        category:     'Club',
        description:  'Small club in the old town. Best to go there after 1am. when ' +
                      'the whole club is dancing. Flirty atmosphere.',
        location:     { lat: 49.410423, lng: 8.708697 }
    },
    {
        name:         "Café Rossi",
        category:     'Café',
        description:  'Classic, majestic and great to site outside all year long.' +
                      'Famous for their cakes.',
        location:     { lat: 49.4085, lng: 8.692102 }
    },
    {
        name:         'Istanbul',
        category:     'Restaurant',
        description:  'The best Döner in town. No more words needed.',
        location:     { lat: 49.408869, lng: 8.696714 }
    },
    {
        name:         'Same Same',
        category:     'Restaurant',
        description:  'Small sushi place in the always busy Steingasse. Close to Alte Brücke. ' +
                      'If you love sushi, you will love Same Same.',
        location:     { lat:  49.41291, lng: 8.70977 }
    },
];


// -----------------------------------------------------------------------------
//                                                                       MapData

var map;

// set up map parameters
var mapDiv = document.getElementById('map');
var mapOptions = {
    center: {lat: 49.410469, lng: 8.692757},
    zoom: 16,
    styles: mapStyles,
    mapTypeControl: false
};

// set up map styles ( from: https://snazzymaps.com/style/134/light-dream )
var mapStyles = [
    {
        "featureType":"landscape",
        "stylers":
            [
                {"hue":"#FFBB00"},
                {"saturation":43.400000000000006},
                {"lightness":37.599999999999994},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.highway",
        "stylers":
            [
                {"hue":"#FFC200"},
                {"saturation":-61.8},
                {"lightness":45.599999999999994},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.arterial",
        "stylers":
            [
                {"hue":"#FF0300"},
                {"saturation":-100},
                {"lightness":51.19999999999999},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.local",
        "stylers":
            [
                {"hue":"#FF0300"},
                {"saturation":-100},
                {"lightness":52},
                {"gamma":1}
            ]
    },
    {
        "featureType":"water",
        "stylers":
            [
                {"hue":"#0078FF"},
                {"saturation":-13.200000000000003},
                {"lightness":2.4000000000000057},
                {"gamma":1}
            ]
    },
    {
        "featureType":"poi",
        "stylers":
            [
                {"hue":"#00FF6A"},
                {"saturation":-1.0989010989011234},
                {"lightness":11.200000000000017},
                {"gamma":1}
            ]
    }
];


// -----------------------------------------------------------------------------
//                                                                FoursquareData


// add access parameters
var foursquareClientID = '30MHFZETLY40UTVUNCGBO3A1OTQIWIHOQU3P4B3SDIVB21C5',
    foursquareClientSecret = 'XYVQVJ1VCDRZB5YG0FYGZFYOSCRKESKZLFM10US5DTNRAXCX';
