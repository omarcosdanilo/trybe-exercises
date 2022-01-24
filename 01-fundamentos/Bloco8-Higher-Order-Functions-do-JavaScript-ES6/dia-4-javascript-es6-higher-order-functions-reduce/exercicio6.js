const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const media = (acc, curValue) => acc + curValue

const studentAverage = (student, index) => {
  return {
    name: student, average: grades[index].reduce(media,0) / grades[index].length
  }
}

const newObject = students.map(studentAverage)

console.log(newObject)
 