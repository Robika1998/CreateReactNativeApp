//  type State = {
//     id: number;
//     title: number;
//     text: string; 
//     image: string; 
//     createdAt: Date; 
// }

// export const ContextProvider = () => {
//     const initialState: State = { 
//         id: 1,
//         title: 10,
//         text: "",
//         image: "",
//         createdAt: new Date(),
//     };



//     return (
//         // Your context provider component
//         null
//     );
// }


import React from 'react';
import { View, Text, Image } from 'react-native';
import { State } from './types';

interface State {
    id: number;
    title: number;
    text: string;
    image: string;
    createdAt: Date;
}

const ContextProvider: React.FC = () => {
    const initialState: State = { 
        id: 1,
        title: 10,
        text: "",
        image: "",
        createdAt: new Date(),
    };

  

    return (
       
        <View>
            <Text>{initialState.title}</Text>
     
        </View>
    );
}

export default ContextProvider;

