import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState('');

    function getData() {
        axios.get("https://66ae01cbb18f3614e3b67dfd.mockapi.io/crud/crud-youtube")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    function handleDelete(id) {
        axios.delete(`https://66ae01cbb18f3614e3b67dfd.mockapi.io/crud/crud-youtube/${id}`)
            .then(() => {
                getData();
            })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)

    }


    useEffect(() => {
        getData();
    }, []); // Only call getData once when the component mounts

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" 
                type="checkbox" 
                onClick={() => {
                    if( tabledark === 'table-dark' ) setTableDark("")
                        else setTableDark("table-dark")}}
                />
            </div>

            <div className="d-flex justify-content-between m-2">
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachData) => (
                        <tr key={eachData.id}>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <Link to="/update">
                                <td><button className="btn btn-success"
                                    onClick={() => setToLocalStorage(
                                        eachData.id,
                                        eachData.name,
                                        eachData.email
                                    )}>Edit</button></td>
                            </Link>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Read;
