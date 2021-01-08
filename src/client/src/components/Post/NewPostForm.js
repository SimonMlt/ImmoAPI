import React, {useState} from 'react';
import LeftNav from "../LeftNav";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../actions/post";

const NewPostForm = () => {
    const userData = useSelector((state) => state.userReducer);
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const createPost = () => {
        const data = new FormData();
        data.append('posterPseudo', userData.pseudo);
        data.append('posterId', userData._id);
        data.append('message', message);
        console.log(file)
        if (file) data.append("file", file);
        dispatch(addPost(data))
    }

    return (
        <div className="home">
            <LeftNav/>
            <div className="post-form">
                <form onSubmit={createPost}>
                    <label htmlFor="message">Message : </label>
                    <input name="message" id="message" placeholder="Description"
                           onChange={(e) => setMessage(e.target.value)}/><br/>
                    <label htmlFor="image">Image : </label>
                    <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png"
                           onChange={(e) => setFile(e.target.files[0])}/><br/>
                    <button type="submit" className="send">Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default NewPostForm;
