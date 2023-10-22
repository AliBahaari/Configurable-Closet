import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        className="w-screen h-screen text-white flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#111",
        }}
      >
        <span className="text-xs">{progress.toFixed(1)} %</span>
        <div className="w-32 h-1 bg-slate-200 mt-2 rounded-sm">
          <div
            className="w-0 h-1 rounded-sm"
            style={{
              width: `${progress}%`,
              backgroundColor: "#A9FFCB",
            }}
          ></div>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
