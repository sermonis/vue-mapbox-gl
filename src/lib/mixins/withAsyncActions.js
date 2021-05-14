import { promisify } from '../utils';

export default {

    created () {

        this.actions = {};

    }, // created

    methods: {

        /**
        ** @private
        **/
        _registerAsyncActions ( map ) {

            this.actions = {

                ...promisify( map ),

                stop () {

                    this.map.stop();

                    const updatedProps = {

                        pitch: this.map.getPitch(),
                        zoom: this.map.getZoom(),
                        bearing: this.map.getBearing(),
                        center: this.map.getCenter(),

                    };

                    Object.entries( updatedProps ).forEach( prop => {

                        this._updateSyncedPropsFabric( prop[ 0 ], prop[ 1 ] )();

                    } );

                    return Promise.resolve( updatedProps );

                }, // stop

            }; // actions

        }, // _registerAsyncActions

    }, // methods

}; // export default
