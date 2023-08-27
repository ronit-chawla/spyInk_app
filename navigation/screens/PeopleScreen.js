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

const PeopleScreen = () => {
	const [
		name,
		setName
	] = useState('');
	const [
		person,
		setPerson
	] = useState();
	const getPeople = async () => {
		const {
			data
		} = await axios.get(
			`https://api.api-ninjas.com/v1/celebrity?name=${name}`,
			{
				headers : {
					'X-Api-Key' :
						'kxX+8efYKTRblngBJqQ3Og==erYQLVHPT3F8jNgM'
				}
			}
		);
		setPerson(data[0]);
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
						label="Name"
						style={styles.input}
						value={name}
						onChangeText={val => setName(val)}
						placeholder="Name"
					/>
					<Button
						title="Search"
						color={Colours.primary}
						style={{ marginVertical: 40 }}
						onPress={getPeople}
					/>
				</View>
			</View>
			{person && (
				<Card style={{ marginBottom: 100 }}>
					<Text style={styles.text} e>
						{person.name}
					</Text>
					<Text style={styles.text}>
						DOB: {person.birthday}
					</Text>
					<Text style={styles.text}>
						Net Worth:
						{person.net_worth}
					</Text>
					<Text style={styles.text}>
						Gender: {person.gender}
					</Text>
					<Text style={styles.text}>
						Nationality: {person.nationality}
					</Text>
					<Text style={styles.text}>
						Height: {person.height}
					</Text>
					<Text style={styles.text}>
						Occupation:{' '}
						{person.occupation.join(', ')}
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
		fontSize  : 24,
		textAlign : 'center',
		color     : Colours.highlight
	}
});
export default PeopleScreen;
