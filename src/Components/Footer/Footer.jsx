import whiteLogo from "../../assets/Logo_white.png";

const Footer = () => {
  return (
    <footer className="bg-black px-40 py-26 text-white">
      <div className="grid grid-cols-3 gap-28">
        <div>
          <img className="h-10 w-auto cursor-pointer mb-6" src={whiteLogo} alt="" />
          <p className="font-medium text-sm text-[#CFCFCF] leading-6">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Services</h3>
          <ul className="space-y-2">
            <li className="text-sm leading-8 text-[#CFCFCF]">Bonus program</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Gift cards</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Credit and payment</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Service contracts</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Non-cash account</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Payment</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Assistance to the buyer</h3>
          <ul className="space-y-2">
            <li className="text-sm leading-8 text-[#CFCFCF]">Find an order</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Terms of delivery</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Exchange and return of goods</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Guarantee</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Frequently asked questions</li>
            <li className="text-sm leading-8 text-[#CFCFCF]">Terms of use of the site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
