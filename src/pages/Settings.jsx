import React from "react";
import { Box, Text, VStack, Icon, HStack, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaUser, FaBell, FaQuestionCircle, FaEnvelope, FaComment, FaFileAlt, FaLock, FaBellSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const 설정 = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <HStack mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} />
        <Text fontSize="2xl" fontWeight="bold">
          설정
        </Text>
      </HStack>

      <VStack spacing={6} align="stretch">
        <HStack onClick={() => navigate("/프로필-수정")}>
          <Icon as={FaUser} boxSize={6} />
          <Text fontSize="xl">프로필 수정</Text>
        </HStack>
        <HStack onClick={() => navigate("/공지사항")}>
          <Icon as={FaBell} boxSize={6} />
          <Text fontSize="xl">공지사항</Text>
        </HStack>
        <HStack onClick={() => navigate("/자주-묻는-질문")}>
          <Icon as={FaQuestionCircle} boxSize={6} />
          <Text fontSize="xl">자주 묻는 질문</Text>
        </HStack>
        <HStack onClick={() => navigate("/문의하기")}>
          <Icon as={FaEnvelope} boxSize={6} />
          <Text fontSize="xl">문의하기</Text>
        </HStack>
        <HStack onClick={() => navigate("/피드백")}>
          <Icon as={FaComment} boxSize={6} />
          <Text fontSize="xl">피드백</Text>
        </HStack>
        <HStack onClick={() => navigate("/이용약관")}>
          <Icon as={FaFileAlt} boxSize={6} />
          <Text fontSize="xl">이용약관</Text>
        </HStack>
        <HStack onClick={() => navigate("/개인정보-보호정책")}>
          <Icon as={FaLock} boxSize={6} />
          <Text fontSize="xl">개인정보 보호정책</Text>
        </HStack>
        <HStack onClick={() => navigate("/알림설정")}>
          <Icon as={FaBellSlash} boxSize={6} />
          <Text fontSize="xl">알림설정</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default 설정;
