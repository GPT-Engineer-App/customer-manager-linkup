import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SpecialCleaningReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [spaceSize, setSpaceSize] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [cleaningType, setCleaningType] = useState("");
  const [contaminantType, setContaminantType] = useState("");
  const [safetyMeasures, setSafetyMeasures] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [requests, setRequests] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/special-cleaning", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        companyName,
        address,
        spaceSize,
        spaceType,
        cleaningType,
        contaminantType,
        safetyMeasures,
        date,
        time,
        requests,
      }),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    toast({
      title: "특수 청소 예약이 접수되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/customer-home");
    navigate("/customer-home");
  };

  return (
    <Box p={4} maxWidth="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>이름</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>연락처</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>이메일 주소</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>회사명 또는 기관명 (해당되는 경우)</FormLabel>
          <Input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>주소</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>청소가 필요한 공간의 크기</FormLabel>
          <Input type="text" value={spaceSize} onChange={(e) => setSpaceSize(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>공간의 유형 (예: 주택, 상업 공간, 공공 장소 등)</FormLabel>
          <Input type="text" value={spaceType} onChange={(e) => setSpaceType(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>청소 유형 (예: 범죄 현장 청소, 산업 폐기물 청소, 생물학적 오염 청소 등)</FormLabel>
          <Input type="text" value={cleaningType} onChange={(e) => setCleaningType(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>오염 물질의 유형 (해당되는 경우)</FormLabel>
          <Input type="text" value={contaminantType} onChange={(e) => setContaminantType(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>특별한 안전 조치가 필요한 경우 상세히 기술</FormLabel>
          <Textarea value={safetyMeasures} onChange={(e) => setSafetyMeasures(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>희망 청소 날짜</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>희망 청소 시간대</FormLabel>
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>기타 정보 또는 특별 요청 사항</FormLabel>
          <Textarea value={requests} onChange={(e) => setRequests(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" isFullWidth>
          예약하기
        </Button>
      </form>
    </Box>
  );
};

export default SpecialCleaningReservationForm;
