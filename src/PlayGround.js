import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../config";
const PlayGround = ({ route }) => {
  const [question, setQuestion] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const { category } = route.params;

  const getQuestions = async () => {
    setSelectedQuestion({});
    setShowResults(false);
    const db = firebase.firestore();
    const questionsRef = db.collection("questions");
    const snapshot = await questionsRef.where("category", "==", category).get();
    if (snapshot.empty) {
      console.log("no matching documents");
      return;
    }
    const allQuestions = snapshot.docs.map((doc) => doc.data());
    const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
    setQuestion(shuffleQuestions.slice(0, 10));
  };
  const handleOptionSelect = (questionIndex, option) => {
    setSelectedQuestion({
      ...selectedQuestion,
      [questionIndex]: option,
    });
  };
  const handleSubmit = () => {
    let correctAnswers = 0;
    question.forEach((question, index) => {
      if (selectedQuestion[index] === question.correct_option) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <View style={styles.container}>
      {!question.length && <View style={styles.loading} ><Text style={styles.loadingText} >Loading.....</Text></View>}
      <FlatList
        data={question}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <TouchableOpacity
              style={[
                styles.option,
                selectedQuestion[index] === 1 && styles.selectedQuestion,
                showResults &&
                  item.correct_option === 1 &&
                  styles.correctOption,
                showResults &&
                  selectedQuestion[index] === 1 &&
                  selectedQuestion[index] !== item.correct_option &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 1)}
              disabled={showResults}
            >
              <Text>{item.option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedQuestion[index] === 2 && styles.selectedQuestion,
                showResults &&
                  item.correct_option === 2 &&
                  styles.correctOption,
                showResults &&
                  selectedQuestion[index] === 2 &&
                  selectedQuestion[index] !== item.correct_option &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 2)}
              disabled={showResults}
            >
              <Text>{item.option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedQuestion[index] === 3 && styles.selectedQuestion,
                showResults &&
                  item.correct_option === 3 &&
                  styles.correctOption,
                showResults &&
                  selectedQuestion[index] === 3 &&
                  selectedQuestion[index] !== item.correct_option &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 3)}
              disabled={showResults}
            >
              <Text>{item.option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedQuestion[index] === 4 && styles.selectedQuestion,
                showResults &&
                  item.correct_option === 4 &&
                  styles.correctOption,
                showResults &&
                  selectedQuestion[index] === 4 &&
                  selectedQuestion[index] !== item.correct_option &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 4)}
              disabled={showResults}
            >
              <Text>{item.option4}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {showResults && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {" "}
            You score {score} out of {question.length}{" "}
          </Text>
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={getQuestions}
          >
            <Text style={styles.tryAgainButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={showResults}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayGround;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  option: {
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedQuestion: {
    backgroundColor: "#949494",
  },
  correctOption: {
    backgroundColor: "green",
  },
  wrongOption: {
    backgroundColor: "red",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  result: {
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  tryAgainButton: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 10,
},
tryAgainButtonText: {
  color: "#fff",
  fontSize: 20,
},
loadingText:{
fontSize:25,
fontWeight:'700'
},
loading:{
flex:1,
justifyContent:'center',
alignItems:'center'
}
});
