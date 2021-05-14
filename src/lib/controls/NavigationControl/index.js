import withControl from './../../mixins/withControl';

/**
**
**/
export default {

    name: 'MapboxGlNavigationControl',

    mixins: [ withControl ],

    props: {

        /**
        **
        **/
        showCompass: {

            type: Boolean,
            default: true,

        }, // showCompass

        /**
        **
        **/
        showZoom: {

            type: Boolean,
            default: true,

        }, // showZoom

    }, // props

    created () {

        this.control = new this.mapbox.NavigationControl( this.$props );
        this._addControl();

    }, // created

}; // export default
