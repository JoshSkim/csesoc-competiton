import {
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

const CourseScreen = ({ route, navigation }) => {
  //getting props
  const { course } = route.params;
  //state for modal
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <Provider>
      <SafeAreaView>
        <Text style={{ color: 'white' }}>{course.courseCode}</Text>
        <Text style={{ color: 'white' }}>{course.courseName}</Text>

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
            <Text style={styles.title2}>Total Assesment Name</Text>
            <TextInput
              style={styles.textInput}
              mode='outlined'
              maxLength={8}
              onChangeText={(text) => console.log(text)}
              placeholder='eg: 100, 1.6'
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
    margin: 10,

    color: 'black',
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
