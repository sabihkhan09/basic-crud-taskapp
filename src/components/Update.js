import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));

    }, []);

    const navigate = useNavigate();

    // here we are using axios.put put is meant update in this term
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("id...", id);
        axios.put(`https://66ae01cbb18f3614e3b67dfd.mockapi.io/crud/crud-youtube/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(() => {
            navigate("/read")
        })
    }

    return (
        <>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <button type="submit" className="btn btn-primary mx-2"
                    onClick={handleUpdate}
                >Update</button>
                <Link to="/read">
                <button className="btn btn-secondary mx-2"
                >Back</button>
                </Link>
            </form>
        </>
    )
}

export default Update