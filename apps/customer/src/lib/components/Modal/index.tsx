import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';

import type { CustomModalprops } from '~/lib/utilities/schema';

const CustomModal = ({ isOpen, onClose, children }: CustomModalprops) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        h="auto"
        py="8"
        px="3"
        minW="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w="100%" h="auto">
          <ModalCloseButton mt="3" mb="5" />
          <ModalBody>{children}</ModalBody>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
