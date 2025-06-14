import { ContadorGlobal } from "@/components/ContadorGlobal";
import { ValorContadorGlobal } from "@/components/ValorContadorGlobal";

const Page = () => (
  <div>
    <h1 className="text-4xl font-bold">Página Nível 2</h1>
    <ContadorGlobal />
    <ValorContadorGlobal />
  </div>
);

export default Page;
