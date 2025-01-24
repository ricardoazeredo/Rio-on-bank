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
      <Text style={styles.text}>Conta</Text>
      <Button 
        title="Voltar"
        onPress={handleBack}
      />
    </View>
  );
}