import {
  Center,
  Container,
  Flex,
  Text,
  Divider,
  Heading,
  Link,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const AuthLayouts = ({ children, title }) => {
  return (
    <Container
      mt={"5.5rem"}
      display={"flex"}
      flexDirection={"column"}
      px={10}
      className="bg-auth"
    >
      <Center>
        <Heading
          backgroundColor={"white"}
          fontStyle={"italic"}
          fontFamily={"monospace"}
          as={"h2"}
          size={"2xl"}
        >
          Book Face
        </Heading>
      </Center>
      <Center mb={3} flexDirection={"column"} gap={1}>
        <Heading as={"h3"}>
          {title == "register" ? "Register" : "Login"}
        </Heading>
      </Center>
      {children}
      <Box position="relative" mt={"20px"}>
        <Divider bg={"black"} color={"black"} />
        <AbsoluteCenter bg="white" px={5}>
          OR
        </AbsoluteCenter>
      </Box>
      <Heading
        display={"flex"}
        alignItems={"center"}
        mx={"auto"}
        mt={5}
        as={"h4"}
        fontWeight={"semiBold"}
        gap={2}
      >
        <Box as="img" w={"20px"} h={"100%"} src="iconFacebook.png" />
        FACEBOOK
      </Heading>
      <Flex
        fontSize={"12px"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
        gap={1}
      >
        <Text>Forgot Password!</Text>
        <Divider
          orientation="vertical"
          height={"10px"}
          bg={"black"}
          color={"black"}
        />
        <Text>
          {title == "register" ? "Do you have Account?" : "Need new Account?"}
        </Text>
        <Link
          as={ReactLink}
          to={title == "register" ? "/login" : "/register"}
          _hover={{ color: "blue.300" }}
        >
          {title == "register" ? "Login!" : "SignUp?"}
        </Link>
      </Flex>
    </Container>
  );
};

export default AuthLayouts;
