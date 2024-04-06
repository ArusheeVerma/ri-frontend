import * as api from '../api/index.js';
//Action Creators: redux thunk
export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error.message);
    }

    // const action={type:'FETCH_ALL', payload:[]}

    // dispatch(action);
}
export const createPosts=(post)=>async(dispatch)=>{
    try {
        const {data}= await api.createPost(post);
        dispatch({type: 'CREATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }

    // const action={type:'FETCH_ALL', payload:[]}

    // dispatch(action);
}

export const updatePost=(id, post)=>async(dispatch)=>{
    try {
        const {data}= await api.updatePost(id, post);
        dispatch({type:'UPDATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}