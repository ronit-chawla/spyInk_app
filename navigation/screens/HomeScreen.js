import {
	View,
	Image,
	StyleSheet,
	Button
} from 'react-native';
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
				title="Continue"
				onPress={() => navigation.navigate('tab')}
			/>
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
		color : Colours.highlight
	},
	img    : {
		width  : 400,
		height : 220
	}
});
