import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe2, BookOpen, Award, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Globe2 className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Afro-language Learn</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#lessons">Lessons</Link>
              <Link href="#quizzes">Quizzes</Link>
              <Link href="#dictionary">Dictionary</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
          <Button className="ml-auto" variant="outline">Log in</Button>
          <Button className="ml-2">Sign up</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn African Languages the Fun Way!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the rich cultures of Africa through interactive language lessons designed for kids.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="lessons" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
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

        <section id="quizzes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Test Your Knowledge</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Challenge yourself with fun quizzes after each lesson and earn cool badges!
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Try a Quiz</Button>
            </div>
          </div>
        </section>

        <section id="dictionary" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Interactive Dictionary
            </h2>
            <div className="max-w-md mx-auto">
              <Input type="text" placeholder="Search for a word..." className="mb-4" />
              <Button className="w-full">Search</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Get in Touch
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <textarea
                className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Your Message"
              ></textarea>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <Globe2 className="h-6 w-6" />
              <p className="text-center text-sm leading-loose md:text-left">
                © 2024 Afro-language Learn. All rights reserved.
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



