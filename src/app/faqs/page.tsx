import Header from "../components/header";
import Footer from "../components/footer";

export default function Faqs() {
  return (
    <main>
      <Header />
      <h1 className="mt-20 text-[36px] font-bold text-center">Frequently Asked Questions</h1>
      <p className="text-center mb-28">Find answers to common questions about our shoes, orders, and policies.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 px-4 md:px-20">
        <div className="bg-[#F7F7F7] rounded-lg p-4 flex-1 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[18px] font-bold mb-4">What shoe sizes do you offer?</h5>
            <p className="text-5xl font-extralight -mt-5">+</p>
          </div>
          <div>
            <p>We offer a wide range of sizes for men, women, and kids. Check our size guide for accurate measurements.</p>
          </div>
        </div>
        
        <div className="bg-[#F7F7F7] rounded-lg p-4 flex-1 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[18px] font-bold mb-4">What is your return policy?</h5>
            <p className="text-5xl font-extralight -mt-5">+</p>
          </div>
          <div>
            <p>You can return unworn shoes within 30 days for a full refund or exchange. See our return policy for details.</p>
          </div>
        </div>
        
        <div className="bg-[#F7F7F7] rounded-lg p-4 flex-1 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[18px] font-bold mb-4">Do you offer international shipping?</h5>
            <p className="text-5xl font-extralight -mt-5">+</p>
          </div>
          <div>
            <p>Yes! We ship worldwide. Shipping costs and delivery times vary by location.</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-lg p-4 flex-1 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[18px] font-bold mb-4">How do I track my order?</h5>
            <p className="text-5xl font-extralight -mt-5">+</p>
          </div>
          <div>
            <p>Once your order is shipped, you'll receive a tracking number via email to monitor your shipment.</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-lg p-4 flex-1 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[18px] font-bold mb-4">Are your shoes true to size?</h5>
            <p className="text-5xl font-extralight -mt-5">+</p>
          </div>
          <div>
            <p>Most of our shoes fit true to size, but we recommend checking individual product descriptions for specific sizing guidance.</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-lg p-4 flex-1 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[18px] font-bold mb-4">Do you offer discounts or promotions?</h5>
            <p className="text-5xl font-extralight -mt-5">+</p>
          </div>
          <div>
            <p>Yes! Subscribe to our newsletter and follow us on social media for the latest deals and special promotions.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}