import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Calendar,
  Pill,
  Clock,
  Bed,
  Building,
  CheckCircle,
  Coins,
  UserIcon,
  StarIcon,
  StarHalfIcon,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Define feature data separately
const features: {
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Smart Appointment Booking",
    description:
      "Easy online appointment scheduling with automated queue management and instant confirmations.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Token Management",
    description:
      "Real-time token updates and waiting time estimates for better queue management.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Multi-Hospital Integration",
    description:
      "Access services from multiple government hospitals through a single platform.",
  },
  {
    icon: <Pill className="h-10 w-10 text-primary" />,
    title: "Medicine Inventory",
    description:
      "Comprehensive medicine stock management with automated reorder notifications.",
  },
  {
    icon: <Bed className="h-10 w-10 text-primary" />,
    title: "Real-time Bed Tracking",
    description:
      "Live monitoring of bed availability across departments with instant status updates.",
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "SMS Notifications",
    description:
      "Automated SMS updates for appointments, prescriptions, and important reminders.",
  },
];

export default function Home() {
  return (
    <>
      <PWAInstallPrompt />
      <Header />
      <div className="w-full">
        <section
          className="relative bg-background flex flex-col items-center justify-center py-20 md:py-28 w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.3) 0.5px, transparent 0)`,
            backgroundSize: "8px 8px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="absolute top-0 left-0 md:w-[15rem] w-[7rem] md:h-[15rem] h-[7rem] rounded-full blur-[70px] md:blur-[150px] bg-primary/40"></div>
          <div className="absolute bottom-0 right-0 md:w-[15rem] w-[7rem] md:h-[15rem] h-[7rem] rounded-full blur-[70px] md:blur-[150px] bg-primary/40"></div>
          <div className="w-full max-w-3xl px-6 md:px-0 md:text-center z-10">
            <h1 className="text-4xl md:text-[3.5rem] font-bold text-balance md:leading-[1.2] tracking-tight">
              Simplifying Hospital{" "}
              <span className="text-primary">OPD Management</span> System
            </h1>
            <p className="text-balance mt-6 text-base md:text-lg text-secondary-foreground">
              One-stop solution for managing all your hospital OPD needs.
              Streamline patient care with our comprehensive digital platform.
            </p>
            <div className="mt-8 flex md:justify-center gap-4">
              <Button className="md:text-base md:py-6 md:px-6" asChild>
                <Link href="/login">Get started</Link>
              </Button>
              <Button
                className="md:text-base md:py-6 md:px-6"
                variant="outline"
                asChild
              >
                <Link href="/hospitals">View Hospitals</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/70">
          <div className="container px-6 max-w-7xl mx-auto">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col md:items-center space-y-1 md:space-y-4 md:text-center">
                <Clock className="h-10 w-10 text-primary mb-2" />
                <h2 className="text-lg md:text-xl font-bold">
                  Real-time Token Updates
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Track your token status in real-time and get notified when
                  it&apos;s your turn.
                </p>
              </div>
              <div className="flex flex-col md:items-center space-y-1 md:space-y-4 md:text-center">
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <h2 className="text-lg md:text-xl font-bold">
                  Easy Appointment Booking
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Book appointments with your preferred department quickly and
                  easily.
                </p>
              </div>
              <div className="flex flex-col md:items-center space-y-1 md:space-y-4 md:text-center">
                <Bell className="h-10 w-10 text-primary mb-2" />
                <h2 className="text-lg md:text-xl font-bold">
                  SMS Notifications
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Receive SMS updates about your appointment status and token
                  number.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------Features Section ---------------*/}
        <section id="features" className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Comprehensive <span className="text-primary">ROGISETU</span>{" "}
              Features
            </h2>
            <p className="text-gray-600 mt-2">
              Streamline your hospital operations with our powerful suite of
              features designed for modern healthcare management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white group p-6 rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col space-y-3 cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-gray-100 w-fit group-hover:bg-primary/10 transition duration-300 group-hover:-translate-y-2">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------Solutions-------------------- */}
        <section id="solutions" className="bg-muted/70 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple OPD Booking Process
            </h2>
            <p className="text-muted-foreground mt-2">
              Follow these easy steps to book your OPD appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Select Hospital",
                description:
                  "Choose from our network of government hospitals in your area",
                points: ["Browse hospitals list", "Check availability"],
              },
              {
                step: "2",
                title: "Choose Department",
                description: "Select the medical department you need to visit",
                points: ["View specialties", "Check doctors"],
              },
              {
                step: "3",
                title: "Book Time Slot",
                description:
                  "Pick your preferred date and time for the appointment",
                points: ["Select date", "Choose time"],
              },
              {
                step: "4",
                title: "Confirm Booking",
                description: "Get instant confirmation and digital token",
                points: ["Receive SMS", "Track token"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative cursor-pointer pt-10"
              >
                <div className="absolute -top-3 left-5 bg-primary text-white rounded-full px-3 py-1 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-800 mt-2">{item.description}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-green-700"
                    >
                      <CheckCircle className="h-5 w-5" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              className="bg-primary text-white py-6 px-8 rounded-lg text-base hover:bg-primary/90 transition"
              asChild
            >
              <Link href="/dashboard/book-opd">Book Appointment Now</Link>
            </Button>
            <p className="text-muted-foreground text-sm mt-2">
              Need help? Contact our support team 24/7
            </p>
          </div>
        </section>

        {/* Token Tracking Banner */}
        <section className="w-full py-24 px-6">
          <div className="relative container bg-secondary overflow-hidden p-6 md:p-10 max-w-6xl rounded-3xl mx-auto border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Track Your Token Status
            </h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Already have an appointment? Easily check your token status by
              entering your token details. Stay updated on your position in the
              queue without waiting at the hospital.
            </p>
            <Button size="lg" className="mt-2" asChild>
              <Link href="/track-token">Track Your Token Now</Link>
            </Button>
            <Coins
              className="absolute -bottom-5 -right-5 text-primary/10"
              size={148}
            />
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                Trusted by Leading Healthcare Providers
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                See what healthcare professionals are saying about RogiSetu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Testimonial 1 --> */}
              <div className="bg-white p-6 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserIcon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-neutral-900">
                      Dr. Rajesh Kumar
                    </p>
                    <span className="text-sm text-neutral-600">
                      Medical Director, City Hospital
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-neutral-700">
                  "RogiSetu has transformed our OPD management completely. The
                  automated scheduling and real-time updates have reduced
                  waiting times by 60%. Excellent system!"
                </p>
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div className="bg-white p-6 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserIcon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-neutral-900">
                      Mrs. Priya Sharma
                    </p>
                    <span className="text-sm text-neutral-600">
                      Head Nurse, Metro Healthcare
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarHalfIcon className="h-4 w-4 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-neutral-700">
                  "The inventory management system is a game-changer. We can
                  track medicine stock in real-time and the automated alerts
                  help prevent stockouts. Highly recommended!"
                </p>
              </div>

              {/* <!-- Testimonial 3 --> */}
              <div className="bg-white p-6 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserIcon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-neutral-900">
                      Dr. Amit Patel
                    </p>
                    <span className="text-sm text-neutral-600">
                      CEO, Life Care Hospital
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-neutral-700">
                  "Patient satisfaction has improved significantly since we
                  implemented RogiSetu. The SMS notifications and digital queue
                  management have made the process seamless."
                </p>
              </div>
            </div>

            {/* <!-- Stats Section --> */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-neutral-600">Hospitals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <p className="text-neutral-600">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-neutral-600">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-neutral-600">Support</p>
              </div>
            </div>

            {/* <!-- CTA --> */}
            <div className="text-center mt-12">
              <Button className="px-8 h-12 text-[15px]" asChild>
                <Link href="/contact">
                  Join Our Growing Network
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
