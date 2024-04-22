import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Center, Heading, VStack, Input, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaGoogle, FaComment, FaBloggerB } from "react-icons/fa";

const SOCIAL_LOGINS = [
  { name: "페이스북", icon: FaFacebook, color: "facebook", onClick: () => console.log("Facebook login clicked") },
  { name: "인스타그램", icon: FaInstagram, color: "pink.500" },
  { name: "구글", icon: FaGoogle, color: "red.500" },
  { name: "카카오", icon: FaComment, color: "yellow.500" },
  { name: "네이버", icon: FaBloggerB, color: "green.500" },
];

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    console.log(data);
    navigate("/customer-home");
  };

  return (
    <Center h="100vh">
      <Box as="form" onSubmit={handleSubmit} p={10} maxW="md" borderWidth={1} borderRadius={8} boxShadow="xl">
        <Heading mb={8} size="xl" textAlign="center">
          나청소 회원가입
        </Heading>
        <VStack spacing={4}>
          {SOCIAL_LOGINS.map(({ name, icon: Icon, color }) => (
            <Button key={name} leftIcon={<Icon />} colorScheme={color} w="100%" type="button">
              {name}으로 회원가입
            </Button>
          ))}
          <Text>또는</Text>
          <Input placeholder="이메일" name="email" type="email" required />
          <Input placeholder="비밀번호" name="password" type="password" required />
          <Input placeholder="비밀번호 확인" name="confirmPassword" type="password" required />
          <Button colorScheme="blue" w="100%" type="submit">
            회원가입
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;
