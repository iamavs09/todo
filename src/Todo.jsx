// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [list, setList] = useState([]);
//   const [value, setValue] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value.trim() != "") {
//       setList((pv)=>[...pv, value]);
//       console.log(Date.now().toString());
//       setValue("");
//     }
//     else{
//       alert("Enter a todo")
//     }
//   };
//   const handlechange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <>
//       <main>
//         <h2>TODO 2023</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={value} onChange={handlechange} />
//           <button type="submit">Add</button>
//         </form>
//         {list.map((item) => (
//           <p key={Math.floor(Math.random() * Date.now()).toString(16)}>
//             {item}
//           </p>
//         ))}
//       </main>
//     </>
//   );
// }

// export default App;
