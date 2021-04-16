import React, {StyleHTMLAttributes} from 'react';
import {
  StyleSheet,
  StyleSheetProperties,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface props {
  height?: number;
  width?: number;
  style?: StyleSheetProperties;
  props: any;
}

const gap = ({height = 0, width = 0, style = {}, ...props}) => {
  return <View style={{height, width, ...style}} {...props} />;
};

export default gap;

const styles = StyleSheet.create({});
