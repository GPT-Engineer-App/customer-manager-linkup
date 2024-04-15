import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";

const ApplianceCleaningReservationForm = () => {
  return (
    <Box>
      <FormControl id="applianceType" mb={4}>
        <FormLabel>Appliance Type</FormLabel>
        <Select placeholder="Select appliance type">
          <option value="refrigerator">Refrigerator</option>
          <option value="oven">Oven</option>
          <option value="dishwasher">Dishwasher</option>
          <option value="washingMachine">Washing Machine</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>

      <FormControl id="cleaningDate" mb={4}>
        <FormLabel>Preferred Cleaning Date</FormLabel>
        <Input type="date" />
      </FormControl>

      <FormControl id="additionalInfo" mb={4}>
        <FormLabel>Additional Information</FormLabel>
        <Textarea placeholder="Enter any additional information or special requests" />
      </FormControl>

      <Button colorScheme="blue" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ApplianceCleaningReservationForm;