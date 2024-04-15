import React from "react";
import { Box, HStack, VStack, Button, Text } from "@chakra-ui/react";
import { FaHome, FaSearch, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomTabNav = () => {
  const navigate = useNavigate();

  return (
    <Box bg="white" py={2} position="fixed" bottom={0} left={0} right={0} borderTopWidth={1}>
      <HStack justify="space-around">
        <Button variant="ghost" onClick={() => navigate("/customer-home")}>
          <VStack spacing={1}>
            <FaHome />
            <Text fontSize="xs">홈</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/search")}>
          <VStack spacing={1}>
            <FaSearch />
            <Text fontSize="xs">검색</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/reservations")}>
          <VStack spacing={1}>
            <FaCalendarAlt />
            <Text fontSize="xs">예약내역</Text>
          </VStack>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/mypage")}>
          <VStack spacing={1}>
            <FaUser />
            <Text fontSize="xs">마이페이지</Text>
          </VStack>
        </Button>
      </HStack>
    </Box>
  );
};

export default BottomTabNav;
