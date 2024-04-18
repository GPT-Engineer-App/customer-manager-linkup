import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Login failed");

      const result = await response.json();
      if (result.success) {
        navigate("/customer-home");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <Box as="form" onSubmit={handleLogin} p={4} borderWidth={1} borderRadius="lg">
      <Heading size="lg" mb={4}>
        로그인
      </Heading>
      <VStack spacing={4}>
        <Input name="email" type="email" placeholder="이메일" required />
        <Input name="password" type="password" placeholder="비밀번호" required />
        <Button type="submit" colorScheme="blue">
          로그인
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
