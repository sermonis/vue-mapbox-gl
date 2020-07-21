const watchers = {

    /**
    **
    **/
    maxBounds ( newVal ) {

        this.map.setMaxBounds( newVal );

    }, // maxBounds

    /**
    **
    **/
    minZoom ( newVal ) {

        this.map.setMinZoom( newVal );

    }, // minZoom

    /**
    **
    **/
    maxZoom ( newVal ) {

        this.map.setMaxZoom( newVal );

    }, // maxZoom

    /**
    **
    **/
    mapStyle ( newVal ) {

        this.map.setStyle( newVal );

    }, // mapStyle

    /**
    ** TODO: Make 'bounds' synced prop.
    ** bounds ( newVal ) { this.map.fitBounds( newVal, { linear: true, duration: 0 } ) },
    **/
    collisionBoxes ( newVal ) {

        this.map.showCollisionBoxes = newVal;

    }, // collisionBoxes

    /**
    **
    **/
    tileBoundaries ( newVal ) {

        this.map.showTileBoundaries = newVal;

    }, // tileBoundaries

    /**
    **
    **/
    repaint ( newVal ) {

        this.map.repaint = newVal;

    }, // repaint

    /**
    **
    **/
    zoom ( newVal ) {

        this.map.setZoom( newVal );

    }, // zoom

    /**
    **
    **/
    center ( newVal ) {

        this.map.setCenter( newVal );

    }, // center

    /**
    **
    **/
    bearing ( newVal ) {

        this.map.setBearing( newVal );

    }, // bearing

    /**
    **
    **/
    pitch ( newVal ) {

        this.map.setPitch( newVal );

    }, // pitch

    /**
    **
    **/
    light ( newVal ) {

        this.map.setLigh( newVal );

    }, // light

}; // watchers

/**
**
**/
function watcher ( prop, callback, newVal, oldVal ) {

    if ( this.initial ) return;

    if ( this.$listeners[ `update:${ prop }` ] ) {

        if ( this.propsIsUpdating[ prop ] ) {

            this._watcher.active = false;

            this.$nextTick( () => {

                this._watcher.active = true;

            } );

        } else {

            this._watcher.active = true;
            callback( newVal, oldVal );

        }

        this.propsIsUpdating[ prop ] = false;

    } else {

        callback( newVal, oldVal );

    }

}; // watcher

/**
**
**/
function makeWatchers () {

    const wrappers = {};

    Object.entries( watchers ).forEach( prop => {

        wrappers[ prop[ 0 ] ] = function ( newVal, oldVal ) {

            return watcher.call( this, prop[ 0 ], prop[ 1 ].bind( this ), newVal, oldVal );

        };

    } );

    return wrappers;

}; // makeWatchers

export default {

    watch: makeWatchers(),

}; // export default
