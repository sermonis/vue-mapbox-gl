/**
**
**/
const composedMethodEvents = [

	{
		name: 'moveend',
		check: ( map, options ) => options.center && map.isMoving(),
    },

	{
		name: 'zoomend',
		check: ( map, options ) => options.zoom !== undefined && options.zoom !== null && map.isZooming(),
    },

	{
		name: 'rotateend',
		check: ( map, options ) => options.bearing !== undefined && options.bearing !== null && map.isRotating(),
    },

	{
		name: 'pitchend',
		check: ( map, options ) => options.pitch !== undefined && options.bearing !== null && map.isMoving(),
    },

];

/**
**
**/
const composedMethodGetter = map => ( {

	center: map.getCenter(),
    zoom: map.getZoom(),
    bearing: map.getBearing(),
    pitch: map.getPitch(),

} );

/**
**
**/
const composedMethodConfig = {

	events: composedMethodEvents,
    getter: composedMethodGetter,

};

/**
**
**/
const moveMethodConfig = {

	events: [ {

		name: 'moveend',
		check: map => map.isMoving(),

	} ],

	getter: map => ( {

		center: map.getCenter(),

	} ),

};

/**
**
**/
const zoomMethodConfig = {

	events: [ {

		name: 'zoomend',
		check: map => map.isZooming(),

	} ],

	getter: map => ( {

		zoom: map.getZoom(),

	} ),

};

/**
**
**/
const rotateMethodConfig = {

	events: [ {

		name: 'rotateend',
		check: map => map.isRotating(),

	} ],

	getter: map => ( {

		bearing: map.getBearing(),

	} ),

};

/**
**
**/
export default {

	setCenter: moveMethodConfig,
    panBy: moveMethodConfig,
    panTo: moveMethodConfig,

	setZoom: zoomMethodConfig,
    zoomTo: zoomMethodConfig,
    zoomIn: zoomMethodConfig,
    zoomOut: zoomMethodConfig,

	setBearing: rotateMethodConfig,
    rotateTo: rotateMethodConfig,
    resetNorth: rotateMethodConfig,
    snapToNorth: rotateMethodConfig,

	setPitch: {

		events: [ {

			name: 'pitchend',
			check: map => true,

		} ],

		getter: map => ( {

			pitch: map.getPitch(),

		} ),

	},

	fitBounds: {

		events: [

			{
				name: 'zoomend',
				check: map => map.isZooming(),
			},

			{
				name: 'moveend',
				check: map => map.isMoving(),
			},

			{
				name: 'rotateend',
				check: map => map.isRotating(),
			},

		],

		getter: map => ( {

			zoom: map.getZoom(),
            bearing: map.getBearing(),
            pitch: map.getPitch(),
            center: map.getCenter(),

		} ),

	},

	fitScreenCoordinates: {

		events: [

			{
				name: 'zoomend',
				check: ( map, options ) => map.isZooming(),
			},

			{
				name: 'moveend',
				check: ( map, options ) => map.isMoving(),
			},

			{
				name: 'rotateend',
				check: ( map, options ) => options.bearing && map.isRotating(),
			},

		],

		getter: map => ( {

			zoom: map.getZoom(),
            center: map.getCenter(),
            bearing: map.getBearing(),
            pitch: map.getPitch()

		} ),

	},

	jumpTo: composedMethodConfig,
    easeTo: composedMethodConfig,
    flyTo: composedMethodConfig,

};
