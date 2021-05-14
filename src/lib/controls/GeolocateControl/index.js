import withControl from './../../mixins/withControl';
import withEventsMixin from './../../mixins/withEvents';
import withControlSelfEventsMixin from './../../mixins/withControlSelfEvents';

/**
**
**/
const geolocationEvents = {

    trackuserlocationstart: 'trackuserlocationstart',
    trackuserlocationend: 'trackuserlocationend',
    geolocate: 'geolocate',
    error: 'error',

};

/**
**
**/
export default {

    name: 'MapboxGlGeolocateControl',

    mixins: [ withEventsMixin, withControlSelfEventsMixin, withControl ],

    props: {

        /**
        **
        **/
        positionOptions: {

            type: Object,

            default () {

                return {

                    enableHighAccuracy: false,
                    timeout: 6000,

                };

            },

        }, // positionOptions

        /**
        **
        **/
        fitBoundsOptions: {

            type: Object,
            default: () => ( { maxZoom: 15 } ),

        }, // fitBoundsOptions

        /**
        **
        **/
        trackUserLocation: {

            type: Boolean,
            default: false,

        }, // trackUserLocation

        /**
        **
        **/
        showUserLocation: {

            type: Boolean,
            default: true,

        }, // showUserLocation

    }, // props

    created () {

        const GeolocateControl = this.mapbox.GeolocateControl;
        this.control = new GeolocateControl( this.$props );

        this._addControl();
        this._bindSelfEvents( Object.keys( geolocationEvents ), this.control );

    }, // created

    methods: {

        /**
        **
        **/
        trigger () {

            if ( this.control ) {

                return this.control.trigger();

            }

        }, // trigger

    }, // methods

}; // export default
