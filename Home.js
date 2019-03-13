import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Text,Dimensions,StatusBar,DeviceEventEmitter,BackHandler } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

 class Home extends Component {
    constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource : [] }
  }

    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={true} >
                        {images.map((image, i) => (
                            <Image style={styles.image} source={image.source} key={i} />
                        ))}
                    </ScrollView>
                </View>
            );
        }
        console.log('Please provide images');
        return null;
    }
}

export default class App extends Component {
    render() {
        const images = [
            {
                source: {
                    uri: 'http://www.jvcdubai.com/wp-content/uploads/2018/04/house-purchase-1019764_1920.jpg',
                },
            },
            {
                source: {
                    uri: 'https://wmaproperty.com/blog/wp-content/uploads/2016/08/8-Guidelines-of-Tenant-Management.jpg',
                },
            },
            {
                source: {
                    uri: 'data:image/jpeg;base64,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',
                },
            },
            {
                source: {
                    uri: 'data:image/jpeg;base64,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',
                },
            },

        ];

        return (
            <View style={styles.container}>
            <Text style={styles.welcome}> Welcome to Tenant Management </Text>
                <Home images={images}  />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#E0F0EC',
    },
    scrollContainer: {
        height,
    },
    image: {
        width,
        height,
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});