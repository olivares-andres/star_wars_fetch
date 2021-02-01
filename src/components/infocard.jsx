import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
    const { store, actions } = useContext(Context);  

    useEffect(() => {
        window.scrollTo(0, 0); // iniciar la pagina desde arriba
        actions.getPeople1(props.match.params.id);        

    }, []);    

    return (
        <>
            {
                !!store.character ? (
                    <>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-container">
                                        <img src="https://place-hold.it/800x600" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <h1 className="text-center">{store.character.name}</h1>
                                        <p className="mt-4 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="container text-center mt-4 text-danger">
                            <div className="row">
                                <div className="col-md-2">
                                    <h6>Name</h6>
                                    <h6 className="mt-3">{store.character.name}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Birth Year</h6>
                                    <h6 className="mt-3">{store.character.birth_year}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Gender</h6>
                                    <h6 className="mt-3">{store.character.gender}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Height</h6>
                                    <h6 className="mt-3">{store.character.height}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Skin Color</h6>
                                    <h6 className="mt-3">{store.character.skin_color}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Eye Color</h6>
                                    <h6 className="mt-3">{store.character.eye_color}</h6>
                                </div>
                            </div>
                        </div>
                    </>
                )
                : (
                    <h1>Loading...</h1>
                )
        }
        </>
    )
}

export default InfoCard;