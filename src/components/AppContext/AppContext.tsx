import React from 'react'
import { AppContextType, CategoryType, DoctorType, Props } from '../../types/index'
import { getCategories } from '../../api'

export const AppContext = React.createContext <AppContextType> ({} as AppContextType)

export function ContainerApp ({ children }: Props){
  const [category, setCategory] = React.useState <CategoryType[] | []> ([])
  const [doctorSelected, setDoctorSelected] = React.useState({} as DoctorType)

  const data = async () => {
    const data = await getCategories()
    setCategory(data);
    console.log(data);
  }

  React.useEffect(() => {
    data()
  }, [])
  

  return (
    <AppContext.Provider value={{
      category,
      doctorSelected,
      setDoctorSelected,
    }}>
      {children}
    </AppContext.Provider>
  )
}


