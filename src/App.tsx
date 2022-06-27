import { Suspense, useState } from "react";
import { AlwaysSuspend } from "./AlwaysSuspend";
import { SometimesSuspend } from "./SometimesSuspend";
import "./App.css";
import { RenderingNotifier } from "./RenderingNotifier";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AlwaysSuspend /> */}
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspense" />
        <div>
          <button className="border p-1" onClick={() => setCount((c) => c + 1)}>
            {count}
          </button>
        </div>
        <p>サスペンドが終了するまでここは表示されない</p>
      </Suspense>
    </div>
  );
}

export default App;
