import MainContainer from './navigation/MainContainer';
import { View, Text } from 'react-native';
import { secondary } from './Colours';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useState } from 'react';
import { setCustomText } from 'react-native-global-props';

const fetchFonts = () => {
	return Font.loadAsync({
		EncodeSans : require('./assets/fonts/EncodeSans_Expanded-Regular.ttf')
	});
};

export default function App() {
	Text.defaultProps.style = { fontFamily: 'EncodeSans' };
	const [
		fontLoaded,
		setFontLoaded
	] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={err => console.log(err)}
			/>
		);
	}
	const customTextProps = {
		style : {
			fontFamily : 'EncodeSans'
		}
	};
	setCustomText(customTextProps);
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
