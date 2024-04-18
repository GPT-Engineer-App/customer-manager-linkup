import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const OfficeCleaningReservationForm = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [officeSize, setOfficeSize] = useState("");
  const [numEmployees, setNumEmployees] = useState("");
  const [officeType, setOfficeType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [cleaningAreas, setCleaningAreas] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/create/office-cleaning", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        companyName,
        phone,
        email,
        address,
        officeSize,
        numEmployees,
        officeType,
        serviceType,
        cleaningAreas,
        specialRequests,
        date,
        time,
        additionalInfo,
      }),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    toast({
      title: "예약이 접수되었습니다",
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
        <FormControl isRequired>
          <FormLabel>이름</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>회사명</FormLabel>
          <Input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
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
          <FormLabel>사무실 주소</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>사무실 크기(제곱미터 또는 평)</FormLabel>
          <Input type="text" value={officeSize} onChange={(e) => setOfficeSize(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>직원 수</FormLabel>
          <Input type="number" value={numEmployees} onChange={(e) => setNumEmployees(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>사무실 유형</FormLabel>
          <Select value={officeType} onChange={(e) => setOfficeType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="openSpace">개방형 사무공간</option>
            <option value="individual">개별 사무실</option>
            <option value="mixed">복합 공간</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소 서비스 유형</FormLabel>
          <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="regular">정기 청소</option>
            <option value="oneTime">일회성 청소</option>
            <option value="deep">깊은 청소</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소가 필요한 구역</FormLabel>
          <Textarea value={cleaningAreas} onChange={(e) => setCleaningAreas(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>특별 청소 요구사항</FormLabel>
          <Textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
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
          <FormLabel>기타 정보 또는 특별 요청 사항</FormLabel>
          <Textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          예약하기
        </Button>
      </form>
    </Box>
  );
};

export default OfficeCleaningReservationForm;
