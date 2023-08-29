import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Colours from '../../Colours';
import Card from '../../components/Card';
import Button from '../../components/Button';

const BankScreen = () => {
	const [
		IBAN,
		setIBAN
	] = useState('');
	const [
		bank,
		setBank
	] = useState();
	const getBank = async () => {
		const { data } = await axios.get(
			`${process.env.API}iban?iban=${IBAN}`,
			{
				headers : {
					'X-Api-Key' : process.env.API_KEY
				}
			}
		);
		setBank(data);
	};
	return (
		<View style={styles.screen}>
			<View style={styles.formControl}>
				<Text
					style={{ color: '#fff', fontSize: 14 }}
				>
					IBAN:
				</Text>
				<TextInput
					label="IBAN"
					style={styles.input}
					value={IBAN}
					onChangeText={val => setIBAN(val)}
					placeholder="Enter IBAN"
					placeholderTextColor="#aaa"
				/>
				<Button
					onPress={getBank}
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

			{bank && (
				<Card style={{ margin: 30 }}>
					<Text style={styles.text} e>
						{bank.bank_name}
					</Text>
					<Text style={styles.text}>
						Acc Number: {bank.account_number}
					</Text>
					<Text style={styles.text}>
						Bank Code: {bank.bank_code}
					</Text>
					<Text style={styles.text}>
						Country: {bank.country}
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

export default BankScreen;
