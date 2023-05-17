import React, { Component } from "react";
import CardItem from "./CardItem/CardItem";

export default class Item extends Component {
    render() {
        return (
            <div className="row">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        );
    }
}
