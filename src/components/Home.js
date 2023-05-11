import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const postColumns = [
    {
      field: "id",
      headerName: "Id",
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "photo",
      headerName: "Photo",
      width: 150,
    },
];

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // https://localhost:44329/api/Post
        // https://localhost:7238/api/Post
        // http://acmegag.com/api/Post
        // test
        fetch('http://acmegag.com/api/Post')
            .then(response => response.json())
            .then(json => setData(json))
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <><h1>Home page</h1><section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    <div>
                        <div>
                        </div>
                        <div style={{ height: 580, width: "100%" }}>
                            <DataGrid
                                getRowId={(r) => r.id}
                                rows={data}
                                columns={postColumns}
                                pageSize={9} />
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    );
};
export default Home;