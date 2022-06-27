function sleep(ms: number) {
  return new Promise((resoleve) => setTimeout(resoleve, ms));
}

export const SometimesSuspend: React.VFC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};
