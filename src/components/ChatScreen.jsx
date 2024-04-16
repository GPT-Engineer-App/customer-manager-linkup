import React, { useState } from "react";
import { Box, VStack, HStack, Text, Input, Button } from "@chakra-ui/react";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요, 청소 서비스에 대해 문의드립니다.", sender: "user" },
    { id: 2, text: "네, 안녕하세요. 어떤 점이 궁금하신가요?", sender: "cleaner" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        {messages.map((message) => (
          <Box key={message.id} bg={message.sender === "user" ? "blue.100" : "gray.100"} p={2} borderRadius="md" alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
            <Text>{message.text}</Text>
          </Box>
        ))}
      </VStack>
      <HStack mt={4}>
        <Input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="메시지를 입력하세요..." />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          전송
        </Button>
      </HStack>
    </Box>
  );
};

export default ChatScreen;
