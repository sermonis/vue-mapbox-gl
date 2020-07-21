import withControl from './../../mixins/withControl';

export default {

    name: 'FullscreenControl',

    mixins: [ withControl ],

    props: {

        /**
        **
        **/
        container: {

            type: HTMLElement,
            default: undefined,

        }, // container

    }, // props

    created () {

        this.control = new this.mapbox.FullscreenControl( this.$props );
        this._addControl();

    },  // created

}; // export default
