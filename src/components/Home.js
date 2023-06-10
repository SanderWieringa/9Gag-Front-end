import React, { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch('https://localhost:44329/api/Post');
        if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
            console.log("data: ", data)
        } else {
            throw new Error('Request failed with status ' + response.status);
        }
        } catch (error) {
        console.error('Error:', error.message);
        }
    };
    
    fetchData();
    }, []);

    return (
        <><h1>Home page</h1><section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    <div>
                        <div style={{ height: 580, width: "100%" }}>
                        <table>
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Photo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.photo}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    );
};
export default Home;