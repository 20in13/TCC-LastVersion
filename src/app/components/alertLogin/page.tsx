import { Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const AlertComponent: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      border="1px solid red"
      borderRadius="8px"
      backgroundColor="#f8d7da"
      padding="16px"
      color="red"
      position="relative"
      width="100%"
      maxWidth="400px"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Flex alignItems="center">
        <Text mr="10px">⚠️</Text>
        <Text>{message}</Text>
      </Flex>
      <CloseIcon cursor="pointer" onClick={onClose} />
    </Flex>
  );
};

export default AlertComponent;
