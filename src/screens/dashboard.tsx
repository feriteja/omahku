import {Gap} from '@components';
import {useNavigation} from '@react-navigation/core';
import gap from 'components/Gap/gap';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';

const {height, width} = Dimensions.get('screen');

const comeIn = {
  from: {
    opacity: 0.5,
    transform: [{translateY: 100}],
  },
  to: {
    opacity: 1,
    transform: [{translateY: 0}],
  },
};

const dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#E9B8EF'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconEntypo name="chevron-right" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.ImageBack}>
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          OMAHKU
        </Text>
        <Text style={{color: '#fff'}}>Monitor and secure smart home</Text>
        <Image
          source={require('../assets/room.png')}
          style={{
            height: 240,
            width: 220,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Animatable.View
        duration={1500}
        animation={comeIn}
        style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/slide7.jpg')}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Home</Text>
            <Text style={{fontSize: 14}}>Pangalengan</Text>
          </View>
        </View>
        <Gap height={30} />
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Select New Devices
          </Text>
          <Gap height={20} />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingHorizontal: 10,
            }}>
            <Animatable.View
              duration={1500}
              animation={comeIn}
              style={styles.iconWraper}>
              <Image
                source={require('../assets/icons/png/cctvCam.png')}
                style={styles.icon}
              />
              <Text>CCTV</Text>
            </Animatable.View>
            <Gap width={10} />
            <Animatable.View
              duration={1500}
              animation={comeIn}
              style={styles.iconWraper}>
              <Image
                source={require('../assets/icons/png/airControl.png')}
                style={styles.icon}
              />
              <Text>AC</Text>
            </Animatable.View>
            <Animatable.View
              duration={1500}
              animation={comeIn}
              delay={300}
              style={styles.iconWraper}>
              <Image
                source={require('../assets/icons/png/smartRefrig.png')}
                style={styles.icon}
              />
              <Text>Freezer</Text>
            </Animatable.View>
            <Gap width={10} />
            <Animatable.View
              duration={1500}
              animation={comeIn}
              delay={300}
              style={styles.iconWraper}>
              <IconEntypo
                name="light-bulb"
                size={20}
                style={{marginRight: 10}}
              />
              <Text>Light</Text>
            </Animatable.View>
            <Animatable.View
              duration={1500}
              animation={comeIn}
              delay={600}
              style={styles.iconWraper}>
              <Image
                source={require('../assets/icons/png/smartWash.png')}
                style={styles.icon}
              />
              <Text>Washer</Text>
            </Animatable.View>
            <Gap width={10} />
            <Animatable.View
              duration={1500}
              animation={comeIn}
              delay={600}
              style={styles.iconWraper}>
              <Image
                source={require('../assets/icons/png/microwave.png')}
                style={styles.icon}
              />
              <Text>Oven</Text>
            </Animatable.View>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={{color: '#fff'}}>Add Device</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  header: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  ImageBack: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fafafa5f',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  icon: {height: 30, width: 30, resizeMode: 'contain', marginRight: 10},
  iconWraper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    flexBasis: 150,
    backgroundColor: '#fafafa44',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  bottom: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  addButton: {
    backgroundColor: '#ff6666',
    borderRadius: 15,
    width: (width * 2) / 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
