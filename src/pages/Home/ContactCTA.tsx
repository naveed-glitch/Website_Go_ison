import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Meteors } from "@/components/ui/meteors";

const CTASection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = [
    "Need Help Growing?",
    "Looking for Talent?",
    "Need Staffing Solutions?",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % messages.length;
      const fullText = messages[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(100);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Connecting <span className="text-blue-600">Top Talent</span> with
            <br />
            <span className="text-blue-600">Leading Companies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We specialize in matching skilled professionals with businesses that
            need their expertise. Let us help you grow.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          {/* Contact Form */}
          <Card className="flex-1">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2 h-12">
                  {text}
                  <span className="inline-block w-1 h-8 bg-blue-600 ml-1 animate-pulse"></span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form and we'll connect you with the right talent.
                </p>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Company/Organisation
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="help"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="help"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your staffing needs"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    S E N D
                    <Send className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="flex-1 flex flex-col gap-4 justify-start">
            {/* Contact Card */}
            <Card className="relative overflow-hidden h-full">
              <CardContent className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8 h-full relative z-10">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-blue-500 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-100">
                        EMAIL ADDRESS
                      </h4>
                      <p className="mt-1">info@talentbridge.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-100">PHONE</h4>
                      <p className="mt-1">+1 312 973 6111</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-100">ADDRESS</h4>
                      <p className="mt-1">
                        Talent Bridge LLC
                        <br />
                        2908 Jerrie Lane
                        <br />
                        Glenview, IL 60025
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <Meteors number={20} className="absolute inset-0 z-0" />
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4">
                  <Link
                    to="#"
                    className="bg-gray-100 hover:bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    to="#"
                    className="bg-gray-100 hover:bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link
                    to="#"
                    className="bg-gray-100 hover:bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
