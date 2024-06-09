import { Alert, CloseButton, Flex } from '@chakra-ui/react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const ToasterWrapper = () => {
  return (
    <Toaster
      position="top-center"
      containerClassName="toasts"
      toastOptions={{
        className: 'toaster',
        duration: 3000,
      }}
      reverseOrder={false}
    >
      {(t: any) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <Alert
              bgColor="white"
              p="0"
              justifyContent="space-between"
              mx="auto"
            >
              <Flex gap="1rem" align="center" h="fit-content">
                {icon}
                {message}
              </Flex>

              <CloseButton onClick={() => toast.dismiss(t.id)} />
            </Alert>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default ToasterWrapper;
