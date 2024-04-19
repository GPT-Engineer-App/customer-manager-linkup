import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CleanerProfile = () => {
  const { id } = useParams();
  const [cleanerDetails, setCleanerDetails] = useState(null);

  useEffect(() => {
    const fetchCleanerDetails = async () => {
      const response = await fetch(`/api/cleaner-profile/${id}`);
      const data = await response.json();
      setCleanerDetails(data);
    };

    fetchCleanerDetails();
  }, [id]);

  return (
    <Box>
      <Heading>{cleanerDetails ? cleanerDetails.name : "Loading..."}</Heading>
      <Text>{cleanerDetails ? cleanerDetails.description : "Fetching cleaner details..."}</Text>
    </Box>
  );
};

export default CleanerProfile;
