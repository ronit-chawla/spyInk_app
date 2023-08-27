import MainContainer from './navigation/MainContainer';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { setCustomText } from 'react-native-global-props';

export default function App() {
	const [
		fontLoaded
	] = useFonts({
		EncodeSans : require('./assets/fonts/EncodeSans_Expanded-Regular.ttf')
	});
	return (
		<View
			style={{
				fontFamily : 'EncodeSans',
				flex       : 1
			}}
		>
			<MainContainer />
		</View>
	);
}
