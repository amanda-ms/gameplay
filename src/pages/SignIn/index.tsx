import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.img} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}e organize suas {"\n"}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
