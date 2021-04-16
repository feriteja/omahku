import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dashboard, Devices, RoomDetail} from '@screens';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconComMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateNode,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const {height, width} = Dimensions.get('screen');

const DrawerContent = ({progress}: any) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#aaa',
        }}>
        <Image
          source={require('../../assets/icons/png/smartHom4.png')}
          style={{
            resizeMode: 'contain',
            height: 100,
            width: 120,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>Secure</Text>
          <View
            style={{
              marginLeft: 10,
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#00dd00',
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>All item functional</Text>
          <IconEntypo size={15} name="check" color="#00dd00" />
        </View>
      </View>

      <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('dashboard')}
          style={styles.buttonNav}>
          <IconComMaterial
            name="home-automation"
            size={20}
            style={{marginRight: 10}}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('devices')}
          style={styles.buttonNav}>
          <IconMaterial name="device-hub" size={20} style={{marginRight: 10}} />
          <Text>My Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNav}>
          <IconOct name="gear" size={20} style={{marginRight: 10}} />
          <Text>Option</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#ff6666',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>
          Alert
        </Text>
      </TouchableOpacity>
    </View>
  );
};

let screenStyle: any;

const drawerNav = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      sceneContainerStyle={[screenStyle, {overflow: 'hidden'}]}
      drawerContent={({progress}) => {
        const scale = interpolateNode(progress, {
          inputRange: [0, 1],
          outputRange: [1, 0.9],
          extrapolate: Extrapolate.CLAMP,
        });

        const borderRadius = interpolateNode(progress, {
          inputRange: [0, 1],
          outputRange: [0, 30],
          extrapolate: Extrapolate.CLAMP,
        });
        const transX = interpolateNode(progress, {
          inputRange: [0, 1],
          outputRange: [0, width / 2],
          extrapolate: Extrapolate.CLAMP,
        });

        screenStyle = {
          transform: [
            {
              scale: scale,
            },
            {
              translateX: transX,
            },
          ],
          borderRadius,
        };
        return <DrawerContent progress={progress} />;
      }}
      drawerStyle={{flex: 1, width: '50%', backgroundColor: 'transparent'}}>
      <Drawer.Screen name="dashboard" component={Dashboard} />
      <Drawer.Screen name="devices" component={Devices} />
    </Drawer.Navigator>
  );
};

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={drawerNav} />
        <Stack.Screen name="roomDetail" component={RoomDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({
  buttonNav: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
