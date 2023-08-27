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
		const {
			data
		} = await axios.get(
			`https://api.api-ninjas.com/v1/iban?iban=${IBAN}`,
			{
				headers : {
					'X-Api-Key' :
						'kxX+8efYKTRblngBJqQ3Og==erYQLVHPT3F8jNgM'
				}
			}
		);
		setBank(data);
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
						label="IBAN"
						style={styles.input}
						value={IBAN}
						onChangeText={val => setIBAN(val)}
						placeholder="IBAN"
					/>
					<Button
						title="Search"
						color={Colours.primary}
						style={{ marginVertical: 40 }}
						onPress={getBank}
					/>
				</View>
			</View>
			{bank && (
				<Card style={{ marginBottom: 100 }}>
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

export default BankScreen;
