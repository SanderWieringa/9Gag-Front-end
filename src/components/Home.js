import React, { useState, useEffect } from "react";
// import { DataGrid } from "@material-ui/data-grid";

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

    //useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // https://localhost:44329/api/Post
        // https://localhost:7238/api/Post
        // http://acmegag.com/api/Post
        // test
        // fix 
        // fix 22
        // fix 1
        // fix 8
        // fix 9
        // fetch('https://localhost:44329/api/Post')
        //     .then(response => response.json())
        //     .then(json => setData(json))
        
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    //}, []);

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



                            {/* <DataGrid
                                getRowId={(r) => r.id}
                                rows={data}
                                columns={postColumns}
                                pageSize={9} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    );
};
export default Home;