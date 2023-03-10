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
];

export const Post = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:32768/api/Post')
            .then(response => response.json())
            .then(json => setData(json))
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
          <div style={{ height: 580, width: "100%" }}>
            <DataGrid
              getRowId={(r) => r.id}
              rows={data}
              columns={postColumns}
              pageSize={9}
            />
          </div>
        </div>
      );
};