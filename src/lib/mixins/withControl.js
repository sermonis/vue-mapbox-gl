import withEvents from './withEvents';
import withControlSelfEvents from './withControlSelfEvents';

export default {

    mixins: [ withEvents, withControlSelfEvents ],

    inject: [ 'mapbox', 'map', 'actions' ],

    props: {

        /**
        **
        **/
        position: {

            type: String,
            default: 'top-right',

        }, // props

    }, // props

    beforeDestroy () {

        if ( this.map && this.control ) {

            this.map.removeControl( this.control );

        }

    }, // beforeDestroy

    methods: {

        /**
        ** @private
        **/
        _addControl () {

            try {

                this.map.addControl( this.control, this.position );

            } catch ( err ) {

                this._emitEvent( 'error', { error: err } );
                return;

            }

            this._emitEvent( 'added', { control: this.control } );

        }, // _addControl

    }, // methods

    render () {},

}; // export default
