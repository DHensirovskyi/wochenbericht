import DateComponent from "./components/DateComponent";
import DownloadBtn from "./components/DownloadBtn";
import Table from "./components/Table";

export default function HomePage() {
  return (
    <main className="flex justify-center py-10 px-4 lg:px-0">
      <section className="w-full max-w-[1350px] text-white flex flex-col gap-6">
        <Table />
        <DownloadBtn />
      </section>
    </main>
  );
}
