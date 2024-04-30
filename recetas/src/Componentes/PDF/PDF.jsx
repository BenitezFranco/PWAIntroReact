import React from 'react';
import { Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    pageLayout: 'singlePage'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
  instructions: {
    marginTop: 10,
  },
  image: {
    marginBottom: 10,
    alignSelf: 'center',
    width: 200, 
    height: 150, 
  },
});

const Pdf = ({ receta }) => (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text style={styles.title}>{receta.titulo}</Text>
       {/* Mostrar la imagen si está presente en el JSON */}
        {receta.imagen && (
          <Image
            src={receta.imagen}
            style={styles.image}
          />
        )}
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <View>
        {receta.ingredientes.map((ingrediente, index) => (
          <Text key={index} style={styles.listItem}>{ingrediente}</Text>
        ))}
      </View>
      <Text style={[styles.subtitle, styles.instructions]}>Instrucciones:</Text>
      <Text>{receta.instrucciones}</Text>
    </View>
  </Page>
</Document>
);

export default Pdf;
