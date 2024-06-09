import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function LandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
        <Link className="flex items-center justify-center" href="/dashboard">
          <img src="/money.png" className="h-6 w-6 text-gray-50" />
          <span className="text-lg px-2 text-orange-400">Track Rupee</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button
            asChild
            className="text-sm font-medium text-gray-50 bg-gray-800 hover:bg-slate-500"
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <header className="flex flex-col mt-12 justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold px-8">
            Track Rupee - Your <span className="text-green-400">Paisa</span> ,
            Your <span className="text-blue-400">Power</span>
          </h1>
          <p className="text-slate-300 mt-8 px-5 font-semibold text-center text-2xl md:text-3xl max-w-[1200px]">
            A pocket-sized{" "}
            <span className="text-green-400">budget tracker</span> designed for
            <span className="text-orange-400"> Indians.</span>
            <br />
            Manage your spending, reach your financial goals, and build a
            brighter future.
            <br />
            Simple, secure, and effective.
          </p>
        </header>
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Take control of your finances with our budget tracker
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Our easy-to-use budget tracker helps you stay on top of your
                    spending, save for your goals, and achieve financial
                    freedom.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="w-full min-[400px]:w-auto p-8 text-xl bg-gray-800 hover:bg-gray-700 text-gray-50"
                  >
                    <Link href="/dashboard">Track your money now!</Link>
                  </Button>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/img1.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Effortlessly manage your finances
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our budget tracker app provides you with the tools you need to
                  take control of your spending, save for your goals, and
                  achieve financial freedom.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Categorize Expenses</h3>
                      <p className="text-gray-400">
                        Easily categorize your expenses to get a clear picture
                        of where your money is going.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Track your Transactions
                      </h3>
                      <p className="text-gray-400">
                        View a detailed transaction history with features like
                        filter by category, type and export options.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Visualize Spending</h3>
                      <p className="text-gray-400">
                        See your spending patterns in easy-to-understand charts
                        and graphs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="300"
                src="/img2.png"
                width="550"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © {currentYear} TrackRupee. All rights reserved.
        </p>
      </footer>
      <Dialog>
        <DialogContent className="sm:max-w-[425px] bg-gray-950 text-gray-50">
          <DialogHeader>
            <DialogTitle>Welcome to Budget Tracker</DialogTitle>
            <DialogDescription>
              Sign in or create an account to start managing your finances.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right text-gray-400" htmlFor="email">
                Email
              </Label>
              <Input
                className="col-span-3 bg-gray-900 border-gray-700 text-gray-50"
                id="email"
                type="email"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right text-gray-400" htmlFor="password">
                Password
              </Label>
              <Input
                className="col-span-3 bg-gray-900 border-gray-700 text-gray-50"
                id="password"
                type="password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-gray-800 hover:bg-gray-700 text-gray-50"
              type="submit"
            >
              Sign In
            </Button>
            <Button
              className="text-gray-50 border-gray-700 hover:bg-gray-800"
              type="button"
              variant="outline"
            >
              Sign Up
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
