import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Colours from '../../Colours';
import Button from '../../components/Button';
import Card from '../../components/Card';
import env from '../../env';

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
			`${env.API_KEY}vinlookup?vin=${vin}`,
			{
				headers : {
					'X-Api-Key' : env.API_KEY
				}
			}
		);
		setVehicle(data);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.formControl}>
				<Text
					style={{ color: '#fff', fontSize: 14 }}
				>
					VIN:
				</Text>
				<TextInput
					label="VIN"
					style={styles.input}
					value={vin}
					onChangeText={val => setVin(val)}
					placeholder="Enter Vehicle Identification Number"
					placeholderTextColor="#aaa"
				/>
				<Button
					onPress={getVehicle}
					style={{
						backgroundColor : Colours.primary,
						display         : 'flex',
						justifyContent  : 'center',
						alignItems      : 'center'
					}}
					textStyle={{ color: '#fff' }}
				>
					Search
				</Button>
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
		backgroundColor   : Colours.secondary
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
