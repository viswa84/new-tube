

import { trpc } from "@/trpc/server";

export default async function Home() {
  const {data}= await trpc.hello({text:"vishwanath"})
  return (
<div className="font-bold text-rose-500">
   Client component says: {data?.greeting}
</div> 
  );
}
