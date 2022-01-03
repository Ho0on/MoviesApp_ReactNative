import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movie from '../screens/Movie';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import { BLACK_COLOR, YELLOW_COLOR } from '../colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
	const isDark = useColorScheme() === 'dark';

	return (
		<Tab.Navigator
			sceneContainerStyle={{ backgroundColor: isDark ? BLACK_COLOR : 'white' }}
			screenOptions={{
				tabBarStyle: {
					backgroundColor: isDark ? BLACK_COLOR : 'white',
				},
				tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
				tabBarInactiveTintColor: isDark ? '#d2dae2' : '#808e9b',
				headerStyle: {
					backgroundColor: isDark ? BLACK_COLOR : 'white',
				},
				headerTitleStyle: {
					color: isDark ? 'white' : BLACK_COLOR,
				},
				tabBarLabelStyle: {
					marginTop: -5,
					fontSize: 12,
					fontWeight: '600',
				},
			}}
		>
			<Tab.Screen
				name="Movies"
				component={Movie}
				options={{
					tabBarIcon: ({ color, size }) => {
						return <Ionicons name="film-outline" color={color} size={size} />;
					},
				}}
			/>
			<Tab.Screen
				name="TV"
				component={Tv}
				options={{
					tabBarIcon: ({ color, size }) => {
						return <Ionicons name="tv-outline" color={color} size={size} />;
					},
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}
