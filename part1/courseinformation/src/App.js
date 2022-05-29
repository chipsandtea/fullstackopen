const Header = (prop) => {
  return (
    <>
      <h1>{prop.name}</h1>
    </>
  )
}

const Part = (prop) => {
  if (prop.course== null) return;
  const {name, count} = prop.course;
  return (
    <p>
      {name} {count}
    </p>
  )
}

const Content = (prop) => {
  return (
    <div>
      {prop.courses.map((course) => {
        return (
          <Part course={course} key={course.key}/>
        );
      })}
    </div>
  )
}

const Total = (prop) => {
  let total = 0;
  if (prop.courses != null) {
    total = prop.courses.reduce((sum, course) => {
      sum += course.count;
      return sum;
    }, 0);
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courses = [
    {key: 'p1', name: part1, count: exercises1},
    {key: 'p2', name: part2, count: exercises2},
    {key: 'p3', name: part3, count: exercises3}
  ];

  return (
    <div>
      <Header name={course}/>
      <Content courses={courses}/>
      <Total courses={courses}/>
    </div>
  )
}

export default App