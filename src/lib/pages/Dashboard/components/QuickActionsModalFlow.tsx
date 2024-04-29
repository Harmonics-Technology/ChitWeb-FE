import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';

import CustomModal from '~/lib/components/Modal';
import type { VerificationFlowProps } from '~/lib/utilities/schema';

import { QuickActionsContext } from './QuickActions';
import ClaimChitFlow from './QuickActionsModalFlow/ClaimChitFlow';
import GenerateChitFlow from './QuickActionsModalFlow/GenerateChitFlow';
import TransferFlow from './QuickActionsModalFlow/TransferFlow';
import WithdrawalFlow from './QuickActionsModalFlow/WithdrawalFlow';

const QuickActionsModalFlow = ({
  position,
  setPosition,
}: VerificationFlowProps) => {
  const {
    openTransferModal,
    setOpenTransferModal,
    openWithdrawModal,
    setOpenWithdrawModal,
    openGenerateChitModal,
    setOpenGenerateChitModal,
    openClaimChitModal,
    setOpenClaimChitModal,
  } = useContext(QuickActionsContext);
  return (
    <Box>
      {position === 1 && (
        <CustomModal
          isOpen={openTransferModal}
          onClose={() => setOpenTransferModal(false)}
        >
          <TransferFlow closeModal={() => setOpenTransferModal(false)} />
        </CustomModal>
      )}
      {position === 2 && (
        <CustomModal
          isOpen={openWithdrawModal}
          onClose={() => setOpenWithdrawModal(false)}
        >
          <WithdrawalFlow closeModal={() => setOpenWithdrawModal(false)} />
        </CustomModal>
      )}
      {position === 3 && (
        <CustomModal
          isOpen={openGenerateChitModal}
          onClose={() => setOpenGenerateChitModal(false)}
        >
          <GenerateChitFlow
            closeModal={() => setOpenGenerateChitModal(false)}
          />
        </CustomModal>
      )}
      {position === 4 && (
        <CustomModal
          isOpen={openClaimChitModal}
          onClose={() => setOpenClaimChitModal(false)}
        >
          <ClaimChitFlow closeModal={() => setOpenClaimChitModal(false)} />
        </CustomModal>
      )}
    </Box>
  );
};

export default QuickActionsModalFlow;
