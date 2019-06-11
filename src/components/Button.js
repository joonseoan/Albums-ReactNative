import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {
    const { buttonStyle, textStyle } = styles;

    return(
        <TouchableOpacity
            onPress={ whenPressed } 
            style={ buttonStyle }
        >
            <Text style={ textStyle }>{ children }</Text>
            {/* <Text style={ textStyle }>Click Me!</Text> */}
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        flex: 1,
        // alignItem: control "children" styling
        // position "itself" in flex box role
        alignSelf: 'stretch',
        backgrounColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        // use string
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button;