import {
  Box,
  Stack,
  Flex,
  Text,
  FormLabel,
  Image,
  Heading,
  Button,
  FormControl,
  Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DeleteAccountModal from '~/lib/components/DeleteAccountFlow'

import { FormInput } from 'shared-ui';

import {
  ButtonComponent,
  OutlineButtonComponent,
} from '~/lib/components/Button';
import { AvatarIcon, CopyIcon } from '~/lib/components/Icons';

const Profile = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Box>
      <Stack spacing="50px">
        <Box as="section">
          <Flex alignItems="center" gap="24px">
            <Box w="140px" h="140px" position="relative">
              <Image
                src="/assets/images/avatar-placeholder.png"
                w="100%"
                h="100%"
                borderRadius="50%"
                border="3px solid"
                borderColor="brand.200"
                objectFit="cover"
              />
              <Box position="absolute" bottom="0px" right="0px">
                <AvatarIcon />
              </Box>
            </Box>
            <Box>
              <Stack spacing="16px">
                <Button
                  color="brand.primary"
                  w="160px"
                  borderRadius="12px"
                  py="5"
                  bg="brand.100"
                  border="2px solid"
                  borderColor="brand.200"
                >
                  Upload new image
                </Button>
                <Box>
                  <Heading mb="4px" fontSize={18} fontWeight={700}>
                    Munira Adamu-Ibrahim
                  </Heading>
                  <Flex alignItems="center" gap="5px">
                    <Text fontSize={14} color="border.200" fontWeight={500}>
                      Chit ID:{' '}
                      <Box as="span" fontWeight={700} color="text.200">
                        Chit10978
                      </Box>
                    </Text>
                    <CopyIcon />
                  </Flex>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Box>

        <Box as="section">
          <FormControl>
            <Stack spacing="24px">
              <Box>
                <Flex alignItems="center" gap="30px">
                  <Box w={['100%', '50%']}>
                    <FormLabel fontSize={14}>First Name</FormLabel>
                    <FormInput
                      type="text"
                      readonly
                      value="Munira"
                      width="100%"
                      setValue={setFirstName}
                    />
                  </Box>

                  <Box w={['100%', '50%']}>
                    <FormLabel fontSize={14}>Last Name</FormLabel>
                    <FormInput
                      type="text"
                      readonly
                      value="Adamu-Ibrahim"
                      width="100%"
                      setValue={setFirstName}
                    />
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Flex alignItems="center" gap="30px">
                  <Box w={['100%', '50%']}>
                    <FormLabel fontSize={14}>Email Address</FormLabel>
                    <FormInput
                      type="email"
                      readonly
                      value="johndoe@gmail.com"
                      width="100%"
                      setValue={setFirstName}
                    />
                  </Box>

                  <Box w={['100%', '50%']}>
                    <FormLabel fontSize={14}>Phone Number</FormLabel>
                    <FormInput
                      type="text"
                      readonly
                      value="Adamu-Ibrahim"
                      width="100%"
                      setValue={setFirstName}
                    />
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Flex alignItems="center" gap="30px">
                  <Box w={['100%', '50%']}>
                    <FormLabel fontSize={14}>Country</FormLabel>
                    <Select>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Nigeria">Nigeria</option>
                    </Select>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </FormControl>
        </Box>

        <Box as="section">
          <Flex alignItems="center" gap="20px">
            <ButtonComponent
              text="Edit Profile"
              color="text.500"
              bg="brand.primary"
              width="142px"
              onClick={() => {}}
            />
            <Button
              color="status.400"
              w="161px"
              borderRadius="12px"
              py="5"
              bg="text.500"
              border="2px solid"
              borderColor="options.700"
              onClick={() => setOpenModal(true)}
            >
              Delete Profile
            </Button>
          </Flex>
        </Box>
      </Stack>
      <DeleteAccountModal isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </Box>
  );
};

export default Profile;
