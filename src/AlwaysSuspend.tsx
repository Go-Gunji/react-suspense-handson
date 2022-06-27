function sleep(ms: number) {
  return new Promise((resoleve) => setTimeout(resoleve, ms));
}

export const AlwaysSuspend: React.VFC = () => {
  console.log("AlwaysSuspend is renderd");
  throw sleep(1000);
};
