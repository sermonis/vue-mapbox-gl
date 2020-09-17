<template>

    <div style="display: none">

        <!-- Slot for custom marker. -->
        <slot name="marker"/>

        <!-- Slot for popup. -->
        <slot v-if="marker"/>

    </div>

</template>

<script>

    import withEvents from './../mixins/withEvents';
    import withControlSelfEvents from './../mixins/withControlSelfEvents';

    const markerEvents = {

        drag: 'drag',
        dragstart: 'dragstart',
        dragend: 'dragend',

    }; // markerEvents

    const markerDOMEvents = {

        click: 'click',
        mouseenter: 'mouseenter',
        mouseleave: 'mouseleave',

    }; // markerDOMEvents

    /**
    ** Marker component.
    ** @see See [Mapbox Gl JS Marker](https://www.mapbox.com/mapbox-gl-js/api/#marker)
    **/
    export default {

        name: 'MapboxGlMarker',

        mixins: [ withEvents, withControlSelfEvents ],

        inject: [ 'mapbox', 'map' ],

        provide () {

            const self = this;

            return {

                get marker () {

                    return self.marker;

                },

            };

        }, // provide

        props: {

            /**
            ** Mapbox GL marker option.
            **/
            offset: {

                type: [ Object, Array ],
                default: () => [ 0, 0 ],

            }, // offset

            /**
            ** Mapbox GL marker option.
            **/
            coordinates: {

                type: Array,
                required: true,

            }, // coordinates

            /**
            ** Mapbox GL marker option.
            **/
            color: {

                type: String,

            }, // color

            /**
            ** Mapbox GL marker option.
            **/
            anchor: {

                type: String,
                default: 'center',

            }, // anchor

            /**
            ** Mapbox GL marker option.
            **/
            draggable: {

                type: Boolean,
                default: false,

            }, // draggable

        }, // props

        data () {

            return {

                initial: true,
                marker: undefined,

            };

        }, // data

        watch: {

            coordinates ( lngLat ) {

                if ( this.initial ) return;
                this.marker.setLngLat( lngLat );

            }, // coordinates

            draggable ( newVal ) {

                if ( this.initial ) return;
                this.marker.setDraggable( newVal );

            }, // draggable

        }, // watch

        mounted () {

            const markerOptions = {

                ...this.$props

            };

            if ( this.$slots.marker ) {

                markerOptions.element = this.$slots.marker[ 0 ].elm;

            }

            this.marker = new this.mapbox.Marker( markerOptions );

            if ( this.$listeners[ 'update:coordinates' ] ) {

                this.marker.on( 'dragend', event => {

                let newCoordinates;

                if ( this.coordinates instanceof Array ) {

                    newCoordinates = [ event.target._lngLat.lng, event.target._lngLat.lat ];

                } else {

                    newCoordinates = event.target._lngLat;

                }

                    this.$emit( 'update:coordinates', newCoordinates );

                } );

            }

            const eventNames = Object.keys( markerEvents );

            this._bindSelfEvents( eventNames, this.marker );

            this.initial = false;
            this._addMarker();

        }, // mounted

        beforeDestroy () {

            if ( this.map !== undefined && this.marker !== undefined ) {

                this.marker.remove();

            }

        }, // beforeDestroy

        methods: {

            /**
            **
            **/
            _addMarker () {

                this.marker.setLngLat( this.coordinates ).addTo( this.map );
                this._bindMarkerDOMEvents();
                this._emitEvent( 'added', { marker: this.marker } );

            }, // _addMarker

            /**
            **
            **/
            _emitSelfEvent ( event ) {

                this._emitMapEvent( event, { marker: this.marker } );

            }, // _emitSelfEvent

            /**
            **
            **/
            _bindMarkerDOMEvents () {

                Object.keys( this.$listeners ).forEach( key => {

                    if ( Object.values( markerDOMEvents ).includes( key ) ) {

                        this.marker._element.addEventListener( key, event => {

                            this._emitSelfEvent( event );

                        } );

                    }

                } );

            }, // _bindMarkerDOMEvents

            /**
            **
            **/
            remove () {

                this.marker.remove();
                this._emitEvent( 'removed' );

            }, // remove

            /**
            **
            **/
            togglePopup () {

                return this.marker.togglePopup();

            }, // togglePopup

        }, // methods

    }; // export default

</script>
