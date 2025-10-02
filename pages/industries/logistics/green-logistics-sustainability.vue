<!-- pages/industries/logistics/green-logistics-sustainability.vue -->
<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80"
          alt="Green Logistics Sustainability"
          class="h-full w-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 w-full max-w-350 mx-auto px-6">
        <!-- Breadcrumb -->
        <div
          class="mb-8 flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 w-fit mx-auto"
        >
          <NuxtLink
            to="/"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Home
          </NuxtLink>
          <span class="text-white/50">/</span>
          <NuxtLink
            to="/industries"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Industries
          </NuxtLink>
          <span class="text-white/50">/</span>
          <NuxtLink
            to="/industries/logistics"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Logistics
          </NuxtLink>
          <span class="text-white/50">/</span>
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">Green Logistics</span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Green Logistics and
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">
            Sustainable Supply Chains
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Carbon Reduction, Eco-Friendly Packaging, and Renewable Energy
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">50%</div>
            <div class="text-sm text-white/80">Carbon Reduction Target</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">EVs</div>
            <div class="text-sm text-white/80">Electric Fleet Adoption</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Green</div>
            <div class="text-sm text-white/80">Sustainable Operations</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Summary -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">
                Environmental responsibility meets business value
              </p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              As global awareness of environmental issues grows, governments, businesses, and
              consumers are increasingly demanding lower carbon footprints. Green logistics and
              sustainable supply chains are not only about regulatory compliance but also emerging
              as a source of competitive differentiation and brand value.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Electric fleets, green-fuel vessels, solar warehouses, and eco-friendly packaging are
              driving tangible progress toward carbon reduction goals. Companies that embrace
              sustainability are discovering that environmental responsibility and business success
              are not mutually exclusive but mutually reinforcing.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Industry Landscape -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">
                Current Industry Landscape
              </h2>
              <p class="text-[var(--tm-txt-secondary)]">Rising environmental expectations</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Logistics, as a major contributor to global carbon emissions, is under increasing
              pressure to transition to sustainable practices. The EU, United States, and China have
              set ambitious carbon neutrality targets for the coming decades, pushing logistics
              companies to adopt green innovations.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Leading companies like DHL, Maersk, and UPS have committed to net-zero emissions by
              2050, investing heavily in new energy vehicles, renewable energy infrastructure, and
              circular economy initiatives. These investments are not just about compliance—they're
              about staying competitive in a world where sustainability is becoming a key purchase
              criterion.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Trends -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Technology Trends
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Key innovations driving sustainable logistics
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: New Energy Vehicles -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  New Energy Vehicles
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Electric trucks, hydrogen-powered logistics vehicles, and hybrid fleets
                  significantly reduce carbon emissions in transportation.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: Green Fuel Vessels -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Green Fuel Vessels
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  LNG-powered and ammonia-fueled ships reducing the maritime industry's carbon
                  footprint in ocean freight.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: Solar Warehouses -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Solar Warehouses and Green Buildings
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Renewable energy-powered facilities and energy-efficient designs minimizing
                  operational carbon emissions.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Eco-Friendly Packaging -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Eco-Friendly Packaging
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Biodegradable materials and recycling programs reducing waste and promoting
                  circular economy principles.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 5: Carbon Monitoring Platforms -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group lg:col-span-2"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Carbon Monitoring Platforms
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Data tracking and reporting tools helping companies meet emission reduction
                  targets and demonstrate environmental accountability to stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Leaders -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Sustainability Leaders
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">
            Companies pioneering green logistics initiatives
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">DHL</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Committed to net-zero emissions by 2050 with extensive electric vehicle fleet and
              renewable energy infrastructure
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              60% EV Fleet by 2030
            </div>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">Maersk</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Leading maritime sustainability with green methanol vessels and ambitious carbon
              neutrality targets
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              Net-Zero by 2040
            </div>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">UPS</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Investing in alternative fuel vehicles and renewable energy-powered facilities
              worldwide
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              40% Alt-Fuel Fleet
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainability Benefits -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Business Benefits of Green Logistics
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">How sustainability drives business value</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Regulatory Compliance
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Meet environmental regulations and avoid penalties
            </p>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Brand Value</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Enhance reputation and attract environmentally conscious customers
            </p>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Cost Savings</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Reduce fuel costs and operational expenses over time
            </p>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Competitive Advantage
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Differentiate from competitors in sustainability-conscious markets
            </p>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Investor Appeal</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Attract ESG-focused investors and access green financing
            </p>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Future-Proofing</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Prepare for stricter environmental regulations and market shifts
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Future Outlook</h2>
              <p class="text-[var(--tm-txt-secondary)]">Sustainability as competitive necessity</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              As regulations tighten and consumers demand greater environmental accountability,
              green logistics will shift from a "nice-to-have" to a business imperative. Companies
              that proactively invest in sustainable practices will not only reduce their
              environmental impact but also secure long-term competitiveness and market leadership.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              The integration of renewable energy, circular economy principles, and carbon-neutral
              operations will define the next generation of logistics excellence. Organizations that
              view sustainability as an investment rather than a cost will be best positioned to
              thrive in the evolving global marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)]"
    >
      <div class="max-w-300 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
          Build Your Green Logistics Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit sustainability managers, carbon reduction specialists, green
          fleet coordinators, and environmental compliance experts.
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button
            class="inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            @click="openConsultationModal"
          >
            Schedule Consultation
          </button>
          <button
            class="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300"
            @click="openExpertModal"
          >
            Talk to Experts
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />

    <!-- Modals -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // Modal state
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Page meta
  definePageMeta({
    layout: 'default',
  })

  // SEO
  useHead({
    title: 'Green Logistics and Sustainable Supply Chains | Logistics Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of electric fleets, green fuel vessels, solar warehouses, eco-friendly packaging, and carbon monitoring transforming logistics sustainability.',
      },
    ],
  })
</script>

<style scoped>
  .report-page {
    min-height: 100vh;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }
    .text-7xl {
      font-size: 3.5rem;
    }
  }
</style>
