import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-800">
        <section className="flex h-48 items-center justify-center min-h-screen">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </section>
        <HorizontalScrollCarousel />

        <section className="flex h-48 items-center justify-center min-h-screen">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </section>
      </div>
    </>
  );
}
