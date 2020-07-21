// Map
import MapboxGl from './lib/map/MapboxGl';

// Controls
import AttributionControl from './lib/controls/AttributionControl';
import FullscreenControl from './lib/controls/FullscreenControl';
import GeolocateControl from './lib/controls/GeolocateControl';
import NavigationControl from './lib/controls/NavigationControl';
import ScaleControl from './lib/controls/ScaleControl';

// Layers
import CanvasLayer from './lib/layers/CanvasLayer';
import GeojsonLayer from './lib/layers/GeojsonLayer';
import ImageLayer from './lib/layers/ImageLayer';
import RasterLayer from './lib/layers/RasterLayer';
import VectorLayer from './lib/layers/VectorLayer';
import VideoLayer from './lib/layers/VideoLayer';

// UI
import Marker from './lib/ui/Marker';
import Popup from './lib/ui/Popup';

// Mixins
import withEventsMixin from './lib/mixins/withEvents';
import withControlSelfEventsMixin from './lib/mixins/withControlSelfEvents';
import withControlMixin from './lib/mixins/withControl';
import withLayerMixin from './lib/mixins/withLayer';

// Map
export const MapboxGlMap = MapboxGl;

// Controls
export const MapboxGlAttributionControl = AttributionControl;
export const MapboxGlFullscreenControl = FullscreenControl;
export const MapboxGlGeolocateControl = GeolocateControl;
export const MapboxGlNavigationControl = NavigationControl;
export const MapboxGlScaleControl = ScaleControl;

// Layers
export const MapboxGlCanvasLayer = CanvasLayer;
export const MapboxGlGeojsonLayer = GeojsonLayer;
export const MapboxGlImageLayer = ImageLayer;
export const MapboxGlRasterLayer = RasterLayer;
export const MapboxGlVectorLayer = VectorLayer;
export const MapboxGlVideoLayer = VideoLayer;

// UI
export const MapboxGlMarkerUi = Marker;
export const MapboxGlPopupUi = Popup;

// Mixins
export const withEvents = withEventsMixin;
export const withControlSelfEvents = withControlSelfEventsMixin;
export const withControl = withControlMixin;
export const withLayer = withLayerMixin;

// Map
export default MapboxGl;
