"use client";

import React, { useState } from 'react';
import { Box, Input, Button, Text, Flex } from '@chakra-ui/react';
import { IoMdMail, IoMdLock, IoMdEye, IoMdEyeOff } from 'react-icons/io';

const InputComponent = (props) => {
  const [sec, setSec] = useState(props.secureTextEntry);

  return (
      <Box w="80%" mb={20}>
        <Input
          type="email"
          placeholder="E-mail"
          variant="filled"
          borderColor="#E5E8ED"
          backgroundColor="#E5E8ED"
          borderWidth={0}
          borderRadius={8}
          px={50}
          mb={10}
          pl={60}
          padding={10}
          fontSize={18}
          w="100%" 
        />
      <Input
        type={sec ? 'password' : 'text'}
        placeholder="Senha"
        variant="filled"
        borderColor="#E5E8ED"
        backgroundColor="#E5E8ED"
        borderWidth={0}
        borderRadius={8}
        px={50}
        mb={10}
        pl={60}
        padding={10}
        fontSize={18}
        w="100%" 
        {...props}
      />
      <IoMdMail size={27} color="#41484D" style={{ position: 'absolute', left: 20, top: 12 }} />
      <IoMdLock size={27} color="#41484D" style={{ position: 'absolute', left: 20, top: 70 }} />
      {props.secureTextEntry && (
        <Button variant="link" onClick={() => setSec(!sec)}>
          <IoMdEye size={27} color="#41484D" style={{ position: 'absolute', right: 20, top: -50 }} />
        </Button>
      )}
      <Flex justify="flex-end">
        <Text
          color="#CC3737"
          textDecoration="underline"
          fontSize={16}
          fontWeight={600}
          cursor="pointer"
        >
          Esqueceu a senha?
        </Text>
      </Flex>
    </Box>
  );
};

export default InputComponent;