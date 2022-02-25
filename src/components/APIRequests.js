import React, { useState, useEffect } from "react";
const Axios = require('axios');

//Axios.defaults.headers.common = {'Authorization': `32e63ff0-dfe2-433b-b928-8db306945229`}

const bodyParameters = { 'Authorization': `32e63ff0-dfe2-433b-b928-8db306945229` };


export default function useData() {
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');

    return (
        Axios.get('https://api.navitia.io/v1/coverage/sncf/journeys?from=admin%3Afr%3A31555&to=admin%3Afr%3A75056&datetime=20220215T161000&', bodyParameters)
            .then(res => {
                console.log(res);
                let e = [];
                e.push(res.data.journeys[0].sections[1].from.name, res.data.journeys[0].sections[1].to.name);
                console.log(e);
                setDepart(res.data.journeys[0].sections[1].from.name);
                //console.log(e);
            })
    )

}



