import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function DailySkeleton() {
  return (
    <Card
      width={{ base: "15vh", sm2: "17vh", md2: "20vh", lg: "22vh" }}
      height={{
        base: "14svh",
        sm2: "15svh",
        md: "19svh",
        md2: "19.5svh",
        lg: "20svh",
      }}
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
