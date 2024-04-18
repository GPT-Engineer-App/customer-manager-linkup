import React from "react";
import { Box, HStack, VStack, Button, Text } from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaHistory, FaComments, FaCog, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomTabNav = () => {
  const navigate = useNavigate();

  return (
    <Box bg="white" py={2} position="fixed" bottom={0} left={0} right={0} borderTopWidth={1}>
      <HStack justify="space-around">
        <Button variant="ghost" onClick={() => navigate("/my-reservations")}>
          <VStack spacing={1}>
            <FaCalendarAlt />
            <Text fontSize="xs">내 예약</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/usage-history")}>
          <VStack spacing={1}>
            <FaHistory />
            <Text fontSize="xs">이용 내역</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/chat")}>
          <VStack spacing={1}>
            <FaComments />
            <Text fontSize="xs">채팅</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/settings")}>
          <VStack spacing={1}>
            <FaCog />
            <Text fontSize="xs">설정</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => (window.location.href = "http://customer-app.example.com")}>
          <VStack spacing={1}>
            <FaHome />
            <Text fontSize="xs">고객앱</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => (window.location.href = "http://cleaner-app.example.com")}>
          <VStack spacing={1}>
            <FaStar />
            <Text fontSize="xs">청소매니저앱</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => (window.location.href = "http://admin-dashboard.example.com")}>
          <VStack spacing={1}>
            <FaCog />
            <Text fontSize="xs">관리자 대쉬보드</Text>
          </VStack>
        </Button>
      </HStack>
    </Box>
  );
};

export default BottomTabNav;
