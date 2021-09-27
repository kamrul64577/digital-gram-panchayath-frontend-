// import React, { useState, useEffect } from 'react';
// import {fireDb }from "../../firebaseConfig";
// import { Link } from "react-router-dom";
// // import './Home.css';


// const Home = () => {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         fireDb.child("contacts").on("value", (snapshot) => {
//             if (snapshot.val() !== null) {
//                 setData({ ...snapshot.val() });
//             } else {
//                 setData({});
//             }
//         });

//         return () => {
//             setData({})
//         };
//     }, []);

//     const onDelete = (id) => {
//         if (window.confirm("Are you sure that you wanted to delete that contact ?")) {
//             fireDb.child('contacts/${id}').remove((err) => {
//                 if (err) {
//                     TransformStream.error(err)
//                 } else {
//                     TransformStream.success("Contact deleted Successfully");
//                 }
//             });
//         }
//     };

//     return (
//         <div style={{ marginTop: "100px" }}>
//             <table className="styled-table">
//                 <thead>
//                     <tr>
//                         <th style={{ textAlign: "center" }}>No.</th>
//                         <th style={{ textAlign: "center" }}>Name</th>
//                         <th style={{ textAlign: "center" }}>Email</th>
//                         <th style={{ textAlign: "center" }}>Contact</th>
//                         <th style={{ textAlign: "center" }}>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Object.keys(data).map((id, index) => {
//                         return (
//                             <tr key={id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td>{data[id].name}</td>
//                                 <td>{data[id].email}</td>
//                                 <td>{data[id].contact}</td>
//                                 <td>
//                                     <link to={'/update/${id}'}>
//                                         <button className="btn-edit">Edit</button>
//                                     </link>
//                                     <button className="btn-delete"
//                                         onClick={() => onDelete(id)}>Delete</button>
//                                     <link to={'/view/${id}'}>
//                                         <button className="btn-view">View</button>
//                                     </link>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };