import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const CleanerQuotationForm = ({ reservationId }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/quotations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservationId,
          amount,
          details,
        }),
      });

      if (response.ok) {
        toast({
          title: "견적이 제출되었습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAmount("");
        setDetails("");
      } else {
        throw new Error("견적 제출에 실패했습니다.");
      }
    } catch (error) {
      toast({
        title: "견적 제출에 실패했습니다.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxWidth="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>견적 금액</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>견적 내용</FormLabel>
          <Textarea value={details} onChange={(e) => setDetails(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          견적 제출
        </Button>
      </form>
    </Box>
  );
};

export default CleanerQuotationForm;
