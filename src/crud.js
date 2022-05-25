import axios from 'axios'
const url = 'http://localhost:3001/persons'

const showContacts = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
  }  
const addContacts = (obj) => {
  const request = axios.post(url, obj)
  return request.then(response => response.data)
}
const deleteContact = (id) => axios.delete(url + "/" + id, id)

export default { showContacts, addContacts, deleteContact }