import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const header = { "Access-Control-Allow-Origin": "*" };

    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post(
            'https://66ae01cbb18f3614e3b67dfd.mockapi.io/crud/crud-youtube', {
            name: name,
            email: email,
            header,
        })
       
        .then(() => {
            history("/read");
        });
    };

    return <>
        <div className="d-flex justify-content-between m-2"> 
        <h2>Create</h2>
<Link to="/read">
        <button className="btn btn-primary">Show Data</button>
        </Link>
        </div>
        <form>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        {name}
        {email}
    </>
}

export default Create