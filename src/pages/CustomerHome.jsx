import React from "react";
import { Box, Heading, SimpleGrid, Icon, Text, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaStore, FaBuilding, FaStar, FaTools, FaArrowLeft } from "react-icons/fa";



const 홈화면 = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box mb={8}>
        <IconButton icon={<FaArrowLeft />} aria-label="Back" position="absolute" top={4} left={4} onClick={() => navigate(-1)} />
        <Heading size="xl" textAlign="center">
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
        
      </Box>
      
    </Box>
  );
};

export default 홈화면;
