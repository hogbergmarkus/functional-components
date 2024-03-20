import React, { Component } from "react";
import PostItem from "./PostItem";
import css from "./css/Content.module.css";
import savedPosts from "../posts.json";

export class Content extends Component {
    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        );
    }
}

export default Content;
