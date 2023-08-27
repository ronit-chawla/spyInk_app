import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Colours from '../../Colours';
import Card from '../../components/Card';
import Button from '../../components/Button';

const GeocodeScreen = () => {
	const [
		lat,
		setLat
	] = useState('');
	const [
		lng,
		setLng
	] = useState('');
	const [
		loc,
		setLoc
	] = useState();

	const getLoc = async () => {
		const {
			data
		} = await axios.get(
			`https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lng}`,
			{
				headers : {
					'X-Api-Key' :
						'kxX+8efYKTRblngBJqQ3Og==erYQLVHPT3F8jNgM'
				}
			}
		);
		setLoc(data[0]);
	};
	return (
		<View style={styles.screen}>
			<View style={styles.formControl}>
				<TextInput
					label="Latitude"
					style={styles.input}
					value={lat}
					onChangeText={val => setLat(val)}
					placeholder="Latitude"
					placeholderTextColor="#aaa"
				/>
				<TextInput
					label="Longitude"
					value={lng}
					style={styles.input}
					onChangeText={val => setLng(val)}
					placeholder="Longitude"
					placeholderTextColor="#aaa"
				/>
				<Button onPress={getLoc}>Search</Button>
			</View>

			{loc && (
				<Card style={{ margin: 30 }}>
					<Text style={styles.text} e>
						{loc.name}
					</Text>
					<Text style={styles.text}>
						State: {loc.state}
					</Text>
					<Text style={styles.text}>
						Country: {loc.country}
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

export default GeocodeScreen;
