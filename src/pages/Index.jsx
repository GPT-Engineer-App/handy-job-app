import React from "react";
import { Box, Container, VStack, HStack, Text, Button, Image, Input, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch, FaUser, FaHome, FaBriefcase, FaEnvelope, FaDollarSign, FaVideo, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex as="header" align="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcxODk2ODE4NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="GeorgieJobs Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold" ml={4}>
          GeorgieJobs
        </Text>
        <Spacer />
        <HStack spacing={4}>
          <Button leftIcon={<FaHome />} variant="ghost">
            Home
          </Button>
          <Button leftIcon={<FaBriefcase />} variant="ghost">
            Services
          </Button>
          <Button leftIcon={<FaEnvelope />} variant="ghost">
            Contact
          </Button>
          <Button leftIcon={<FaUser />} variant="ghost">
            Profile
          </Button>
        </HStack>
      </Flex>

      {/* Search Bar */}
      <HStack mb={8}>
        <Input placeholder="Search for services..." />
        <IconButton aria-label="Search" icon={<FaSearch />} />
      </HStack>

      {/* Featured Services */}
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Featured Services
        </Text>
        <HStack spacing={8}>
          <Box textAlign="center">
            <Image src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbHVtYmVyfGVufDB8fHx8MTcxODk2ODE4NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Plumber" boxSize="150px" />
            <Text mt={2}>Plumber</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://images.unsplash.com/photo-1611021061285-16c871740efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXJ8ZW58MHx8fHwxNzE4OTY4MTg1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Carpenter" boxSize="150px" />
            <Text mt={2}>Carpenter</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://images.unsplash.com/photo-1489514354504-1653aa90e34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXNvbnxlbnwwfHx8fDE3MTg5NjgxODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Mason" boxSize="150px" />
            <Text mt={2}>Mason</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Footer */}
      <Flex as="footer" mt={8} py={4} borderTop="1px" borderColor="gray.200" justify="center">
        <HStack spacing={4}>
          <Button leftIcon={<FaDollarSign />} variant="ghost">
            Payment
          </Button>
          <Button leftIcon={<FaVideo />} variant="ghost">
            Video Consultation
          </Button>
          <Button leftIcon={<FaHandshake />} variant="ghost">
            Trade Services
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;
