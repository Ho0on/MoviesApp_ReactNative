import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { makeImgPath } from '../utils';
import { BlurView } from '@react-native-community/blur';
import Poster from './Poster';

interface SlideProps {
	backdropPath: string;
	posterPath: string;
	originalTitle: string;
	voteAverage: number;
	overview: string;
}

const Slide: React.FC<SlideProps> = ({ backdropPath, posterPath, originalTitle, voteAverage, overview }) => {
	const isDark = useColorScheme() === 'dark';

	return (
		<View style={{ flex: 1 }}>
			<BgImg style={StyleSheet.absoluteFill} source={{ uri: makeImgPath(backdropPath) }} />
			<BlurView blurAmount={10} style={StyleSheet.absoluteFill} blurType={isDark ? 'dark' : 'light'}>
				<Wrapper>
					<Poster path={posterPath} />
					<Column>
						<Title>{originalTitle}</Title>
						{voteAverage > 0 ? <Votes>⭐️ {voteAverage}/10</Votes> : null}
						<Overview>{overview.slice(0, 90)}...</Overview>
					</Column>
				</Wrapper>
			</BlurView>
		</View>
	);
};

const BgImg = styled.Image``;

const Title = styled.Text<{ isDark: Boolean }>`
	font-size: 16px;
	font-weight: 600;
	color: ${props => (props.isDark ? 'white' : props.theme.textColor)};
`;

const Wrapper = styled.View`
	flex-direction: row;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
const Column = styled.View`
	width: 40%;
	margin-left: 20px;
`;

const Overview = styled.Text<{ isDark: Boolean }>`
	margin-top: 10px;
	color: ${props => (props.isDark ? 'white' : props.theme.textColor)};
`;

const Votes = styled(Overview)`
	font-size: 12px;
`;

export default Slide;
