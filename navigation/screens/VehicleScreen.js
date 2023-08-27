import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Colours from '../../Colours';
import Card from '../../components/Card';
import { LinearGradient } from 'expo-linear-gradient';

const VehicleScreen = () => {
	const [
		vin,
		setVin
	] = useState('');
	const [
		vehicle,
		setVehicle
	] = useState();

	const getVehicle = async () => {
		const {
			data
		} = await axios.get(
			`https://api.api-ninjas.com/v1/vinlookup?vin=${vin}`,
			{
				headers : {
					'X-Api-Key' :
						'kxX+8efYKTRblngBJqQ3Og==erYQLVHPT3F8jNgM'
				}
			}
		);
		setVehicle(data);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.formControl}>
				<TextInput
					label="VIN"
					style={styles.input}
					value={vin}
					onChangeText={val => setVin(val)}
					placeholder="Vehicle Identification Number"
					placeholderTextColor="#aaa"
				/>
				<Button
					title="Search"
					color={Colours.highlight}
					style={{ marginVertical: 40 }}
					onPress={getVehicle}
				/>
			</View>

			{vehicle && (
				<Card style={{ margin: 30 }}>
					<Text style={styles.text} e>
						Manufacturer: {vehicle.manufacturer}
					</Text>
					<Text style={styles.text}>
						Country: {vehicle.country}
					</Text>
					<Text style={styles.text}>
						World Manufacturer Identifier:{' '}
						{vehicle.wmi}
					</Text>
					<Text style={styles.text}>
						Year: {vehicle.years[0]}
					</Text>
				</Card>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	screen      : {
		flex              : 1,
		justifyContent    : 'space-between',
		paddingVertical   : 100,
		paddingHorizontal : 40,
		alignItems        : 'flex-start',
		backgroundColor   : Colours.primary
	},
	background  : {
		position : 'absolute',
		left     : 0,
		right    : 0,
		top      : 0,
		height   : '100%'
	},
	input       : {
		paddingHorizontal : 2,
		paddingVertical   : 10,
		borderBottomColor : '#ccc',
		borderBottomWidth : 2,
		fontSize          : 20,
		color             : '#fff',
		width             : '100%'
	},
	formControl : {
		width : '100%'
	},
	text        : {
		fontSize  : 24,
		textAlign : 'center',
		color     : Colours.highlight
	}
});

export default VehicleScreen;
