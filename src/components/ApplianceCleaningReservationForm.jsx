import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ApplianceCleaningReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [applianceType, setApplianceType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [applianceCondition, setApplianceCondition] = useState("");
  const [previousCleaning, setPreviousCleaning] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "예약이 접수되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
          <FormLabel>연락처</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>이메일 주소</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소할 가전제품 종류</FormLabel>
          <Select value={applianceType} onChange={(e) => setApplianceType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="refrigerator">냉장고</option>
            <option value="airConditioner">에어컨</option>
            <option value="washingMachine">세탁기</option>
            <option value="oven">오븐</option>
            <option value="etc">기타</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>제조사 및 모델명</FormLabel>
          <Input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>가전제품의 상태</FormLabel>
          <Input type="text" value={applianceCondition} onChange={(e) => setApplianceCondition(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>가전제품 청소 경험</FormLabel>
          <Select value={previousCleaning} onChange={(e) => setPreviousCleaning(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="yes">있음</option>
            <option value="no">없음</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소 희망 날짜</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>희망 청소 시간대</FormLabel>
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>특별 요청 사항 또는 주의해야 할 사항</FormLabel>
          <Textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>기타 정보</FormLabel>
          <Textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          예약하기
        </Button>
      </form>
    </Box>
  );
};

export default ApplianceCleaningReservationForm;
