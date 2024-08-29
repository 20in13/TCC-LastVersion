"use client";

import React, { useState } from 'react';
import { Box, Input, Button, Text, Flex } from '@chakra-ui/react';
import { IoMdMail, IoMdLock, IoMdEye, IoMdEyeOff } from 'react-icons/io';

const InputComponent = (props) => {
  const [sec, setSec] = useState(props.secureTextEntry);

  return (
    <Box w="80%" mb={20} position="relative">
      <Box position="relative" mb={10}>
        <IoMdMail
          size={27}
          color="#41484D"
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        />
        <Input
          type="email"
          placeholder="E-mail"
          variant="filled"
          borderColor="#E5E8ED"
          backgroundColor="#E5E8ED"
          borderWidth={0}
          borderRadius={8}
          paddingLeft="10%" 
          paddingBottom={10}
          paddingTop={10}
          fontSize={18}
          w="90%"
        />
      </Box>

      <Box position="relative" mb={10}>
        <IoMdLock
          size={27}
          color="#41484D"
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        />
        <Input
          type={sec ? 'text' : 'password'}
          placeholder="Senha"
          variant="filled"
          borderColor="#E5E8ED"
          backgroundColor="#E5E8ED"
          borderWidth={0}
          borderRadius={8}
          paddingLeft="10%" 
          paddingRight="6%" 
          paddingBottom={10}
          paddingTop={10}
          fontSize={18}
          w="84%"
          {...props}
        />
        <Box
          position="absolute"
          right={20}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1}
          cursor="pointer"
          onClick={() => setSec(!sec)}
        >
          {sec ? <IoMdEye size={24} color="#41484D" /> : <IoMdEyeOff size={24} color="#41484D" />}
        </Box>
      </Box>

      <Flex justify="flex-end">
        <Text
          color="#CC3737"
          textDecoration="underline"
          fontSize={15}
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
