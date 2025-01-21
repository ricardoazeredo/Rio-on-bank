import { Button, Text, View } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export function Conta() {
  const navigator = useNavigation();

  function handleBack(){
    navigator.navigate('home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RioOn Bank</Text>
      <Text style={styles.title}>Conta</Text>
      <Button 
        title="Ir para Conta"
        onPress={handleBack}
      />
    </View>
  );
}