import { Container, HStack, VStack, Image, Text, Stack, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Search from './Search';
import Loader from '../assets/Loader';
import axios from 'axios';


const Home = () => {
  const [search, setSearch] = useState('pop');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await axios.get(
          `https://itunes.apple.com/search?term=${search}&limit=28`
        );
        const data = response.data.results || [];
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearch();
  }, [search]);

  
  const handleSearch = (newSearchTerm) => {
    setSearch(newSearchTerm);
    setLoading(true);
  };

  return (
    <Box w={'full'} >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Stack >
            <VStack margin={4}>
              
              <Search onSearch={handleSearch} />
            </VStack>
            <HStack wrap={'wrap'} width={'full'} justifyContent={'space-evenly'}>
              {searchResults.map((song) => (
                <div key={song.trackId}>
                  <Image src={song.artworkUrl100} alt={song.trackName} m={'auto'} />
                  <Text m={'auto'} noOfLines={1} textAlign={'center'}>
                    {song.trackName}
                  </Text>
                  <audio controls>
                    <source src={song.previewUrl} type='audio/mpeg' />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </HStack>
          </Stack>
        </>
      )}
    
    </Box>
  );
};

export default Home;
