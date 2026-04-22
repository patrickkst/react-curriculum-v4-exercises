//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import SnackList from './SnackList.jsx';
import SnackHeader from './SnackHeader.jsx';
import SnackFooter from './SnackFooter.jsx';

export default function StudentWork() {
  return (
    <div>
      {/* add JSX here */}
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
