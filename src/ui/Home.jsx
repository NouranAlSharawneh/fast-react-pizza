import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser.jsx';
import Button from './Button.jsx';
import Pizza from '../../public/Pizza.jsx';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="grid w-screen grid-rows-2 items-center justify-between md:h-[90dvh] md:grid-cols-[1fr_1fr] md:grid-rows-1 md:px-11">
      <div className="h-full w-full">
        <Canvas
          className="h-full w-full"
          camera={{ position: [2, 2, 11] }} // Camera positioned to view the object
        >
          <ambientLight intensity={2.5} />
          <OrbitControls enableDamping enableZoom={false} />
          <Suspense fallback={null}>
            {/* Centering the Pizza */}
            <Pizza position={[1, -2, 1]} rotation={[0, Math.PI / 4, 0]} />
          </Suspense>
          <Environment preset="dawn" />
        </Canvas>
      </div>
      <div className="my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8 text-2xl font-semibold md:text-4xl">
          The best pizza.
          <br />
          <span className="text-yellow-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {userName === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {userName}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
