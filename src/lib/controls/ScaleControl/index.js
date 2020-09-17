import withControl from './../../mixins/withControl';

export default {

    name: 'MapboxGlScaleControl',

    mixins: [ withControl ],

    props: {

        /**
        **
        **/
        maxWidth: {

            type: Number,
            default: 150,

        }, // maxWidth

        /**
        **
        **/
        unit: {

            type: String,
            default: 'metric',
            validator ( value ) {

                return [ 'imperial', 'metric', 'nautical' ].includes( value );

            }, // validator

        }, // unit

    }, // props

    watch: {

        unit ( newVal, oldVal ) {

            if ( this.control && newVal !== oldVal ) {

                this.control.setUnit( newVal );

            }

        }, // unit

    }, // watch

    created () {

        this.control = new this.mapbox.ScaleControl( this.$props );
        this._addControl();

    }, // created

}; // export default
