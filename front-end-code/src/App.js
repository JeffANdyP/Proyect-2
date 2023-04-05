import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
// using a hook to for values
  const [data, setData] = useState();
  
//async funtion to wait for the axios library to return the requests
  const getData = async () => {
  const response = await axios.get('http://localhost:5000/')
  setData(response.data)
  }

  useEffect( () => {
    getData()
  },[]);
  return (
    <div>{data}</div>
  )

}
export default App