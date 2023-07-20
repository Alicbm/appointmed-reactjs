export interface Props {
  children: JSX.Element | JSX.Element[];
}

export type HoraryType = {
  id:number,
  mondayStart: number,
  mondayEnd: number,
  tuesdayStart: number,
  tuesdayEnd: number,
  wednesdayStart: number,
  wednesdayEnd: number,
  thursdayStart: number,
  thursdayEnd: number,
  fridayStart: number,
  fridayEnd: number,
  doctorId: number,
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
  categoryId: number,
  reviews: [] | null,
  morning_schedule: HoraryType,
  afternoon_schedule: HoraryType,
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
  setDoctorId: (id: string) => void
}