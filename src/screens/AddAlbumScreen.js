import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Context from "../context/context";
import { COLORS } from "../constants";

const AddAlbumScreen = ({ navigation }) => {
  const { handleAddAlbum } = useContext(Context);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleAddNewAlbum = () => {
    if (!title || !artist || !imageUrl) {
      Alert.alert("Erreur", "Veuillez remplir les champs obligatoires");
      return;
    }

    const newAlbum = {
      id: {
        attributes: {
          "im:id": Math.random().toString(),
        },
      },
      "im:name": {
        label: title,
      },
      "im:image": [
        { label: imageUrl },
        { label: imageUrl },
        { label: imageUrl },
      ],
      "im:artist": {
        label: artist,
      },
      "im:releaseDate": {
        label: releaseDate || new Date().toISOString().split("T")[0],
      },
      category: {
        attributes: {
          term: genre || "Musique",
        },
      },
      summary: {
        label: `Album par ${artist}`,
      },
    };

    handleAddAlbum(newAlbum);
    Alert.alert("Succès", "Album ajouté avec succès!");
    
    // Reset form
    setTitle("");
    setArtist("");
    setImageUrl("");
    setReleaseDate("");
    setGenre("");
    
    // Navigate back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Ajouter un Album</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Titre de l'album *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Abbey Road"
              value={title}
              onChangeText={setTitle}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Artiste *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: The Beatles"
              value={artist}
              onChangeText={setArtist}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>URL de l'image *</Text>
            <TextInput
              style={styles.input}
              placeholder="https://..."
              value={imageUrl}
              onChangeText={setImageUrl}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date de sortie</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={releaseDate}
              onChangeText={setReleaseDate}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Genre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Rock"
              value={genre}
              onChangeText={setGenre}
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleAddNewAlbum}
          >
            <Text style={styles.buttonText}>Ajouter l'album</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: COLORS.lightGray,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default AddAlbumScreen;
