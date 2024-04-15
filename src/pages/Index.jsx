import React from "react";
import { Box, Button, Center, Heading, VStack, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaGoogle, FaComment, FaBloggerB } from "react-icons/fa";
import { Link } from "react-router-dom";

const SOCIAL_LOGINS = [
  { name: "페이스북", icon: FaFacebook, color: "facebook" },
  { name: "인스타그램", icon: FaInstagram, color: "pink.500" },
  { name: "구글", icon: FaGoogle, color: "red.500" },
  { name: "카카오", icon: FaComment, color: "yellow.500" },
  { name: "네이버", icon: FaBloggerB, color: "green.500" },
];

const Index = () => {
  return (
    <Center h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6} textAlign="center">
          로그인
        </Heading>
        <VStack spacing={4}>
          {SOCIAL_LOGINS.map(({ name, icon: Icon, color }) => (
            <Button key={name} leftIcon={<Icon />} colorScheme={color} w="100%">
              {name}으로 로그인
            </Button>
          ))}
          <Text>
            아직 회원이 아니신가요?{" "}
            <Link to="/signup" color="blue.500">
              회원가입
            </Link>
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};

export default Index;
