import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';

// const loadFonts = fonts => fonts.map(font => Font.loadAsync(font));

// const loadImages = images =>
// 	images.map(image => {
// 		if (typeof image === 'string') {
// 			return Image.prefetch(image);
// 		} else {
// 			return Asset.loadAsync(image);
// 		}
// 	});

export default function App() {
	// const [ready, setReady] = useState(false);
	// const onFinish = () => setReady(true);
	// const startLoading = async () => {
	// 	const fonts = loadFonts([Ionicons.font]);
	// 	const images = loadImages([require('./Ho0on.png'), 'https://d33wubrfki0l68.cloudfront.net/b152eb4214943f96e83c4babde026b12221e68f1/a20c2/img/oss_logo.png']);

	// 	await Promise.all([...fonts, ...images]);
	// };

	const [assets] = useAssets([require('./Ho0on.png')]);
	const [loaded] = Font.useFonts(Ionicons.font);

	if (!assets || !loaded) {
		return <AppLoading />;
	}
	return <Text>sadfasdfsdf</Text>;
}
