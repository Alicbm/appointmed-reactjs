export interface Props {
  children: JSX.Element | JSX.Element[];
}

export type DoctorType = {
  id: number,
  name: string,
  email: string,
  cellphone: string,
  city: string,
  role: string,
  speciality: string,
  image: string,
  categoryId: number
} 

export type CategoryType = {
  id: number,
  name: string,
  image: string,
  doctors: DoctorType[]
}

export type AppContextType = {
  category: CategoryType[] | [],
  doctorSelected: DoctorType,
  setDoctorSelected: (data: DoctorType) => void
}