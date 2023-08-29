import {
	StyleSheet,
	TextInput,
	View,
	Text,
	FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
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
			.get(process.env.ALERT_API)
			.then(res => setAlerts(res.data.alerts));

		console.log(alerts);
	};
	const sendAlert = async () => {
		console.log(msg);
		await axios.post(process.env.ALERT_API, {
			msg
		});
		getData();
	};
	getData();
	return (
		<View
			style={{
				backgroundColor : Colours.secondary,
				flex            : 1
			}}
		>
			<View style={styles.icon}>
				<Ionicons
					name="warning-outline"
					size={200}
					color="#f00"
				/>
			</View>
			<View style={styles.formControl}>
				<TextInput
					label="Message"
					style={styles.input}
					value={msg}
					onChangeText={val => setMsg(val)}
					placeholder="Enter Alert Message"
					placeholderTextColor="#aaa"
				/>
				<Button
					textStyle={{ color: '#fff' }}
					style={{
						backgroundColor : Colours.primary,
						width           : '80%'
					}}
					onPress={sendAlert}
				>
					SEND
				</Button>
			</View>
			{alerts && (
				<FlatList
					style={{
						position : 'absolute',
						top      : 300,
						margin   : 40
					}}
					data={alerts}
					renderItem={({ item: alert }) => {
						return (
							<View
								style={{
									marginBottom      : 10,
									borderBottomColor :
										Colours.secondary,
									borderBottomWidth : 2,
									paddingVertical   : 10
								}}
							>
								<Text
									style={{
										color    : '#f00',
										fontSize : 24
									}}
								>
									{alert.msg}
								</Text>
								<Text
									style={{
										color : '#aaa'
									}}
								>
									{alert.date}
								</Text>
							</View>
						);
					}}
				/>
			)}
		</View>
	);
};

export default AlertScreen;

const styles = StyleSheet.create({
	icon        : {
		position : 'absolute',
		left     : 120
	},
	input       : {
		paddingHorizontal : 2,
		marginHorizontal  : 50,
		paddingVertical   : 10,
		borderBottomColor : '#ccc',
		borderBottomWidth : 2,
		fontSize          : 20,
		color             : '#fff',
		width             : '80%'
	},
	formControl : {
		width      : '95%',
		position   : 'absolute',
		top        : 225,
		display    : 'flex',
		alignItems : 'center'
	}
});
