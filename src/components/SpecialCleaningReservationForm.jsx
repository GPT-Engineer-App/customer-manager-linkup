import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const SpecialCleaningReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cleaningType, setCleaningType] = useState("");
  const [cleaningDetails, setCleaningDetails] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box p={4} maxWidth="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>이름</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>연락처</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>이메일 주소</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>주소</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>특수 청소 유형</FormLabel>
          <Input type="text" value={cleaningType} onChange={(e) => setCleaningType(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소 세부 사항</FormLabel>
          <Textarea value={cleaningDetails} onChange={(e) => setCleaningDetails(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>희망 청소 날짜</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>희망 청소 시간대</FormLabel>
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>기타 정보 또는 요청 사항</FormLabel>
          <Textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          예약하기
        </Button>
      </form>
    </Box>
  );
};

export default SpecialCleaningReservationForm;
