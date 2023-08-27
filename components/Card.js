import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../Colours';

const Card = props => {
	return (
		<View style={{ ...styles.card, ...props.style }}>
			{props.children}
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card : {
		backgroundColor : Colors.secondary,
		shadowColor     : Colors.highlight,
		shadowOpacity   : 0.26,
		shadowOffset    : {
			width  : 0,
			height : 2
		},
		shadowRadius    : 8,
		elevation       : 5,
		borderRadius    : 10,
		padding         : 40,
		margin          : 10,
		width           : '85%'
	}
});
