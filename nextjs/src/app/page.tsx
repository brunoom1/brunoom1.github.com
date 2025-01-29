import { PageConstructor } from "@/components/PageConstructor";

export default function Home() {

  if (process.env.CONSTRUCTION ) return <PageConstructor />;

  return <div>
    <h1> develop </h1>
  </div>
}
