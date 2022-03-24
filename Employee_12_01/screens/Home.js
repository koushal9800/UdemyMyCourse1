import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';


const Home = () => {

    const data = [
        { id: 1, name: 'firstName01', position: 'test01' },
        { id: 2, name: 'firstName02', position: 'test02' },
        { id: 3, name: 'firstName03', position: 'test03' },
        { id: 4, name: 'firstName04', position: 'test04' },
    ]

    const renderList = ((item) => {
        return (
            <Card style={styles.card} >
                <View style={styles.container} >
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1637966496285-ea1f91852c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                    />
                    <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 16, }} >{item.name}</Text>
                        <Text>{item.id}</Text>
                    </View>

                </View>
            </Card>
        )
    })

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => item.id}
            />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 5
    },
    container: {
        flexDirection: 'row',
        padding: 6
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home;