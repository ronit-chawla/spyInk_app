import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import GeocodeScreen from './screens/GeocodeScreen';
import BankScreen from './screens/BankScreen';
import PeopleScreen from './screens/PeopleScreen';
import VehicleScreen from './screens/VehicleScreen';

import Colours from '../Colours';
import HomeScreen from './screens/HomeScreen';
import AlertScreen from './screens/AlertScreen';
import Button from '../components/Button';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNav() {
	return (
		<Tab.Navigator
			initialRouteName="People"
			screenOptions={({ route }) => ({
				tabBarActiveTintColor   : '#fff',
				tabBarInactiveTintColor : '#aaa',
				headerShown             : false,
				labelStyle              : {
					paddingBottom : 7,
					fontSize      : 10
				},
				style                   : {
					padding : 10,
					height  : '1%'
				},
				tabBarStyle             : {
					backgroundColor : Colours.primary,
					height          : '10%'
				},
				tabBarIcon              : ({
					focused,
					color,
					size
				}) => {
					let iconName;
					let rn = route.name;

					if (rn === 'People') {
						iconName = focused
							? 'people'
							: 'people-outline';
					} else if (rn === 'Bank') {
						iconName = focused
							? 'cash'
							: 'cash-outline';
					} else if (rn === 'Geocode') {
						iconName = focused
							? 'location'
							: 'location-outline';
					} else if (rn === 'Vehicle') {
						iconName = focused
							? 'car'
							: 'car-outline';
					}

					// You can return any component that you like here!
					return (
						<Ionicons
							name={iconName}
							size={size}
							color={color}
						/>
					);
				}
			})}
		>
			<Tab.Screen
				name="Geocode"
				component={GeocodeScreen}
			/>
			<Tab.Screen
				name="Bank"
				component={BankScreen}
			/>
			<Tab.Screen
				name="People"
				component={PeopleScreen}
			/>
			<Tab.Screen
				name="Vehicle"
				component={VehicleScreen}
			/>
		</Tab.Navigator>
	);
}

function MainContainer() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header : ({ navigation, route }) => (
						<View
							style={{
								backgroundColor   :
									route.name === 'home'
										? Colours.secondary
										: Colours.secondary,
								paddingHorizontal : 40,
								paddingTop        : 20,
								display           : 'flex'
							}}
						>
							{route.name === 'alert' ? (
								<Button
									textStyle={{
										color : '#fff'
									}}
									style={{
										padding : 0
									}}
									onPress={() => {
										navigation.navigate(
											'home'
										);
									}}
								>
									<Ionicons
										name="ios-home"
										size={30}
										color="white"
									/>
								</Button>
							) : (
								<Button
									textStyle={{
										color : '#fff'
									}}
									style={{
										marginVertical : 0,
										marginVertical : 20
									}}
									onPress={() => {
										navigation.navigate(
											'alert'
										);
									}}
								>
									<Ionicons
										name="notifications"
										size={30}
										color="white"
									/>
								</Button>
							)}
						</View>
					)
				}}
			>
				<Stack.Screen
					name="home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="tab"
					component={TabNav}
				/>
				<Stack.Screen
					name="alert"
					component={AlertScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainContainer;
