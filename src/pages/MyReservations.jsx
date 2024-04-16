import React, { useState } from "react";
import { Box, Heading, Text, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import QuotationModal from "../components/QuotationModal";
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
  const { isOpen: isQuotationModalOpen, onOpen: onQuotationModalOpen, onClose: onQuotationModalClose } = useDisclosure();
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  const handleViewQuote = (quotation) => {
    setSelectedQuotation(quotation);
    onQuotationModalOpen();
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
          {reservation.quotation && (
            <>
              <Button colorScheme="green" size="sm" onClick={() => handleViewQuote(reservation.quotation)}>
                견적 보기
              </Button>
              <QuotationModal isOpen={isQuotationModalOpen} onClose={onQuotationModalClose} quotation={selectedQuotation} />
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MyReservations;
