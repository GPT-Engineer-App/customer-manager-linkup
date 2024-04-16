import React from "react";
import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UsageHistory = () => {
  const navigate = useNavigate();

  const sampleUsageHistory = [
    {
      id: 1,
      date: "2023-06-01",
      serviceType: "이사/입주 청소",
      cleanerName: "김철수",
      paymentAmount: 100000,
    },
    {
      id: 2,
      date: "2023-06-15",
      serviceType: "사무실 청소",
      cleanerName: "이영희",
      paymentAmount: 150000,
    },
  ];

  return (
    <Box mx={4}>
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading flexGrow={1}>이용 내역</Heading>
      </Box>
      {sampleUsageHistory.map((usage) => (
        <Box key={usage.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
          <Text fontWeight="bold">{usage.serviceType}</Text>
          <Text>날짜: {usage.date}</Text>
          <Text>청소매니저: {usage.cleanerName}</Text>
          <Text>결제금액: {usage.paymentAmount}원</Text>
        </Box>
      ))}
    </Box>
  );
};

export default UsageHistory;
