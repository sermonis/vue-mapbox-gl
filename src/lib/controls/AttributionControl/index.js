import withControl from './../../mixins/withControl';

export default {

    name: 'MapboxGlAttributionControl',

    mixins: [ withControl ],

    props: {

        /**
        **
        **/
        compact: {

            type: Boolean,
            default: true,

        }, // compact

        /**
        **
        **/
        customAttribution: {

            type: [ String, Array ],
            deafault: undefined,

        }, // customAttribution

    }, // props

    created () {

        this.control = new this.mapbox.AttributionControl( this.$props );
        this._addControl();

    }, // created

}; // export default
