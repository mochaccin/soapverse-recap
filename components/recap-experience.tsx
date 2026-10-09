"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowUpRight, Gift, Headphones, Play, Sparkles, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const friends = [
  { src: "/b.png", alt: "Koohaaruuu friend illustration", className: "left-[4%] top-[18%]" },
  { src: "/bubz.png", alt: "Koohaaruuu friend illustration", className: "right-[5%] top-[22%]" },
  { src: "/c.png", alt: "Koohaaruuu friend illustration", className: "left-[12%] bottom-[17%]" },
  { src: "/h.png", alt: "Koohaaruuu friend illustration", className: "right-[12%] bottom-[12%]" },
  { src: "/mangadax.png", alt: "Koohaaruuu friend illustration", className: "left-[39%] top-[13%]" },
]

const clips = [
  { title: "Big big boy", file: "/clips/big big boy.mp4", label: "A classic" },
  { title: "Binbon moment", file: "/clips/binbon.mp4", label: "Unhinged" },
  { title: "CWM takes over", file: "/clips/cwm.mp4", label: "Community" },
  { title: "Cyno says hi", file: "/clips/cyno.mp4", label: "The lore" },
  { title: "Evolve", file: "/clips/evolve.mp4", label: "Core memory" },
  { title: "Katz cameo", file: "/clips/katz.mp4", label: "Special guest" },
]

const notes = [
  ["baldsoap", "You make every stream feel like coming home. Thank you for building a space where everyone gets to be weird, loud, and completely themselves."],
  ["cwm", "From the first lurk to every late-night yap session: happy birthday, Koo. Your community is lucky to have you."],
  ["mangadax", "Your laugh is genuinely a jump scare and a serotonin boost at the same time. Never change."],
  ["the whole chat", "Thank you for the memories, the chaos, and all the little moments that became our favourite stories."],
]

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-300/80">{children}</p>
}

