import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const DeveloperPage = ({
  name,
  email,
  github,
  cv,
  portfolio,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Developer Information</Text>
      
      {name ? (
        <>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </>
      ) : null}
      
      {email ? (
        <>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </>
      ) : null}
      
      {github ? (
        <>
          <Text style={styles.label}>GitHub:</Text>
          <TouchableOpacity onPress={() => Linking.openURL(github)}>
            <Text style={[styles.value, styles.link]}>{github}</Text>
          </TouchableOpacity>
        </>
      ) : null}
      
      {cv ? (
        <>
          <Text style={styles.label}>CV:</Text>
          <TouchableOpacity onPress={() => Linking.openURL(cv)}>
            <Text style={[styles.value, styles.link]}>{cv}</Text>
          </TouchableOpacity>
        </>
      ) : null}
      
      {portfolio ? (
        <>
          <Text style={styles.label}>Portfolio:</Text>
          <TouchableOpacity onPress={() => Linking.openURL(portfolio)}>
            <Text style={[styles.value, styles.link]}>{portfolio}</Text>
          </TouchableOpacity>
        </>
      ) : null}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    marginLeft: 10,
  },
  link: {
    color: '#0077cc',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  }
});

export default DeveloperPage;
