import React, {useContext} from "react";
import {Text, StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({route, navigation}) => {
    const {state, editBlogPost} = useContext(Context);
    const BlogPost = state.find((item) => {
        return item.id === route.params.id
    });
    return (
        <BlogPostForm initialValues={{title: BlogPost.title, content: BlogPost.content}} onSubmit={(title, content) => {
            editBlogPost(BlogPost.id, title, content, () => {navigation.pop()})
        }}/>
    );
}

const styles = StyleSheet.create({});

export default EditScreen;