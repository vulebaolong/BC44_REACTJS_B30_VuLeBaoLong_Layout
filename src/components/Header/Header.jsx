import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container d-flex justify-content-between py-2 align-items-center fw-semibold text-white">
                    <h4 className="m-0">Start Boostrap</h4>

                    <div className="d-flex gap-3 text-white-50">
                        <h4 className="fs-6 m-0 active ">Home</h4>
                        <h4 className="fs-6 m-0 ">About</h4>
                        <h4 className="fs-6 m-0 ">Services</h4>
                        <h4 className="fs-6 m-0">Contact</h4>
                    </div>
                </div>
            </div>
        );
    }
}
