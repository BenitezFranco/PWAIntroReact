import React from 'react';
import { Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#d7c3b6',
    pageLayout: 'singlePage'
  },
  section: {
    color: 'black',
    textAlign: 'center',
    margin: 10,
    padding: 20,
    flexGrow: 1
  },
  instrucciones: {
    backgroundColor: '#ffffff',
    color: 'black',
    textAlign: 'justify',
    padding: 20,
    fontSize: 8
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  listItem: {
    marginLeft: 12,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    marginBottom: 10,
    alignSelf: 'center',
    width: 300,
    height: 250,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: 'center',
    borderBottom: '1pt solid #333',
    paddingTop: 10,
  },
  pageNumber: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottom: '1pt solid #333',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Pdf = ({ receta }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Recetas bien Argentas - {receta.titulo}</Text>
        </View>
        <Text style={styles.title}>{receta.titulo}</Text>
        {receta.imagen && receta.imagen.length > 0 && (
          <Image
            src={receta.imagen[0]}
            style={styles.image}
          />
        )}
        <View>
          <Text style={styles.subtitle}>Ingredientes</Text>
          {receta.ingredientes.map((ingrediente, index) => (
            <Text key={index} style={styles.listItem}>{ingrediente}</Text>
          ))}
          
        </View>
        <View style={styles.instrucciones}>
          <Text style={styles.subtitle}>Instrucciones</Text>
          {receta.instrucciones.map((instruccion, index) => (
            <Text key={index} style={styles.listItem}>{instruccion}</Text>
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
          <Text>Prog. Web Avanzada - Grupo x1</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Pdf;
