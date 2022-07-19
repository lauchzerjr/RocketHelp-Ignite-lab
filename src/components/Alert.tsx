import { Center, VStack, HStack, Text, IconButton, CloseIcon, Box } from 'native-base';
// import { Alert } from 'native-base';

export function Alert() {
  return (
    <Center>
      <>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                We are going live in July!
              </Text>
            </HStack>
            <IconButton variant="unstyled" _focus={{
            borderWidth: 0
          }} icon={<CloseIcon size="3" color="coolGray.600" />} />
          </HStack>
          <Box pl="6" _text={{
          color: "coolGray.600"
        }}>
            We are happy to announce that we are going live on July 28th. Get
            ready!
          </Box>
        </VStack>
      </>
    </Center>
  );
}