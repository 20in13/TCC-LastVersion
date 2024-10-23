"use client";

import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';
import { IoMdMail, IoMdLock, IoMdEye, IoMdEyeOff } from 'react-icons/io';

const InputComponent = ({ value, onChange, placeholder, type = 'text' }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Para alternar visibilidade da senha

  return (
    <Box w="80%" mb={20} position="relative">
      <Box position="relative" mb={10}>
        {/* Mostrar ícone de email ou cadeado baseado no tipo de input */}
        {type === 'password' ? (
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
        ) : (
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
        )}

        {/* Input field */}
        <Input
          type={type === 'password' && isPasswordVisible ? 'email' : type} // Alterna visibilidade da senha
          placeholder={placeholder} // Placeholder agora como prop
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
          value={value} // Estado controlado
          onChange={onChange} // Captura de evento
        />

        {/* Mostrar o botão para alternar visibilidade da senha se o tipo for password */}
        {type === 'password' && (
          <Box
            position="absolute"
            right={20}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            cursor="pointer"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <IoMdEye size={24} color="#41484D" /> : <IoMdEyeOff size={24} color="#41484D" />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default InputComponent;
