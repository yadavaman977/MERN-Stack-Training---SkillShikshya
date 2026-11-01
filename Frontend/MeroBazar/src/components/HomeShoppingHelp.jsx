import { ChevronDown, CircleHelp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Do I need to sign in to place an order?",
    answer:
      "Yes. Sign in before checkout so you can provide your delivery details and confirm your order.",
  },
  {
    question: "Which payment option is available at checkout?",
    answer:
      "Cash on delivery is available. You can review your order and delivery details before placing it.",
  },
  {
    question: "Can I save items and come back to them later?",
    answer:
      "Yes. Add items to your wishlist and find them again when you return to the site on this browser.",
  },
];

const HomeShoppingHelp = () => {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <CircleHelp size={22} />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
            Here to help
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Questions about shopping?
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            Find quick answers about checkout, payment, and saving items. Need
            more help? Our contact page is one click away.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <MessageCircle size={17} />
            Contact us
          </Link>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-4 sm:px-6">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-4 sm:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-gray-900 marker:hidden sm:text-base">
                {question}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pt-3 pr-7 text-sm leading-6 text-gray-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeShoppingHelp;
