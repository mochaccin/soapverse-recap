"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { ArrowDown, Gift, Heart, LockKeyhole, Play, Sparkles, Stars } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const friends = [
  { name: "friend one", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vipersoap-PdOBkYjB31nUZaP1jqQqC4iJkG6L9d.gif", position: "left-[4%] top-[14%]" },
  { name: "friend two", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soap-talkgif-Y15s75BBYOv0BHDccKoVSeSruK0iE0.gif", position: "right-[5%] top-[18%]" },
  { name: "friend three", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/halloweensoap-MnLLyEqyCzg8bjZS8CXFTGWxqRpoWZ.gif", position: "left-[13%] bottom-[15%]" },
  { name: "friend four", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vipersoap-PdOBkYjB31nUZaP1jqQqC4iJkG6L9d.gif", position: "right-[15%] bottom-[12%]" },
  { name: "friend five", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soap-talkgif-Y15s75BBYOv0BHDccKoVSeSruK0iE0.gif", position: "left-[34%] top-[10%]" },
  { name: "friend six", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/halloweensoap-MnLLyEqyCzg8bjZS8CXFTGWxqRpoWZ.gif", position: "right-[34%] bottom-[10%]" },
]

const messages = [
  { from: "Your favorite lurker", text: "Three years of chaos, comfort, and the kind of laughs that make a bad day disappear. Happy birthday, Koo!" },
  { from: "The late-night crew", text: "Thank you for making every stream feel like coming home. We are so lucky to know you." },
  { from: "A very normal friend", text: "You built a place where everyone can be exactly themselves. Today we celebrate you." },
]

export function RecapExperience() {
  const [reveals, setReveals] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const [troll, setTroll] = useState(false)
  const buttonPosition = useMemo(() => reveals === 1 ? "translate-x-40 -translate-y-12 rotate-6" : reveals === 2 ? "-translate-x-40 translate-y-10 -rotate-6" : "", [reveals])

  useEffect(() => {
    document.body.style.overflow = unlocked ? "" : "hidden"
    return () => { document.body.style.overflow = "" }
  }, [unlocked])

  const reveal = () => {
    if (reveals < 2) {
      setReveals((value) => value + 1)
      setTroll(true)
      return
    }
    setReveals(3)
    setUnlocked(true)
    setTroll(false)
  }

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24" aria-label="Birthday reveal">
        <div className="absolute inset-0 birthday-grid opacity-50" />
        <div className="absolute left-1/2 top-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
          <Badge variant="outline" className="mb-7 border-primary/40 bg-primary/10 px-4 py-2 text-primary"><Stars data-icon="inline-start" /> private birthday transmission</Badge>
          <div className="mb-8 flex size-24 items-center justify-center rounded-3xl border border-primary/30 bg-card/80 shadow-2xl shadow-primary/20"><Gift className="size-11 text-primary" /></div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">koohaaruuu.exe</p>
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl">A little surprise is <span className="text-primary">loading.</span></h1>
          <p className="mt-6 max-w-md text-pretty text-muted-foreground">There is something waiting behind this very secure, definitely-not-suspicious button.</p>
          <div className="mt-10 flex h-24 items-center justify-center">
            <Button onClick={reveal} size="lg" className={`rounded-full px-8 shadow-lg shadow-primary/20 transition-transform duration-500 ${buttonPosition}`}>
              {reveals === 0 ? "Reveal surprise" : reveals < 3 ? "Try again" : "Opened"} {reveals < 3 ? <LockKeyhole data-icon="inline-end" /> : <Sparkles data-icon="inline-end" />}
            </Button>
          </div>
          <div className="mt-3 flex gap-2" aria-label={`${reveals} of 3 reveals complete`}>
            {[0, 1, 2].map((step) => <span key={step} className={`h-1.5 w-10 rounded-full transition-colors ${step < reveals ? "bg-primary" : "bg-muted"}`} />)}
          </div>
          <p className="mt-5 h-5 text-sm text-primary">{troll ? "The button has developed free will." : reveals === 3 ? "Surprise unlocked." : "3 clicks required"}</p>
        </div>
      </section>

      {unlocked && <div className="fixed inset-0 z-40 pointer-events-none reveal-explosion" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div>}

      <section id="welcome" className="relative flex min-h-screen items-center justify-center border-t border-border/60 px-6 py-28">
        {friends.map((friend, index) => <Image key={friend.name} src={friend.src} alt={friend.name} width={96} height={96} unoptimized className={`absolute ${friend.position} pixelated animate-float-${index + 1} hidden rounded-2xl border border-primary/30 bg-card/70 p-2 shadow-xl md:block`} />)}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">welcome to the koohaaruuu archive</p>
          <h2 className="mt-5 text-balance text-6xl font-bold tracking-tight sm:text-8xl">Happy birthday, <span className="text-primary">Koo.</span></h2>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">A scrapbook of the people, pixels, and perfectly unhinged moments that make your corner of Twitch feel like home. Scroll through the love letter your community made for you.</p>
          <Button onClick={() => scrollTo("story")} variant="outline" className="mt-10 rounded-full">Begin the journey <ArrowDown data-icon="inline-end" /></Button>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-10 px-6 py-28 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">chapter 01 / the story</p><h2 className="mt-4 text-4xl font-bold sm:text-6xl">Press play on the memories.</h2><p className="mt-6 max-w-md leading-8 text-muted-foreground">A message from someone who has been there for the plot twists, the raids, the tears, and the legendary chat moments.</p><div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><Heart className="size-4 text-primary" /> made with an unreasonable amount of love</div></div>
        <div className="aspect-video overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-2xl shadow-primary/10"><video className="size-full object-cover" controls preload="metadata" poster="/placeholder.svg"><track kind="captions" /><span>Your browser does not support video playback.</span></video></div>
      </section>

      <section id="clips" className="border-y border-border/60 bg-card/30 px-6 py-28"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">chapter 02 / the chorus</p><div className="mt-4 flex flex-wrap items-end justify-between gap-6"><h2 className="text-4xl font-bold sm:text-6xl">From the people<br />who love you.</h2><p className="max-w-sm text-muted-foreground">Drop videos into <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">lib/clips</code> and audio into <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">lib/audios</code> to fill this collection.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{["A message for Koo", "The birthday mix", "One more thing..."].map((title) => <Card key={title} className="overflow-hidden border-primary/20 bg-background/70"><div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/20 to-card"><Play className="size-10 text-primary" /></div><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Your media file will appear here.</CardContent></Card>)}</div></div></section>

      <section id="messages" className="mx-auto max-w-5xl px-6 py-28"><p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary">chapter 03 / love notes</p><h2 className="mt-4 text-center text-4xl font-bold sm:text-6xl">Things we needed you to know.</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{messages.map((message) => <Card key={message.from} className="border-primary/20 bg-card/60"><CardContent className="flex h-full flex-col justify-between p-7"><p className="text-lg leading-8">“{message.text}”</p><p className="mt-8 text-sm font-semibold text-primary">— {message.from}</p></CardContent></Card>)}</div></section>

      <footer id="credits" className="border-t border-border/60 bg-card/30 px-6 py-24 text-center"><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">end transmission</p><h2 className="mt-4 text-4xl font-bold">Made for Koohaaruuu.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">With love to every artist, friend, editor, sender, and co-conspirator who helped make this surprise.</p><div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3 text-sm text-muted-foreground"><Badge variant="secondary">Artists</Badge><Badge variant="secondary">Friends & family</Badge><Badge variant="secondary">The community</Badge><Badge variant="secondary">Developers</Badge></div></footer>
    </main>
  )
}

export default RecapExperience

// The names are intentionally stable so additional friend assets can be added without changing the layout.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused = friends
