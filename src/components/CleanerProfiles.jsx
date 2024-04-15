import React from "react";
import { Box, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, Text, Button } from "@chakra-ui/react";

const CleanerProfileCard = ({ photo, name, rating }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center">
      <Image src={photo} alt={name} borderRadius="full" boxSize="150px" mx="auto" />
      <Heading size="md" mt={2}>
        {name}
      </Heading>
      <Text>Rating: {rating}</Text>
      <Button mt={4} colorScheme="blue">
        View Profile
      </Button>
    </Box>
  );
};

const CleanerProfiles = () => {
  const cleaners = [
    { photo: "/path/to/photo1.jpg", name: "John Doe", rating: 4.5 },
    { photo: "/path/to/photo2.jpg", name: "Jane Smith", rating: 4.8 },
    { photo: "/path/to/photo3.jpg", name: "Mike Johnson", rating: 4.2 },
  ];

  return (
    <Box my={8}>
      <Heading size="lg" mb={4}>
        Top Cleaners
      </Heading>
      <Slider>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        {cleaners.map((cleaner, index) => (
          <SliderThumb key={index} boxSize={20}>
            <CleanerProfileCard {...cleaner} />
          </SliderThumb>
        ))}
      </Slider>
    </Box>
  );
};

export default CleanerProfiles;
