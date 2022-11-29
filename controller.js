import { useEffect, useState } from "react";
import './controller.css';

export default function Contronller() {
  const [data, setData] = useState([])



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // console.log(data);
      })
      .catch((error) => error)
    // setData(data)
  }, [])
  return (
    <div style={{ marginTop: 20, fontSize: 25 }}>
      Hello Controller Page
      <div style={{ textAlign: 'start' }}>

        {
          data.map((item) => {
            return (
              <div className="text-container" key={item.id}>
                <div className="textUid"><b style={{ fontSize: '30px', color: 'purple', marginRight: '10px' }}>ID: </b>{item.id} </div>
                <div className="textUid"><b style={{ fontSize: '30px', color: 'purple', marginRight: '10px' }}>Title: </b>{item.title}</div>
                <div className="textUid"><b style={{ fontSize: '30px', color: 'purple', marginRight: '10px' }}>Body: </b>{item.body}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
