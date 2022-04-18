import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const [newSkill, setNewSkill] = useState('');
    const [greeting, setGreeting] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Bom Dia!');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa Tarde!')
        } else if (currentHour >= 18) {
            setGreeting('Boa Noite!')
        }
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Bem vindo, Aluno!
                </Text>
                <Text style={styles.greetings}>
                    {greeting}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Coloque seu R.A"
                    placeholderTextColor='#555'
                    onChangeText={() => { }}
                />
                <Button onPress={() => { navigation.navigate("Home") }} />
                
                <Text style={[styles.title, { marginVertical: 50, }]}>
                    My Skills
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 20,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#FFF',

    }
})