import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import * as MailComposer from "expo-mail-composer";

import HeaderSection from "../../components/HeaderSection";
import SlimButton from "../../components/buttons/SlimButton";
import { Colors } from "../theme/colors/colors";

const ContactUsScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (!name || !email || !subject || !message) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    const emailContent = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const userMailOptions = {
      recipients: [email],
      subject: "Thank you for contacting us",
      body:
        "We have received your message and will get back to you soon.\n\n" +
        emailContent,
    };

    const adminMailOptions = {
      recipients: ["alnooristiak@gmail.com"],
      subject: subject,
      body: emailContent,
    };

    MailComposer.composeAsync(userMailOptions)
      .then((result) => {
        if (result.status === "sent") {
          console.log("User email sent");
        }
      })
      .catch((error) => {
        console.log("Error sending user email:", error);
      });

    MailComposer.composeAsync(adminMailOptions)
      .then((result) => {
        if (result.status === "sent") {
          console.log("Admin email sent");
          Alert.alert(
            "Success",
            "Email sent successfully. We will contact you soon."
          );
          clearFields();
        }
      })
      .catch((error) => {
        console.log("Error sending admin email:", error);
        Alert.alert("Error", "Failed to send email. Please try again later.");
      });
      clearFields();
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <View>
      <HeaderSection
        // onPress={() => navigation.navigate("UserProfileScreen")}
        tittle="Vision"
      />

      <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={sendEmail}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  title: {
    color: Colors.purple_dark,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginVertical: 40,
  },
  input: {
    height: 40,
    borderColor: Colors.light_purple,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    padding: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  sendButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  sendButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ContactUsScreen;
