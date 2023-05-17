import React, { Component } from "react";

export default class Banner extends Component {
    render() {
        return (
            <div className="bg-primary-subtle py-5 px-4 mb-3">
                <h2 className="fs-1">A Warm Welcome</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod in,
                    similique nisi veniam consequuntur nemo dolor id fuga fugiat maiores
                    odio dolore. Veniam, ut. Voluptates delectus quidem aliquid quibusdam
                    tempore!
                </p>

                <button className="btn btn-primary">Call to action!</button>
            </div>
        );
    }
}
