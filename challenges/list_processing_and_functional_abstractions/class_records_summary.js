// Given this information, implement a function that takes a studentScores object and returns a class record summary object.
// https://launchschool.com/lessons/bfc761bc/assignments/ff1533e4

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let grades = Object.values(scores).map(student => finalGradeScore(student));
  let examData = Object.values(scores).map(student => calculateExamData(student));

  return {
    studentGrades: grades,
    exams: examData,
  };
}

function calculateExamData(student) {
  return {
    average: averageExamScore(student).toFixed(1),
    minimum: calculateMinimumExamScore(student),
    maximum: calculateMaximumExamScore(student),
  }
}

function calculateMinimumExamScore(student) {
  return student.scores.exams.reduce(findMin)
}

function calculateMaximumExamScore(student) {
  return student.scores.exams.reduce(findMax)
}

function findMin(result, currentScore) {
  return currentScore < result ? currentScore : result;
}

function findMax(result, currentScore) {
  return currentScore > result ? currentScore : result;
}

function finalGradeScore(student) {
  let exams = averageExamScore(student);
  let exercises = averageExerciseScore(student);

  let percentageScore = Math.round((exams * 0.65) + (exercises * 0.35));
  return generateLetterGrade(percentageScore);

}

function generateLetterGrade(score) {
  return `${score} (${convertScoreToLetter(score)})`
}

function convertScoreToLetter(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85 && score < 93) {
    return 'B';
  } else if (score >= 77 && score < 85) {
    return 'C';
  } else if (score >= 69 && score < 77) {
    return 'D';
  } else if (score >= 60 && score < 69) {
    return 'E';
  } else {
    return 'F';
  }
}

function averageExamScore(student) {
  return student.scores.exams.reduce((accum, current) => accum + current) / student.scores.exams.length;
}

function averageExerciseScore(student) {
  return student.scores.exercises.reduce((accum, current) => accum + current);
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*{
  studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
    exams: [
      {average: 75.6, minimum: 50, maximum: 100},
      {average: 86.4, minimum: 70, maximum: 100},
      {average: 87.6, minimum: 60, maximum: 100},
      {average: 91.8, minimum: 80, maximum: 100},
    ],
}*/
