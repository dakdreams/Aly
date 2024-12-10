import Link from "next/link";
import { Button } from "@/components/ui/button"

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Link href="/" >Home</Link>
      <Link href="/credits" >Credit</Link>
      <Link href="/users">user</Link>

      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button variant="destructive">Click me</Button>
    <Button>Click me toto 2</Button>
      
    </div>
  );
}
