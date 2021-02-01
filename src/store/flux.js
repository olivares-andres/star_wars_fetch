const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            planets: null,
            character: null,
            planets2: null,
            likes: [""]
        },
        actions: {
            getPeople: () => {
                fetch("https://swapi.dev/api/people/")
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({                            
                            people: data.results
                    })})
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {                        
                        setStore({
                            planets: data.results
                    })})
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getPeople1: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({                            
                            character: data
                    })})
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getPlanets1: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({                            
                            planets2: data
                    })})
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getLikes: (item) => {
               
                const store = getStore();
                const newStore = store.concat({likes: item.name});
                setStore(...store, newStore);
                console.log(newStore);

            }
        }
    }
}

export default getState;