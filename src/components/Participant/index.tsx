import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { styles } from "./styles"

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          <Icon name="trash-o" size={22} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}
