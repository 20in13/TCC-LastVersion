'use client'
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Flex, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import api from '../../../services/api';
import styles from './page.module.css'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, IconButton, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const CadastroScreen = () => {
  const [dados, setDados] = useState({
    nome_usu: '',
    email_usu: '',
    senha_usu: '',
    id_Tipo_Usu: '3',
    data_cad_usu: '',
  });

  const { isOpen, onOpen, onClose: handleCloseModal } = useDisclosure(); // Para o modal de sucesso
  const { isOpen: isAlertOpen, onOpen: showAlert, onClose: closeAlert } = useDisclosure(); // Para o modal de validação
  const [alertMessage, setAlertMessage] = useState(''); // Mensagem do modal de validação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  function handleValida() {
    let validado = true;
    if (dados.nome_usu === '') {
      setAlertMessage('O campo de nome deve ser preenchido!');
      showAlert();
      validado = false;
    } else if (dados.email_usu === '') {
      setAlertMessage('O campo de e-mail deve ser preenchido!');
      showAlert();
      validado = false;
    } else if (dados.senha_usu === '') {
      setAlertMessage('O campo de senha deve ser preenchido!');
      showAlert();
      validado = false;
    }
    return validado;
  }

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0]; // Data no formato YYYY-MM-DD
  };

  const handleCadUsu = async () => {
    const validacao = handleValida();
    if (validacao === true) {
      setDados((prev) => ({
        ...prev,
        data_cad_usu: getCurrentDate(), // Define a data de cadastro
      }));

      try {
        const response = await api.post('/usuario', { ...dados, data_cad_usu: getCurrentDate() }); // Inclui a data no envio
        if (response.data.sucesso) {
          onOpen();
        }
      } catch (error) {
        if (error.response) {
          setAlertMessage(error.response.data.mensagem + '\n' + error.response.data.dados);
          showAlert();
        } else {
          setAlertMessage('Não foi possível cadastrar o usuário (Front-end)\n' + error);
          showAlert();
        }
      }
    }
  };

  const router = useRouter();

  return (
    <div className="fundo">

      
      <button className={styles.backButton} onClick={() => router.back()}>
        <ArrowBackIcon
          style={{ fontSize: 24, color: 'white', transition: 'color 0.3s' }}
          onMouseEnter={(e) => (e.target.style.color = '#CC3737')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        />
      </button>

      <h1 className="title">Cadastre-se</h1>
      <div className="container">
        <input
          className="input"
          placeholder="Nome e Sobrenome"
          type="text"
          name="nome_usu"
          value={dados.nome_usu}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="E-mail"
          type="email"
          name="email_usu"
          value={dados.email_usu}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="Senha"
          type="password"
          name="senha_usu"
          value={dados.senha_usu}
          onChange={handleChange}
        />
        <input className="input" placeholder="Confirme sua Senha" type="password" />

        <button className="button" onClick={() => handleCadUsu()}>
          <Text color="#FFF" fontSize={14} fontWeight={600} cursor="pointer">
            Registrar
          </Text>
        </button>

        {/* Modal de Sucesso */}
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro Realizado com Sucesso!</ModalHeader>
            <ModalBody>
              <Text>O seu cadastro foi concluído. Deseja voltar para a página inicial?</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => router.push('/')}>
                Sim, voltar para a página inicial
              </Button>
              <Button variant="ghost" onClick={handleCloseModal}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Dialog de Validação */}
        <Dialog open={isOpen} onClose={handleCloseModal} maxWidth="xs" fullWidth>
          <Box sx={{ textAlign: 'center', padding: '20px 0 10px', backgroundColor: '#E5F6E8' }}>
            <IconButton disableRipple sx={{ color: '#36A970' }}>
              <CheckCircleIcon sx={{ fontSize: 48 }} />
            </IconButton>
          </Box>
          <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px', marginBottom: 1 }}>
            Cadastro realizado com Sucesso!
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" textAlign="center">
              Seu cadastro foi concluído. Deseja voltar à Página inicial?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between', padding: '10px 20px' }}>
            <Button variant="outlined" color="success" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button variant="contained" color="success" onClick={() => router.push('/')}>
              Sim
            </Button>
          </DialogActions>
        </Dialog>

      </div>
      <style jsx>{`
        .fundo {
          background-color: #44464f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        .title {
          font-size: 24px;
          text-align: center;
          margin-bottom: 20px;
          color: white;
          font-weight: bold;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          background-color: white;
          border-radius: 15px;
          width: 400px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .input {
          height: 40px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
          padding: 0 10px;
          background-color: #e8e7ea;
          border-radius: 15px;
          width: 100%;
        }
        .button {
          background-color: #cc3737;
          padding: 12px 20px;
          border-radius: 15px;
          margin-bottom: 10px;
          margin-top: 5px;
          width: 105%;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default CadastroScreen;
