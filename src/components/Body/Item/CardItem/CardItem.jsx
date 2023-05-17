import React, { Component } from "react";
import "./CardItem.css";

export default class CardItem extends Component {
    render() {
        return (
            <div className="col-3">
                <div className=" border border-dark">
                    <div>
                        <img
                            className="cardItem_img"
                            src="https://monngonmoingay.com/wp-content/uploads/2017/02/lau-ga-chua-cay-880.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-center p-3">
                        <h4>Card title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                            nesciunt necessitatibus perspiciatis reiciendis voluptatem a
                            voluptatibus natus sed, aspernatur vel.
                        </p>
                    </div>
                    <div className=" p-3 bg-body-tertiary d-flex justify-content-center align-items-center border-top ">
                        <button className="btn btn-primary ">Find out more</button>
                    </div>
                </div>
            </div>
        );
    }
}
