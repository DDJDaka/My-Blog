import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'
import { Alert } from 'react-native';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map(el => {
                el.id === action.payload.id ? action.payload : el;
            })
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        try {
            //add in all the data retrieve form API when calling dispatch function
            //Reducer will then capture the data and return it
            const response = await jsonServer.get('/blogposts')
            dispatch({ type: 'get_blogposts', payload: response.data })
        } catch (error) {
            console.log(error);
            Alert.alert('Something went wrong', 'Could not retrieve list of blogposts');
        }
    };
};


const addBlogPost = () => {
    return async (title, content, callback) => {
        try {
            await jsonServer.post('blogposts', { title, content });
            if (callback) {
                callback();
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Something went wrong', 'Could not add blogpost');
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        try {
            dispatch({ type: 'delete_blogpost', payload: id })
            await jsonServer.delete(`/blogposts/${id}`);
        } catch (error) {
            console.log(error);
            Alert.alert('Something went wrong', 'Could not delete blogpost');
        }
    }
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        try {
            dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
            await jsonServer.put(`/blogposts/${id}`, { title, content })
            if (callback) {
                callback();
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Something went wrong', 'Could not edit blogpost');
        }
    }
};

//Last parameter is the initial state, can enter a default blog post
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);