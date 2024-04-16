import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ChatScreen from "../components/ChatScreen";

const Chat = () => {
  return (
    <Box>
      <Heading mb={4}>채팅</Heading>
      <ChatScreen />
    </Box>
  );
};

export default Chat;
