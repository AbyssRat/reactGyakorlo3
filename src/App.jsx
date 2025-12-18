import { useState, useEffect, use } from 'react'
import './App.css'
import axios from 'axios'

//CRUD készítés
//https://retoolapi.dev/WCTMk4/data

function App() {
  
  const [data, setData] = useState([])
  useEffect(() =>{
    getData();
  }, []);

  const url = 'https://retoolapi.dev/WCTMk4/data'

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const postData = async (newEntry) => {
    try {
      const response = await axios.post(url, newEntry);
      console.log('Data posted:', response.data);
      getData(); // Frissítjük az adatokat a POST után
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  const putData = async (id, updatedEntry) => {
    try {
      const response = await axios.put(`${url}/${id}`, updatedEntry);
      console.log('Data updated:', response.data);
      getData(); // Frissítjük az adatokat a PUT után
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log('Data deleted:', response.data);
      getData(); // Frissítjük az adatokat a DELETE után
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  // const [formData, setFormData] = useState({
  //   id: '',
  //   Toke: '',
  //   Aktiv: false,
  //   Szekhely: '',
  //   Megnevezes: ''
  // })
  


  return (
    <>
      <h1>axiosing my crud rn</h1>
      <button onClick={getData}>add ide</button>
      <button onClick={postData}>rakd oda</button>
      <button onClick={() => putData}>puty</button>
      <button onClick={() => deleteData}>delety</button>
      
    </>
  )
}

export default App
