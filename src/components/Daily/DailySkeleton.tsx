import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function DailySkeleton() {
  return (
    <Card
      width={{ base: "15vh", sm2: "17vh", lg: "22vh" }}
      height={{ base: "14svh", sm2: "15svh", lg: "20svh" }}
      backgroundColor={"none"}
      border={"1px solid #81aeca"}
    >
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default DailySkeleton;
