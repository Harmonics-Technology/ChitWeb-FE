'use client';

import { Flex } from '@chakra-ui/react';
import { SimpleButton } from 'shared-ui';
// import PrimaryInput from '@chitweb/shared-ui';
// import { SimpleButton } from '@chitweb/shared-ui';

const Home = () => {
  const logSomething = () => {};
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SimpleButton callback={logSomething} />
    </Flex>
  );
};

export default Home;
