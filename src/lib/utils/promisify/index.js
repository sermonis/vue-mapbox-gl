import promisifyMap from './promisifyMap';
import promisifyMethod from './promisifyMethod';

/**
** A wrapper for Mapbox Gl JS library that gives a nice
** Promise-based API to asynchronous map functions.
** @see https://javascript.info/promisify
**/
export default function promisify ( map, methodName = null ) {

	if ( methodName ) {

		return promisifyMethod( map, methodName );

	} else {

		return promisifyMap( map );

	}

};
