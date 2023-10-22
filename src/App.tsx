import { Canvas } from "@react-three/fiber";
import { Suspense, createContext, useState } from "react";
import View from "./View";
import Loader from "./Loader";
import "./App.css";

export const StatusProvider = createContext<{
  showWalls: boolean;
  texture: number;
  rangeValue: string;
}>({
  showWalls: false,
  texture: 1,
  rangeValue: "1",
});

function App() {
  const [showWalls, setShowWalls] = useState(true);
  const [texture, setTexture] = useState(1);
  const [rangeValue, setRangeValue] = useState("1");

  return (
    <StatusProvider.Provider
      value={{
        showWalls,
        texture,
        rangeValue,
      }}
    >
      <div style={{ height: "100vh", position: "relative" }}>
        <Canvas shadows>
          <Suspense fallback={<Loader />}>
            <View />
          </Suspense>
        </Canvas>

        <div
          style={{
            width: "300px",
            position: "absolute",
            bottom: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <p className="text-sm">Closets Count: {rangeValue}</p>
          <input
            type="range"
            min="1"
            max="3"
            value={rangeValue}
            step="1"
            onChange={(event) => setRangeValue(event.target.value)}
          />
          <button onClick={() => setShowWalls((prev) => !prev)}>
            Toggle the Walls
          </button>
          <button
            onClick={() => setTexture((previous) => (previous === 1 ? 2 : 1))}
          >
            Change the Texture
          </button>
        </div>
      </div>
    </StatusProvider.Provider>
  );
}

export default App;
