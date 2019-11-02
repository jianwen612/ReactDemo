import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:48}}>My cat theme</Text>
          <Text style={{fontSize:36}}>First photo</Text>
          <Image source={{uri: "https://storage.googleapis.com/team15-apt-app.appspot.com/download_1.jpg", width: 420, height: 420}} />
          <Text style={{fontSize:36}}>Second photo</Text>
          <Image source={{uri: "https://storage.googleapis.com/team15-apt-app.appspot.com/viking_cat_16x9.jpg", width: 420, height: 420}} />
          <Text style={{fontSize:36}}>Third photo</Text>
          <Image source={{uri: "https://storage.googleapis.com/team15-apt-app.appspot.com/WechatIMG260.jpeg", width: 420, height: 420}} />
          <Text style={{fontSize:36}}>Fourth photo</Text>
          <Image source={{uri: "https://storage.googleapis.com/team15-apt-app.appspot.com/download.jpg", width: 420, height: 420}} />



        </ScrollView>
    );
  }
}
