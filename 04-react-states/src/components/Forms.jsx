import React from 'react';
import { useState } from 'react';

function Forms() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <h3>Form</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Your Name</label><br/>
                    <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Your Address</label><br/>
                    <textarea id="address" rows="2" value={address} onChange={(e) => {setAddress(e.target.value)}}></textarea>
                </div>
                <button id="btn-submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Forms;