import { Flex, Text } from "@chakra-ui/react";
import { SmallCloseIcon, WarningTwoIcon } from "@chakra-ui/icons";


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
      position="absolute"
      width="30%"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      cursor="not-allowed"
      // marginTop="2rem"
    >
      <Flex alignItems="center">
        <Text mr="10px"><WarningTwoIcon cursor="not-allowed"/></Text>
        <Text>{message}</Text>
      </Flex>
      <SmallCloseIcon cursor="pointer" onClick={onClose} />
    </Flex>
  );
};

export default AlertComponent;
