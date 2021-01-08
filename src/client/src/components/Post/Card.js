import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dateParser} from "../Utils";
import {updatePost} from "../../actions/post";
import DeleteCard from "./DeleteCard";


const Card = ({post}) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const updateItem = () => {
        if (textUpdate) {
            dispatch(updatePost(post._id, textUpdate));
        }
        setIsUpdated(false);
    };

    return (
        <li className="card-container" key={post._id}>
            <div className="card-left">
                <div className="card-header">
                    <div className="pseudo">
                        <h3>
                            {post.posterPseudo}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="card-right">
                <div className="card-header">
                <span>{dateParser(post.createdAt)}</span>
                </div><br/>
                {isUpdated === false && <p>{post.message}</p>}<br/>
                {isUpdated && (
                    <div className="update-post">
                <textarea
                    defaultValue={post.message}
                    onChange={(e) => setTextUpdate(e.target.value)}
                />
                        <div className="button-container">
                            <button className="btn" onClick={updateItem}>
                                Valider modification
                            </button>
                        </div>
                    </div>
                )}
                <img className="postimage" src={post.picture} alt=""/>
                {userData._id === post.posterId && (
                    <div className="button-container">
                        <div onClick={() => setIsUpdated(!isUpdated)}>
                            <img src="./img/icons/edit.svg" alt="edit" />
                        </div>
                        <DeleteCard id={post._id} />
                    </div>
                )}
            </div>
        </li>
    );
};

export default Card;
