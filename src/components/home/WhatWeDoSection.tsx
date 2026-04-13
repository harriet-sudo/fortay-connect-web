"use client";

import { motion } from "framer-motion";
import { Headphones, Bot, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DecorativeCircle from "@/components/DecorativeCircle";

const services = [
{
  icon: Phone,
  title: "Unified Communications",
  description:
  "Consolidate voice, video, messaging and collaboration onto a single platform that drives productivity and cuts costs."
},
{
  icon: Headphones,
  title: "Customer Experience",
  description:
  "Design and deploy omnichannel contact centre solutions that turn every interaction into an opportunity."
},
{
  icon: Bot,
  title: "AI & Automation",
  description:
  "Implement conversational AI, intelligent routing and workflow automation to scale without adding headcount."
}];


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhatWeDoSection = () => null;



















































export default WhatWeDoSection;