import { GluestackUIProvider, Alert, AlertIcon, AlertText, InfoIcon } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      
      <Alert mx='$2.5'  action="success" variant="solid" >
          <AlertIcon as={InfoIcon} mr="$3"  />
          <AlertText>
            We have updated our terms of service. Please review and accept to continue using our service.
          </AlertText>
        </Alert>
      
    </GluestackUIProvider>
  );
}