import { Button, Text, View } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();
  function handleConta(){
    navigation.navigate('conta');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RioOn Bank</Text>
      <Text style={styles.title}>Home</Text>
      <Button 
        title="Ir para Conta"
        onPress={handleConta}
      />
    </View>
  );
}