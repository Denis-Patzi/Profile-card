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
                name="[Tu Nombre]"
                title="[Tu Profesión / Carrera]"
                handle="[usuario]"
                status="Disponible"
                contactText="Contactar"

                avatarUrl="/profile10.png"
                miniAvatarUrl="https://lumiere-a.akamaihd.net/v1/images/character_bighero6_hiro_266dba5d_10da574f.jpeg?region=0,0,450,450"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}

                onContactClick={() => window.open('https://github.com/', '_blank')}
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