function SnackList() {
  const snackList = [
    { name: 'Banana', rank: '3' },
    { name: 'Orange', rank: '2' },
    { name: 'Apple', rank: '1' },
  ];
  const sortList = snackList.toSorted((a, b) => a.rank - b.rank);
  return (
    <ul>
      {sortList.map((snack) => (
        <li>
          {snack.name} {snack.rank}
        </li>
      ))}
    </ul>
  );
}

export default SnackList;
