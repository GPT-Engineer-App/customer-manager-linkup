import React from "react";
import { Box, Heading, SimpleGrid, Button, Image } from "@chakra-ui/react"; 
import { Link } from "react-router-dom";

const SERVICE_TYPES = [
  { name: "일반청소", path: "/reservation/general" },
  { name: "입주청소", path: "/reservation/movein" },
  { name: "이사청소", path: "/reservation/moveout" },
  { name: "정기청소", path: "/reservation/regular" },
];

const CustomerHome = () => {
  return (
    <Box>
      <Heading mb={6}>환영합니다!</Heading>
      <SimpleGrid columns={2} spacing={4} mb={6}>
        {SERVICE_TYPES.map(({ name, path }) => (
          <Link key={name} to={path}>
            <Button w="100%">{name}</Button>
          </Link>
        ))}
      </SimpleGrid>
      <Box mb={6}>
        <Image src="/ad-banner.jpg" alt="Advertisement" />
      </Box>
      
    </Box>
  );
};

export default CustomerHome;
