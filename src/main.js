/**
** Controls
**/
import MapboxGlAttributionControl from './lib/controls/AttributionControl';
export const AttributionControl = MapboxGlAttributionControl;

import MapboxGlFullscreenControl from './lib/controls/FullscreenControl';
export const FullscreenControl = MapboxGlFullscreenControl;

import MapboxGlGeolocateControl from './lib/controls/GeolocateControl';
export const GeolocateControl = MapboxGlGeolocateControl;

import MapboxGlNavigationControl from './lib/controls/NavigationControl';
export const NavigationControl = MapboxGlNavigationControl;

import MapboxGlScaleControl from './lib/controls/ScaleControl';
export const ScaleControl = MapboxGlScaleControl;

/**
** Layers
**/
import MapboxGlCanvasLayer from './lib/layers/CanvasLayer';
export const CanvasLayer = MapboxGlCanvasLayer;

import MapboxGlGeojsonLayer from './lib/layers/GeojsonLayer';
export const GeojsonLayer = MapboxGlGeojsonLayer;

import MapboxGlImageLayer from './lib/layers/ImageLayer';
export const ImageLayer = MapboxGlImageLayer;

import MapboxGlRasterLayer from './lib/layers/RasterLayer';
export const RasterLayer = MapboxGlRasterLayer;

import MapboxGlVectorLayer from './lib/layers/VectorLayer';
export const VectorLayer = MapboxGlVectorLayer;

import MapboxGlVideoLayer from './lib/layers/VideoLayer';
export const VideoLayer = MapboxGlVideoLayer;

/**
** UI
**/
import MapboxGlMarker from './lib/ui/Marker';
export const MarkerUi = MapboxGlMarker;

import MapboxGlPopup from './lib/ui/Popup';
export const PopupUi = MapboxGlPopup;

/**
** Mixins
**/
import MapboxGlwithEventsMixin from './lib/mixins/withEvents';
export const withEvents = MapboxGlwithEventsMixin;

import MapboxGlwithControlSelfEventsMixin from './lib/mixins/withControlSelfEvents';
export const withControlSelfEvents = MapboxGlwithControlSelfEventsMixin;

import MapboxGlwithControlMixin from './lib/mixins/withControl';
export const withControl = MapboxGlwithControlMixin;

import MapboxGlwithLayerMixin from './lib/mixins/withLayer';
export const withLayer = MapboxGlwithLayerMixin;

/**
** Map.
**/
import MapboxGlMap from './lib/map/MapboxGl';
export const Map = MapboxGlMap;
export default Map;
