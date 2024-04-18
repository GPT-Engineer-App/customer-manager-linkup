import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CommercialCleaningReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [storeSize, setStoreSize] = useState("");
  const [storeType, setStoreType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/reservations/commercial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          storeName,
          address,
          storeSize,
          storeType,
          serviceType,
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
    } catch (error) {
      setError(error.message);
      toast({
        title: "Error submitting reservation",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsLoading(false);
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
          <FormLabel>상가명</FormLabel>
          <Input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>주소</FormLabel>
          <Input
            type="text"
            value={address}
            onChange={async (e) => {
              setAddress(e.target.value);
              if (e.target.value.length > 5) {
                try {
                  const response = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${e.target.value}`, {
                    headers: {
                      Authorization: "KakaoAK YOUR_REST_API_KEY",
                    },
                  });
                  const data = await response.json();
                  console.log(data);
                } catch (error) {
                  console.error("Failed to fetch address:", error);
                }
              }
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>상가 크기(제곱미터 또는 평)</FormLabel>
          <Input type="text" value={storeSize} onChange={(e) => setStoreSize(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>상가 유형</FormLabel>
          <Select value={storeType} onChange={(e) => setStoreType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="restaurant">식당</option>
            <option value="store">매장</option>
            <option value="etc">기타</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소 서비스 유형</FormLabel>
          <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="regular">정기 청소</option>
            <option value="oneTime">일회성 청소</option>
            <option value="special">특별 청소</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>특별 요청 사항</FormLabel>
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

export default CommercialCleaningReservationForm;
