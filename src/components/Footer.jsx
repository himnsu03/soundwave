import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg="black" // Set the background color to black
      color="white" // Set the text color to white
      py={4} // Add padding on the top and bottom
    >
      <Center>
        <Text>&copy; {new Date().getFullYear()} SoundWave</Text>
      </Center>
    </Box>
  );
};

export default Footer;
