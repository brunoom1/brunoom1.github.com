import { PageConstructor } from "@/components/PageConstructor";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_DEVELOPMENT) 
    return <PageConstructor />;

  return <div>
    <h1> Home </h1>
  </div>
}
