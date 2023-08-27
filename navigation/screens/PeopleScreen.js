import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button,
	FlatList
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Colours from '../../Colours';
import Card from '../../components/Card';

const PeopleScreen = () => {
	const [
		name,
		setName
	] = useState('');
	const [
		people,
		setPeople
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
		console.log(data);
		setPeople(data);
	};
	return (
		// <LinearGradient
		// colors={[
		// 		'#7785FF',
		// 		'#0012AD'
		// 	]}
		// 	style={styles.background}
		// >
		<View style={styles.screen}>
			<View style={styles.formControl}>
				<TextInput
					label="Name"
					style={styles.input}
					value={name}
					onChangeText={val => setName(val)}
					placeholder="Name"
					placeholderTextColor="#aaa"
				/>
				<Button
					title="Search"
					color={Colours.highlight}
					style={{ marginVertical: 40 }}
					onPress={getPeople}
				/>
			</View>
			{people && (
				<FlatList
					data={people}
					style={{ width: 400 }}
					renderItem={({ item: person }) => {
						return (
							<Card
								style={{ marginBottom: 10 }}
							>
								<Text style={styles.text} e>
									{person.name}
								</Text>
								{person.birthday && (
									<Text
										style={styles.text}
									>
										DOB:{' '}
										{person.birthday}
									</Text>
								)}
								{person.net_worth && (
									<Text
										style={styles.text}
									>
										Net Worth:
										{person.net_worth}
									</Text>
								)}
								{person.gender && (
									<Text
										style={styles.text}
									>
										Gender:{' '}
										{person.gender}
									</Text>
								)}
								{person.nationality && (
									<Text
										style={styles.text}
									>
										Nationality:{' '}
										{person.nationality}
									</Text>
								)}
								{person.height && (
									<Text
										style={styles.text}
									>
										Height:{' '}
										{person.height}
									</Text>
								)}
								{person.occupation && (
									<Text
										style={styles.text}
									>
										Occupation:{' '}
										{person.occupation.join(', ')}
									</Text>
								)}
							</Card>
						);
					}}
				/>
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
		color             : '#ccc',
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
