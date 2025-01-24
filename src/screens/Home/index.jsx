import { 
  Container, 
  Title, 
  Texto, 
  Btn
} from './style';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();
  function handleConta(){
    navigation.navigate('conta');
  }
  return (
    <Container>
      <Title>RioOn Bank</Title>
      <Texto>Home</Texto>
      <Btn
        title="Ir para Conta"
        onPress={handleConta}
      />
    </Container>
  );
}