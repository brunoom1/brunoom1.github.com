import { PageConstructor } from "@/components/PageConstructor";

export default function Home() {

  console.log(process.env.NEXT_PUBLIC_CONSTRUCTION)

  if (process.env.NEXT_PUBLIC_CONSTRUCTION === "true" ) return <PageConstructor />;

  return <div>
    <h1> Home </h1>
  </div>
}
