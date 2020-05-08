import React, { useEffect, useState } from "react";
import { SERVER_REST_URI } from "../config";
import { getJwt } from "../utilities/jwtHelpers";
import fetch from 'node-fetch';
import ReactJson from 'react-json-view'

export default function GustoAPI() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(SERVER_REST_URI + '/gusto/v1/me', {
            headers: {
                'Authorization': `Bearer ${getJwt()}`
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        // @ts-ignore
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ReactJson src={items} displayDataTypes={false} />
        );
    }
}
