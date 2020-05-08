import React, { useEffect, useState } from "react";
import { SERVER_REST_URI } from "../config";
import { getJwt } from "../utilities/jwtHelpers";
import fetch from 'node-fetch';

export default function OAuthApps() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(SERVER_REST_URI + '/oauth/apps', {
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
        console.log('items: ' + items)
        return (
            <ul>
                {items.map(item => (
                    <li key={item}>
                        <a href={`${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        );
    }
}
