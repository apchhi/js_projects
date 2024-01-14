import ClubInfo from './components/ClubInfo';
import ClubAchievements from './components/ClubAchievements';
import ClubSquad from './components/ClubSquad';
import './App.css';

class App extends Component {
  render() {
    const achievements = ['Champions League Winner', 'Premier League Winner', 'FA Cup Winner'];

    const squad = [
      { name: 'John Doe', position: 'Forward', height: '180 cm', weight: '75 kg' },
      { name: 'Jane Doe', position: 'Midfielder', height: '170 cm', weight: '65 kg' },
      { name: 'Jack Doe', position: 'Defender', height: '190 cm', weight: '85 kg' }
    ];

    return (
      <div className="App">
        <ClubInfo
          name="Football Club"
          city="London"
          founded="1892"
          logo="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Football_Club_%28England%29_logo.svg/1200px-Football_Club_%28England%29_logo.svg.png"
        />
        <ClubAchievements achievements={achievements} />
        <ClubSquad squad={squad} />
      </div>
    );
  }
}

