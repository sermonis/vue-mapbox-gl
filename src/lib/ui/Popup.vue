<template>

    <div style="display: none">

        <!-- Slot for popup content. -->
        <slot />

    </div>

</template>

<script>

    import withEvents from './../mixins/withEvents';
    import withControlSelfEvents from './../mixins/withControlSelfEvents';

    const popupEvents = {

        open: 'open',
        close: 'close',

    }; // popupEvents

    /**
    ** Popup component.
    ** @see See [Mapbox Gl JS Popup](https://www.mapbox.com/mapbox-gl-js/api/#popup)
    **/
    export default {

        name: 'Popup',

        mixins: [ withEvents, withControlSelfEvents ],

        inject: {

            mapbox: {

                default: null,

            }, // mapbox

            map: {

                default: null,

            }, // map

            marker: {

                default: null,

            }, // marker

        }, // inject

        props: {

            /**
            ** Mapbox GL popup option.
            ** If 'true', a close button will appear in the top right corner of the popup.
            **/
            closeButton: {

                type: Boolean,
                default: true,

            }, // closeButton

            /**
            ** Mapbox GL popup option.
            ** If 'true', the popup will closed when the map is clicked.
            **/
            closeOnClick: {

                type: Boolean,
                default: true,

            }, // closeOnClick

            /**
            ** Mapbox GL popup option.
            ** A string indicating the popup's location relative to the coordinate set.
            **
            ** If unset the anchor will be dynamically set to ensure the popup falls within the map
            ** container with a preference for 'bottom', 'top', 'bottom', 'left', 'right',
            ** 'top-left', 'top-right', 'bottom-left', 'bottom-right'.
            **/
            anchor: {

                validator ( value ) {

                    let allowedValues = [

                        'top',
                        'bottom',
                        'left',
                        'right',
                        'top-left',
                        'top-right',
                        'bottom-left',
                        'bottom-right',

                    ]; // allowedValues

                    return typeof value === 'string' && allowedValues.includes( value );

                }, // validator

                default: undefined,

            }, // anchor

            /**
            ** Mapbox GL popup option.
            ** A pixel offset applied to the popup's location a single number specifying a distance from the popup's location
            ** a PointLike specifying a constant offset an object of Points specifing an offset for each anchor position
            ** Negative offsets indicate left and up.
            **/
            offset: {

                type: [ Number, Object, Array ],
                default: () => [ 0, 0 ],

            }, // offset

            /**
            ** Mapbox GL popup option.
            **/
            coordinates: {

                type: Array,

            }, // coordinates

            /**
            ** Component option.
            ** If 'true', popup treats data in deafult slot as plain text.
            **/
            onlyText: {

                type: Boolean,
                default: false,

            }, // onlyText

            /**
            ** Component option.
            **/
            showed: {

                type: Boolean,
                default: false,

            }, // showed

        }, // props

        data () {

            return {

                initial: true,
                popup: undefined,

            };

        }, // data

        computed: {

            open: {

                get () {

                    if ( this.popup !== undefined ) {

                        return this.popup.isOpen();

                    }

                    return false;

                }, // get

                set ( value ) {

                    if ( this.map && this.popup ) {

                        if ( !value ) {

                            this.popup.remove();

                        } else {

                            this.popup.addTo( this.map );

                        }

                    }

                }, // set

            }, // open

        }, // computed

        watch: {

            coordinates ( lngLat ) {

                if ( this.initial ) return;
                this.popup.setLngLat( lngLat );

            }, // coordinates

            showed ( newVal, oldVal ) {

                if ( newVal !== oldVal ) {

                    this.open = newVal;

                    if ( this.marker ) {

                        this.marker.togglePopup();

                    }

                }

            }, // showed

        }, // watch

        created () {

            this.popup = new this.mapbox.Popup( this.$props );

        }, // created

        mounted () {

            this._addPopup();
            this.initial = false;

        }, // mounted

        beforeDestroy () {

            if ( this.map ) {

                this.popup.remove();
                this._emitEvent( 'removed' );

            }

        }, // beforeDestroy

        methods: {

            /**
            **
            **/
            _addPopup () {

                this.popup = new this.mapbox.Popup( this.$props );

                if ( this.coordinates !== undefined ) {

                    this.popup.setLngLat( this.coordinates );

                }

                if ( this.$slots.default !== undefined ) {

                    if ( this.onlyText ) {

                        if ( this.$slots.default[ 0 ].elm.nodeType === 3 ) {

                            let tmpEl = document.createElement( 'span' );
                            tmpEl.appendChild( this.$slots.default[ 0 ].elm );
                            this.popup.setText( tmpEl.innerText );

                        } else {

                            this.popup.setText( this.$slots.default[ 0 ].elm.innerText );

                        }

                    } else {

                        this.popup.setDOMContent( this.$slots.default[ 0 ].elm );

                    }

                }

                this._bindSelfEvents( Object.keys( popupEvents ), this.popup );
                this._emitEvent( 'added', { popup: this.popup } );

                if ( this.marker ) {

                    this.marker.setPopup( this.popup );

                }

                if ( this.showed ) {

                    this.open = true;

                    if ( this.marker ) {

                        this.marker.togglePopup();

                    }

                }

            }, // _addPopup

            /**
            **
            **/
            _emitSelfEvent ( event ) {

                this._emitMapEvent( event, { popup: this.popup } );

            }, // _emitSelfEvent

            /**
            **
            **/
            remove () {

                this.popup.remove();
                this._emitEvent( 'remove', { popup: this.popup } );

            }, // remove

        }, // methods

    }; // export default

</script>
