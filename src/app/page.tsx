// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-soft">
      <div className="pointer-events-none absolute -top-24 -right-30 h-105 w-105 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(30,58,138,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.08)_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="relative p-8 md:p-12">{/* content */}</div>
    </div>
  );
}
