import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import CleanerProfileCard from "./CleanerProfileCard";

const CleanerProfileSlider = ({ cleaners }) => {
  return (
    <Box mx="auto" maxW="800px">
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {cleaners.map((cleaner) => (
          <Box key={cleaner.id}>
            <CleanerProfileCard {...cleaner} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CleanerProfileSlider;
