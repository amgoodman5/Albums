import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Buttons';

const AlbumDetail = ({ album }) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {thumbnailStyle,
     headerContentStyle,
     thumbnailContaierStyle,
     headerTextStyle,imageStyle} = styles;

return (
    <Card>
      <CardSection>
        <View style={thumbnailContaierStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: thumbnail_image}}
            />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source ={{uri:image}} style={imageStyle}/>
      </CardSection>
      <CardSection>
      <Button onPress={()=> Linking.openURL(url)}>
      Buy Now
      </Button>
      </CardSection>
    </Card>
    );
};

const styles = {
  headerTextStyle:{
    fontSize:18
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle:{
    height: 50,
    width:50
  },
  thumbnailContaierStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height:300,
    flex: 1,
    width:null
  }
}
export default AlbumDetail;
