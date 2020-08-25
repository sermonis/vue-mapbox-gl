export default {

    methods: {

        /**
        ** Disable map iteractions.
        ** @public
        ** @see https://docs.mapbox.com/mapbox-gl-js/example/toggle-interaction-handlers/
        **/
        disable () {

            const handlers = [

                'scrollZoom', 'boxZoom', 'dragRotate',
                'dragPan', 'keyboard', 'doubleClickZoom',
                'touchZoomRotate',

            ];

            handlers.forEach( handler => this.map[ handler ].disable() );

        }, // disable

    }, // methods

}; // export default
