import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Title, } from 'react-native-paper';


const Profile = () => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                {/* <Text style={styles.textColor} >Profile</Text> */}
            </View>

            <View style={{ alignItems: 'center', marginTop: -50 }} >
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={{ uri: "https://media.istockphoto.com/photos/smart-phone-mockup-template-with-yellow-wooden-balls-picture-id1306898001?b=1&k=20&m=1306898001&s=170667a&w=0&h=rD1_ya1VtDmM49MnNNOrJD2236wDm2_U_728nk5Jbt0=" }}
                />
            </View>
            <View style={{ alignItems: 'center' }} >
                <Title>Koushal Barick</Title>
                <Text style={[styles.textColor, { fontSize: 18 }]} >React Native</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textColor: {
        color: '#000'
    },
    header: {
        height: '15%',
        backgroundColor: '#207398'
    }
})
export default Profile;