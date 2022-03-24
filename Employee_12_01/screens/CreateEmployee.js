import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.root} >
            <TextInput
                style={styles.inputStyle}
                label="Name"
                value={name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label="Phone Number"
                value={phone}
                theme={theme}
                mode="outlined"
                keyboardType="number-pad"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label="Email"
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label="Salary"
                value={salary}
                theme={theme}
                mode="outlined"
                keyboardType="number-pad"
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.inputStyle}
                //style={styles.inputStyle}
                label="Picture"
                value={picture}
                theme={theme}
                mode="outlined"
                onChangeText={text => setPicture(text)}
            />

            <Button mode="contained" onPress={() => setModal(true)}
                style={{ width: '50%', alignSelf: 'center', backgroundColor: '#1C8D73' }}
            >
                Upload Image
            </Button>

            <Button mode="contained" onPress={() => setModal(true)}
                style={{ width: '50%', alignSelf: 'center', backgroundColor: '#EDBF69', marginVertical: 12 }}
            >
                Save
            </Button>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}
            >

                <View style={styles.modalView} >

                    <View style={styles.modalContainer} >
                        <Button mode="contained" onPress={() => console.log('Clicked')} style={{ backgroundColor: '#6A1B4D' }} >
                            Camera
                        </Button>

                        <Button mode="contained" onPress={() => console.log('Clicked')}
                            style={{ backgroundColor: '#A77B06' }} >
                            Gallery
                        </Button>
                    </View>

                    <Button mode="contained" theme={theme} onPress={() => setModal(false)}
                        style={{ width: '50%', alignSelf: 'center', backgroundColor: '#242B2E' }}
                    >
                        Close
                    </Button>
                </View>

            </Modal>
        </View>
    );
}

const theme = {
    colors: {
        primary: "#02B290"
    },

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    inputStyle: {
        marginVertical: 10
    },
    modalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 12
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        backgroundColor: '#CAD5E2',
        padding: 10
    }
})

export default CreateEmployee;