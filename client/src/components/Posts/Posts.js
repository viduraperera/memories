import React from 'react';
import Post from './Post/post';
import useStyles from './Styles';
import { useSelector } from "react-redux";


const Posts = ()=>{
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return(
        <>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </>

    );
}

export default Posts;