export function RecapExperience() {
  const [reveals, setReveals] = useState(0)
  const revealed = reveals >= 3
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })

  function revealGift() {
    if (reveals < 2) {
      setReveals((value) => value + 1)
      setButtonPosition({ x: reveals === 0 ? 110 : -100, y: reveals === 0 ? -35 : 42 })
    } else {
      setReveals(3)
    }
  }

  return (
    <main className="overflow-hidden bg-[#3A2838] text-[#fff8ff] selection:bg-fuchsia-300 selection:text-[#3A2838]">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.section key="gate" className="relative flex min-h-screen items-center justify-center px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#9662a850,transparent_36%),linear-gradient(135deg,#3A2838,#241a2a)]" />
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
            {[...Array(18)].map((_, index) => <motion.span key={index} className="absolute size-1 rounded-full bg-fuchsia-200/60" style={{ left: `${(index * 31) % 100}%`, top: `${(index * 47) % 100}%` }} animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -16, 0] }} transition={{ duration: 2.4 + index % 3, repeat: Infinity, delay: index * 0.1 }} />))}
            <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
              <motion.div animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity }} className="mb-8 grid size-28 place-items-center rounded-[2rem] border border-fuchsia-200/30 bg-white/10 shadow-2xl shadow-fuchsia-950/50 backdrop-blur-md">
                <Gift className="size-14 text-fuchsia-200" strokeWidth={1.4} />
              </motion.div>
              <Badge className="mb-5 border-fuchsia-200/20 bg-fuchsia-200/10 px-4 py-1.5 text-fuchsia-100">A tiny surprise for koohaaruuu</Badge>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">Preparing your<br /><span className="text-fuchsia-200">birthday recap</span></h1>
              <p className="mt-6 max-w-sm text-sm leading-7 text-fuchsia-100/65">A carefully assembled collection of clips, kind words, and questionable decisions from the people who love your streams.</p>
              <div className="mt-10 flex min-h-20 items-center justify-center">
                <motion.div animate={{ x: buttonPosition.x, y: buttonPosition.y }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                  <Button onClick={revealGift} className="h-14 rounded-full bg-fuchsia-200 px-8 text-base font-semibold text-[#3A2838] shadow-xl shadow-fuchsia-950/30 hover:bg-white">{reveals === 0 ? "Reveal the surprise" : reveals === 1 ? "Almost..." : "Okay, okay, click me"}<Sparkles data-icon="inline-end" /></Button>
                </motion.div>
              </div>
              <p className="mt-3 text-xs text-fuchsia-100/40">{reveals === 0 ? "click to begin" : `${reveals}/3 reveals unlocked`}</p>
            </div>
          </motion.section>
        ) : (
          <motion.div key="recap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <section id="welcome" className="relative flex min-h-screen items-center px-6 py-24 sm:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#9b5dc14a,transparent_40%),linear-gradient(180deg,#3A2838,#2b1d31)]" />
              {friends.map((friend, index) => <motion.div key={friend.src} className={`absolute ${friend.className} hidden w-20 sm:block md:w-28`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? 15 : -15, 0], rotate: index % 2 ? [3, -3, 3] : [-3, 3, -3] }} transition={{ opacity: { delay: 0.4 + index * 0.12 }, scale: { delay: 0.4 + index * 0.12 }, y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" } }}><Image src={friend.src} alt={friend.alt} width={150} height={150} className="h-auto w-full object-contain drop-shadow-[0_20px_20px_rgba(20,10,30,.5)]" /></motion.div>)}
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-200">The koohaaruuu archive</motion.p>
                <motion.h2 initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="font-serif text-6xl leading-[0.86] tracking-tight sm:text-8xl">Happy birthday,<br /><span className="text-fuchsia-200">Koo!</span></motion.h2>
                <motion.p initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-8 max-w-xl text-base leading-8 text-fuchsia-100/70 sm:text-lg">This is a little time capsule from the people who have laughed, lurked, clipped, and grown alongside you. Scroll slowly. There is a lot of love in here.</motion.p>
                <motion.a href="#story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-200 hover:text-white">Start the story <ArrowDown className="size-4" /></motion.a>
              </div>
            </section>

            <section id="story" className="mx-auto grid max-w-6xl gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[0.8fr_1.5fr] lg:items-center">
              <div><SectionKicker>Chapter one / the story</SectionKicker><h2 className="max-w-md font-serif text-5xl leading-none sm:text-6xl">Every stream became a <span className="text-fuchsia-200">memory.</span></h2><p className="mt-7 max-w-sm text-sm leading-7 text-fuchsia-100/60">Before the clips and the messages, there was just you showing up. This little film is a love letter to the journey so far.</p><div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-fuchsia-200/70"><span className="grid size-9 place-items-center rounded-full border border-fuchsia-200/25"><Play className="size-3 fill-current" /></span> Press play when ready</div></div>
              <div className="overflow-hidden rounded-[2rem] border border-fuchsia-200/15 bg-black/20 p-2 shadow-2xl shadow-purple-950/30"><video className="aspect-video w-full rounded-[1.5rem] bg-[#1d1423]" controls poster="/clips/evolve.png"><source src="/clips/evolve.mp4" type="video/mp4" />Your browser does not support video playback.</video></div>
            </section>

            <section id="tributes" className="bg-[#2b1d31] px-6 py-28 sm:px-10"><div className="mx-auto max-w-6xl"><SectionKicker>Chapter two / from the archive</SectionKicker><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-xl font-serif text-5xl leading-none sm:text-6xl">Proof that the chaos was <span className="text-fuchsia-200">worth it.</span></h2><p className="max-w-xs text-sm leading-6 text-fuchsia-100/55">Videos, voice notes, and moments that deserve a replay.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{clips.map((clip) => <article key={clip.file} className="group overflow-hidden rounded-2xl border border-fuchsia-100/10 bg-[#3A2838] p-2"><div className="relative overflow-hidden rounded-xl"><video className="aspect-video w-full bg-black object-cover" controls preload="metadata"><source src={clip.file} type="video/mp4" /></video><span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#3A2838]/80 px-3 py-1 text-[10px] uppercase tracking-widest text-fuchsia-100 backdrop-blur">{clip.label}</span></div><div className="flex items-center justify-between px-2 pb-2 pt-4"><h3 className="font-medium">{clip.title}</h3><ArrowUpRight className="size-4 text-fuchsia-200/50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></article>))}</div><div className="mt-8 grid gap-5 md:grid-cols-2"><audio className="w-full" controls src="/audio/bizcui.mp3" /><audio className="w-full" controls src="/audio/gilnic.m4a" /></div></div></section>

            <section id="messages" className="mx-auto max-w-6xl px-6 py-28 sm:px-10"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]"><div><SectionKicker>Chapter three / in writing</SectionKicker><h2 className="font-serif text-5xl leading-none sm:text-6xl">A few words from your <span className="text-fuchsia-200">people.</span></h2><p className="mt-6 max-w-xs text-sm leading-7 text-fuchsia-100/55">The kind of messages that do not fit in a Twitch chat box.</p></div><div className="grid gap-4">{notes.map(([name, text], index) => <article key={name} className="rounded-2xl border border-fuchsia-100/10 bg-white/[0.04] p-6 sm:p-8"><div className="mb-6 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-200">{name}</span><span className="font-serif text-3xl text-fuchsia-200/30">0{index + 1}</span></div><p className="max-w-2xl font-serif text-xl leading-8 text-fuchsia-50/90">\"{ text }\"</p></article>))}</div></div></section>

            <footer id="credits" className="border-t border-fuchsia-100/10 bg-[#241a2a] px-6 py-24 sm:px-10"><div className="mx-auto max-w-6xl"><SectionKicker>The final scroll / credits</SectionKicker><div className="flex flex-col justify-between gap-10 md:flex-row"><div><h2 className="max-w-xl font-serif text-5xl leading-none sm:text-7xl">Made with love,<br /><span className="text-fuchsia-200">and a little chaos.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-fuchsia-100/55">To every artist, editor, voice, clipper, and friend who made this surprise possible: thank you for adding a piece of yourself.</p></div><div className="grid gap-6 text-sm text-fuchsia-100/70 sm:grid-cols-2"><div><p className="mb-3 text-xs uppercase tracking-widest text-fuchsia-200">Artists & contributors</p><p>your wonderful friends<br />the community<br />every voice in the archive</p></div><div><p className="mb-3 text-xs uppercase tracking-widest text-fuchsia-200">Built by</p><p>the two suspicious organizers<br />with too much caffeine<br />for koohaaruuu</p></div></div></div><div className="mt-20 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-fuchsia-100/35"><Volume2 className="size-3" /> End of transmission · made for Koo</div></div></footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export function RecapNav() {
  return <nav className="fixed right-5 top-5 z-50 hidden items-center gap-2 rounded-full border border-fuchsia-100/10 bg-[#241a2a]/70 p-2 text-xs backdrop-blur-md sm:flex"><a href="#welcome" className="rounded-full px-3 py-2 text-fuchsia-100/60 hover:bg-white/10 hover:text-white">Welcome</a><a href="#tributes" className="rounded-full px-3 py-2 text-fuchsia-100/60 hover:bg-white/10 hover:text-white">Archive</a><a href="#messages" className="rounded-full px-3 py-2 text-fuchsia-100/60 hover:bg-white/10 hover:text-white">Notes</a></nav>
}
