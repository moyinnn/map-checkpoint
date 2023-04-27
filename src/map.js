    import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

    const Maps = () => {

    const mapStyles = {
    height: "800px",
    width: "100%",
    };

    const containerStyle = {
    margin: "auto",
    width: "80%",
    height: "800px",
    };

    const defaultCenter = {
    lat: 6.5244,
    lng: 3.3792,
    };

    
    return (
        <div style={containerStyle}>
        <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            <Marker position={defaultCenter}></Marker>
            </GoogleMap>
        </LoadScript>
        </div>
    );
    }
    

    export default Maps;