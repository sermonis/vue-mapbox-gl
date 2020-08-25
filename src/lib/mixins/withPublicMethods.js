export default {

    mounted: {

        // TODO: Better implementation.
        this.map.disable = this.disable();

    }, // mounted

    methods: {

        /**
        ** Disable map iteractions.
        ** @public
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
