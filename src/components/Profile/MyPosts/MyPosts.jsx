import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
    let newPostElement = React.createRef();
    const onAddPost = () => props.addPost()
    const onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText)
    }
    console.log('props.newPostText', props.newPostText)
    return (
        <div className={s.postsBlock}>
            <h3>
                My Posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts