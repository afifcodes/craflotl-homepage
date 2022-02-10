import Link from "next/link";
import { ArrowRight, GitHub, Instagram } from "react-feather";
import Banner from "../components/Banner";
import Container from "../components/layouts/Container";
import Hero from "../components/Hero";
import SpanLabel from "../components/SpanLabel";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Hero />
      <SpanLabel>Work</SpanLabel>
      <br />
      <div className="mt-4 text-justify tracking-tight leading-6 indent-4">
        Afifudin is an active student and freelancer who likes to work with
        software and code to solve his own problems or problems around him.
        Through constant practice & learning, He produce aesthetic software to
        an extremely high standard. When not working with his stuff he likes to
        enjoy his life with friends with a bunch of conversation.
      </div>
      <br />
      <div className="flex items-center justify-center">
        <Link href="/portfolio">
          <a className="font-medium border-2 border-blue-600 dark:border-amber-100 px-4 py-2 rounded-md bg-blue-50 dark:bg-amber-100 text-blue-600 dark:text-[#202023] text-center flex items-center justify-center transition-all gap-2 hover:gap-4">
            <span>Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </Link>
      </div>
      <br />
      <SpanLabel>Bio</SpanLabel>
      <br />
      <div
        className="gap-2 mt-4"
        style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
      >
        <p className="font-semibold">2002</p>
        <p>Born in East Java</p>
        <p className="font-semibold">2014 - 2016</p>
        <p>Junior High Scholl (2 yrs)</p>
        <p className="font-semibold">2019 - Present</p>
        <p>
          Continue study in Trunojoyo Madura University (Informatics
          Engineering)
        </p>
      </div>
      <br />
      <SpanLabel>Find me online</SpanLabel>
      <br />
      <div className="mt-4 sm:ml-8 flex items-center justify-center flex-wrap gap-4 sm:block text-blue-600 dark:text-amber-100 font-semibold">
        <div className="flex items-center gap-2 mb-4">
          <Instagram className="h-5 w-5" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/craflotl"
          >
            @craflotl
          </a>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <GitHub className="h-5 w-5" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/craflotl"
          >
            @craflotl
          </a>
        </div>
      </div>
      <br />
      <p className="text-center font-eudoxus tracking-tight text-neutral-500 mt-4">
        © 2022 Afifudin Abdullah. All Rights Reserved.
      </p>
    </Container>
  );
}
