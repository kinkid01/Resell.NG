"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Box, Image, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MotionBox = motion(Box);

const images = [
  "/images/ticket1.jpg",
  "/images/ticket2.jpg",
  "/images/ticket3.jpg",
  "/images/ticket4.jpg",
  "/images/ticket5.jpg",
  "/images/ticket6.jpg",
];

const TicketCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <Box
      position="relative"
      w="full"
      maxW="900px"
      mx="auto"
      overflow="hidden"
      rounded={"2xl"}
    >
      <Box ref={emblaRef} overflow="hidden" rounded={"2xl"}>
        <Flex>
          {images.map((src, index) => (
            <MotionBox
              key={index}
              minW="100%"
              position="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={src}
                alt={`Event ${index + 1}`}
                w="full"
                h={{ base: "250px", md: "600px" }}
                objectFit="cover"
                borderRadius="2xl"
                boxShadow="lg"
                rounded={"2xl"}
              />
            </MotionBox>
          ))}
        </Flex>
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        aria-label="Previous slide"
        onClick={scrollPrev}
        position="absolute"
        top="50%"
        left="2"
        transform="translateY(-50%)"
        zIndex={2}
        bg="whiteAlpha.800"
        _hover={{ bg: "whiteAlpha.900" }}
        rounded="full"
        size="sm"
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        aria-label="Next slide"
        onClick={scrollNext}
        position="absolute"
        top="50%"
        right="2"
        transform="translateY(-50%)"
        zIndex={2}
        bg="whiteAlpha.800"
        _hover={{ bg: "whiteAlpha.900" }}
        rounded="full"
        size="sm"
      >
        <ChevronRight />
      </IconButton>

      {/* Dots Indicator */}
      <Flex justify="center" mt={3} gap={2}>
        {images.map((_, index) => (
          <Box
            key={index}
            w={selectedIndex === index ? "10px" : "8px"}
            h={selectedIndex === index ? "10px" : "8px"}
            borderRadius="full"
            bg={selectedIndex === index ? "red.500" : "gray.400"}
            transition="all 0.3s"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TicketCarousel;
