import layerEvents from './../../events/layerEvents';
import withLayerMixin from './../../mixins/withLayer';

/**
**
**/
export default {

    name: 'MapboxGlVectorLayer',

    mixins: [ withLayerMixin ],

    computed: {

        /**
        **
        **/
        getSourceFeatures () {

            return filter => {

                if ( this.map ) {

                    return this.map.querySourceFeatures( this.sourceId, {

                        sourceLayer: this.layer[ 'source-layer' ],
                        filter

                    } ); // return

                } // if

                return null;

            }; // return

        }, // getSourceFeatures

        /**
        **
        **/
        getRenderedFeatures () {

            return ( geometry, filter ) => {

                if ( this.map ) {

                    return this.map.queryRenderedFeatures( geometry, {

                        layers: [ this.layerId ],
                        filter

                    } ); // return

                } // if

                return null;

            }; // return

        }, // getRenderedFeatures

    }, // computed

    watch: {

        /**
        **
        **/
        filter ( filter ) {

            if ( this.initial ) return;
            this.map.setFilter( this.layerId, filter );

        }, // filter

    }, // watch

    created () {

        this._deferredMount();

    }, // created

    methods: {

        /**
        ** @private
        **/
        _deferredMount () {

            let source = {

                type: 'vector',
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

            } // if

            let layer = {

                id: this.layerId,
                source: this.sourceId,
                ...this.layer,

            }; // layer

            this.map.addLayer( layer, this.before );
            this._emitEvent( 'added', { layerId: this.layerId } );

        }, // _addLayer

        /**
        **
        **/
        setFeatureState ( featureId, state ) {

            if ( this.map ) {

                const params = {

                    id: featureId,
                    source: this.sourceId,
                    'source-layer': this.layer[ 'source-layer' ],

                };

                return this.map.setFeatureState( params, state );

            } // if

        }, // setFeatureState

        /**
        **
        **/
        getFeatureState ( featureId ) {

            if ( this.map ) {

                const params = {

                    id: featureId,
                    source: this.source,
                    'source-layer': this.layer[ 'source-layer' ],

                };

                return this.map.getFeatureState( params );

            } // if

        }, // getFeatureState

    }, // methods

}; // export default
