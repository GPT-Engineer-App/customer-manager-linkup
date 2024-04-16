import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const MyReservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      type: "이사/입주 청소",
      date: "2023-06-15",
      time: "10:00",
    },
    {
      id: 2,
      type: "사무실 청소",
      date: "2023-06-20",
      time: "14:00",
    },
  ]);

  return (
    <Box>
      <Heading mb={4}>내 예약</Heading>
      {reservations.map((reservation) => (
        <Box key={reservation.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
          <Text fontWeight="bold">{reservation.type}</Text>
          <Text>날짜: {reservation.date}</Text>
          <Text>시간: {reservation.time}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default MyReservations;
