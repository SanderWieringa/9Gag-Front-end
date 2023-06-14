import React, { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //http://34.141.52.221.nip.io/api/Post
                //https://localhost:44329/api/Post
                //http://http://acmegag.com/api/Post
                const response = await fetch('http://34.141.52.221.nip.io/api/Post');
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
                        <div style={{ margin: "auto", position: "center", left: "10px", height: "auto", width: 1200 }}>
                            <table>
                                <tbody>
                                    {data.map(item => (
                                        <div style={{ paddingTop: "100px" }}>
                                            <tr key={item._id}>
                                                <td style={{ fontSize: "40px"}}>{item.title}</td>
                                            </tr>
                                            <tr key={item._id}>
                                                <td ><img width="100%" height="auto" src={"data:image/png;base64," + item.imageFile} /></td>
                                            </tr>
                                            <tr key={item._id}>
                                            <td style={{ fontSize: "40px"}}>{item.userId}</td>
                                            </tr>
                                        </div>

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