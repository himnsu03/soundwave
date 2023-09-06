import { Button, Center, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search); 
  };

  return (
    <Center>
      <HStack marginTop={4}>
        <Input
          type='text'
          placeholder='Search by title or artist'
          minWidth={'40vw'}
          maxWidth={'70vw'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type='submit'
          bg={'blackAlpha.900'}
          color={'white'}
          onClick={handleSearch}
        >
          Search
        </Button>
      </HStack>
    </Center>
  );
};

export default Search;
