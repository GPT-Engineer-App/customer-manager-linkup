import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Textarea, RadioGroup, Radio, Checkbox, Button, useToast } from "@chakra-ui/react";

const MovingCleaningReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("moving");
  const [housingType, setHousingType] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [specialAreas, setSpecialAreas] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalServices, setAdditionalServices] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [reservationFee, setReservationFee] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "예약이 접수되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
          <FormLabel>이메일</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>주소</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">서비스 유형</FormLabel>
          <RadioGroup value={serviceType} onChange={setServiceType}>
            <Radio value="moving">이사 청소</Radio>
            <Radio value="moveIn">입주 청소</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>주택 유형</FormLabel>
          <Select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="apartment">아파트</option>
            <option value="house">단독주택</option>
            <option value="office">사무실</option>
            <option value="etc">기타</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>면적 (제곱미터)</FormLabel>
          <Input type="number" value={area} onChange={(e) => setArea(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>방 수</FormLabel>
          <Input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>화장실 수</FormLabel>
          <Input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>특별히 주의가 필요한 공간</FormLabel>
          <Input type="text" value={specialAreas} onChange={(e) => setSpecialAreas(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소 날짜</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>청소 시간</FormLabel>
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>추가 서비스</FormLabel>
          <Checkbox
            value="oven"
            onChange={(e) => {
              if (e.target.checked) {
                setAdditionalServices([...additionalServices, "oven"]);
              } else {
                setAdditionalServices(additionalServices.filter((service) => service !== "oven"));
              }
            }}
          >
            오븐 청소
          </Checkbox>
          <Checkbox
            value="refrigerator"
            onChange={(e) => {
              if (e.target.checked) {
                setAdditionalServices([...additionalServices, "refrigerator"]);
              } else {
                setAdditionalServices(additionalServices.filter((service) => service !== "refrigerator"));
              }
            }}
          >
            냉장고 청소
          </Checkbox>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">결제 방식</FormLabel>
          <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
            <Radio value="cash">현금</Radio>
            <Radio value="card">카드</Radio>
            <Radio value="transfer">계좌이체</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>예약금 안내</FormLabel>
          <Input type="text" value={reservationFee} onChange={(e) => setReservationFee(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>기타 요청사항</FormLabel>
          <Textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          예약하기
        </Button>
      </form>
    </Box>
  );
};

export default MovingCleaningReservationForm;
