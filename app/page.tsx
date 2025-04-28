'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import IITList from '../components/colleges';
import { CheckCircle, FileText, Upload, UserPlus } from "lucide-react";
// Enhanced Card component with simple hover effect
const steps = [
  { icon: UserPlus, title: "Register", description: "Create your account to get started." },
  { icon: FileText, title: "Fill Application", description: "Complete your application form online." },
  { icon: Upload, title: "Upload Documents", description: "Submit required documents securely." },
  { icon: CheckCircle, title: "Admission Confirmed", description: "Get your seat confirmed!" },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-red-700 mb-12"
        >
          Your Journey to Admission
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
              {/* Line Connector */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block h-1 w-16 bg-red-300 mt-6 mb-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnhancedCard = ({ title, desc, idx }) => {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <Card 
        className="shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border border-transparent hover:border-red-500 group"
      >
        <CardContent className="p-6">
          <CardTitle className="group-hover:text-red-600 transition-colors">{title}</CardTitle>
          <p className="mt-4 text-gray-600">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Simplified Testimonial Card Component (without Avatar)
const TestimonialCard = ({ name, role, quote, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="relative">
        <div className="text-red-500 text-5xl font-serif absolute -top-4 -left-2">"</div>
        <p className="italic text-gray-700 mb-6 pt-4">{quote}</p>
        <div className="border-t pt-4 mt-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Earth = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color="red" wireframe />
    </mesh>
  );
};

const Header = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 50) {
        controls.start({ opacity: 0, y: -50 });
      } else {
        controls.start({ opacity: 1, y: 0 });
      }
    });
  }, [scrollY, controls]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
      className="sticky top-10 left-1/4 transform -translate-x-1/2 bg-white rounded-full shadow-md p-4 flex gap-6 justify-center items-center w-2/4 z-50"
    >
      <button onClick={() => scrollToSection('hero')} className="text-red-600 font-semibold hover:underline">Home</button>
      <button onClick={() => scrollToSection('why')} className="text-red-600 font-semibold hover:underline">Why Online</button>
      <button onClick={() => scrollToSection('flexible')} className="text-red-600 font-semibold hover:underline">Flexible</button>
      <button onClick={() => scrollToSection('courses')} className="text-red-600 font-semibold hover:underline">Courses</button>
      <button onClick={() => scrollToSection('testimonials')} className="text-red-600 font-semibold hover:underline">Testimonials</button>
      <button onClick={() => scrollToSection('partners')} className="text-red-600 font-semibold hover:underline">Partners</button>
      <button onClick={() => scrollToSection('contact')} className="text-red-600 font-semibold hover:underline">Contact</button>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-center text-gray-600 text-sm">
      <div className="container mx-auto px-4 flex space-x-2">
        {/* Socials Section */}
        <div className="flex flex-col items-start pl-4">
          <h3 className="text-black font-bold">Socials</h3>
          <ul className="mt-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-red-600">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">Twitter</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Terms and Conditions Section */}
        <div className="flex flex-col items-start pl-20">
          <h3 className="text-black font-bold">Terms and Conditions</h3>
          <ul className="mt-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-red-600">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">User Agreement</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-gray-600">
        © {new Date().getFullYear()} Education Platform. All rights reserved.
      </p>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen">
      
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <ambientLight />
          <OrbitControls enableZoom={false} autoRotate />
          <Earth />
        </Canvas>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-32 pb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-red-700"
        >
          Learn From Anywhere, Anytime.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mt-4 max-w-2xl text-gray-700"
        >
          Empower your future with top college courses, flexible learning, and global access.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
          className="mt-8"
        >
          <Button variant="default" size="lg" className="bg-red-600 hover:bg-red-700">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Why Online Learning */}
      <section id="why" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-red-700"
          >
            Why Choose Online Learning?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Flexibility", desc: "Learn at your own pace, on your schedule." },
              { title: "Global Access", desc: "Courses from top colleges worldwide." },
              { title: "Affordable", desc: "Cost-effective education for everyone." },
            ].map((item, idx) => (
              <EnhancedCard key={idx} title={item.title} desc={item.desc} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Learning Options */}
      <section id="flexible" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-red-700"
          >
            Flexible Learning Options
          </motion.h2>

          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Self-Paced Courses</AccordionTrigger>
                <AccordionContent>
                  Learn at your own speed with flexible schedules and recorded sessions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Live & Recorded Lectures</AccordionTrigger>
                <AccordionContent>
                  Attend live lectures or access recorded ones anytime you need.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Interactive Learning</AccordionTrigger>
                <AccordionContent>
                  Engage with quizzes, assignments, and community discussions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <Timeline/>

      {/* Courses Offered */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-red-700"
          >
            Explore Our Courses
          </motion.h2>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {["Computer Science", "Business", "Engineering", "Arts", "Health Sciences", "Law"].map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Button variant="outline" className="rounded-full">
                  {course}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-red-700"
          >
            What Our Students Say
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard 
                name="Priya Sharma"
                role="Computer Science Graduate"
                quote="The flexibility of the online courses allowed me to balance my job and education. The IIT instructors were incredibly knowledgeable and supportive throughout my learning journey."
                idx={0}
              />
              <TestimonialCard 
                name="Rahul Patel"
                role="Engineering Student"
                quote="Accessing courses from top IITs completely changed my career trajectory. The quality of education matched the on-campus experience, and the networking opportunities were invaluable."
                idx={1}
              />
              <TestimonialCard 
                name="Anjali Mehta"
                role="Business Analytics Professional"
                quote="As a working professional, I was skeptical about online learning. But the interactive sessions and real-world projects from IIT faculty exceeded my expectations and helped me secure a promotion."
                idx={2}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner IIT Colleges */}
      <section id="partners" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-red-700"
          >
            Our Prestigious IIT Partners
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card className="p-6 shadow-md">
              <CardContent>
                <IITList />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-red-700"
          >
            Let's Connect
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="text-lg text-gray-600">Email: <a href="mailto:support@educationplatform.com" className="text-red-600">support@educationplatform.com</a></p>
            <p className="text-lg text-gray-600 mt-2">Phone: +91-XXXX-XXXXXX</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default LandingPage;