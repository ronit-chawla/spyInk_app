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
	// If Device.deviceType === 0 -> The app is running on an UNKNOWN DEVICE
	// Our Device being a spy tool is unknown and therefore using this we can check whether the device is authorised
	// For now we'll check if Device.deviceType === 1 -> The app is running on a PHONE
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
