import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
    const { data, error } = useSWR(
        "http://localhost:8080/api/v1/hello",
        fetcher
    );

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    return (
        <div>
            <h1>{data.message}</h1>
            <p>aaaa</p>
        </div>
    )
}
