import { Box } from '@chakra-ui/react';
import { AnchorLink } from '@/components/common';

export function Youtube() {
  return (
    <Box
      w={{ base: '25px', md: '48px' }}
      color={'white'}
      _hover={{ color: '#01C6CE' }}
    >
      <AnchorLink
        href={'https://www.youtube.com/channel/UCEkVWlqqbz4LysNM9hQjmVg'}
        isExternal
      >
        <svg viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.6371 1.29676C24.0247 1.67387 24.3036 2.14343 24.446 2.65844C25.2077 5.64799 25.1581 11.3001 24.462 14.3364C24.3196 14.8514 24.0407 15.321 23.6531 15.6981C23.2656 16.0752 22.783 16.3466 22.2537 16.4851C19.2133 17.217 5.5956 17.1267 2.73123 16.4851C2.20196 16.3466 1.71939 16.0752 1.33183 15.6981C0.944273 15.321 0.665336 14.8514 0.522951 14.3364C-0.197141 11.487 -0.145934 5.46115 0.506949 2.67401C0.649334 2.15901 0.928271 1.68944 1.31583 1.31233C1.70339 0.935224 2.18596 0.663807 2.71523 0.525261C6.77975 -0.299981 20.7975 -0.0337238 22.2377 0.509691C22.767 0.648237 23.2496 0.919653 23.6371 1.29676ZM10.0762 4.85352L16.605 8.49704L10.0762 12.1406V4.85352Z"
            fill="currentColor"
          />
        </svg>
      </AnchorLink>
    </Box>
  );
}
