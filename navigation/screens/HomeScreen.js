import { View, Image, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import React from 'react';
import Colours from '../../Colours';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Image
				source={require('../../assets/aaaaaaa.png')}
				style={styles.img}
			/>
			<Button
				onPress={() => navigation.navigate('tab')}
				style={{
					backgroundColor : Colours.primary,
					marginVertical  : 10
				}}
				textStyle={{ color: '#fff' }}
			>
				Continue
			</Button>
		</View>
	);
};
export default HomeScreen;

const styles = StyleSheet.create({
	screen : {
		backgroundColor : Colours.secondary,
		flex            : 1,
		justifyContent  : 'center',
		alignItems      : 'center'
	},
	btn    : {
		color      : Colours.highlight,
		fontFamily : 'EncodeSans'
	},
	img    : {
		width  : 400,
		height : 220
	}
});
