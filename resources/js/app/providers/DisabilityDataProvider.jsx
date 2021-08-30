import React from 'react'
import { useAuth } from './AuthProvider'

const defaultValues = {
    data: {
        konsultasiTerapistId: -1,
        jamKonsultasis: [],
        konsultasiChat: null,
        disabilityForm: {
            openForm: false,
            disabilityId: -1,
        },
        tingkatanKurikulum: '',
        aspekKurikulum: {
            id: -1,
        },
    },
    setDataState: () => {}
}

export const DataContext = React.createContext(defaultValues)
export const useData = () => React.useContext(DataContext)

export default function DisabilityDataProvider({children}) {
    
    const { axios } = useAuth()

    const [data, _setData] = React.useState(defaultValues.data)

    const setData = (newState) => _setData(state => {
        return {
            ...state,
            ...newState
        }
    })
    return <DataContext.Provider value={{data, setData}}>
        {children}
    </DataContext.Provider>
}