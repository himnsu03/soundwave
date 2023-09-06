import { Button, HStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/1.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack bgColor={'blackAlpha.900'} wrap={'wrap'}>
            <Image src={img1} p={1} height={'40px'} borderRadius={'100rem'} />
            <Heading fontFamily={'cursive'} color={'white'} fontSize={'1rem'}>SoundWave</Heading>
            <Button p={1} variant={'unstyled'} color={'whiteAlpha.900'} marginLeft={4} alignContent={'center'} alignItems={'center'}>
                <Link to="/">
                    Home
                    </Link>
            </Button>
            <Button p={1} variant={'unstyled'} color={'whiteAlpha.900'} marginLeft={4}>
            <Link to="/trending">
                    Trending
                    </Link>
            </Button>
            <Button p={1} variant={'unstyled'} color={'whiteAlpha.900'} marginLeft={4} >
            <Link to="/oldsongs">
                    Old Songs
                    </Link>
            </Button>
           
            

        </HStack>
    )
}

export default Header
