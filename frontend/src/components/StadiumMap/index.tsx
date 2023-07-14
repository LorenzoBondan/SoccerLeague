import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './styles.css';

type Props = {
    lat: number;
    lng: number;
    location: string;
}

const StadiumMap = ({lat, lng, location} : Props) => {

    const initialPosition = {
        lat: lat,
        lng: lng
    }

    return(
        <div className='stadium-map-container'>
            <MapContainer center={initialPosition} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={initialPosition}>
                <Popup>
                    {location}
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default StadiumMap;