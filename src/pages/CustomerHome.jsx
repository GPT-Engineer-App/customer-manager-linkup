import React, { useState } from "react";
import { Box, Heading, SimpleGrid, Icon, Text, IconButton, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaStore, FaBuilding, FaStar, FaTools, FaArrowLeft } from "react-icons/fa";
import CleanerProfileSlider from "../components/CleanerProfileSlider";

const sampleCleaners = [
  {
    id: 1,
    name: "김철수",
    rating: 4.5,
    profileImage: "/path/to/profile1.jpg",
  },
  {
    id: 2,
    name: "이영희",
    rating: 4.8,
    profileImage: "/path/to/profile2.jpg",
  },
  {
    id: 3,
    name: "박민수",
    rating: 4.2,
    profileImage: "/path/to/profile3.jpg",
  },
];

import BottomTabNav from "../components/BottomTabNav";

const 홈화면 = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const response = await fetch(`/api/cleaners/search?query=${searchQuery}`);
    const data = await response.json();
    console.log("Search results:", data);
  };

  return (
    <Box pb={16}>
      <Box mb={6}>
        <Heading size="2xl" fontWeight="bold" textAlign="center">
          홈화면
        </Heading>
      </Box>
      <Box p={4}>
        <Heading size="lg" mb={4}>
          서비스 유형
        </Heading>
        <SimpleGrid columns={3} spacing={4} mb={8}>
          <Box textAlign="center" onClick={() => navigate("/moving-cleaning-reservation")}>
            <Icon as={FaHome} boxSize={12} />
            <Text>이사/입주청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/commercial-cleaning-reservation")}>
            <Icon as={FaStore} boxSize={12} />
            <Text>상가청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/office-cleaning-reservation")}>
            <Icon as={FaBuilding} boxSize={12} />
            <Text>사무실청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/special-cleaning-reservation")}>
            <Icon as={FaStar} boxSize={12} />
            <Text>특수청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/appliance-cleaning-reservation")}>
            <Icon as={FaTools} boxSize={12} />
            <Text>가전청소</Text>
          </Box>
        </SimpleGrid>
        <Box my={8}>
          <a href="https://example.com/ad" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/ad-banner.jpg" alt="Advertisement" />
            <Text textAlign="center" mt={2}>
              광고 문구
            </Text>
          </a>
        </Box>
        <Box my={8}>
          <Heading size="lg" mb={4}>
            청소매니저 검색
          </Heading>
          <Box display="flex" alignItems="center">
            <Input placeholder="청소매니저 이름 검색" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} mr={4} />
            <Button colorScheme="brand" onClick={handleSearch} bgGradient="linear(to-r, brand.500, brand.300)">
              검색
            </Button>
          </Box>
        </Box>
        <Box my={8}>
          <Heading size="lg" mb={4} textAlign="center">
            이달의 우수 청소매니저
          </Heading>
          <CleanerProfileSlider cleaners={sampleCleaners} />
        </Box>
      </Box>
      <BottomTabNav />
    </Box>
  );
};

export default 홈화면;
