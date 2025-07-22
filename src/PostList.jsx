import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./store/action/postAction";

const PostList = () => {

    const dispatch = useDispatch();
    const { post, loading, error } = useSelector((state) => state.post);

    useEffect( () => {
        dispatch(fetchPost())
    }, [dispatch])

    return(
        <div>

        </div>
    )
}

export default PostList;