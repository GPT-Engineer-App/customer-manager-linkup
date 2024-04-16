import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/admin/dashboard");
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default AdminLogin;
