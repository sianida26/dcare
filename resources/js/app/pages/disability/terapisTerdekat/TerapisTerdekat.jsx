import React from 'react'
import Header from '../../../components/HeaderLanding'
import { useAuth } from '../../../providers/AuthProvider'
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

export default function TerapisTerdekat() {

    const position = [-7.895279, 112.609193]

    const { axios } = useAuth()

    const [ data, setData ] = React.useState([])

    React.useEffect(() => {
        axios({
            url: '/terapist/findNearby',
            method: 'post',
        })
        .then(response => {
            console.log(response.data) //todo remove log
            setData(response.data)
        })
        .catch(error => {
            console.log('error')
            console.log(error)
        })
    }, [])

    const LeafletMarker = Leaflet.icon({
        iconUrl: '/storage/assets/icons/marker-terapis.png',
        iconSize: [50,60],
        iconAnchor: [25,50],
    })

    return (
        <div className="tw-w-screen tw-min-h-screen">
            <Header />
            <div className="tw-relative tw-w-screen tw-h-screen tw-pt-16 tw-px-3">
                <div className="tw-w-full tw-h-full" style={{zIndex: -1}}>
                    <MapContainer 
                        center={position}
                        zoom={12}
                        zoomControl={false}
                    >
                        {/* <Marker 
                            position={[-7.895279, 112.609193]}
                            icon={LeafletMarker}
                        >
                            <Popup>
                                <div className="tw-flex tw-flex-col tw-gap-1">
                                    <span className="tw-font-semibold">Mas Edzgar</span>
                                    <div className="tw-flex tw-gap-1">
                                        <span className="tw-font-semibold">Spesialitas</span>
                                        <span className="tw-font-semibold">:</span>
                                        <span>Disabilitas Intelektual</span>
                                    </div>
                                </div>
                                
                            </Popup>
                        </Marker> */}
                        {
                            data.map((data, i) => <Marker 
                                position={data.location}
                                icon={LeafletMarker}
                                key={i}
                            >
                                <Popup>
                                    <div className="tw-flex tw-flex-col tw-gap-1">
                                        <span className="tw-font-semibold">{data.name}</span>
                                        <div className="tw-flex tw-gap-1">
                                            <span className="tw-font-semibold">Spesialitas</span>
                                            <span className="tw-font-semibold">:</span>
                                            <span>{data.speciality}</span>
                                        </div>
                                    </div>
                                    
                                </Popup>
                            </Marker>)
                        }
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <ZoomControl position="bottomright" />
                    </MapContainer>
                </div>
                <div 
                    className="tw-flex tw-flex-col tw-gap-4 tw-items-end tw-bg-white tw-rounded-r-full tw-py-2 tw-px-4 tw-absolute tw-top-16 tw-left-0"
                    style={{zIndex: 1001}}
                >
                    <span className="tw-font-semibold tw-text-2xl tw-text-primary">Cari Terapis Terdekat</span>
                    {/* <span className="tw-font-semibold tw-text-xl">Pilih lokasi anda</span> */}
                </div>
            </div>
            
        </div>
    )
}
