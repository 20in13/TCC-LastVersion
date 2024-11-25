'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  IconButton,
} from '@chakra-ui/react';

const CadastroScreen: React.FC = () => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
      bg="gray.700"
      p={4}
    >
      {/* Botão de Voltar */}
      <IconButton
        aria-label="Voltar"
        icon={<ArrowBackIcon />}
        onClick={() => router.back()}
        position="absolute"
        top="16px"
        left="16px"
        variant="unstyled"
        color="white"
        _hover={{ color: 'red.500' }}
      />

      {/* Título */}
      <Heading color="white" mb={6}>
        Cadastre-se
      </Heading>

      {/* Formulário */}
      <Box
        bg="white"
        borderRadius="lg"
        p={8}
        boxShadow="md"
        w={["90%", "400px"]}
      >
        <Stack spacing={4}>
          <Input
            placeholder="Nome"
            bg="gray.100"
            borderRadius="md"
            focusBorderColor="red.500"
          />
          <Input
            type="email"
            placeholder="E-mail"
            bg="gray.100"
            borderRadius="md"
            focusBorderColor="red.500"
          />
          <Input
            type="password"
            placeholder="Senha"
            bg="gray.100"
            borderRadius="md"
            focusBorderColor="red.500"
          />
          <Input
            type="password"
            placeholder="Confirme sua Senha"
            bg="gray.100"
            borderRadius="md"
            focusBorderColor="red.500"
          />

          <Button
            bg="red.500"
            color="white"
            borderRadius="md"
            _hover={{ bg: 'red.600' }}
          >
            <Text fontSize="sm" fontWeight="bold">
              Registrar
            </Text>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default CadastroScreen;
