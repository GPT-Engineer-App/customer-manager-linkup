import React from "react";
import { Box, Text, VStack, Icon, HStack, IconButton, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaUser, FaBell, FaQuestionCircle, FaEnvelope, FaComment, FaFileAlt, FaLock, FaBellSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const 설정 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
  };

  return (
    <Box p={4}>
      <HStack mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} />
        <Text fontSize="2xl" fontWeight="bold">
          설정
        </Text>
      </HStack>

      <Button onClick={handleLogout} colorScheme="red" mt={8}>
        로그아웃
      </Button>

      <VStack spacing={6} align="stretch" mt={4}>
        <HStack onClick={() => console.log("Fetching profile details...")}>
          <Icon as={FaUser} boxSize={6} />
          <Text fontSize="xl">프로필 수정</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching notices...")}>
          <Icon as={FaBell} boxSize={6} />
          <Text fontSize="xl">공지사항</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching FAQ data...")}>
          <Icon as={FaQuestionCircle} boxSize={6} />
          <Text fontSize="xl">자주 묻는 질문</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching contact information...")}>
          <Icon as={FaEnvelope} boxSize={6} />
          <Text fontSize="xl">문의하기</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching feedback data...")}>
          <Icon as={FaComment} boxSize={6} />
          <Text fontSize="xl">피드백</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching terms of use...")}>
          <Icon as={FaFileAlt} boxSize={6} />
          <Text fontSize="xl">이용약관</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching privacy policy details...")}>
          <Icon as={FaLock} boxSize={6} />
          <Text fontSize="xl">개인정보 보호정책</Text>
        </HStack>
        <HStack onClick={() => console.log("Fetching notification settings...")}>
          <Icon as={FaBellSlash} boxSize={6} />
          <Text fontSize="xl">알림설정</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default 설정;
