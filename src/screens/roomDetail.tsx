import {Gap} from '@components';
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Animated, {
  Extrapolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface item {
  name: string;
  img: any;
  color: string;
  devices: {
    device: string;
    list: {
      name: string;
      batery: number;
    }[];
  }[];
}

const BateryValue = ({batery}: {batery: number}) => {
  const bateryValue = useSharedValue(0);

  useEffect(() => {
    bateryValue.value = batery;
  }, [batery]);

  const animatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      bateryValue.value,
      [0, 100],
      ['#ff5555', '#5B94E8'],
    );

    return {
      width: withTiming((200 * bateryValue.value) / 100),
      backgroundColor: color,
    };
  });

  return (
    <View>
      <Text>Batery</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#ddd',
            height: 10,
            width: 200,
            borderRadius: 99,
            marginRight: 20,
            overflow: 'hidden',
          }}>
          <Animated.View
            style={[
              {
                height: 10,
                width: 200,
                borderRadius: 999,
              },
              animatedStyle,
            ]}
          />
        </View>
        <Text style={{right: 0}}>{batery} %</Text>
      </View>
    </View>
  );
};

const status = ({route}: any) => {
  const {item}: {item: item} = route.params;
  const navigation = useNavigation();

  const [showDevice, setShowDevice] = useState(item.devices[0].device);
  const [deviceIndex, setDeviceIndex] = useState(0);

  const [subDeviceSelected, setSubDeviceSelected] = useState(0);

  useEffect(() => {
    console.log(item.devices[0].device);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: item.color}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconEntypo name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.deviceNav}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            textShadowColor: '#000',
            textShadowOffset: {height: 1, width: 1},
            textShadowRadius: 1,
          }}>
          {item.name}
        </Text>
        <Gap height={10} />
        <ScrollView horizontal>
          {item?.devices?.map((a, i) => {
            const imageSrc =
              a.device == 'cctv'
                ? require('assets/icons/png/cctvCam.png')
                : a.device == 'ac'
                ? require('../assets/icons/png/airControl.png')
                : require('../assets/icons/png/microwave.png');

            return (
              <TouchableOpacity
                onPress={() => {
                  setShowDevice(a.device);
                  setDeviceIndex(i);
                  setSubDeviceSelected(0);
                }}
                key={i + 'iconDevice'}
                style={{
                  backgroundColor: '#fafafafa',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  marginHorizontal: 10,
                  width: 50,
                }}>
                {a.device == 'lamp' ? (
                  <IconOcticons name="light-bulb" size={30} />
                ) : (
                  <Image source={imageSrc} style={{height: 30, width: 30}} />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View></View>
      </View>
      <View style={styles.deviceImageContainer}>
        <Image
          source={
            showDevice == 'lamp'
              ? require('../assets/milamp.png')
              : showDevice == 'ac'
              ? require('../assets/lgac.png')
              : require('../assets/xiaomiCCTV.png')
          }
          style={{height: 220, width: 220, resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentNameDevice}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {item?.devices[deviceIndex]?.list[subDeviceSelected]?.name}
          </Text>
          <Image
            source={
              showDevice == 'lamp'
                ? require('../assets/milamp.png')
                : showDevice == 'ac'
                ? require('../assets/lgac.png')
                : require('../assets/xiaomiCCTV.png')
            }
            style={{height: 80, width: 80, resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.contentStatus}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Status</Text>
          <View style={{flexDirection: 'row'}}>
            {item.devices[deviceIndex].list.map((a, i) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#BEE6F5',
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 999,
                }}
                onPress={() => setSubDeviceSelected(i)}
                key={i + 'subselec'}>
                <Text>{item.devices[deviceIndex].device + ' ' + i} </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{paddingVertical: 20}}>
            <BateryValue
              batery={item.devices[deviceIndex].list[subDeviceSelected].batery}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default status;

const styles = StyleSheet.create({
  header: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  deviceNav: {
    paddingHorizontal: 20,
  },
  deviceImageContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fafafa5f',
    flex: 1,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 15,
  },
  contentNameDevice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentStatus: {
    backgroundColor: '#ffffffcc',
    flex: 1,
    borderRadius: 20,
    padding: 30,
  },
});
