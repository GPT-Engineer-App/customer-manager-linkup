import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const CleanerProfileCard = ({ name, rating, profileImage }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4} textAlign="center">
      <Image src={profileImage} alt={name} borderRadius="full" boxSize="150px" mx="auto" />
      <Heading size="md" mt={2}>
        {name}
      </Heading>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <FaStar key={i} color={i < rating ? "gold" : "gray.300"} />
          ))}
        <Text ml={2}>{rating.toFixed(1)}</Text>
      </Box>
    </Box>
  );
};

export default CleanerProfileCard;
