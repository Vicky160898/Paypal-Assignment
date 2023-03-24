import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataProvider } from "../context/ContextProvider";

export default function Sprint() {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = DataProvider();

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !task) {
      toast({
        title: "Please Fill all the Fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:8080/api/sprint/task`,
        { email, task },
        config
      );
      toast({
        title: "Task Planner Created Successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      toast({
        title: "Something wents wrong!",
        status: err.response.data.message,
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };
  return (
    <Box display={"flex"} justifyContent="center" alignItems={"center"}>
      <VStack
        w={"25%"}
        h="50vh"
        border={"1px solid red"}
        gap="20px"
        p={"25px"}
        mt={"50px"}
        bg="teal"
        borderRadius={"20px"}
      >
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="text"
            placeholder="Enter your Email for Project"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="title">Project Task Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your Project Name..."
            onChange={(e) => setTask(e.target.value)}
          />
        </FormControl>
        <Button onClick={handleSubmit} isLoading={loading}>
          Create Task Planner
        </Button>
      </VStack>
    </Box>
  );
}
