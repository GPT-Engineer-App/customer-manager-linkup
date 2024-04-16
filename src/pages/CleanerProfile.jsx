import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import CleanerQuotationForm from "../components/CleanerQuotationForm";

const CleanerProfile = () => {
  const reservationId = "sample-reservation-id";

  return (
    <Box>
      <Heading>청소매니저 프로필</Heading>
      <Text>청소매니저 프로필 페이지입니다.</Text>
      <Box mt={8}>
        <Heading size="md" mb={4}>
          견적 제출
        </Heading>
        <CleanerQuotationForm reservationId={reservationId} />
      </Box>
    </Box>
  );
};

export default CleanerProfile;
