import React from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

import type { AccordionProps, AccordionItemProps } from '@chakra-ui/react';

export type TAccordionProps = {
  items: TAccordionItemProps[];
} & AccordionProps;

export type TAccordionItemProps = {
  title: string;
  content: React.ReactNode | string;
  ToggleIcon?: React.ComponentType<{ isExpanded: boolean }>;
} & AccordionItemProps;

export function Accordion({
  allowMultiple,
  allowToggle,
  items
}: TAccordionProps) {
  if (!!items?.length) {
    return null;
  }

  return (
    <ChakraAccordion allowMultiple={allowMultiple} allowToggle={allowToggle}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          ToggleIcon={item?.ToggleIcon}
        />
      ))}
    </ChakraAccordion>
  );
}

const AccordionItem = ({ title, content, ToggleIcon }: TAccordionItemProps) => {
  return (
    <ChakraAccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {title}
              </Box>

              {!!ToggleIcon ? (
                <ToggleIcon isExpanded={isExpanded} />
              ) : (
                <AccordionIcon />
              )}
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>{content}</AccordionPanel>
        </>
      )}
    </ChakraAccordionItem>
  );
};
