"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cloud, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const expertiseData = [
  {
    title: "AI Governance",
    description: "Designing ethical, policy-aligned AI systems with a focus on responsible innovation.",
    icon: Brain,
  },
  {
    title: "Digital Transformation",
    description: "Leading modernization of workflows and scaling systems for enterprise efficiency.",
    icon: Workflow,
  },
  {
    title: "Web Development",
    description: "Building modern web applications with Next.js, TypeScript, and cutting-edge tools.",
    icon: Code,
  },
  {
    title: "Cloud & Web3",
    description: "Developing scalable, decentralized applications for the future of the web.",
    icon: Cloud,
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in cutting-edge technologies and digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}