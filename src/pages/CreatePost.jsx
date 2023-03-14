import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log("change1")
    }
    

    handleSubmit(event) {
        event.preventDefault();
        console.log("change2")


        const newPost = {
            title: this.state.value,
            photo: this.state.value
        };

        console.log(this.state.value)

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify(newPost),
        };
      
        fetch("https://localhost:32768/api/Post", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

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
                            <form onSubmit={this.handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Title <span className="text-red-600"></span></label>
                                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-input w-full text-gray-300" placeholder="This is a title" required />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">File <span className="text-red-600"></span></label>
                                    <input type="file"/>
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
}

export default CreatePost;