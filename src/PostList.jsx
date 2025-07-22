import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./store/action/postAction";

const PostList = () => {

    const dispatch = useDispatch();
    const { post, loading, error } = useSelector((state) => state.post);

    useEffect( () => {
        dispatch(fetchPost())
    }, [dispatch])

    if(loading) return <p>Loading Data...</p>
    if (error) return <p>Error : {error}</p>
    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;