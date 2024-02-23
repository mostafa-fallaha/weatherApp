import { Card, Text, CardBody, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  content: string;
  children: ReactNode;
}

function DetailCard({ title, content, children }: Props) {
  return (
    <Card
      width={{ base: "30%", md: "15%" }}
      height={{ base: "15vh", md: "20vh" }}
      alignItems="center"
    >
      <Box marginTop="10%">{children}</Box>
      <CardBody textAlign="center">
        <Text fontSize={{ base: 10, md: 15, lg: 18 }} fontWeight={700}>
          {title}
        </Text>
        <Text fontSize={{ base: 10, md: 15, lg: 18 }} fontWeight={600}>
          {content}
        </Text>
      </CardBody>
    </Card>
  );
}

export default DetailCard;
