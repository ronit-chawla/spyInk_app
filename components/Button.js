import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import Colours from '../Colours';

const Button = props => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={props.onPress}
		>
			<View
				style={{ ...styles.button, ...props.style }}
			>
				<Text
					style={{
						...styles.buttonText,
						...props.textStyle
					}}
				>
					{props.children}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button     : {
		backgroundColor   : Colours.secondary,
		paddingVertical   : 12,
		paddingHorizontal : 30,
		borderRadius      : 25,
		marginVertical    : 20
	},
	buttonText : {
		color      : Colours.highlight,
		fontSize   : 18,
		fontFamily : 'EncodeSans'
	}
});

export default Button;
