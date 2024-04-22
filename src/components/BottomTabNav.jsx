import React from "react";
import { Box, HStack, VStack, Button, Text } from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaHistory, FaComments, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomTabNav = () => {
  const navigate = useNavigate();

  return (
    <Box bg="white" py={3} position="fixed" bottom={0} left={0} right={0} borderTopWidth={1} boxShadow="sm">
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
      </HStack>
    </Box>
  );
};

export default BottomTabNav;
