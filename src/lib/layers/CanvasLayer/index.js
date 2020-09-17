import layerEvents from './../../events/layerEvents';
import withLayerMixin from './../../mixins/withLayer';

export default {

    name: 'MapboxGlCanvasLayer',

    mixins: [ withLayerMixin ],

    inject: [ 'mapbox', 'map' ],

    props: {

        /**
        ** Mapbox GL layer option.
        **/
        source: {

            type: Object,
            required: true,

        }, // source

        /**
        ** Mapbox GL layer option.
        **/
        layer: {

            type: Object,
            default: null,

        }, // layer

    }, // props

    computed: {

        /**
        **
        **/
        canvasElement () {

            return this.mapSource ? this.mapSource.getCanvas() : null;

        }, // canvasElement

    }, // computed

    watch: {

        /**
        **
        **/
        coordinates ( newVal ) {

            if ( this.initial ) {

                return;

            }

            this.mapSource.setCoordinates( newVal );

        }, // coordinates

    }, // watch

    created () {

        this._deferredMount();

    }, // created

    methods: {

        /**
        ** @private
        **/
        _deferredMount () {

            const source = {

                type: 'canvas',
                ...this.source,

            }; // source

            this.map.on( 'dataloading', this._watchSourceLoading );

            try {

                this.map.addSource( this.sourceId, source );

            } catch ( err ) {

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

            let layer = {

                id: this.layerId,
                source: this.sourceId,
                type: 'raster',
                ...this.layer,

            }; // layer

            this.map.addLayer( layer, this.before );

            this._emitEvent( 'added', {

                layerId: this.layerId,
                canvas: this.canvasElement,

            } );

        }, // _addLayer

    }, // methods

}; // export default
