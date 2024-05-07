import {
  Box,
  Heading,
  FormControl,
  Stack,
  Text,
  FormLabel,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent, IconButtonComponent } from '~/lib/components/Button';
import { GreyCopyIcon, UserIcon } from '~/lib/components/Icons';
import FormInput from '~/lib/utilities/FormInput';
import type { StepProps } from '~/lib/utilities/schema';

import AddNewInvoiceButton from './AddNewInvoiceButton';

const InvoiceDownload = () => {
  return (
    <Box>
      <Box mb="20px">
        <Heading color="text.200" fontWeight={700} fontSize={32}>
          Preview Invoice
        </Heading>
      </Box>
      <Box mb="20px">
        <Heading fontSize={24} textAlign="center" fontWeight={600}>
          Invoice:{' '}
          <Box as="span" color="brand.primary">
            #024
          </Box>
        </Heading>
      </Box>
      <Box
        w="100%"
        boxShadow="lg"
        bg="text.500"
        p="2"
        mb="30px"
        borderRadius="8px"
      >
        <Stack justifyContent="center" alignItems="center" spacing="10px">
          <Box>
            <Flex alignItems="center" gap="7px">
              <Image
                w="50px"
                h="50px"
                objectFit="cover"
                src="/assets/blueberries.png"
              />
              <Box>
                <Heading fontSize={15} fontWeight={600} mb="3px">
                  Daniel Dubois
                </Heading>
                <Text fontSize={13} color="border.200">
                  ojuolape443@gmail.com
                </Text>
              </Box>
            </Flex>
          </Box>
          <Heading
            fontSize={20}
            textAlign="center"
            fontWeight={600}
            color="brand.primary"
          >
            ₦40,200
          </Heading>
        </Stack>
      </Box>
      <Box w="100%" boxShadow="lg" borderRadius="8px" px="3" py="4" mb="20px">
        <Stack spacing="24px">
          <Stack spacing="12px">
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex alignItems="center" gap="5px">
                    <Image
                      w="50px"
                      h="50px"
                      objectFit="cover"
                      src="/assets/blueberries.png"
                    />
                    <Box>
                      <Heading fontSize={15} mb="3px">
                        Black currant label drink
                      </Heading>
                      <Text fontSize={13} color="border.200">
                        Qty: 3 packs
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Heading fontSize={15} fontWeight={600}>
                  ₦10,000
                </Heading>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex alignItems="center" gap="5px">
                    <Image
                      w="50px"
                      h="50px"
                      objectFit="cover"
                      src="/assets/blueberries.png"
                    />
                    <Box>
                      <Heading fontSize={15} mb="3px">
                        Black currant label drink
                      </Heading>
                      <Text fontSize={13} color="border.200">
                        Qty: 3 packs
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Heading fontSize={15} fontWeight={600}>
                  ₦10,000
                </Heading>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex alignItems="center" gap="5px">
                    <Image
                      w="50px"
                      h="50px"
                      objectFit="cover"
                      src="/assets/blueberries.png"
                    />
                    <Box>
                      <Heading fontSize={15} mb="3px">
                        Black currant label drink
                      </Heading>
                      <Text fontSize={13} color="border.200">
                        Qty: 3 packs
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Heading fontSize={15} fontWeight={600}>
                  ₦10,000
                </Heading>
              </Flex>
            </Box>
          </Stack>
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading fontSize={16} fontWeight={600}>
                Total Due:
              </Heading>
              <Heading fontSize={18} fontWeight={600}>
                ₦10,200
              </Heading>
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Stack spacing="15px">
        <ButtonComponent
          width="100%"
          color="text.500"
          text="Preview Invoice"
          onClick={() => {}}
          bg="bg.200"
        />
        <IconButtonComponent
          width="100%"
          text="Copy Reference ID"
          icon={GreyCopyIcon}
          color="bg.200"
          bg="text.500"
          onClick={() => {}}
          flip
        />
      </Stack>
    </Box>
  );
};

