import React, { useContext, useRef } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';


const People = props => {
    const { store, actions } = useContext(Context);
    let nombre = useRef(null);


    return (
        <>
            <div className="container mt-4">
                <h1 className="charac mb-3">Characters</h1>
                <div className="card-deck">
                    <div className="row d-flex flex-row flex-nowrap overflow-auto">
                        {
                            !!store.people &&
                            store.people.map((item, index) => {
                                const urlTest = item.url.replace("http://swapi.dev/api/people/", "");
                                return (
                                    <div className="col-3 mx-1" key={index}>
                                        <div className="card mb-3">
                                            <img src="https://place-hold.it/400x200" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title" key={nombre}>{item.name}</h5>
                                                <h6 className="card-text">Gender: {item.gender} </h6>
                                                <h6 className="card-text">Hair Color: {item.hair_color}</h6>
                                                <h6 className="card-text">Eye Color: {item.eye_color}</h6>
                                            </div>
                                            <div className="card-footer footer">
                                                <Link to={"infoCard/" + urlTest.replace("/", "")} >
                                                    <button type="button" className="btn btn-primary">Learn More</button>
                                                </Link>
                                                <i className="far fa-heart" onClick={(e) => actions.getLikes(item.name)}></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default People;