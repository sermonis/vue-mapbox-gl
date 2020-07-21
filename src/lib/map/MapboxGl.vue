<template>

    <div class="mapbox-gl-map-wrapper">

        <div v-once :id="container" ref="container"/>
        <slot v-if="initialized"/>

    </div>

</template>

<script>

    import './styles/mapbox-gl.css';

    import withEvents from './../mixins/withEvents';
    import withWatchers from './../mixins/withWatchers';
    import withPrivateMethods from './../mixins/withPrivateMethods';
    import withAsyncActions from './../mixins/withAsyncActions';

    import mapEvents from './../events/mapEvents';
    import options from './options';

    export default {

        name: 'MapboxGl',

        mixins: [ withWatchers, withAsyncActions, withPrivateMethods, withEvents ],

        props: {

            /**
            **
            **/
            mapboxGl: {

                type: Object,
                default: null

            },

            ...options,

        }, // props

        provide () {

            const self = this;

            return {

                get mapbox () {

                    return self.mapbox;

                }, // mapbox

                get map () {

                    return self.map;

                }, // map

                get actions () {

                    return self.actions;

                }, // actions

            }; // return

        }, // provide

        data () {

            return {

                initial: true,
                initialized: false,

            }; // return

        }, // data

        computed: {

            loaded () {

                return this.map ? this.map.loaded() : false;

            }, // loaded

            version () {

                return this.map ? this.map.version : null;

            }, // version

            isStyleLoaded () {

                return this.map ? this.map.isStyleLoaded() : false;

            }, // isStyleLoaded

            areTilesLoaded () {

                return this.map ? this.map.areTilesLoaded() : false;

            }, // areTilesLoaded

            isMoving () {

                return this.map ? this.map.isMoving() : false;

            }, // isMoving

            canvas () {

                return this.map ? this.map.getCanvas() : null;

            }, // canvas

            canvasContainer () {

                return this.map ? this.map.getCanvasContainer() : null;

            }, // canvasContainer

            images () {

                return this.map ? this.map.listImages() : null;

            }, // images

        }, // computed

        created () {

            this.map = null;
            this.propsIsUpdating = {};

            this.mapboxPromise = this.mapboxGl
                ? Promise.resolve( this.mapboxGl )
                : import( 'mapbox-gl' );

        }, // created

        mounted () {

            this._loadMap().then( map => {

                this.map = map;

                if ( this.RTLTextPluginUrl !== undefined ) {

                    this.mapbox.setRTLTextPlugin(

                        this.RTLTextPluginUrl,
                        this._RTLTextPluginError

                    );

                }

                const eventNames = Object.keys( mapEvents );

                this._bindMapEvents( eventNames );
                this._registerAsyncActions( map );
                this._bindPropsUpdateEvents();

                this.initial = false;
                this.initialized = true;

                this.$emit( 'load', { map, component: this } );

            } );

        }, // mounted

        beforeDestroy () {

            this.$nextTick( () => {

                if ( this.map ) {

                    this.map.remove();

                }

            } ); // $nextTick

        }, // beforeDestroy

    }; // export default

</script>

<style>

    .mapbox-gl-map-wrapper {

        height: 100%;
        position: relative;
        width: 100%;

    }

    .mapbox-gl-map-wrapper .mapboxgl-map {

        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

    }

    .mapbox-gl-map-wrapper .mapboxgl-canvas {

        outline: none;

    }

</style>
