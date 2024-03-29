import { Flex, Text, Image, Box } from "@chakra-ui/react";


const Footer = () => {
  return <Flex w={"100%"} position={"fixed"} bottom={0}>
      <Flex justifyContent={"flex-start"} w={"100%"}>
        <Image src="/assets/social-facebook.svg" m={1} boxSize="15px" fill={"black"}></Image>
        <Image src="/assets/social-instagram.svg" m={1} boxSize="15px"></Image>
        <Image src="/assets/social-tiktok.svg" m={1} boxSize="15px"></Image>
      </Flex>
    
  </Flex>;
};

export default Footer;
