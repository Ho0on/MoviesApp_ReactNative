import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { YELLOW_COLOR } from '../colors';

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => {
	return (
		<TouchableOpacity onPress={() => navigate('Two')}>
			<Text>go to two</Text>
		</TouchableOpacity>
	);
};
const ScreenTwo = ({ navigation: { navigate } }) => {
	return (
		<TouchableOpacity onPress={() => navigate('Three')}>
			<Text>go to three</Text>
		</TouchableOpacity>
	);
};
const ScreenThree = ({ navigation: { navigate } }) => {
	return (
		<TouchableOpacity onPress={() => navigate('Tabs', { screen: 'TV' })}>
			<Text>go to TV</Text>
		</TouchableOpacity>
	);
};

export default function Stack() {
	return (
		<NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false, headerTintColor: YELLOW_COLOR, animation: 'fade' }}>
			<NativeStack.Screen name="One" component={ScreenOne} />
			<NativeStack.Screen name="Two" component={ScreenTwo} />
			<NativeStack.Screen name="Three" component={ScreenThree} />
		</NativeStack.Navigator>
	);
}
