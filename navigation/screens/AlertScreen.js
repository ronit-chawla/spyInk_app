import {
	Button,
	StyleSheet,
	TextInput,
	View,
	Text,
	ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Colours from '../../Colours';

const AlertScreen = () => {
	const [
		msg,
		setMsg
	] = useState('');
	const [
		alerts,
		setAlerts
	] = useState([]);
	const getData = () => {
		axios
			.get('http://localhost:3000/')
			.then(res => setAlerts(res.data.alerts));

		console.log(alerts);
	};
	const sendAlert = async () => {
		console.log(msg);
		await axios.post('http://localhost:3000/', { msg });
		getData();
	};
	getData();
	return (
		<LinearGradient
			colors={[
				'#7785FF',
				'#0012AD'
			]}
			style={styles.background}
		>
			<View style={styles.icon}>
				<Ionicons
					name="warning-outline"
					size={200}
					color={Colours.primary}
				/>
			</View>
			<View style={styles.formControl}>
				<TextInput
					label="Message"
					style={styles.input}
					value={msg}
					onChangeText={val => setMsg(val)}
					placeholder="Enter Alert Message"
				/>
				<Button
					title="SEND"
					color="#f00"
					onPress={sendAlert}
				/>
			</View>
			{alerts.forEach(({ msg, date }) => {
				return (
        <>
						<Text>{msg}</Text>
						<Text>
							{moment(date, 'MM-DD-YYYY')}
						</Text>
          </>
				);
			})}
		</LinearGradient>
	);
};

export default AlertScreen;

const styles = StyleSheet.create({
	background  : {
		position : 'absolute',
		left     : 0,
		right    : 0,
		top      : 0,
		height   : '100%'
	},
	icon        : {
		position : 'absolute',
		left     : 100
	},
	input       : {
		paddingHorizontal : 2,
		marginHorizontal  : 50,
		paddingVertical   : 10,
		borderBottomColor : '#ccc',
		borderBottomWidth : 2,
		fontSize          : 20,
		color             : Colours.secondary,
		width             : '80%'
	},
	formControl : {
		width    : '95%',
		position : 'absolute',
		top      : 225
	}
});
