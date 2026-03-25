import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("Frontend error:", error);
      setErrorMessage(error.message || "Failed to send message.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f5fefd] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-[#f5fefd] text-gray-900 px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="uppercase font-semibold leading-[0.9] tracking-tight text-[2.6rem] sm:text-[4.4rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] text-gray-900">
              Let&apos;s Make
              <br />
              Something
            </h2>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-14 flex justify-center">
            <div className="w-full max-w-[720px] rounded-[22px] sm:rounded-[26px] border border-green-400/20 bg-white/[0.45] px-4 sm:px-6 md:px-8 py-5 sm:py-7 md:py-8">
              <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
                Have a project in mind?
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-6 sm:mt-8 space-y-4 sm:space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-[16px] border border-green-400/20 bg-[#f5fefd] px-4 sm:px-5 py-4 text-base sm:text-lg text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-green-400 focus:bg-white"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full rounded-[16px] border border-green-400/20 bg-[#f5fefd] px-4 sm:px-5 py-4 text-base sm:text-lg text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-green-400 focus:bg-white"
                />

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business or project"
                  required
                  className="w-full resize-none rounded-[16px] border border-green-400/20 bg-[#f5fefd] px-4 sm:px-5 py-4 text-base sm:text-lg text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-green-400 focus:bg-white"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-[16px] border border-green-400 bg-green-400 px-5 py-4 text-base sm:text-lg font-semibold text-black transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : "Send"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-600 text-center">
                    Message sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-600 text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
