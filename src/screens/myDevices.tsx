import {Gap} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {category} from 'assets/data';

const {height, width} = Dimensions.get('screen');

const myDevices = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconEntypo name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Devices</Text>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 10,
          }}>
          <View style={[styles.iconWraper, {backgroundColor: '#8F87F5'}]}>
            <Image
              source={require('../assets/icons/png/cctvCam.png')}
              style={styles.icon}
            />
            <Text>CCTV</Text>
          </View>
          <Gap width={10} />
          <View style={[styles.iconWraper, {backgroundColor: '#78DEBA'}]}>
            <Image
              source={require('../assets/icons/png/airControl.png')}
              style={styles.icon}
            />
            <Text>AC</Text>
          </View>
          <View style={[styles.iconWraper, {backgroundColor: '#F47757'}]}>
            <Image
              source={require('../assets/icons/png/smartRefrig.png')}
              style={styles.icon}
            />
            <Text>Freezer</Text>
          </View>
          <Gap width={10} />
          <View style={[styles.iconWraper, {backgroundColor: '#F5DE72'}]}>
            <IconEntypo name="light-bulb" size={20} style={{marginRight: 10}} />
            <Text>Light</Text>
          </View>
          <View style={[styles.iconWraper, {backgroundColor: '#5994EE'}]}>
            <Image
              source={require('../assets/icons/png/smartWash.png')}
              style={styles.icon}
            />
            <Text>Washer</Text>
          </View>
          <Gap width={10} />
          <View style={[styles.iconWraper, {backgroundColor: '#EFA2F5'}]}>
            <Image
              source={require('../assets/icons/png/microwave.png')}
              style={styles.icon}
            />
            <Text>Oven</Text>
          </View>
        </View>
      </View>
      <View style={styles.category}>
        <Gap height={30} />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginHorizontal: 20}}>
          Room Category
        </Text>
        <Gap height={30} />
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
          ItemSeparatorComponent={() => <Gap width={20} />}
          keyExtractor={(a, i) => i.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('roomDetail', {item})}>
                <View
                  style={{
                    backgroundColor: item.color,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    width: 200,
                    height: 250,
                  }}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20}}
                    numberOfLines={2}
                    adjustsFontSizeToFit>
                    {item.name}
                  </Text>
                  <Image
                    source={item.img}
                    style={{
                      height: 180,
                      width: 200,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={{color: '#fff'}}>Add Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default myDevices;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 20},
  header: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  category: {paddingHorizontal: 0},
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
