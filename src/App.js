import DrumMachine from './components/DrumMachine';

function App() {
  return (
    <div className="w-screen h-screen bg-blue-300">
      <div className="flex justify-center pt-10">
        <h1 className="uppercase font-bold text-4xl">Drum Machine 🥁</h1>
      </div>
      <DrumMachine />
    </div>
  );
}

export default App;
