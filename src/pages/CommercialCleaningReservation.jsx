import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CommercialCleaningReservationForm from "../components/CommercialCleaningReservationForm";

const CommercialCleaningReservation = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/customer-home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          상가 청소 예약
        </Heading>
      </Box>
      <Box maxWidth="md" mx="auto" p={4}>
        <CommercialCleaningReservationForm />
      </Box>
    </Box>
  );
};

export default CommercialCleaningReservation;
