import layerEvents from './../../events/layerEvents';
import withLayerMixin from './../../mixins/withLayer';

export default {

    name: 'MapboxGlGeojsonLayer',

    mixins: [ withLayerMixin ],

    computed: {

        /**
        **
        **/
        getSourceFeatures () {

            return filter => {

                if ( this.map ) {

                    return this.map.querySourceFeatures( this.sourceId, { filter } );

                }

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
                    } );

                }

                return null;

            }; // return

        }, // getRenderedFeatures

        /**
        **
        **/
        getClusterExpansionZoom () {

            return clusterId => {

                return new Promise( ( resolve, reject ) => {

                    if ( this.mapSource ) {

                        this.mapSource.getClusterExpansionZoom( clusterId, ( err, zoom ) => {

                            if ( err ) {

                                return reject( err );

                            }

                            return resolve( zoom );

                        } );

                    } else {

                        return reject( new Error( `Map source with id ${ this.sourceId } is not found.` ) );

                    }

                } );

            };

        }, // getClusterExpansionZoom

        /**
        **
        **/
        getClusterChildren () {

            return clusterId => {

                return new Promise( ( resolve, reject ) => {

                    const source = this.mapSource;

                    if ( source ) {

                        source.getClusterChildren( clusterId, ( err, features ) => {

                            if ( err ) {

                                return reject( err );

                            }

                            return resolve( features );

                        } );

                    } else {

                        return reject( new Error( `Map source with id ${ this.sourceId } not found.` ) );

                    }

                } );

            };

        }, // getClusterChildren

        /**
        **
        **/
        getClusterLeaves () {

            return ( ...args ) => {

                return new Promise( ( resolve, reject ) => {

                    if ( this.mapSource ) {

                        this.mapSource.getClusterLeaves( ...args, ( err, features ) => {

                            if ( err ) {

                                return reject( err );

                            }

                            return resolve( features );

                        } );

                    } else {

                        return reject( new Error( `Map source with id ${ this.sourceId } not found.` ) );

                    }

                } );

            };

        }, // getClusterLeaves

    }, // computed

    created () {

        if ( this.source ) {

            this.$watch( 'source.data', function ( newVal ) {

                if ( this.initial ) {

                    return;

                }

                this.mapSource.setData( newVal );

            }, { deep: true } );

        }

        this._deferredMount();

    }, // created

    methods: {

        /**
        ** @private
        **/
        _deferredMount () {

            this.map.on( 'dataloading', this._watchSourceLoading );

            if ( this.source ) {

                const source = {

                    type: 'geojson',
                    ...this.source,

                }; // source

                try {

                    this.map.addSource( this.sourceId, source );

                } catch ( err ) {

                    if ( this.replaceSource ) {

                        this.map.removeSource( this.sourceId );
                        this.map.addSource( this.sourceId, source );

                    }

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

            const layer = {

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

                const params = { id: featureId, source: this.source };
                return this.map.setFeatureState( params, state );

            }

        }, // setFeatureState

        /**
        **
        **/
        getFeatureState ( featureId ) {

            if ( this.map ) {

                const params = { id: featureId, source: this.source };
                return this.map.getFeatureState( params );

            }

        }, // getFeatureState

        /**
        **
        **/
        removeFeatureState ( featureId, sourceLayer, key ) {

            if ( this.map ) {

                const params = {

                    id: featureId,
                    source: this.source,
                    sourceLayer,

                };

                return this.map.removeFeatureState( params, key );

            }

        }, // removeFeatureState

    }, // methods

}; // export default
