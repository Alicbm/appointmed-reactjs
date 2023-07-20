import axios  from "axios";

export const getCategories = async () => {
  return axios
    .get(`http://localhost:3000/api/v1/categories`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const getDoctor = async (id: string) => {
  return axios
    .get(`http://localhost:3000/api/v1/doctors/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}