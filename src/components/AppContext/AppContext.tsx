import React from 'react'
import { AppContextType, CategoryType, DoctorType, Props } from '../../types/index'
import { getCategories, getDoctor } from '../../api'

export const AppContext = React.createContext <AppContextType> ({} as AppContextType)

export function ContainerApp ({ children }: Props){
  const [category, setCategory] = React.useState <CategoryType[] | []> ([])
  const [doctorId, setDoctorId] = React.useState <number> (1)
  const [doctorSelected, setDoctorSelected] = React.useState({} as DoctorType)
  const [doctors, setDoctors] = React.useState <DoctorType[] | []> ([])

  const dataCategories = async () => {
    const data = await getCategories()
    setCategory(data);
  }

  React.useEffect(() => {
    dataCategories()
  }, [])
  
  React.useEffect(() => {
    
  const dataDoctors = async () => {
    const allDoctors = await getDoctor()
    setDoctors(allDoctors)

    let oneDoctor = allDoctors.find((doctor: DoctorType) => doctor.id === doctorId)
    setDoctorSelected(oneDoctor);
  }

    dataDoctors()
  }, [doctorId])

  return (
    <AppContext.Provider value={{
      category,
      doctorSelected,
      setDoctorId,
      doctors
    }}>
      {children}
    </AppContext.Provider>
  )
}


