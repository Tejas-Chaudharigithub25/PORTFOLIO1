'use client'

import { createContext, useState, useEffect } from "react";

const JsonDataContext = createContext(null);

const JsonProvider = ({ children }) => {
    const [allApiData, setallApiData] = useState(null);

    useEffect(() => {
        const getJsonData = async () => {
            try {
                const res = await fetch('/api/json/');
                if (!res.ok) throw new Error("Failed to fetch JSON" + res.status);
                const jsonContext = await res.json();
                setallApiData(jsonContext.data);

            } catch (err) {
                console.error(err);
            }
        }
        getJsonData()
    }, []);

    return (
        <JsonDataContext.Provider value={allApiData}>
            {children}
        </JsonDataContext.Provider>
    )
}
export { JsonDataContext, JsonProvider }