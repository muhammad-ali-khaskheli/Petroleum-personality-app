import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const questions = [
  { question: "Do you enjoy working in teams?", options: ["Yes", "No"] },
  { question: "Are you good at solving complex problems?", options: ["Yes", "No"] },
  { question: "Do you prefer working outdoors?", options: ["Yes", "No"] },
  { question: "Do you like collaborating with others on projects?", options: ["Yes", "No"] },
  { question: "Are you comfortable leading a team?", options: ["Yes", "No"] },
  { question: "Do you enjoy brainstorming ideas with others?", options: ["Yes", "No"] },
  { question: "Are you good at resolving conflicts in a team?", options: ["Yes", "No"] },
  { question: "Do you prefer group discussions over working alone?", options: ["Yes", "No"] },
  { question: "Are you comfortable giving presentations to a group?", options: ["Yes", "No"] },
  { question: "Do you enjoy mentoring or teaching others?", options: ["Yes", "No"] },
  { question: "Are you good at analyzing data?", options: ["Yes", "No"] },
  { question: "Do you enjoy solving puzzles or riddles?", options: ["Yes", "No"] },
  { question: "Are you comfortable working with numbers and statistics?", options: ["Yes", "No"] },
  { question: "Do you like finding patterns in data?", options: ["Yes", "No"] },
  { question: "Are you good at making decisions based on facts?", options: ["Yes", "No"] },
  { question: "Do you enjoy troubleshooting technical issues?", options: ["Yes", "No"] },
  { question: "Are you comfortable using software tools for analysis?", options: ["Yes", "No"] },
  { question: "Do you like optimizing processes for better results?", options: ["Yes", "No"] },
  { question: "Are you good at predicting outcomes based on data?", options: ["Yes", "No"] },
  { question: "Do you enjoy learning new technical skills?", options: ["Yes", "No"] },
  { question: "Do you enjoy working in remote or challenging environments?", options: ["Yes", "No"] },
  { question: "Are you comfortable working in extreme weather conditions?", options: ["Yes", "No"] },
  { question: "Do you like hands-on work with tools and equipment?", options: ["Yes", "No"] },
  { question: "Are you good at following safety protocols?", options: ["Yes", "No"] },
  { question: "Do you enjoy traveling for work?", options: ["Yes", "No"] },
  { question: "Are you comfortable working in high-pressure situations?", options: ["Yes", "No"] },
  { question: "Do you like working on large-scale projects?", options: ["Yes", "No"] },
  { question: "Are you good at adapting to unexpected changes?", options: ["Yes", "No"] },
  { question: "Do you enjoy working with heavy machinery?", options: ["Yes", "No"] },
  { question: "Are you comfortable working long hours on-site?", options: ["Yes", "No"] },
  { question: "Are you interested in geology and rock formations?", options: ["Yes", "No"] },
  { question: "Do you enjoy learning about oil and gas extraction processes?", options: ["Yes", "No"] },
  { question: "Are you comfortable working with technical drawings and schematics?", options: ["Yes", "No"] },
  { question: "Do you like designing systems or processes?", options: ["Yes", "No"] },
  { question: "Are you good at understanding how machines work?", options: ["Yes", "No"] },
  { question: "Do you enjoy working with advanced technology?", options: ["Yes", "No"] },
  { question: "Are you comfortable using computer-aided design (CAD) software?", options: ["Yes", "No"] },
  { question: "Do you like improving efficiency in systems?", options: ["Yes", "No"] },
  { question: "Are you good at troubleshooting mechanical issues?", options: ["Yes", "No"] },
  { question: "Do you enjoy learning about renewable energy sources?", options: ["Yes", "No"] },
  { question: "Do you prefer structured tasks over open-ended ones?", options: ["Yes", "No"] },
  { question: "Are you good at managing your time effectively?", options: ["Yes", "No"] },
  { question: "Do you enjoy taking on challenging projects?", options: ["Yes", "No"] },
  { question: "Are you comfortable working under tight deadlines?", options: ["Yes", "No"] },
  { question: "Do you like setting and achieving long-term goals?", options: ["Yes", "No"] },
  { question: "Are you good at staying organized?", options: ["Yes", "No"] },
  { question: "Do you enjoy learning new things regularly?", options: ["Yes", "No"] },
  { question: "Are you comfortable working independently?", options: ["Yes", "No"] },
  { question: "Do you like taking initiative in your work?", options: ["Yes", "No"] },
  { question: "Are you good at multitasking?", options: ["Yes", "No"] },
];

const fieldDescriptions = {
  'Drilling Engineering': 'Drilling engineers design and implement procedures to drill oil and gas wells. They ensure the drilling process is safe, efficient, and environmentally friendly.',
  'Reservoir Engineering': 'Reservoir engineers analyze reservoir data to optimize oil and gas production. They use advanced techniques to maximize recovery and extend the life of reservoirs.',
  'Production Engineering': 'Production engineers focus on optimizing the production of oil and gas. They design and implement systems to improve efficiency and reduce costs.',
};

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [testCompleted, setTestCompleted] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    // Update score based on answer
    if (answer === 'Yes') {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Mark test as completed
      setTestCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const retakeTest = () => {
    // Reset the test
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setTestCompleted(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Show results screen if test is completed
  if (testCompleted) {
    let result = '';
    if (score >= 40) {
      result = 'Drilling Engineering';
    } else if (score >= 30) {
      result = 'Reservoir Engineering';
    } else {
      result = 'Production Engineering';
    }
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Test Completed!</Text>
        <Text style={styles.resultText}>Your score is {score}.</Text>
        <Text style={styles.resultText}>You are suited for:</Text>
        <Text style={styles.fieldText}>{result}</Text>
        <Text style={styles.descriptionText}>{fieldDescriptions[result]}</Text>
        <Text style={styles.madeByText}>Made by Muhammad Ali</Text>
        <Text style={styles.groupMembersText}>Group members: 23PG(27,19,11,42,45,24)</Text>
        <TouchableOpacity style={styles.retakeButton} onPress={retakeTest}>
          <Text style={styles.retakeButtonText}>Retake Test</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Show question screen if test is not completed
  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>{Math.round(progress)}% Completed</Text>
      <ProgressBar
        progress={progress / 100}
        color="#6200ee"
        style={styles.progressBar}
      />
      <Text style={styles.questionText}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            answers[currentQuestion] === option && styles.selectedOption,
          ]}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={goToPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleAnswer('')} // Placeholder for Next button
          disabled={currentQuestion === questions.length - 1}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#6200ee',
  },
  progressBar: {
    height: 10,
    width: '100%',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionButton: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#6200ee',
    borderColor: '#6200ee',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  navButton: {
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fieldText: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    color: '#6200ee',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  madeByText: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
    color: '#666',
  },
  groupMembersText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  retakeButton: {
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  retakeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});