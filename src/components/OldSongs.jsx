import React, { useEffect, useState } from 'react';
import Loader from '../assets/Loader';
import axios from 'axios';
import { Container, HStack, VStack, Image, Text, Stack, Box } from '@chakra-ui/react';

const OldSongs = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await axios.get(
          `https://itunes.apple.com/search?term=hindi+old+songs&limit=28`
        );
        const data = response.data.results || [];
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearch();
  }, );
  return (
    <Container maxWidth={'full'}  >
{loading ? (
        <Loader />
      ) : (
        <>
          <Stack >
            <VStack margin={4}>
              
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
      

    </Container>
  )
}

export default OldSongs
