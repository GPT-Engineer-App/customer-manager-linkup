import React from "react";
import { Box, Button, Center, Heading, VStack, Input } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Center h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6} textAlign="center">
          회원가입
        </Heading>
        <VStack spacing={4}>
          <Input placeholder="이메일" type="email" />
          <Input placeholder="비밀번호" type="password" />
          <Input placeholder="비밀번호 확인" type="password" />
          <Button colorScheme="blue" w="100%">
            회원가입
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;
