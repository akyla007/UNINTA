import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Button } from '../components/Button';

export function HomeScreen() {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo Aluno
            </Text>
            <View style={styles.checkContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={styles.checkbox}
                    tintColors={{ true: 'green', false: '#A370F7' }}
                />
                <Text style={styles.checkTitle}>
                    Marque a caixa se irá utilizar algumas das rotas hoje.
                </Text>
            </View>
            <Button/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 20,
    },
    checkContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        alignContent:'flex-end',
        bottom: 10
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    checkTitle: {
        flex: 1,
        margin: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF'
    },
    checkbox: {
        flex: 0,
        margin: 10,
        marginLeft: 20,
        scaleX: 1.5,
        scaleY: 1.5
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,0.8)',
        borderRadius: 5,
        textAlign: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    touchableItem: {
        borderRadius: 5,
        backgroundColor: "rgba(165, 114, 246, 0.6)",
        margin: 5,

    },
    touchableTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(206, 209, 35, 0.8)',
    }


})