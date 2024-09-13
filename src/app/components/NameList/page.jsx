"use client";

import React from 'react';
import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { IoMdPerson } from 'react-icons/io';

const NameList = ({ names }) => {
  return (
    <Box 
      w="80%" 
      p={5} 
      borderWidth={1} 
      borderRadius={8} 
      borderColor="#E5E8ED" 
      backgroundColor="#F9FAFB"
      mb={10}
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>Lista de Nomes</Text>
      {names.length > 0 ? (
        <List spacing={3}>
          {names.map((name, index) => (
            <ListItem key={index} fontSize={18} d="flex" alignItems="center">
              <ListIcon as={IoMdPerson} color="teal.500" />
              {name}
            </ListItem>
          ))}
        </List>
      ) : (
        <Text fontSize={18} color="gray.500">
          Nenhum nome adicionado ainda.
        </Text>
      )}
    </Box>
  );
};

export default NameList;
