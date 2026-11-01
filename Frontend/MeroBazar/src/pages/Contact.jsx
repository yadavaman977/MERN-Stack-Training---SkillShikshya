
import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      "",
      formData.message.trim(),
    ].join("\n");
    const emailDraft = `mailto:support@merobazar.com?subject=${encodeURIComponent(
      formData.subject.trim()
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = emailDraft;
    toast.info(
      "Your email app should open with a message draft. Send it there to contact support."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <MessageCircle size={17} />
            Customer Support
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Get in <span className="text-red-600">Touch</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-7">
            Need help with an order, a product, or your shopping experience?
            Our team is here to help you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Information
              </h2>

              <p className="text-gray-600 leading-7">
                Have a question? Contact us through the details below or send
                us a message using the form.
              </p>
            </div>

            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 hover:border-red-200 transition">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <MapPin className="text-red-600" size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Our Location
                </h3>
                <p className="text-sm text-gray-600">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 hover:border-red-200 transition">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <Mail className="text-red-600" size={23} />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:support@merobazar.com"
                  className="text-sm text-gray-600 hover:text-red-600 break-all transition"
                >
                  support@merobazar.com
                </a>
              </div>
            </div>

            {/* Phone support */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 hover:border-red-200 transition">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <Phone className="text-red-600" size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Call Us
                </h3>
                <a
                  href="tel:+9779805930000"
                  className="text-sm text-gray-600 hover:text-red-600 transition"
                >
                  +977 9805930000
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 hover:border-red-200 transition">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <Clock className="text-red-600" size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Business Hours
                </h3>
                <p className="text-sm text-gray-600">
                  Sunday – Friday
                </p>
                <p className="text-sm text-gray-600">
                  9:00 AM – 6:00 PM
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Nepal Time (NPT)
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-red-600">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Need help with an order?
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Send us a message with a few details so we can better
                    understand your question.
                  </p>
                  <a
                    href="#contact-form"
                    className="mt-3 inline-flex text-sm font-semibold text-red-600 transition hover:text-red-700"
                  >
                    Send us a message
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              id="contact-form"
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>

              <p className="text-gray-600 mb-8">
                Complete the form below and our support team will be ready to
                assist you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      minLength={2}
                      maxLength={80}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    maxLength={120}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your question or issue..."
                    rows={6}
                    minLength={10}
                    maxLength={2000}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 transition resize-y"
                  />

                  <p className="text-xs text-gray-400 mt-2 text-right">
                    {formData.message.length}/2000 characters
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-100"
                >
                  Send Message
                  <Send size={18} />
                </button>

                <p className="text-xs text-gray-500">
  We respect your privacy. Your contact details are used to respond to your
  inquiry and provide customer support.
</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
