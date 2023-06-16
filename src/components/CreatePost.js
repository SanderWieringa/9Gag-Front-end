import React, { useState } from 'react';
import axios from "axios";

const defaultImageSrc = '/img/default.svg'

const initialFieldValues = {
    title: '',
    // imageName:'',
    imageSrc: defaultImageSrc,
    imageFile: null,
}

const CreatePost = () => {
    const [values, setValues] = useState(initialFieldValues)
    const [post, setPost] = useState()

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!values.imageFile) {
            console.error('No file selected');
            return;
        }

        // https://localhost:44329/api/Post
        // https://localhost:7238/api/Post
        // http://acmegag.com/api/Post

        const formData = new FormData()
        formData.append('Title', values.title)
        formData.append('ImageFile', values.imageFile)

        var unfilteredToken = localStorage.getItem("user")
        if (unfilteredToken != null) {
            var token = unfilteredToken.replace(/"/g, '');
        }

        const headers = {
            'Content-Type': 'multipart/form-data',
            'accept': 'text/plain',
            'Authorization': 'bearer ' + token
        }

        console.log("headers: ", headers)
        console.log("headers.Authorization: ", headers.Authorization)

        //https://localhost:44329/api/Post
        //http://34.141.52.221.nip.io/api/Post
        //http://acmegag.com/api/Post
        axios.post('https://localhost:44329/api/Post', formData, {
            headers: headers
        })
            .then((response) => {
                console.log('File uploaded successfully:', response.data);
                setPost(response.data);
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
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

                            {/* demo */}

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <img src={values.imageSrc} />
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Title <span className="text-red-600"></span></label>
                                            <input type="text" name="title" value={values.title} onChange={handleInputChange} className="form-input w-full text-gray-300" placeholder="This is a title" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">File <span className="text-red-600"></span></label>
                                            <input type="file" accept="image/*" onChange={showPreview} />
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