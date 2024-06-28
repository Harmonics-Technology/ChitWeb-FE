'use client';

import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { createContext, useState, useMemo } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import type { VerificationSlideProps } from '~/lib/utilities/schema';

import VerificationModalFlow from './VerificationModalFlow';

const VerificationSlide = ({
  title,
  image,
  description,
  text,
  onClick,
  linkText,
}: VerificationSlideProps) => {
  return (
    <Box w='100%'>
      <Flex alignItems="center" justifyContent='center'>
        <Box w="100%">
          <VStack spacing="10px">
            <Heading fontSize={18} textAlign='center'>{title}</Heading>
            <Text fontSize={14} textAlign='center'>{text}</Text>
            <Button
              color="brand.primary"
              textDecoration="underline"
              fontWeight={600}
              onClick={onClick}
              bg="none"
            >
              {linkText}
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
};




export const VerificationFlowContext = createContext<any>(null);

const VerificationCarousel = () => {
  const [position, setPosition] = useState<number>(0);
  const [showMobileVerificationModal, setShowMobileVerificationModal] =
    useState<boolean>(false);
  const [showBvnVerificationModal, setShowBvnVerificationModal] =
    useState<boolean>(false);
  const [showBusinessVerificationModal, setShowBusinessVerificationModal] =
    useState<boolean>(false);
  const [showSetPinModal, setShowSetPinModal] = useState(false);

  const contextValue = useMemo(
    () => ({
      showMobileVerificationModal,
      setShowMobileVerificationModal,
      showBvnVerificationModal,
      setShowBvnVerificationModal,
      showBusinessVerificationModal,
      setShowBusinessVerificationModal,
      showSetPinModal,
      setShowSetPinModal,
    }),
    [
      showMobileVerificationModal,
      setShowMobileVerificationModal,
      showBvnVerificationModal,
      setShowBvnVerificationModal,
      showBusinessVerificationModal,
      setShowBusinessVerificationModal,
      showSetPinModal,
      setShowSetPinModal,
    ]
  );

  const openMobileVerificationModal = () => {
    setPosition(1);
    setShowMobileVerificationModal(true);
  };

  const openBvnVerificationModal = () => {
    setPosition(2);
    setShowBvnVerificationModal(true);
  };

  const openBusinessVerificationModal = () => {
    setPosition(3);
    setShowBusinessVerificationModal(true);
  };

  const openSetPinModal = () => {
    setPosition(4);
    setShowSetPinModal(true);
  };

  return (
    <VerificationFlowContext.Provider value={contextValue}>
      <Box
        w="100%"
        // borderRadius="8px"
        // border="1px solid"
        // borderColor="brand.300"
        // boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
        // p="5"
      >
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{paddingBottom: '25px'}}
        >
          <SwiperSlide>
            <VerificationSlide
              title="Verify Mobile Number"
              text="Verify your mobile number to get started"
              description="To ensure the security and integrity of your account, follow these simple steps to get started; Enjoy seamless and secure transactions with CHIT."
              image="/assets/verify-number.png"
              linkText="Verify Number"
              onClick={openMobileVerificationModal}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VerificationSlide
              title="BVN Verification"
              text="Verify your BVN to get started with secured transactions"
              description="To ensure the security and integrity of your account, follow these simple steps to get started; Enjoy seamless and secure transactions with CHIT."
              image="/assets/verify-number.png"
              linkText="Verify BVN"
              onClick={openBvnVerificationModal}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <VerificationSlide
              title="Business Verification"
              text="Verify your business to get started with growing your business"
              description="To ensure the security and integrity of your account, follow these simple steps to get started; Enjoy seamless and secure transactions with CHIT."
              image="/assets/verify-number.png"
              linkText="Verify Business"
              onClick={openBusinessVerificationModal}
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <VerificationSlide
              title="Set Transaction Pin"
              text="Set your transaction to get started with your first transaction"
              description="To ensure the security and integrity of your account, follow these simple steps to get started; Enjoy seamless and secure transactions with CHIT."
              image="/assets/verify-number.png"
              linkText="Set Pin"
              onClick={openSetPinModal}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <VerificationModalFlow position={position} setPosition={setPosition} />
    </VerificationFlowContext.Provider>
  );
};

export default VerificationCarousel;
