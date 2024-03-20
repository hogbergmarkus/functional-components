import React from "react";
import css from "./css/PostItem.module.css";

function PostItem({ savedPosts }) {
    return savedPosts.map(({ title, name, image, description }) => {
        return (
            <div className={css.searchItem} key={title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} alt="random" />
                <p>{description}</p>
            </div>
        );
    });
}

export default PostItem;
