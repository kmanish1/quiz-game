import Image from "next/image";

export default function CartoonCharacter({ name, src }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Image src={src} alt={name} width={200} height={200} />
      <p>{name}</p>
    </div>
  );
}
