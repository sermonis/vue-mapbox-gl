export default {

    /**
    **
    **/
    container: {

        type: [ String, HTMLElement ],

        default () {

            return `map-${ ( '' + Math.random() ).split( '.' )[ 1 ] }`;

        }, // default

    }, // container

    /**
    **
    **/
    accessToken: {

        type: String,
        default: undefined,

    }, // accessToken

    /**
    **
    **/
    attributionControl: {

        type: Boolean,
        default: false,

    }, // attributionControl

    /**
    **
    **/
    customAttribution: {

        type: [ String, Array ],
        default: null,

    }, // customAttribution

    /**
    **
    **/
    minZoom: {

        type: Number,
        default: 0,

    }, // minZoom

    /**
    **
    **/
    maxZoom: {

        type: Number,
        default: 22,

    }, // maxZoom

    /**
    **
    **/
    mapStyle: {

        type: [ String, Object ],
        required: true,

    }, // mapStyle

    /**
    **
    **/
    hash: {

        type: Boolean,
        default: true,

    }, // hash

    /**
    **
    **/
    interactive: {

        type: Boolean,
        default: true,

    }, // interactive

    /**
    **
    **/
    bearingSnap: {

        type: Number,
        default: 7,

    }, // bearingSnap

    /**
    **
    **/
    pitchWithRotate: {

        type: Boolean,
        default: true,

    }, // pitchWithRotate

    /**
    **
    **/
    clickTolerance: {

        type: Number,
        default: 3,

    }, // clickTolerance

    /**
    **
    **/
    logoPosition: {

        type: String,

        default: 'bottom-right',

        validator: val => [

            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',

        ].includes( val ),

    }, // logoPosition

    /**
    **
    **/
    failIfMajorPerformanceCaveat: {

        type: Boolean,
        default: false,

    }, // failIfMajorPerformanceCaveat

    /**
    **
    **/
    preserveDrawingBuffer: {

        type: Boolean,
        default: false,

    }, // preserveDrawingBuffer

    /**
    **
    **/
    refreshExpiredTiles: {

        type: Boolean,
        default: true,

    }, // refreshExpiredTiles

    /**
    **
    **/
    maxBounds: {

        type: Array,

        default () {

            return undefined;

        },

    }, // maxBounds

    /**
    **
    **/
    scrollZoom: {

        type: [ Boolean, Object ],

        default () {

            return true;

        },

    }, // scrollZoom

    /**
    **
    **/
    boxZoom: {

        type: Boolean,
        default: true,

    }, // boxZoom

    /**
    **
    **/
    dragRotate: {

        type: Boolean,
        default: true,

    }, // dragRotate

    /**
    **
    **/
    dragPan: {

        type: Boolean,
        default: true,

    }, // dragPan

    /**
    **
    **/
    keyboard: {

        type: Boolean,
        default: true,

    }, // keyboard

    /**
    **
    **/
    doubleClickZoom: {

        type: Boolean,
        default: false,

    }, // doubleClickZoom

    /**
    **
    **/
    touchZoomRotate: {

        type: [ Boolean, Object ],

        default () {

            return true;

        },

    }, // touchZoomRotate

    /**
    **
    **/
    trackResize: {

        type: Boolean,
        default: true,

    }, // trackResize

    /**
    **
    **/
    center: {

        type: [ Object, Array ],
        default: undefined,

    }, // center

    /**
    **
    **/
    zoom: {

        type: Number,
        default: 0,

    }, // zoom

    /**
    **
    **/
    bearing: {

        type: Number,
        default: 0,

    }, // bearing

    /**
    **
    **/
    pitch: {

        type: Number,
        default: 0,

    }, // pitch

    /**
    **
    **/
    bounds: {

        type: [ Object, Array ],
        default: undefined,

    }, // bounds

    /**
    **
    **/
    fitBoundsOptions: {

        type: Object,
        default: undefined,

    }, // fitBoundsOptions

    /**
    **
    **/
    renderWorldCopies: {

        type: Boolean,
        default: true,

    }, // renderWorldCopies

    /**
    **
    **/
    RTLTextPluginUrl: {

        type: String,
        default: undefined,

    }, // RTLTextPluginUrl

    /**
    **
    **/
    light: {

        type: Object,
        default: undefined,

    }, // light

    /**
    **
    **/
    tileBoundaries: {

        type: Boolean,
        default: false,

    }, // tileBoundaries

    /**
    **
    **/
    collisionBoxes: {

        type: Boolean,
        default: false,

    }, // collisionBoxes

    /**
    **
    **/
    repaint: {

        type: Boolean,
        default: false,

    }, // repaint

    /**
    **
    **/
    transformRequest: {

        type: Function,
        default: null,

    }, // transformRequest

    /**
    **
    **/
    maxTileCacheSize: {

        type: Number,
        default: null,

    }, // maxTileCacheSize

    /**
    **
    **/
    localIdeographFontFamily: {

        type: String,
        default: null,

    }, // localIdeographFontFamily

    /**
    **
    **/
    collectResourceTiming: {

        type: Boolean,
        default: false,

    }, // collectResourceTiming

    /**
    **
    **/
    fadeDuration: {

        type: Number,
        default: 300,

    }, // fadeDuration

    /**
    **
    **/
    crossSourceCollisions: {

        type: Boolean,
        default: true,

    }, // crossSourceCollisions

}; // export default
