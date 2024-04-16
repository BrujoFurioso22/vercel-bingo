import Image from "next/image";

const getData = async () => {
  const fetchData = await fetch(`https://bingo-app-theta.vercel.app/api/users`);
  const res = await fetchData.json();
  return res;
};

export default async function Home() {
  const data = await getData();
  // console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center p-44">
      <h1>Hello Vercel Database</h1>
      <p>{`Hola ${data[0].name}`}</p>
    </main>
  );
}
