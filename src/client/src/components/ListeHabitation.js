import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getPosts } from "../actions/post";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const ListeHabitation = () => {
    const [loading, setLoading] = useState("loading");
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect(() => {
        if (loading===loading) {
            dispatch(getPosts());
            setLoading("idle");
        }
    }, []);
    return (
        <div>
            <ul>
                {!isEmpty(posts) && posts.map((post) => <Card post={post} key={post._id}/>)}
            </ul>
        </div>
    );
};

export default ListeHabitation;
