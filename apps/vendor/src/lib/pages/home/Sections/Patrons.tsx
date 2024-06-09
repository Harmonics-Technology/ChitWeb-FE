import { Box, VStack, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { ReviewCard } from '~/lib/components/Cards';

const Patrons = () => {
  return (
    <Box mb="80px" maxW="1232px" mx="auto">
      <Stack spacing="90px">
        <Box>
          <VStack>
            <Heading
              color="text.200"
              textTransform="uppercase"
              textAlign="center"
              fontSize={40}
              lineHeight="60px"
              fontWeight={900}
            >
              our patrons are{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                impressed
              </Box>
            </Heading>
            <Text fontSize={18} color="text.400">
              Join the millions who trust our Fintech solutions. Secure,
              reliable, and innovative - we've got you covered.
            </Text>
          </VStack>
        </Box>

        <Box>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ height: 'auto', padding: '40px 0px' }}
          >
            <SwiperSlide>
              <ReviewCard
                img="/assets/face-card.jpg"
                review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
                userName="Munira Adamu-Ibrahim"
                post="Merchant User"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                img="/assets/face-card.jpg"
                review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
                userName="Munira Adamu-Ibrahim"
                post="Merchant User"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                img="/assets/face-card.jpg"
                review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
                userName="Munira Adamu-Ibrahim"
                post="Merchant User"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                img="/assets/face-card.jpg"
                review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
                userName="Munira Adamu-Ibrahim"
                post="Merchant User"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                img="/assets/face-card.jpg"
                review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
                userName="Munira Adamu-Ibrahim"
                post="Merchant User"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                img="/assets/face-card.jpg"
                review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
                userName="Munira Adamu-Ibrahim"
                post="Merchant User"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Stack>
    </Box>
  );
};

export default Patrons;
