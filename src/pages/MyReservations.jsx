import React, { useState } from "react";
import { Box, Heading, Text, Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MyReservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      type: "이사/입주 청소",
      date: "2023-06-15",
      time: "10:00",
      quotation: {
        cleanerName: "김철수",
        amount: 100000,
        details: "2인 3시간 청소",
      },
    },
    {
      id: 2,
      type: "사무실 청소",
      date: "2023-06-20",
      time: "14:00",
      quotation: {
        cleanerName: "이영희",
        amount: 150000,
        details: "3인 4시간 청소",
      },
    },
  ]);

  const navigate = useNavigate();

  const handleViewQuote = (quotation) => {
   
    console.log("View quotation:", quotation);
  };

  const handleSelectQuote = (reservationId, quotationId) => {
   
    console.log("Select quotation:", reservationId, quotationId);
  };

  const handleEdit = (reservationId) => {
    navigate(`/edit-reservation/${reservationId}`);
  };

  const handleCancel = (reservationId) => {
    setReservations(reservations.filter((reservation) => reservation.id !== reservationId));
  };

  return (
    <Box mx={4}>
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading flexGrow={1}>내 예약</Heading>
      </Box>
      {reservations.map((reservation) => (
        <Box key={reservation.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
          <Text fontWeight="bold">{reservation.type}</Text>
          <Text>날짜: {reservation.date}</Text>
          <Text>시간: {reservation.time}</Text>
          <Button colorScheme="blue" size="sm" mr={2} onClick={() => handleEdit(reservation.id)}>
            수정
          </Button>
          <Button colorScheme="red" size="sm" mr={2} onClick={() => handleCancel(reservation.id)}>
            취소
          </Button>
          {reservation.quotations && reservation.quotations.length > 0 && (
            <>
              <Text fontWeight="bold" mt={2}>
                제출된 견적:
              </Text>
              {reservation.quotations.map((quotation) => (
                <Box key={quotation.id} borderWidth={1} borderRadius="md" p={2} mb={2}>
                  <Text>청소매니저: {quotation.cleanerName}</Text>
                  <Text>견적 금액: {quotation.amount}원</Text>
                  <Button size="sm" mr={2} onClick={() => handleViewQuote(quotation)}>
                    상세 보기
                  </Button>
                  <Button size="sm" colorScheme="green" onClick={() => handleSelectQuote(reservation.id, quotation.id)}>
                    견적 선택
                  </Button>
                </Box>
              ))}
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MyReservations;
