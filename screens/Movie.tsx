import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, View, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import Slide from '../components/Slide';
import VMedia from '../components/VMedia';
import HMedia from '../components/HMedia';
import { useQuery } from 'react-query';
import { moviesApi } from '../api';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Movie: React.FC<NativeStackScreenProps<any, 'Movie'>> = () => {
	const [refreshing, setRefreshing] = useState(false);
	const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery('nowPlaying', moviesApi.nowPlaying);
	const { isLoading: upcomingLoading, data: upcomingData } = useQuery('upcoming', moviesApi.upcoming);
	const { isLoading: trendingLoading, data: trendingData } = useQuery('trending', moviesApi.trending);

	const loading = nowPlayingLoading || upcomingLoading || trendingLoading;

	const onRefresh = async () => {};
	const movieKeyExtractor = item => item.id + '';

	const renderVMedia = ({ item }) => {
		return <VMedia posterPath={item.poster_path} originalTitle={item.original_title} voteAverage={item.vote_average} />;
	};
	const renderHMedia = ({ item }) => {
		return <HMedia key={item.id} posterPath={item.poster_path} originalTitle={item.original_title} overview={item.overview} releaseDate={item.release_date} />;
	};

	return loading ? (
		<Loader>
			<ActivityIndicator />
		</Loader>
	) : (
		<FlatList
			onRefresh={onRefresh}
			refreshing={refreshing}
			ListHeaderComponent={
				<>
					<Swiper horizontal loop autoplay autoplayTimeout={3.5} showsButtons={false} showsPagination={false} containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 4, marginBottom: 30 }}>
						{nowPlayingData.results.map(movie => {
							return (
								<Slide
									key={movie.id}
									backdropPath={movie.backdrop_path}
									posterPath={movie.poster_path}
									originalTitle={movie.original_title}
									voteAverage={movie.vote_average}
									overview={movie.overview}
								/>
							);
						})}
					</Swiper>
					<ListContainer>
						<ListTitle>Trending Movies</ListTitle>
						<TrendingScroll
							data={trendingData.results}
							horizontal
							keyExtractor={movieKeyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ paddingHorizontal: 20 }}
							ItemSeparatorComponent={VSeperator}
							renderItem={renderVMedia}
						/>
					</ListContainer>
					<ComingSoonTitle>Coming soon</ComingSoonTitle>
				</>
			}
			data={upcomingData.results}
			keyExtractor={movieKeyExtractor}
			ItemSeparatorComponent={HSeperator}
			renderItem={renderHMedia}
		/>
	);
};

const Loader = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const ListTitle = styled.Text`
	color: white;
	font-size: 18px;
	font-weight: 600;
	margin-left: 30px;
`;

const TrendingScroll = styled.FlatList`
	margin-top: 20px;
`;

const ComingSoonTitle = styled(ListTitle)`
	margin-bottom: 20px;
`;

const ListContainer = styled.View`
	margin-bottom: 40px;
`;

const VSeperator = styled.View`
	width: 20px;
`;
const HSeperator = styled.View`
	height: 20px;
`;

export default Movie;
