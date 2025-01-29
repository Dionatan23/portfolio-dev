import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import banerContato from "../assets/meta-planeta.svg";

export function SectionContato() {
  return (
    <section className="flex items-center justify-center w-full h-auto my-16">
      <div className="flex items-center justify-center opacity-80 z-10 bg-[#2F2F8A] w-[900px] h-[600px] rounded-4xl px-[80px] py-[50px]">
        <div className=" flex-1 w-[260px] h-[492px]">
          <h3 className="font-bold text-2xl">Get in touch</h3>
          <p className="w-[252px] h-[144px] font-normal text-sm mt-5">
            I’m very approachable and would love to speak to you. Feel free to
            call, send me an email . Follow me in social media or simply
            complete the enquiry form.
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <a href="/" className="flex gap-2">
              <FaWhatsapp size={24} className="text-green-400" />
              <span className="text-green-400 font-bold">(00) 00000-0000</span>
            </a>
            <a href="/" className="flex gap-2">
              <MdOutlineEmail size={24} />
              <span className="font-bold">zR2c0@example.com</span>
            </a>
          </div>
        </div>
        <form className="flex flex-1 gap-5 flex-col w-[340px] h-[492px] ">
          <h3 className="font-bold text-2xl">Send me a message</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[40px] pl-5 rounded-xl bg-[#646499]"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="w-full h-[40px] pl-5 rounded-xl bg-[#646499]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full h-[40px] pl-5 rounded-xl bg-[#646499]"
          />
          <textarea
            className="bg-[#646499] w-full h-[200px] rounded-xl pl-5 pt-2.5"
            cols={30}
            rows={10}
            placeholder="Message"
          />
          <button className="w-36 h-12 rounded-md bg-gradient-to-r from-[#C961DE] to-[#2954A3] shadow-lg]">
            Send
          </button>
        </form>
      </div>
      <img src={banerContato} alt="Imagem" className="absolute -bottom-600 right-0 w-[710px]" />
    </section>
  );
}
