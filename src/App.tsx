
import { useEffect, useState } from 'react';
import '../src/index.css';

export default function App () {

  let [notess, setNotes] = useState({});

  notess = 
    {
      "id": 0,
      "content": "То, что было введено в поле ввода"
    }

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(notess),
    })
    .then(response => response.status)
    .catch((error) => console.log(error));
    console.log(notess);
  }

  const pullGet = () => {
    fetch('http://localhost:7070/notes')
    .then(response => response.json())
    .then((data) => {
      setNotes(data);
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    {handleChange}
  }, []);

  useEffect(() => {
    {pullGet}
  }, [handleChange])




  return (
    <>
      <form onSubmit={handleChange}>
        <input type="text" />
        <button type="submit">Получить</button>
      </form>
      <div className="obj">
       
        </div>
    </>

  )
}



