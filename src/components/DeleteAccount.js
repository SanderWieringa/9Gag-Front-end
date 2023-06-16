import React, { useState } from 'react';
import axios from "axios";

const defaultImageSrc = '/img/default.svg'

const initialFieldValues = {
    title: '',
    // imageName:'',
    imageSrc: defaultImageSrc,
    imageFile: null,
}

const DeleteAccount = () => {
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // https://localhost:44329/api/Post
        // https://localhost:7238/api/Post
        // http://acmegag.com/api/Post

        var unfilteredToken = localStorage.getItem("user")
        var token = unfilteredToken.replace(/"/g, '');

        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'bearer ' + token
        // }

        // console.log("headers: ", headers)
        // console.log("headers.Authorization: ", headers.Authorization)
        // axios.delete('https://localhost:7146/api/GoogleAuthorization', token, {
        //     headers: headers,
        //     data: {
        //         jwt: token
        //     }
        // })
        //     .then((response) => {
        //         console.log('Account deleted succesfully:', response.data);
        //     })
        //     .catch((error) => {
        //         console.error('Error deleting account:', error);
        //     });


        fetch('https://localhost:7146/api/GoogleAuthorization', {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({ jwt: token }),
          })
          .then(response => response.json())
          .then(console.log("succes"))
          .then(localStorage.removeItem("user"))
          .catch((error) => {
            setError(error?.message);
          })
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
                                <h1 className="h1">9gag delete account.</h1>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-3 mt-6">
                                        <div className="w-full px-3">
                                            <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Delete Account</button>
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

export default DeleteAccount;