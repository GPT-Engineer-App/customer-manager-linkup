import React, { useState } from "react";
import { Box, Heading, Text, Button, IconButton, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MyReservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      type: "이사/입주 청소",
      date: "2023-06-15",
      time: "10:00",
      estimates: [
        {
          cleanerId: 1,
          cleanerName: "김철수",
          amount: 100000,
          details: "2인 3시간 청소",
        },
        {
          cleanerId: 2,
          cleanerName: "박민수",
          amount: 120000,
          details: "2인 4시간 청소",
        },
      ],
    },
    {
      id: 2,
      type: "사무실 청소",
      date: "2023-06-20",
      time: "14:00",
      estimates: [
        {
          cleanerId: 3,
          cleanerName: "이영희",
          amount: 150000,
          details: "3인 4시간 청소",
        },
        {
          cleanerId: 4,
          cleanerName: "최순희",
          amount: 180000,
          details: "4인 4시간 청소",
        },
      ],
    },
  ]);

  const navigate = useNavigate();
  const toast = useToast();

  const handleViewQuote = async (quotation) => {
    const response = await fetch(`/api/get/quotation?id=${quotation.cleanerId}`);
    const data = await response.json();
    console.log("Quotation details:", data);
  };

  const handleEdit = (reservationId) => {
    navigate(`/edit-reservation/${reservationId}`);
  };

  const handleCancel = (reservationId) => {
    setReservations(reservations.filter((reservation) => reservation.id !== reservationId));
  };

  const [selectedEstimate, setSelectedEstimate] = useState(null);

  const handlePayment = async (estimate) => {
    const depositAmount = estimate.amount * 0.1;
    try {
      const response = await fetch("/api/pay-deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservationId: estimate.cleanerId,
          depositAmount,
        }),
      });
      if (!response.ok) throw new Error("Payment failed");
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Payment successful",
          description: `10% deposit of ${depositAmount}원 has been paid.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Payment failed",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSelectEstimate = (estimate) => {
    setSelectedEstimate(estimate);
  };

  return (
    <Box mx={4}>
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading flexGrow={1}>내 예약</Heading>
      </Box>
      {reservations.map((reservation) => (
        <Box key={reservation.id} borderWidth={1} borderRadius="md" p={4} mb={8}>
          <Text fontWeight="bold" fontSize="xl">
            {reservation.type}
          </Text>
          <Text>날짜: {reservation.date}</Text>
          <Text>시간: {reservation.time}</Text>

          <Box mt={4}>
            <Text fontWeight="bold">견적 목록:</Text>
            {reservation.estimates.map((estimate) => (
              <Box key={estimate.cleanerId} borderWidth={1} borderRadius="md" p={2} mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Text>청소매니저: {estimate.cleanerName}</Text>
                  <Text>견적 금액: {estimate.amount}원</Text>
                  <Text>견적 내용: {estimate.details}</Text>
                </Box>
                <Button size="sm" colorScheme="green" onClick={() => handleSelectEstimate(estimate)}>
                  Select
                </Button>
              </Box>
            ))}
          </Box>
          <Button colorScheme="blue" size="sm" mr={2} onClick={() => navigate(`/edit-reservation/${reservation.id}`)}>
            수정
          </Button>
          <Button colorScheme="red" size="sm" mr={2} onClick={() => handleCancel(reservation.id)}>
            취소
          </Button>
          {selectedEstimate && (
            <Box mt={4} borderWidth={1} p={4}>
              <Text fontWeight="bold">선택된 견적:</Text>
              <Text>청소매니저: {selectedEstimate.cleanerName}</Text>
              <Text>견적 금액: {selectedEstimate.amount}원</Text>
              <Text>견적 내용: {selectedEstimate.details}</Text>
              <Button colorScheme="green" mt={2} onClick={() => handlePayment(selectedEstimate)}>
                결제 계약금 10% 납부
              </Button>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MyReservations;
