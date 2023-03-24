import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
export default function Home() {
  const navigate = useNavigate();
//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     if (userInfo) {
//       navigate("/chats");
//     }
//   }, [navigate]);
  return (
    <>
      <Container maxW={"lg"} centerContent>
        <Box
          display="flex"
          justifyContent={"center"}
          textAlign="center"
          bg={"white"}
          w="100%"
          m={"40px 0 15px 0"}
          borderRadius="lg"
          borderWidth={"1px"}
        >
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent="center"
            alignItems={"center"}
            gap="5px"
            m={"auto"}
            bg={"white"}
            w="100%"
            borderRadius="lg"
            borderWidth={"1px"}
          >
            <Text fontSize={"4xl"} fontFamily="Work sans" color={"black"}>
              Task Planner
            </Text>
          </Box>
        </Box>
        <Box
          bg={"white"}
          w="100%"
          p={4}
          borderRadius="lg"
          color={"black"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded" bg="green">
            <TabList mb={"1em"}>
              <Tab w={"50%"}>Login</Tab>
              <Tab w={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}
