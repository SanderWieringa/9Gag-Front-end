import React, { useState }from 'react';

const CreatePost = () => {
    const [post, setPost] = useState();
    const [selectedFile, setSelectedFile] = useState();
    var reader = new FileReader();

    const handleChange = (event) => {
        
        setPost({value: event.target.value});
        //console.log("event.target.value: ", event.target.value)
        //console.log("change1")
        // console.log("post.title: ", post.title)
        // console.log("post.photo: ", post.photo)
    }

    const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const getBase64 = (file) => {
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedFile(reader.result)
            //console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
     }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("change2")

        getBase64(selectedFile)

        const newPost = {
            title: post,
            photo: selectedFile
        };

        //console.log(this.state.value)
        //console.log("newPost.title: ", newPost.title)
        //console.log("newPost.photo: ", newPost.photo)

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify(newPost),
        };
      
        fetch("https://localhost:44329/api/Post", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Page content */}
        <main className="grow">

            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">9gag create post page.</h1>
                    </div>

                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Title <span className="text-red-600"></span></label>
                                <input type="text" onChange={handleChange} className="form-input w-full text-gray-300" placeholder="This is a title" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">File <span className="text-red-600"></span></label>
                                <input type="file" onChange={handleFileChange}/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    </div>
                </div>
            </section>
        </main>
        </div>
    );
}

export default CreatePost;