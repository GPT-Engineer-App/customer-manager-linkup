import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Center, Heading, VStack, Input, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaGoogle, FaComment, FaBloggerB } from "react-icons/fa";

const SOCIAL_LOGINS = [
  { name: "페이스북", icon: FaFacebook, color: "facebook" },
  { name: "인스타그램", icon: FaInstagram, color: "pink.500" },
  { name: "구글", icon: FaGoogle, color: "red.500" },
  { name: "카카오", icon: FaComment, color: "yellow.500" },
  { name: "네이버", icon: FaBloggerB, color: "green.500" },
];

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (signedUp) {
      navigate("/customer-home");
    }
  }, [signedUp, navigate]);

  return (
    <Center h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6} textAlign="center" color="brand.600">
          나청소 회원가입
        </Heading>
        <VStack spacing={4}>
          {SOCIAL_LOGINS.map(({ name, icon: Icon, color }) => (
            <Button key={name} leftIcon={<Icon />} colorScheme={color} w="100%">
              {name}으로 회원가입
            </Button>
          ))}
          <Text>또는</Text>
          <Input placeholder="이메일" type="email" />
          <Input placeholder="비밀번호" type="password" />
          <Input placeholder="비밀번호 확인" type="password" />
          <Button colorScheme="blue" w="100%" onClick={() => setSignedUp(true)}>
            회원가입
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;
