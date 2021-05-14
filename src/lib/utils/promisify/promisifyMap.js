import promisifyMethod from './promisifyMethod';
import methodsData from './methodsData';

/**
**
**/
export default function promisifyMap ( map ) {

    const toPromisify = Object.keys( methodsData );
    const actions = {};

    toPromisify.forEach( key => {

		actions[ key ] = promisifyMethod( map, key );

	} );

    return actions;

};
