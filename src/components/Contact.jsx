import React, { useRef } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaLine } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_exy8g1w",     // ใส่ Service ID
        "template_lwgu8bp",    // ใส่ Template ID
        form.current,
        "BzOibKRH-7WfUuwKk"      // ใส่ Public Key
      )
      .then(() => {
        toast.success('ส่งข้อความสำเร็จ')
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error('ส่งข้อความไม่สำเร็จ')
      });
  };

  return (
    <section className="min-h-screen bg-[#0c0b12] text-white px-6 sm:px-16 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">ติดต่อ</h1>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            เปิดรับโอกาสในการเรียนรู้และร่วมพัฒนาโปรเจกต์ใหม่ ๆ
          </h2>

          <p className="text-gray-400 mb-10">
            ผมกำลังมองหาโอกาสในการฝึกงานหรือร่วมพัฒนาโปรเจกต์ เพื่อเรียนรู้และพัฒนาทักษะด้านการพัฒนาโปรแกรม พร้อมเปิดรับคำแนะนำและประสบการณ์ใหม่ ๆ
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10">
              <PhoneIcon className="w-6 h-6 text-pink-500" />
              <div>
                <p className="text-sm text-gray-400">เบอร์โทรศัพท์</p>
                <p className="font-semibold">+66 066-149-4428</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10">
              <EnvelopeIcon className="w-6 h-6 text-purple-500" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">budphopakin@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl backdrop-blur-md border border-white/10">
              <FaLine className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-400">Line</p>
                <p className="font-semibold">@0661494428</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl">

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="text-sm text-gray-400">ชื่อของคุณ</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-2 p-3 rounded-lg bg-[#1a1925] border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">อีเมล</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-2 p-3 rounded-lg bg-[#1a1925] border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">ข้อความ</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 p-3 rounded-lg bg-[#1a1925] border border-white/10 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-semibold"
            >
              ส่งข้อความ
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
