import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

const CleanerProfile = () => {
  const { id } = useParams();
  return (
    <Box>
      <Heading>Cleaner Profile</Heading>
      <Text>This is the cleaner profile page.</Text>
    </Box>
  );
};

export default CleanerProfile;
