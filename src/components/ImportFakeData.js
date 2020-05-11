import React from 'react';
import data from './FakeData/FakeData.json'

const ImportFakeData = () => {
    const handleProductD = () => {
         console.log("Clicked Hyse", data);
        fetch('http://localhost:4200/addServices', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body:JSON.stringify(data)
         })
         .then(res => res.json())
         .then(json => {
             console.log("post successfull",json);
         })
    }
    return (
        <div>
            <button onClick={handleProductD}>Add Products</button>
        </div>
    );
};

export default ImportFakeData;