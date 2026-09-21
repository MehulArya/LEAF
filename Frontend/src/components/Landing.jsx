import React from "react";

const communities = [
  {
    name: "AI & Machine Learning",
    category: "Technology",
    members: 86,
    emoji: "🤖",
  },
  {
    name: "Photography Collective",
    category: "Creative",
    members: 42,
    emoji: "📸",
  },
  {
    name: "Music & Production",
    category: "Music",
    members: 58,
    emoji: "🎵",
  },
];

const features = [
  {
    icon: "🌱",
    title: "Create Communities",
    description:
      "Start a community around anything you're passionate about.",
  },
  {
    icon: "🔍",
    title: "Discover People",
    description:
      "Find students who share your interests, ideas and ambitions.",
  },
  {
    icon: "💡",
    title: "Share Ideas",
    description:
      "Propose activities and let your community decide what happens next.",
  },
  {
    icon: "💬",
    title: "Collaborate",
    description:
      "Connect, communicate and turn ideas into meaningful experiences.",
  },
];

const interests = [
  "AI & ML",
  "Web Development",
  "Music",
  "Photography",
  "Fitness",
  "Gaming",
  "Entrepreneurship",
  "Design",
  "Sports",
  "Film",
  "Books",
  "Research",
];

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 transition duration-300 group-hover:rotate-6 group-hover:bg-green-200">
              <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                🍃
              </span>
            </div>

            <span className="text-2xl font-bold tracking-tight">
              leaf<span className="text-green-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {["Home", "Features", "Communities", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-green-600"
              >
                {item}

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-green-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 sm:block">
              Sign In
            </button>

            <button className="group rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/25">
              Get Started
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white"
      >

        {/* Animated background blobs */}
        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-green-100/50 blur-3xl" />

        <div
          className="absolute -right-40 -top-32 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-100/60 blur-3xl"
          style={{ animationDuration: "5s" }}
        />

        {/* Decorative leaves */}
        <div className="absolute left-[8%] top-[20%] hidden text-3xl opacity-20 md:block animate-bounce">
          🍃
        </div>

        <div
          className="absolute right-[8%] top-[35%] hidden text-2xl opacity-20 md:block animate-bounce"
          style={{ animationDuration: "4s" }}
        >
          🍃
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">

          {/* Hero Content */}
          <div className="animate-[fadeIn_0.8s_ease-out]">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <span className="animate-pulse">🍃</span>
              Where ideas grow together
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Find your people.
              <br />

              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Grow your ideas.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Leaf is a community platform for college students to discover
              people, create communities and collaborate around the things
              they truly care about.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button className="group rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl hover:shadow-green-600/30">
                Get Started

                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button className="group rounded-full border border-gray-200 bg-white px-7 py-3.5 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:text-green-600 hover:shadow-lg">
                Explore Communities

                <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 sm:gap-12">
              {[
                ["1K+", "Students"],
                ["100+", "Communities"],
                ["20+", "Colleges"],
              ].map(([number, label]) => (
                <div key={label} className="group">
                  <p className="text-2xl font-bold transition-colors group-hover:text-green-600">
                    {number}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================== */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-green-200/40 blur-3xl" />

            {/* Main dashboard */}
            <div className="relative rounded-[2rem] border border-green-100 bg-white p-5 shadow-2xl shadow-green-900/10 transition duration-500 hover:-translate-y-2 hover:shadow-3xl">

              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Discover
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Find your community
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-xl transition-transform duration-500 hover:rotate-12">
                  🍃
                </div>
              </div>

              {/* Search */}
              <div className="mb-5 flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5 text-sm text-gray-400 transition-all duration-300 focus-within:border-green-200 focus-within:bg-white focus-within:shadow-sm">
                <span>🔍</span>
                <span>Search communities...</span>
              </div>

              {/* Community cards */}
              <div className="space-y-3">
                {communities.map((community, index) => (
                  <div
                    key={community.name}
                    className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50/40 hover:shadow-lg"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.15}s both`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {community.emoji}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold">
                          {community.name}
                        </h4>

                        <p className="mt-1 text-xs text-gray-500">
                          {community.category} · {community.members} members
                        </p>
                      </div>
                    </div>

                    <button className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-md">
                      Join
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom message */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-50 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  💡
                </div>

                <p className="text-xs leading-5 text-green-800">
                  Have an idea? Create a community and bring people together.
                </p>
              </div>
            </div>

            {/* Floating people card */}
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl transition-transform duration-500 hover:-translate-y-2 sm:block">

              <div className="flex items-center gap-3">

                <div className="flex -space-x-2">
                  {["👨", "👩", "👨", "👩"].map((person, index) => (
                    <div
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-green-100 text-sm"
                    >
                      {person}
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-bold">
                    People are connecting
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Join your community
                  </p>
                </div>
              </div>
            </div>

            {/* Floating idea card */}
            <div className="absolute -right-5 -top-7 hidden rounded-2xl border border-green-100 bg-white p-4 shadow-xl transition-transform duration-500 hover:-translate-y-2 lg:block">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100">
                  💡
                </div>

                <div>
                  <p className="text-xs font-bold">
                    New idea proposed
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Weekend Hackathon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEREST TAGS
      ====================================================== */}
      <section className="border-y border-gray-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            Find your interest
          </p>

          <p className="mt-2 text-gray-500">
            Whatever you're into, there's a place for you.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {interests.map((tag) => (
              <span
                key={tag}
                className="cursor-default rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-100 hover:shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section id="about" className="px-6 py-28">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl transition-transform duration-500 hover:rotate-12">
            🍃
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            Why Leaf?
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            More than just college clubs.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Traditional college clubs can be limited by what already exists.
            Leaf gives students the freedom to create communities around
            their interests, connect with like-minded people and bring new
            ideas to life.
          </p>
        </div>

        {/* Comparison */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold text-gray-500">
              Traditional clubs
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              What already exists
            </h3>

            <ul className="mt-6 space-y-3 text-gray-600">
              {[
                "Fixed communities",
                "Limited interests",
                "Predefined activities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-green-200 bg-green-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/5">
            <p className="text-sm font-semibold text-green-600">
              Leaf
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              What you can create
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "Create your own community",
                "Explore unlimited interests",
                "Turn ideas into activities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section
        id="features"
        className="bg-green-50/60 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Built for students
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to connect.
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Create communities, discover people, share ideas and
              collaborate—all in one place.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-green-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
              >

                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-7 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-green-200 transition-all duration-500 group-hover:w-16 group-hover:bg-green-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITIES
      ====================================================== */}
      <section
        id="communities"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Explore
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Find something you love.
              </h2>
            </div>

            <button className="group w-fit font-semibold text-green-600">
              View all communities

              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {communities.map((community) => (
              <div
                key={community.name}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-100 hover:shadow-2xl hover:shadow-green-900/10"
              >

                {/* Community visual */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 via-green-50 to-white">

                  <div className="absolute h-32 w-32 rounded-full bg-white/50 blur-2xl" />

                  <span className="relative text-7xl transition duration-500 group-hover:scale-125 group-hover:-rotate-6">
                    {community.emoji}
                  </span>
                </div>

                <div className="p-6">

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    {community.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {community.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {community.members} students are already part of this
                    community.
                  </p>

                  <button className="mt-6 w-full rounded-xl border border-green-600 py-3 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-600/20">
                    Explore Community
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND STORY
      ====================================================== */}
      <section className="px-6 pb-28">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 to-emerald-600 px-8 py-20 text-white sm:px-16">

          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

          <div className="relative max-w-2xl">

            <div className="text-4xl animate-bounce">
              🍃
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Every student has an idea.
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50">
              Find your people, create your community and grow something
              meaningful together.
            </p>

            <button className="group mt-8 rounded-full bg-white px-8 py-3.5 font-semibold text-green-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl">
              Get Started

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-gray-100 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-100">
                🍃
              </div>

              <span className="text-xl font-bold">
                leaf<span className="text-green-600">.</span>
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Where ideas grow together.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a href="#about" className="transition hover:text-green-600">
              About
            </a>

            <a href="#features" className="transition hover:text-green-600">
              Features
            </a>

            <a
              href="#communities"
              className="transition hover:text-green-600"
            >
              Communities
            </a>

            <a href="#" className="transition hover:text-green-600">
              Privacy
            </a>

            <a href="#" className="transition hover:text-green-600">
              Terms
            </a>
          </div>

          <p className="text-sm text-gray-400">
            © 2026 Leaf
          </p>
        </div>
      </footer>

      {/* =====================================================
          ANIMATION KEYFRAMES
      ====================================================== */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Landing;


