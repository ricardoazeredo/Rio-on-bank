import { Button, Text, View } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation();
  function handleHome(){
    navigation.navigate('home')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RioOn Bank</Text>
      <Text style={styles.title}>Sejam Bem-vindos</Text>
      <Button 
        title="Ir para Home"
        style={styles.button}
        onPress={handleHome}
      />
    </View>
  );
}