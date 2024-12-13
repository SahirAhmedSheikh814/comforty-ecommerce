'use client'


import { Accordion } from "@/components/ui/accordion";
import { AccordionContent } from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What types of chairs do you offer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We offer a wide range of chairs to suit every need. From stylish modern chairs to comfortable traditional designs, all expertly crafted with premium materials and superior craftsmanship."
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can reach us through our contact form, email, or phone. Our customer service team is available during business hours to assist you with any inquiries."
    },
    {
      question: "Do your chairs come with warranty?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes, all our chairs come with a comprehensive warranty. We stand behind the quality of our products and offer warranty coverage against manufacturing defects."
    },
    {
      question: "What is your delivery timeframe?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delivery times vary depending on your location and the items ordered. Typically, orders are processed within 1-2 business days and delivered within 5-7 business days."
    },
    {
      question: "Can I try a chair before purchasing?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes, we offer showroom visits where you can test our chairs before making a purchase. Contact us to schedule a visit to our nearest showroom."
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We provide detailed care instructions with each purchase. Generally, regular dusting and occasional cleaning with appropriate products will keep your chair looking its best."
    }
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Questions Looks Here</h1>
        <p className="text-gray-600 max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are here to help with any questions you may have about our products and services.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg px-6 py-2"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

