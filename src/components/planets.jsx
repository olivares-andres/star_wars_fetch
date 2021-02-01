import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const Planets = props => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container mt-4">
                <h1 className="charac mb-3">Planets</h1>
                <div className="card-deck">
                    <div className="row d-flex flex-row flex-nowrap overflow-auto">
                        {
                            !!store.planets &&
                            store.planets.map((item, index) => {
                                const urlTest = item.url.replace("http://swapi.dev/api/planets/", "");
                                return (
                                    <div className="col-3 mx-1" key={index}>
                                        <div className="card mb-3">
                                            <img src="https://place-hold.it/400x200" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <h6 className="card-text">Population: {item.population} </h6>
                                                <h6 className="card-text">Terrain: {item.terrain}</h6>
                                            </div>
                                            <div className="card-footer footer">
                                            <Link to={"infoplanets/" + urlTest.replace("/", "")} ><button type="button" className="btn btn-primary">Learn More</button></Link> <i className="far fa-heart" onClick={(e) => actions.getLikes(e)}></i>
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

export default Planets;