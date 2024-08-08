
import { useEffect, useState } from 'react';
import '../src/index.css';

export default function App () {

  const [notess, setNotes] = useState(null);

  let obj = 
    {
      "id": 0,
      "content": "То, что было введено в поле ввода"
    }

  useEffect(() => {
    fetch('http://localhost:7070/notes')
    .then(response => response.json())
    .then((data) => {
      setNotes(data);
    })
    .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj),
    })
    .then(response => response.status)
    .catch((error) => console.log(error));
  }, []);


  return (
    <>
      {obj.content}
    </>

  )
}



