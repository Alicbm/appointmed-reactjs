import React from 'react'
import { AppContextType, CategoryType, DoctorType, Props } from '../../types/index'
import { getCategories, getDoctor } from '../../api'

export const AppContext = React.createContext <AppContextType> ({} as AppContextType)

export function ContainerApp ({ children }: Props){
  const [category, setCategory] = React.useState <CategoryType[] | []> ([])
  const [doctorId, setDoctorId] = React.useState <string> ('1')
  const [doctorSelected, setDoctorSelected] = React.useState({} as DoctorType)

  const dataCategories = async () => {
    const data = await getCategories()
    setCategory(data);
  }

  React.useEffect(() => {
    dataCategories()
  }, [])
  
  React.useEffect(() => {
    
  const dataDoctors = async () => {
    
    console.log(doctorId);
    const data = await getDoctor(doctorId)
    setDoctorSelected(data);
  }

    dataDoctors()
  }, [doctorId])

  return (
    <AppContext.Provider value={{
      category,
      doctorSelected,
      setDoctorId,
    }}>
      {children}
    </AppContext.Provider>
  )
}


