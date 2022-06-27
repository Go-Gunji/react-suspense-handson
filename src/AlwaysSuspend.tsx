function sleep(ms: number) {
  return new Promise((resoleve) => setTimeout(resoleve, ms));
}

export const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000);
};
