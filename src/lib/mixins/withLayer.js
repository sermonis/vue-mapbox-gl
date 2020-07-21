import withEvents from './../mixins/withEvents';

const mapboxSourceProps = {

    /**
    **
    **/
    sourceId: {

        type: String,
        required: true,

    }, // sourceId

    /**
    **
    **/
    source: {

        type: [ Object, String ],
        default: undefined,

    }, // source

}; // mapboxSourceProps

const mapboxLayerStyleProps = {

    /**
    **
    **/
    layerId: {

        type: String,
        required: true,

    }, // layerId

    /**
    **
    **/
    layer: {

        type: Object,
        required: true,

    }, // layer

    /**
    **
    **/
    before: {

        type: String,
        default: undefined,

    }, // before

}; // mapboxLayerStyleProps

const componentProps = {

    /**
    **
    **/
    clearSource: {

        type: Boolean,
        default: true,

    }, // clearSource

    /**
    **
    **/
    replaceSource: {

        type: Boolean,
        default: false,

    }, // replaceSource

    /**
    **
    **/
    replace: {

        type: Boolean,
        default: false,

    }, // replace

}; // componentProps

export default {

    mixins: [ withEvents ],

    inject: [ 'mapbox', 'map' ],

    props: {

        ...mapboxSourceProps,
        ...mapboxLayerStyleProps,
        ...componentProps,

    }, // props

    data () {

        return {

            initial: true,

        }; // return

    }, // data

    computed: {

        sourceLoaded () {

            return this.map ? this.map.isSourceLoaded( this.sourceId ) : false;

        }, // sourceLoaded

        mapLayer () {

            return this.map ? this.map.getLayer( this.layerId ) : null;

        }, // mapLayer

        mapSource () {

            return this.map ? this.map.getSource( this.sourceId ) : null;

        }, // mapSource

    }, // computed

    created () {

        if ( this.layer.minzoom ) {

            this.$watch( 'layer.minzoom', function( next ) {

                if ( this.initial ) return;
                this.map.setLayerZoomRange( this.layerId, next, this.layer.maxzoom );

            } );

        }

        if ( this.layer.maxzoom ) {

            this.$watch( 'layer.maxzoom', function( next ) {

                if ( this.initial ) return;
                this.map.setLayerZoomRange( this.layerId, this.layer.minzoom, next );

            } );

        }

        if ( this.layer.paint ) {

            this.$watch( 'layer.paint', function( next ) {

                if ( this.initial ) return;

                if ( next ) {

                    for ( let prop of Object.keys( next ) ) {

                        this.map.setPaintProperty( this.layerId, prop, next[ prop ] );

                    }

                }

            }, { deep: true } );

        }

        if ( this.layer.layout ) {

            this.$watch( 'layer.layout', function( next ) {

                if ( this.initial ) return;

                if ( next ) {

                    for ( let prop of Object.keys( next ) ) {

                        this.map.setLayoutProperty( this.layerId, prop, next[ prop ] );

                    }

                }

            }, { deep: true } );

        }

        if ( this.layer.filter ) {

            this.$watch( 'layer.filter', function( next ) {

                if ( this.initial ) return;
                this.map.setFilter( this.layerId, next );

            }, { deep: true } );

        }

    }, // created

    beforeDestroy () {

        if ( this.map && this.map.loaded() ) {

            try {

                this.map.removeLayer( this.layerId );

            } catch ( error ) {

                this._emitEvent( 'layer-does-not-exist', {

                    layerId: this.sourceId,
                    error: error,

                } );

            }

            if ( this.clearSource ) {

                try {

                    this.map.removeSource( this.sourceId );

                } catch ( error ) {

                    this._emitEvent( 'source-does-not-exist', {

                        sourceId: this.sourceId,
                        error: error,

                    } );

                }

            }

        }

    }, // beforeDestroy

    methods: {

        /**
        ** @private
        **/
        _emitLayerMapEvent ( event ) {

            return this._emitMapEvent( event, { layerId: this.layerId } );

        }, // _emitLayerMapEvent

        /**
        ** @private
        **/
        _bindLayerEvents ( events ) {

            Object.keys( this.$listeners ).forEach( eventName => {

                if ( events.includes( eventName ) ) {

                    this.map.on( eventName, this.layerId, this._emitLayerMapEvent );

                }

            } );

        }, // _bindLayerEvents

        /**
        ** @private
        **/
        _unbindEvents ( events ) {

            if ( this.map ) {

                events.forEach( eventName => {

                    this.map.off( eventName, this.layerId, this._emitLayerMapEvent );

                } );

            }

        }, // _unbindEvents

        /**
        ** @private
        **/
        _watchSourceLoading ( data ) {

            if ( data.dataType === 'source' && data.sourceId === this.sourceId ) {

                this._emitEvent( 'layer-source-loading', { sourceId: this.sourceId } );
                this.map.off( 'dataloading', this._watchSourceLoading );

            }

        }, // _watchSourceLoading

        /**
        **
        **/
        move ( beforeId ) {

            this.map.moveLayer( this.layerId, beforeId );

            this._emitEvent( 'layer-moved', {

                layerId: this.layerId,
                beforeId: beforeId,

            } );

        }, // move

        /**
        **
        **/
        remove () {

            this.map.removeLayer( this.layerId );
            this.map.removeSource( this.sourceId );

            this._emitEvent( 'layer-removed', { layerId: this.layerId } );
            this.$destroy();

        }, // remove

    }, // methods

    render () {},

}; // export default
