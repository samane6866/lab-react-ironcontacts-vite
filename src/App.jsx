import "./App.css";
import contact from "./contacts.json";
import { useState } from "react";

function App() {
  const [allContact, setAllContact] = useState([...contact]);

  const [orderBy, setOrderBy] = useState("");

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };
  if (orderBy === "alphabetically") {
    allContact.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderBy === "popularity") {
    allContact.sort((a, b) => a.popularity - b.popularity);
  }
  const handelDelete=()=>{
    let deleteContact = allContact.filter((a) => a.id !== p.id)
     setAllContact([...deleteContact])
   
  }

  console.log(contact);
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button value="alphabetically" onClick={(e) => handleOrderChange(e)}>
        SortByName
      </button>
      <button value="popularity" onClick={(e) => handleOrderChange(e)}>
        SortByPopularity
      </button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>WonOscar</th>
          <th>wonEmmy</th>
          <th>Action</th>
        </thead>
        <tbody>
          {allContact.map((p) => (
            <tr>
              {" "}
              <td>
                <img
                  style={{ width: "250px" }}
                  src={p.pictureUrl}
                  alt={p.name}
                ></img>
              </td>
              <td>{p.name} </td>

              <td>{p.popularity.toFixed(2)}</td>
              <td> {p.wonOscar ? "🏆" : ""}</td>
              <td>{p.wonEmmy ? "🏆" : ""}</td>
              <button onClick={()=>handelDelete(p)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
