export interface Props {
  children: JSX.Element | JSX.Element[];
}

export type UserType  = {
  id: number,
  cellphone: string,
  city: string,
  email: string,
  name: string,
  password: string,
  role: string,
}

export type DayType = {
  id: number,
  day: number,
  start: number,
  end: number,
  morningId: number,
}

export type MorningType = {
  id: number,
  doctor_id: number,
  monday: DayType,
  tuesday: DayType,
  wednesday: DayType,
  thursday: DayType,
  friday: DayType,
}

// export type HoraryType = {
//   id:number,
//   mondayStart: number,
//   mondayEnd: number,
//   tuesdayStart: number,
//   tuesdayEnd: number,
//   wednesdayStart: number,
//   wednesdayEnd: number,
//   thursdayStart: number,
//   thursdayEnd: number,
//   fridayStart: number,
//   fridayEnd: number,
//   doctorId: number,
// }

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
  morning: MorningType,
  afternoon: MorningType,
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
  setDoctorId: (id: number) => void,
  doctors: DoctorType[],
  userLogin: UserType,
  setUserLogin: (UserType: UserType) => void
  token: string, 
  setToken: (token: string) => void
}