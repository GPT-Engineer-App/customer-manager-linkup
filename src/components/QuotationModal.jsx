import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text } from "@chakra-ui/react";

const QuotationModal = ({ isOpen, onClose, quotation, onSelect }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>견적 정보</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>청소매니저: {quotation.cleanerName}</Text>
          <Text>견적 금액: {quotation.amount}원</Text>
          <Text>견적 내용: {quotation.details}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
          <Button variant="ghost" onClick={() => onSelect(quotation.id)}>
            견적 선택
          </Button>
        </ModalFooter>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuotationModal;
