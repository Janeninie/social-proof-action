import Image from "next/image";

export default function Star() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>
          <Image
            src={"/images/icon-star.svg"}
            alt="star"
            width={17}
            height={16}
          />
        </div>
      ))}
    </div>
  );
}
