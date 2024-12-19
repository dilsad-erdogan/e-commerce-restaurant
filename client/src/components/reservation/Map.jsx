import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 39.92509583050756,
    lng: 32.83715498753694
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAazYILhHiQcPqXuKKUWHsq4SB8j8VoUFU"
    });

    return (
        <div className="w-full h-full">
            {isLoaded ? (
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    <Marker position={center} />
                </GoogleMap>
            ) : (
                <h1 className="text-white font-bold">Map loading...</h1>
            )}
        </div>
    );
};

export default Map;