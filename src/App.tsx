import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#050505',
            overflow: 'hidden'
        }}>
            <ProfileCard
                name="Denis Patzi"
                title="Systems Engineer Student"
                handle="Denis-Patzi"
                status="Open to Work"
                contactText="Contact Me"
                avatarUrl="/profile10.png"
                miniAvatarUrl="https://github.com/Denis-Patzi.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.open('https://github.com/Denis-Patzi', '_blank')}
                behindGlowColor="hsla(237, 100%, 70%, 0.6)"
                behindGlowEnabled={true}

                iconUrl="/iconpattern.png"
                grainUrl="/grain.webp"

                innerGradient="linear-gradient(145deg, hsla(237, 40%, 45%, 0.55) 0%, hsla(232, 60%, 70%, 0.27) 100%)"
            />
        </div>
    );
}

export default App;