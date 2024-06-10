'use client';

import { Flex } from '@chakra-ui/react';
import { SimpleButton, PrimaryInput } from '@chitweb/shared-ui';
// import PrimaryInput from '@chitweb/shared-ui';
// import { SimpleButton } from '@chitweb/shared-ui';

const Home = () => {
  const logSomething = () => {
    console.log('clicked');
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      onClick={() => console.log('yeH')}
    >
      {/* <PrimaryInput
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        register={() => {}}
        error={undefined}
        value=""
      />  */}
      <SimpleButton callback={logSomething} />
      <PrimaryInput
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        register={() => {}}
        error={undefined}
      />
    </Flex>
  );
};

export default Home;
