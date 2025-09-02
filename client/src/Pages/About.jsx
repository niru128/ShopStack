
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    <Navbar/>
     
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to <span className="font-semibold">ShopStack</span> – your
          one-stop platform for shopping, innovation, and seamless experiences.
        </p>
      </div>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="https://source.unsplash.com/600x400/?shopping,ecommerce"
            alt="Our Mission"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At ShopStack, we aim to revolutionize online shopping by
              integrating cutting-edge technology, secure payments, and a
              delightful user experience. Our goal is to empower sellers and
              buyers with tools that make e-commerce more transparent and
              trustworthy.
            </p>
          </div>
        </motion.div>
      </section>


      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Innovation",
              desc: "We embrace technology to provide modern and scalable solutions.",
            },
            {
              title: "Trust",
              desc: "Security and transparency are at the heart of our platform.",
            },
            {
              title: "Customer First",
              desc: "We strive to deliver an exceptional experience to our users.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      <div className="py-10 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} ShopStack. All rights reserved.
      </div>
    </div>
  );
}


