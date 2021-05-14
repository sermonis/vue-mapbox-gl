import layerEvents from './../../events/layerEvents';
import withLayerMixin from './../../mixins/withLayer';

/**
**
**/
export default {

    name: 'MapboxGlRasterLayer',

    mixins: [ withLayerMixin ],

    created () {

        this._deferredMount();

    }, // created

    methods: {

        /**
        ** @private
        **/
        _deferredMount () {

            let source = {

                type: 'raster',
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

            this.map.off( 'dataloading', this._watchSourceLoading );
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

            let layer = {

                id: this.layerId,
                type: 'raster',
                source: this.sourceId,
                ...this.layer,

            }; // layer

            this.map.addLayer( layer, this.before );
            this._emitEvent( 'added', { layerId: this.layerId } );

        }, // _addLayer

    }, // methods

}; // export default