const InvoicePreview = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Box mb="40px">
        <Heading color="text.200" fontWeight={700} fontSize={32}>
          Preview Invoice
        </Heading>
      </Box>
      <FormControl>
        <Stack spacing="15px" mb="40px">
          <Box>
            <FormLabel color="text.200" fontSize={14}>
              From
            </FormLabel>
            <InputGroup w="100%">
              <Input
                type="text"
                placeholder="Livewell Ventures Limited"
                fontSize={15}
                fontWeight={400}
              />
              <InputLeftElement pointerEvents="none">
                <UserIcon />
              </InputLeftElement>
            </InputGroup>
          </Box>
          <Box>
            <FormLabel color="text.200" fontSize={14}>
              To
            </FormLabel>
            <InputGroup w="100%">
              <Input
                type="email"
                placeholder="livewellventures@gmail.com"
                fontSize={15}
                fontWeight={400}
              />
              <InputLeftElement pointerEvents="none">
                <UserIcon />
              </InputLeftElement>
            </InputGroup>
          </Box>
        </Stack>
        <Box w="100%" boxShadow="lg" borderRadius="8px" px="3" py="4" mb="20px">
          <Box borderBottom="0.5px solid" pb="2" borderColor="text.800" mb="3">
            <Heading
              textTransform="uppercase"
              color="border.200"
              fontSize={18}
              fontWeight={500}
            >
              items
            </Heading>
          </Box>

          <Stack spacing="24px">
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex alignItems="center" gap="5px">
                    <Image
                      w="50px"
                      h="50px"
                      objectFit="cover"
                      src="/assets/blueberries.png"
                    />
                    <Box>
                      <Heading fontSize={15} mb="3px">
                        Black currant label drink
                      </Heading>
                      <Text fontSize={13} color="border.200">
                        Qty: 3 packs
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Heading fontSize={15} fontWeight={600}>
                  ₦10,000
                </Heading>
              </Flex>
            </Box>
            <Box>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                mb="10px"
              >
                <Text fontSize={14} fontWeight={400} color="border.200">
                  Total Due:
                </Text>
                <Text fontSize={14} fontWeight={400} color="text.200">
                  ₦100
                </Text>
              </Flex>
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontSize={14} fontWeight={400} color="border.200">
                  Total Due:
                </Text>
                <Text fontSize={14} fontWeight={400} color="text.200">
                  ₦100
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Heading fontSize={16} fontWeight={600}>
                  Total Due:
                </Heading>
                <Heading fontSize={18} fontWeight={600}>
                  ₦10,200
                </Heading>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </FormControl>
      <ButtonComponent
        width="100%"
        color="text.500"
        text="Preview Invoice"
        onClick={() => setStep(step + 1)}
        bg="bg.200"
      />
    </Box>
  );
};

const CreateInvoiceForm = ({ step, setStep }: StepProps) => {
  const [fullName, setFullName] = useState<string>('');
  return (
    <Box>
      <Box mb="40px">
        <Heading color="text.200" fontWeight={700} fontSize={32}>
          Create Invoice
        </Heading>
      </Box>
      <Box>
        <FormControl>
          <Stack spacing="16px" mb="30px">
            <Box>
              <FormLabel color="text.200" fontSize={14}>
                Name of Product/Service
              </FormLabel>
              <FormInput
                type="text"
                placeholder="Enter name of product/service"
                width="100%"
                value={fullName}
                setValue={setFullName}
              />
            </Box>
            <Box>
              <FormLabel fontSize={16} color="text.200">
                Quantity
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Quantity of Product"
                width="100%"
                value={fullName}
                setValue={setFullName}
              />
            </Box>
            <Box>
              <FormLabel color="text.200" fontSize={14}>
                Price
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Enter Price"
                width="100%"
                value={fullName}
                setValue={setFullName}
              />
            </Box>
          </Stack>
          <AddNewInvoiceButton />
          <ButtonComponent
            width="100%"
            color="text.500"
            text="Generate Invoice"
            onClick={() => setStep(step + 1)}
            bg="bg.200"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

const CreateInvoiceFlow = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <Box>
      {step === 0 && <CreateInvoiceForm step={step} setStep={setStep} />}
      {step === 1 && <InvoicePreview step={step} setStep={setStep} />}
      {step === 2 && <InvoiceDownload />}
    </Box>
  );
};

export default CreateInvoiceFlow;
