'use-client';

import { Flex } from '@chakra-ui/react';
// import PrimaryInput from '@chitweb/shared-ui';
import SimpleButton from '@chitweb/shared-ui';

const Home = () => {
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
      <SimpleButton />
    </Flex>
  );
};

export default Home;
