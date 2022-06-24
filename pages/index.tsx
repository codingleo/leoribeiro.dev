import { Box, Flex, Heading, HStack, Icon, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <Flex align='center' justify='center' bg='#0A0E14' w='100%' h='100vh'>
      <Box position='relative' bg='white' m='40px' maxW='750px' h='fit-content' p='30px' borderRadius='lg'>
        <Box
          top='0'
          left='50%'
          transform='translate(-50%, -70%)'
          overflow='hidden'
          zIndex='2'
          position='absolute'
          as='figure'
          borderRadius='full'
          w='150px'
          h='150px'
          m='0'
          boxShadow='0 5px 10px #186EAE60'
        >
          <Image layout='fill' src='/photo.jpeg' alt='Leonardo Ribeiro' />
        </Box>
        <Heading textAlign='center' mt='30px'>
          Hi, I&apos;m <Text as='span' color='#186EAE'>Leonardo Ribeiro</Text>
        </Heading>
        <Text>I&apos;m a senior software engineer with 9+ years of experience crafting web applications. My focus is creating value through high quality software delivery using <b>react, typescript and node.js</b> as my main tools.</Text>
        <Text>I already helped companies going from 0-1 with new products and helped improve existing ones, like social media platforms, academic conferences management tools, card collectors auction websites integrated with eBay.</Text>
        <Text>I also helped companies acquire funding for getting into polkadot parachain through a crowdloan website and they win, by having $53 million funded by the community through this website.</Text>
        <Text>I also love to create tools and experiments for myself, like a robot that automatically public posts on instagram in a daily basis that already has 25k+ followers.</Text>
        <Text>If you need any help taking your idea from paper to a high valuable web application, <Link color='#186EAE' textDecoration='none' href='mailto:leo@verstand.tech'>talk to me</Link>.</Text>
        <Box my='30px' w='50%' transform='translateX(50%)' h='1px' bg='#186EAE'></Box>
        <Flex w='100%' align='center' justify='center'>
          <HStack gap='20px'>
            <Link target='_blank' transition='all ease-in-out 0.4s' _hover={{color: '#186EAE'}} href='https://instagram.com/esseleoribeiro'>
              <Icon fontSize='16pt' as={AiOutlineInstagram} />
            </Link>
            <Link target='_blank' transition='all ease-in-out 0.4s' _hover={{color: '#186EAE'}} href='https://linkedin.com/in/leoribeirodsgn'>
              <Icon fontSize='16pt' as={AiOutlineLinkedin} />
            </Link>
            <Link target='_blank' transition='all ease-in-out 0.4s' _hover={{color: '#186EAE'}} href='mailto:leo@verstand.tech'>
              <Icon fontSize='16pt' as={AiOutlineMail} />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Home
