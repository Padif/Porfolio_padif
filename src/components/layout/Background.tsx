export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="bg-grid absolute inset-0" />
      <div className="bg-noise absolute inset-0" />
      <div className="orb animate-float absolute -left-40 -top-40 h-136 w-136 rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="orb animate-float-2 absolute -right-48 top-1/4 h-120 w-120 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="orb animate-float absolute -bottom-32 left-1/3 h-96 w-[24rem] rounded-full bg-fuchsia-600/10 blur-[120px]" />
    </div>
  );
}
