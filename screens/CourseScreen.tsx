import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { course } from '../types';
import {
  Button,
  FAB,
  Modal,
  Portal,
  Provider,
  TextInput,
} from 'react-native-paper';
import AssBarChart from '../components/assBarChart';
import MarksTile from '../components/marksTile';

const CourseScreen = ({ route, navigation }) => {
  //getting props
  const { course } = route.params;
  //state for modal
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  //bar char daata
  const ass = [
    {
      name: 'LAB01',
      marks: '20',
    },
    {
      name: 'LAB02',
      marks: '20',
    },
    {
      name: 'LAB03',
      marks: '20',
    },
    {
      name: 'ASS1',
      marks: '20',
    },
  ];
  const barData = {
    labels: ['LAB01', 'LAB02', 'LAB03', 'ASS1'],
    datasets: [
      {
        data: [20, 30, 70, 65],
      },
    ],
  };
  return (
    <Provider>
      <SafeAreaView>
        <Text style={[styles.title, { marginTop: 30 }]}>
          {course.courseCode}
        </Text>
        <Text style={styles.title}>{course.courseName}</Text>
        <AssBarChart data={barData} />
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}
          >
            <Text style={styles.title2}>Assesment Name</Text>
            <TextInput
              style={styles.textInput}
              mode='outlined'
              maxLength={15}
              onChangeText={(text) => console.log(text)}
              placeholder='eg: Lab01, ASS1'
            />
            <Text style={styles.title2}>Your Assesment Marks</Text>
            <TextInput
              style={styles.textInput}
              mode='outlined'
              maxLength={8}
              onChangeText={(text) => console.log(text)}
              placeholder='eg: 80, 1.2'
            />
            <Text style={styles.title2}>Assesment Weightage</Text>
            <TextInput
              style={styles.textInput}
              mode='outlined'
              maxLength={8}
              onChangeText={(text) => console.log(text)}
              placeholder='eg: 2, 5, 10, 15'
            />
            <Button
              icon='plus'
              mode='contained'
              onPress={() => console.log('Pressed')}
            >
              Add Course
            </Button>
          </Modal>
        </Portal>
        <Text style={styles.title}>MARKS</Text>
        <FlatList
          data={ass}
          renderItem={({ item }) => <MarksTile data={item} />}
        />
        <FAB icon='plus' style={styles.fab} onPress={showModal} />
      </SafeAreaView>
    </Provider>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    top: 650,
  },
  containerStyle: {
    height: 550,
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    display: 'flex',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 10,
    color: 'white',
    fontSize: 22,
  },
  title2: {
    margin: 10,

    color: 'black',
    fontSize: 18,
  },
  textInput: {
    margin: 10,
    width: 250,
  },
});
