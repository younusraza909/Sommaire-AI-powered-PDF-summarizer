import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    items: ["5 PDF summaries per month", "Standard processing speed", "Email support"],
    paymentLink: "",
    description: "For individuals and small teams",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    items: ["Unlimited PDF summaries", "Priority processing", "24/7 priority support", "Markdown export"],
    paymentLink: "",
    description: "For professionals and teams",
    priceId: "",
  },
];

type PricingType = {
  id: string;
  name: string;
  price: number;
  items: string[];
  paymentLink: string;
  priceId: string;
  description: string;
};

const PricingCard = ({ id, name, price, items, paymentLink, priceId, description }: PricingType) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 transition-all duration-300" key={id}>
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8  border-[1px] border-gray-500/20 rounded-2xl",
          id === "pro" && "border-rose-500 gap-5 border-2"
        )}
      >
        <div>
          <p className="text-lg lg:text-2xl font-bold capitalize">{name}</p>
          <p className="text-base mt-2">{description}</p>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>
        <div className="space-y-2.5 leading-relaxed text-base flex-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckIcon size={18} />
              <span>{item}</span>
            </li>
          ))}
        </div>
        <div className="space-y-2 flex justify-center w-full">
          <Link
            href={paymentLink}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2",
              id === "pro" && "border-rose-900",
              id === "basic" && "border-rose-100 from-rose-400 to-rose-500"
            )}
          >
            Buy Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className=" uppercase text-xl mb-8 text-rose-500 font-bold">Pricing</h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
