import Link from "next/link";

import { Hobbies } from "@/components/Hobbies";
import { Imagem } from "@/components/Imagem";
import { MeuNome } from "@/components/MeuNome";

type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { name } = await params;

  return (
    <div className="grid gap-y-4">
      <MeuNome name={name} age={32} birthDate={new Date(1992, 10, 7)} />
      <Hobbies />
      <div>
        <p>Gosto de:</p>
        <Imagem />
      </div>
      <Link className="underline" href="/nivel-0">
        Voltar
      </Link>
    </div>
  );
};

export default Page;
