"use client";

import React, { useState } from 'react';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoMdMail, IoMdLock, IoMdEye, IoMdEyeOff } from 'react-icons/io';

const InputComponent = ({ value, onChange, placeholder, type = 'text' }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Para alternar visibilidade da senha

  return (
    <Box w="100%" mb={5} position="relative">
    <InputGroup>
      {/* Elemento à esquerda para ícones */}
      <InputLeftElement pointerEvents="none" color="#41484D" fontSize="1.5em">
        {type === 'password' ? 
        <IoMdLock             
          style={{
                position: 'absolute',                
                top: '0.5rem',
                left: '0.6rem',
                zIndex: 1,
              }} 
        />
        : 
        <IoMdMail
          style={{
            position: 'absolute',                
            top: '0.5rem',
            left: '0.6rem',
            zIndex: 1,
          }}
        />}
        </InputLeftElement>

      {/* Campo de entrada */}
      <Input
        type={type === 'password' && isPasswordVisible ? 'text' : type} // Alterna visibilidade da senha
        placeholder={placeholder}
        variant="filled"
        borderColor="#E5E8ED"
        backgroundColor="#E5E8ED"
        borderWidth={0}
        borderRadius={8}
        pl="2.5rem" // Espaço para o ícone
        pr="2.5rem" // Espaço para o ícone
        paddingBottom={10}
        paddingTop={10}
        fontSize={15}
        w="100%"
        value={value}
        onChange={onChange}
      />

      {/* Ícone para alternar visibilidade da senha */}
      {type === 'password' && (
        <Box
          position="absolute"
          top= '0.5rem'
          right= '0.6rem'
          zIndex={1}
          cursor="pointer"
          onClick={() => setPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <IoMdEye size={24} color="#41484D" /> : <IoMdEyeOff size={24} color="#41484D" />}
        </Box>
      )}
    </InputGroup>
  </Box>
  );
};

export default InputComponent;
