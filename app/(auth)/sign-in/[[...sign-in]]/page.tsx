import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a href="#">
              <span className="sr-only">Home</span>
              <img className="h-8 sm:h-10" src="/money.png"></img>
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Track Rupee <span className="text-green-500">₹</span>
            </h1>

            <p className="mb-4 leading-relaxed text-gray-500">
              Your Paisa , Your Power
            </p>
            <SignIn path="/sign-in" />
          </div>
        </main>
      </div>
    </section>
  );
}
