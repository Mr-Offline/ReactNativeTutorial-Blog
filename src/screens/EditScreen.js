import React, {useContext} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {Context} from "../context/BlogContext";

const EditScreen = ({route}) => {
    const {state} = useContext(Context);
    const BlogPost = state.find((item)=>{item.id === route.params.id});
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>{setTitle(text)}}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>{setContent(text)}} />
            <Button title="Edit Blog Post" onPress={()=>{}} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default EditScreen;