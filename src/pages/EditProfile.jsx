import React, { useState } from "react";
import { Box, Heading, IconButton, Input, Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    console.log("Profile Updated:", { name, email });
    navigate(-1);
  };

  return (
    <Box p={4}>
      <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
      <Heading mb={4}>프로필 수정</Heading>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <FormControl isRequired>
          <FormLabel>이름</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>이메일</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일 입력" />
        </FormControl>
        <Button mt={4} colorScheme="blue" onClick={handleSave}>
          저장
        </Button>
      </VStack>
    </Box>
  );
};

export default EditProfile;
