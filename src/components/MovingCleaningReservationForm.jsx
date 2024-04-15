import React from "react";
import { Box, FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";

const MovingCleaningReservationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl id="cleaningType" mb={4}>
        <FormLabel>청소 유형</FormLabel>
        <Select placeholder="청소 유형을 선택하세요">
          <option value="이사청소">이사청소</option>
          <option value="입주청소">입주청소</option>
        </Select>
      </FormControl>

      <FormControl id="address" mb={4}>
        <FormLabel>주소</FormLabel>
        <Input type="text" placeholder="주소를 입력하세요" />
      </FormControl>

      <FormControl id="date" mb={4}>
        <FormLabel>예약 날짜</FormLabel>
        <Input type="date" />
      </FormControl>

      <FormControl id="time" mb={4}>
        <FormLabel>예약 시간</FormLabel>
        <Input type="time" />
      </FormControl>

      <Button type="submit" colorScheme="blue" width="full">
        예약하기
      </Button>
    </Box>
  );
};

export default MovingCleaningReservationForm;
