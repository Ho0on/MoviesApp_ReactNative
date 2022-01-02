import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';

const Movie: React.FC<NativeStackScreenProps<any, 'Movie'>> = ({ navigation: { navigate } }) => (
	<Btn
		onPress={() => {
			navigate('Stack', { screen: 'Three' });
		}}
	>
		<Title>Movie</Title>
	</Btn>
);

export default Movie;

const Btn = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.mainBgColor};
`;

const Title = styled.Text`
	color: ${props => props.theme.textColor};
`;
