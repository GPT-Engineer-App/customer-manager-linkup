import React from "react";
import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <Box p={4}>
      <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
      <Heading>개인정보 보호정책</Heading>
      <Text>개인정보 보호정책 페이지입니다.</Text>
    </Box>
  );
};

export default PrivacyPolicy;
