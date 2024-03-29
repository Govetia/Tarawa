import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Text,
  Collapse, useDisclosure
} from '@chakra-ui/react';
import theme from '../src/theme/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/bundle";

import { MousewheelOptions } from 'swiper/types';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SwiperCore, {
  Navigation
} from 'swiper';



const mouseWheelOption: MousewheelOptions = {
  releaseOnEdges : true,
  thresholdDelta: 10
}

const IndexPage = () => {
  const [width, setWindowWidth] = useState(0);
  const { isOpen, onToggle } = useDisclosure()
  const [isLoaded, setIsLoaded] = useState(false);

  // install Swiper modules
SwiperCore.use([Navigation]);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])
   const updateDimensions = () => {
     const width = window.innerWidth
     setWindowWidth(width)
   }
   const desktopView = width > 980;
   
   if (!isLoaded) {
     setTimeout(() => {
      onToggle();
      setIsLoaded(true)
     }, 100);
   }


  const [appearFromRight, inViewFromRight] = useInView();
  const [appearFromLeft, inViewFromLeft] = useInView();

  const controls = useAnimation();

  React.useEffect(() => {
    if (inViewFromRight) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 2 },
          x: { duration: 2 },
        },
      });
    }
  }, [inViewFromRight, controls]);
  React.useEffect(() => {
    if (inViewFromLeft) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 2 },
          x: { duration: 2 },
        },
      });
    }
  }, [inViewFromLeft, controls]);

  return (
    <ChakraProvider theme={theme}>

      <Box w="100%" h={"100vh"} position="relative" m={'0 0 10rem 0'} p={0}>
        <Flex
          w="100%"
          
          justifyContent="center"
          align="center"
          position="relative"
        >
          <video autoPlay loop muted playsInline style={{ maxWidth: 'none' }}>
            <source src="/assets/teaser_header.mp4" type="video/mp4" />
          </video>
          <Collapse in={isOpen} transition={{ exit: { delay: 1 }, enter: { duration: 2 } }}>
            <Image
              w={200}
              src="/assets/logo.svg"
              alt="logo"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </Collapse>
        </Flex>
      </Box>

      <Flex justify={"center"} alignItems={"center"} flexDir={desktopView ? "row" : "column"} p={10} flexGrow={1} >
        <ParallaxProvider>
          <Flex flexDirection="column" justifyContent={"center"} alignItems={'center'} flex={1}>
            <Parallax speed={desktopView ? 10 : 0}>
              <Text fontSize="3xl" color="darkBlue" className={theme.fonts.tigerWalk.className} >Tarawa hotel 5 étoiles.</Text>
              <Text fontSize="5xl" lineHeight={1} className={theme.fonts.samsungSharpSansBold.className}>Détente.</Text>
              <Text fontSize="5xl" lineHeight={1} className={theme.fonts.samsungSharpSansBold.className}>Relaxation.</Text>
              <Text fontSize="5xl" lineHeight={1} className={theme.fonts.samsungSharpSansBold.className}>Silence.</Text>
            </Parallax>
          </Flex>
          <Flex flexDirection="column" flex={1} px={"5rem"} py={"2rem"} >
            <Parallax speed={desktopView ? -10 : 0}>
              <Text fontSize={'2xl'} className={theme.fonts.samsungone400.className}>Surplombant les plages de sable blanc de l'île de Saint-Barthélemy, le <strong>Tarawa Hotel</strong> est le lieu rêvé des voyageurs en quête d'une escapade luxueuse en toute intimité.</Text>
              <Flex flexDir={desktopView ? "row" : "column"}>
                <Button bgColor={"darkBlue"} color={"white"} p={5} m={5}>Voir les chambres</Button>
                <Button p={5} m={5}>Comparer les chambres</Button>
              </Flex>
            </Parallax>
          </Flex>
        </ParallaxProvider>

      </Flex>
      

      <Flex ref={appearFromLeft} align={"center"} justifyContent={"space-around"} margin={"6rem 0"} pl={ desktopView ? "5rem" : 0} flexDir={desktopView ? "row" : "column"}>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            style={{ opacity: 0 }}
          >
          <Flex flexDirection="column" align="center" justifyContent={"center"} flex={1} pr={ desktopView ? "5rem" : 0}>
            <Text fontSize="7xl" color="darkBlue" className={theme.fonts.tigerWalk.className}>10:12</Text>
            <Text fontSize={"2xl"} fontFamily="samsungone400">Un réveil en douceur</Text>
            <Button>Voir les chambres</Button>
          </Flex>
        </motion.div>
        <Flex flex={2} py={2} w={"100%"} h={"100%"}>
          <Box  h={"100%"} w={"100%"}>
            <video  muted playsInline className={desktopView ? 'borderRadiusLeft' : ''}>
              <source src="/assets/timeline-01.mp4" type="video/mp4" />
            </video>
          </Box>
          
        </Flex>
      </Flex>
      <Flex ref={appearFromRight} align={"center"} justifyContent={"space-around"} margin={"6rem 0"} pr={desktopView ? "5rem" : 0} flexDir={desktopView ? 'row' : "column-reverse"}>

        <Flex  flex={2} py={2} w={"100%"} h={"100%"}>
          <Box h={"100%"} w={"100%"}>
            <video muted playsInline className={desktopView ? 'borderRadiusRight' : ''}>
              <source src="/assets/timeline-05.mp4" type="video/mp4" />
            </video>
          </Box>
        </Flex>
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          style={{ opacity: 0 }}
        >
          <Flex flexDirection="column" align="center" justifyContent={"center"}  flex={1} pl={"5rem"}>
            <Text fontSize="7xl" color="darkBlue" className={theme.fonts.tigerWalk.className}>21:57</Text>
            <Text fontSize={"2xl"}>Soleil, mer, détente</Text>
            <Button>Voir les offres</Button>
          </Flex>
          </motion.div>
      </Flex>
 
      <Flex flexDir={"column"} bgColor={"lightGray"} w={"100%"} >
        <Flex justify={"center"}>
          <Text textAlign={"center"} fontSize={desktopView ? "8xl" : "4xl"} fontFamily="samsung_sharp_sansbold" m={desktopView ? "5rem 17rem" : "5rem 8rem"}>Un hôtel pas comme les autres.</Text>
        </Flex>
        <div className="slide-container">
          <Slide slidesToScroll={desktopView ? 3 : 1} slidesToShow={desktopView ? 3 : 1} autoplay={desktopView ? false : true} arrows={false} >

              <Flex h={"40rem"} justifyContent={"center"}>
                <Image h={"85%"} src="/assets/slideshow-01.jpg" borderRadius={10} alt='image'></Image>
              </Flex>

              <Flex h={"40rem"} flexDir={"column"} justifyContent={"flex-end"} alignItems={"center"}>
                <Box p={3}>
                  <Text textAlign={"start"} fontSize={"3xl"} fontFamily="samsung_sharp_sansbold">Toutes les saveurs des îles</Text>
                  <Text textAlign={"start"} fontSize={"xl"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</Text>

                </Box>
                <Flex borderRadius={10} py={5} h={"50%"} w={"100%"}>
                  <Box borderRadius={5} w={"100%"} h={"100%"}>
                    <video muted playsInline className='borderRadius'>
                      <source src="/assets/slideshow-02.mp4" type="video/mp4" />
                    </video>
                  </Box>
                </Flex>
              </Flex>

              <Flex h={"40rem"} w={"100%"} >
                <Flex h={"90%"} p={5} justifyContent={"center"}>
                  <Image  src="/assets/slideshow-03.jpg" borderRadius={10} alt='image' ></Image>
                </Flex>
              </Flex>

            <Flex h={"40rem"} justifyContent={"space-around"} flexDir={desktopView ? "row" : "column"}>
                <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                  <Box p={3}>
                    <Text fontSize={"3xl"} textAlign={"start"} fontFamily="samsung_sharp_sansbold">Un confort royal</Text>
                    <Text fontSize={"xl"} textAlign={"start"} fontFamily="samsungone400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</Text>
                  </Box>
                </Flex>
                
              </Flex>
              <Flex  alignItems={"center"} h={"100%"}>
                <Box >
                  <Image borderRadius={10} src="/assets/slideshow-05.jpg" alt='image'></Image>
                </Box>
              </Flex>

              <Flex h={"40rem"} p={5} alignItems={"flex-end"}>
                <Flex flexDir={"column"}>
                    <Box >
                      <Text textAlign={"start"} fontSize={"3xl"} fontWeight={"bold"}>La mer est à vous</Text>
                      <Text textAlign={"start"} fontSize={"xl"} fontFamily="samsungone400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</Text>
                    </Box>
                    <Box borderRadius={5}  backgroundRepeat={"no-repeat"} w={"100%"}>
                      <video muted playsInline className='borderRadius'>
                        <source src="/assets/slideshow-02.mp4" type="video/mp4" />
                      </video>
                    </Box>
                </Flex>
    
              </Flex>

              <Flex h={"40rem"} w={"100%"} >
                <Flex h={"90%"} p={5} justifyContent={"center"}>
                      <Image borderRadius={5} src="/assets/slideshow-07.jpg" alt="image"></Image>
                </Flex>
              </Flex>
          </Slide>
        </div>
        <Flex w={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} bgColor={"white"}>
          <Image w={150} m={50} src="/assets/logo_black.svg" alt="logo"></Image>
      </Flex>

      </Flex>
      

    </ChakraProvider>


  );
};

export default IndexPage;
