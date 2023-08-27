import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Colours from '../../Colours';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';

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
		<LinearGradient
			colors={[
				'#7785FF',
				'#0012AD'
			]}
			style={styles.background}
		>
			<View style={styles.screen}>
				<View style={styles.formControl}>
					<TextInput
						label="Latitude"
						style={styles.input}
						value={lat}
						onChangeText={val => setLat(val)}
						placeholder="Latitude"
					/>
					<TextInput
						label="Longitude"
						value={lng}
						style={styles.input}
						onChangeText={val => setLng(val)}
						placeholder="Longitude"
					/>
					<Button
						title="Search"
						color={Colours.primary}
						style={{ marginVertical: 40 }}
						onPress={getLoc}
					/>
				</View>
			</View>
			{loc && (
				<Card style={{ marginBottom: 300 }}>
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
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	screen      : {
		flex              : 1,
		justifyContent    : 'space-between',
		paddingVertical   : 100,
		paddingHorizontal : 40,
		alignItems        : 'flex-start'
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
		color             : Colours.secondary,
		width             : '100%'
	},
	formControl : {
		width : '100%'
	},
	text        : {
		fontSize  : 32,
		textAlign : 'center',
		color     : Colours.highlight
	}
});

export default GeocodeScreen;
