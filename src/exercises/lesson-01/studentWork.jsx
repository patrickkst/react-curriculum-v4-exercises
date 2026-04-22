//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let myName = 'Patrick';
  let myAge = '30';
  const myHobbies = [
    { id: 1, title: 'Play videogames' },
    { id: 2, title: 'Listen to music' },
    { id: 3, title: 'Workout' },
  ];
  return (
    <div>
      <h1>{myName}</h1>
      {myHobbies.map((hobby) => (
        <li key={hobby.id}>{hobby.title}</li>
      ))}
      <p>
        Hello My name is {myName} and I'm {myAge} years old. I am from the
        Dominican Republic but live in massachusetts. I enjoy playing video
        games the most. I wanted to learn programming because I wanted to know
        how computers worked.
      </p>
    </div>
  );
}
