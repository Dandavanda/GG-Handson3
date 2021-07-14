import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
    const imgUrl = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif ";
    return (
        <div id="App">
            <form>
                <input className="form-label search" type="text" placeholder="Cari ... "></input>
                <button className="btn-primary">Cari</button>
            </form>
            <img src={imgUrl} />
        </div>
    )
}

export default Index;