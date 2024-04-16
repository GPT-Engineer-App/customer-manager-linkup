import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {}, []);

  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" mt={8}>
        Admin Dashboard
      </Heading>
      <Box mt={8}>
        <Heading as="h2" size="lg">
          Reservations
        </Heading>
        <Text>Total Reservations: {reservations.length}</Text>
        {}
      </Box>
      <Box mt={8}>
        <Heading as="h2" size="lg">
          Users
        </Heading>
        <Text>Total Users: {users.length}</Text>
        {}
      </Box>
      <Box mt={8}>
        <Heading as="h2" size="lg">
          Cleaners
        </Heading>
        <Text>Total Cleaners: {cleaners.length}</Text>
        {}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
