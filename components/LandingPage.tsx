import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe2, BookOpen, Award, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Link className="flex items-center space-x-2" href="/">
                <Globe2 className="h-6 w-6" />
                <span className="font-bold hidden sm:inline-block">AfriKids Learn</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#lessons">Lessons</Link>
              <Link href="#quizzes">Quizzes</Link>
              <Link href="#dictionary">Dictionary</Link>
              <Link href="#contact">Contact</Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="max-w-[1200px] w-full px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Learn African Languages the Fun Way!
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
              Discover the rich cultures of Africa through interactive language lessons designed for kids.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button variant="default" size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="lessons" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
          <div className="max-w-[1200px] w-full px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Fun Interactive Lessons
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Beginner Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Start with greetings, numbers, and common phrases. Each lesson includes colorful illustrations and audio.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Intermediate Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn about everyday conversations, simple grammar, and expand your vocabulary through fun games.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dive into African folktales, songs, and cultural stories to improve your language skills.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="quizzes" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="max-w-[1200px] w-full px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Test Your Knowledge</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
              Challenge yourself with fun quizzes after each lesson and earn cool badges!
            </p>
            <Button variant="default" size="lg" className="mt-8">Try a Quiz</Button>
          </div>
        </section>

        <section id="dictionary" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
          <div className="max-w-[1200px] w-full px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Interactive Dictionary
            </h2>
            <div className="max-w-md mx-auto">
              <Input type="text" placeholder="Search for a word..." className="mb-4" />
              <Button variant="default" className="w-full">Search</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="max-w-[1200px] w-full px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Get in Touch
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <textarea
                className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
              <Button type="submit" variant="default" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Globe2 className="h-6 w-6" />
              <p className="text-sm">
                © 2024 AfriKids Learn. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-4 py-2 bg-primary text-primary-foreground rounded"
    >
      Toggle Dark Mode
    </button>
  );
}
function CustomButton({ variant = 'primary', children }: { variant?: 'primary' | 'secondary', children: React.ReactNode }) {
  const className = `px-4 py-2 rounded font-bold ${
    variant === 'primary'
      ? 'bg-primary text-primary-foreground'
      : 'bg-secondary text-secondary-foreground'
  }`;

  return <button className={className}>{children}</button>;
}

// index.js or LandingPage.js




