import React from 'react'
import Header from '../../../components/HeaderLanding'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function TerapisTerdekat() {

    const position = [51.505, -0.09]

    return (
        <div>
            <Header />
            <div className="tw-relative tw-w-screen tw-h-screen">
                <div className="tw-absolute tw-w-full tw-h-full">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-items-end tw-bg-white tw-rounded-r-full tw-py-2 tw-px-4 tw-absolute tw-top-0 tw-left-0">
                    <span className="tw-font-semibold tw-text-4xl tw-text-primary">Fitur Terapis Terdekat</span>
                    <span className="tw-font-semibold tw-text-2xl">Pilih lokasi anda</span>
                </div>
            </div>
            
        </div>
    )
}
