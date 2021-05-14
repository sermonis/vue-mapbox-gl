import layerEvents from './../../events/layerEvents';
import withLayerMixin from './../../mixins/withLayer';

/**
**
**/
export default {

    name: 'MapboxGlImageLayer',

    mixins: [ withLayerMixin ],

    created () {

        if ( this.source ) {

            if ( this.source.coordinates ) {

                this.$watch( 'source.coordinates', function( next ) {

                    if ( this.initial ) return;

                    if ( next ) {

                        this.mapSource.setCoordinates( next );

                    }

                }, { deep: true } ); // $watch

            }

            if ( this.source.url ) {

                this.$watch( 'source.url', function( next ) {

                    if ( this.initial ) return;

                    if ( next ) {

                        this.mapSource.updateImage( {

                            url: next,
                            coordinates: this.source.coordinates,

                        } );

                    }

                }, { deep: true } ); // $watch

            } // if

        } // if

        this._deferredMount();

    }, // created

    methods: {

        /**
        ** @private
        **/
        _deferredMount () {

            const source = {

                type: 'image',
                ...this.source,

            }; // source

            this.map.on( 'dataloading', this._watchSourceLoading );

            try {

                this.map.addSource( this.sourceId, source );

            } catch ( error ) {

                if ( this.replaceSource ) {

                    this.map.removeSource( this.sourceId );
                    this.map.addSource( this.sourceId, source );

                }
            }

            this._addLayer();
            this._bindLayerEvents( layerEvents );

            this.initial = false;

        }, // _deferredMount

        /**
        ** @private
        **/
        _addLayer () {

            let existed = this.map.getLayer( this.layerId );

            if ( existed ) {

                if ( this.replace ) {

                    this.map.removeLayer( this.layerId );

                } else {

                    this._emitEvent( 'layer-exists', { layerId: this.layerId } );
                    return existed;

                }

            }

            const layer = {

                id: this.layerId,
                source: this.sourceId,
                type: 'raster',
                ...this.layer,

            }; // layer

            this.map.addLayer( layer, this.before );
            this._emitEvent( 'added', { layerId: this.layerId } );

        }, // _addLayer

    }, // methods

}; // export default
