import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';

import CustomModal from '~/lib/components/Modal';
import type { VerificationFlowProps } from '~/lib/utilities/schema';

import { VerificationFlowContext } from './VerificationCarousel';
import BusinessVerificationFlow from './VerificationModals/BusinessVerificationFlow';
import BvnVerificationFlow from './VerificationModals/BvnVerificationFlow';
import MobileVerificationFlow from './VerificationModals/MobileVerificationFlow';
import SetPinFlow from './VerificationModals/SetPinFlow';

const VerificationModalFlow = ({
  position,
  setPosition,
}: VerificationFlowProps) => {
  const {
    showMobileVerificationModal,
    setShowMobileVerificationModal,
    showBvnVerificationModal,
    setShowBvnVerificationModal,
    showBusinessVerificationModal,
    setShowBusinessVerificationModal,
    showSetPinModal,
    setShowSetPinModal,
  } = useContext(VerificationFlowContext);
  return (
    <Box>
      {position === 1 && (
        <CustomModal
          isOpen={showMobileVerificationModal}
          onClose={() => setShowMobileVerificationModal(false)}
        >
          <MobileVerificationFlow
            closeModal={() => setShowMobileVerificationModal(false)}
          />
        </CustomModal>
      )}
      {position === 2 && (
        <CustomModal
          isOpen={showBvnVerificationModal}
          onClose={() => setShowBvnVerificationModal(false)}
        >
          <BvnVerificationFlow
            closeModal={() => setShowBvnVerificationModal(false)}
          />
        </CustomModal>
      )}
      {position === 3 && (
        <CustomModal
          isOpen={showBusinessVerificationModal}
          onClose={() => setShowBusinessVerificationModal(false)}
        >
          <BusinessVerificationFlow
            closeModal={() => setShowBusinessVerificationModal(false)}
          />
        </CustomModal>
      )}
      {position === 4 && (
        <CustomModal
          isOpen={showSetPinModal}
          onClose={() => setShowSetPinModal(false)}
        >
          <SetPinFlow closeModal={() => setShowSetPinModal(false)} />
        </CustomModal>
      )}
    </Box>
  );
};

export default VerificationModalFlow;
