import { useState } from "react";

const sleep = (ms: number) => {
  return new Promise((resoleve) => setTimeout(resoleve, ms));
};

const fetchData1 = async (): Promise<string> => {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};

export const DataLoader: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  // dataがまだ無ければローディングを開始する
  console.log("レンダリング");
  if (loading && data === null) {
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  );
};
