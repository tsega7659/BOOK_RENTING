import React, { useState } from 'react';

const faqData = [
  {
    question: "Who is Tsimona  Books?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas exercitationem accusantium suscipit quis fugiat! Facilis officiis culpa totam fugit, quia veniam illo dignissimos tenetur quibusdam blanditiis esse ipsum minima."
  },
  {
    question: "How can I download books from this site? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas exercitationem accusantium suscipit quis fugiat! Facilis officiis culpa totam fugit, quia veniam illo dignissimos tenetur quibusdam blanditiis esse ipsum minima."  },
  {
    question: "which book is the most commenly recommended?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas exercitationem accusantium suscipit quis fugiat! Facilis officiis culpa totam fugit, quia veniam illo dignissimos tenetur quibusdam blanditiis esse ipsum minima."  },
    {
        question: "whose book is the most widley read?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas exercitationem accusantium suscipit quis fugiat! Facilis officiis culpa totam fugit, quia veniam illo dignissimos tenetur quibusdam blanditiis esse ipsum minima."  },
    {
            question: "Is there any cost to download books from Tsimona books?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas exercitationem accusantium suscipit quis fugiat! Facilis officiis culpa totam fugit, quia veniam illo dignissimos tenetur quibusdam blanditiis esse ipsum minima."  }
           
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left py-2 px-4 bg-orange-100 text-orange-800 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 p-4 bg-orange-50 text-orange-700 rounded-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
