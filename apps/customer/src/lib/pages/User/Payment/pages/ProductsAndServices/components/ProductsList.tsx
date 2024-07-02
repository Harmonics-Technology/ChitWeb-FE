import { Box, Heading, Flex } from '@chakra-ui/react';
import React from 'react';

import { ProductCard } from '~/lib/components/Cards';

const ProductsList = () => {
  return (
    <Box>
      <Box>
        <Heading fontSize={24} fontWeight={600} color="text.200" mb="20px">
          Non-Alcoholic Beverages
        </Heading>
        <Flex alignItems="center" gap="20px" flexWrap="wrap" rowGap="25px">
          <ProductCard
            title="Plack Currant"
            category="Juice"
            image="/assets/ginger.png"
          />
          <ProductCard
            title="Plack Currant"
            category="Juice"
            image="/assets/ginger.png"
          />
          <ProductCard
            title="Ginger water"
            category="Detox water"
            image="/assets/blueberries.png"
          />
          <ProductCard
            title="Plack Currant"
            category="Juice"
            image="/assets/ginger.png"
          />
          <ProductCard
            title="Plack Currant"
            category="Juice"
            image="/assets/ginger.png"
          />
          <ProductCard
            title="Ginger water"
            category="Detox water"
            image="/assets/blueberries.png"
          />
          <ProductCard
            title="Ginger water"
            category="Detox water"
            image="/assets/blueberries.png"
          />
          <ProductCard
            title="Plack Currant"
            category="Juice"
            image="/assets/ginger.png"
          />
          <ProductCard
            title="Plack Currant"
            category="Juice"
            image="/assets/ginger.png"
          />
          <ProductCard
            title="Ginger water"
            category="Detox water"
            image="/assets/blueberries.png"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductsList;
