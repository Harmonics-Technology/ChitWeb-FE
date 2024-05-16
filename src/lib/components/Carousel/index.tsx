'use client';

import { Box, Image, Flex, VStack, Text, Heading } from '@chakra-ui/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { CarouselProps } from '~/lib/utilities/schema';

import 'swiper/css';
import 'swiper/css/pagination';

export const CarouselContent = ({
  image,
  title,
  description,
}: CarouselProps) => {
  return (
    <VStack spacing="30px" alignItems="center" justifyContent="center">
      <Box maxW="300px" h="300px">
        <Image src={image} alt="3d-icon" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box textAlign="center" color="text.500">
        <Heading fontSize={40} fontWeight={600} mb="15px">
          {title}
        </Heading>
        <Text fontSize={19} lineHeight="38px">
          {description}
        </Text>
      </Box>
    </VStack>
  );
};

const Carousel = () => {
  return (
    <Box
      maxW="580px"
      h="680px"
      bgGradient="linear(to-br, bg.100 20%, bg.200 80%)"
      borderRadius="40px"
      px="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
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
        style={{ height: 'auto', paddingBottom: '50px' }}
      >
        <SwiperSlide>
          <CarouselContent
            image="/assets/signup.png"
            title="Seamless Transactions"
            description="Stay in control of your finances; enjoy a hassle-free, secure and efficient way to make and receive payments."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            image="/assets/chart.png"
            title="Advertise Business"
            description="Advertise business on chit platform, increase your brand awareness, generate more leads, and ultimately grow your business."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            image="/assets/currency-exchange.png"
            title="Receive Voucher Payment"
            description="Experience the convenience of digital vouchers. Receive voucher payment from customers."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
