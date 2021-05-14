import withControl from './../../mixins/withControl';

export default {

    name: 'MapboxGlFullscreenControl',

    mixins: [ withControl ],

	props: {

        /**
        **
        **/
		container: {

            type: Object,
            default: undefined,

        }, // container

    }, // props

    created () {

        this.control = new this.mapbox.FullscreenControl( this.$props );
        this._addControl();

    },  // created

}; // export default
