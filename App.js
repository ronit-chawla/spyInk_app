import MainContainer from './navigation/MainContainer';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Device from 'expo-device';

export default function App() {
	console.log('type:' + Device.deviceType);
	const [
		fontLoaded
	] = useFonts({
		EncodeSans : require('./assets/fonts/EncodeSans_Expanded-Regular.ttf')
	});
	// Device.deviceType gives a numerical value representing the type of device which the app is running on
	// using this we will check wheher it is om our device or not
	// For now we'll check if Device.deviceType === 1 -> The app is running on a PHONE to simulate the functionality
	return (
		<View
			style={{
				flex : 1
			}}
		>
			{Device.deviceType === 1 ? (
				<MainContainer />
			) : (
				<View
					style={{
						backgroundColor : '#000',
						flex            : 1
					}}
				/>
			)}
		</View>
	);
}
