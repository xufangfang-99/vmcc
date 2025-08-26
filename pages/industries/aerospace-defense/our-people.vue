<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- 页面头部 -->
    <div class="relative py-20 md:py-32 overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div
          class="absolute inset-0"
          :style="{
            background: `linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 50%, var(--tm-bg-primary) 100%)`,
          }"
        ></div>

        <div
          class="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10"
          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
        ></div>
        <div
          class="absolute bottom-32 left-20 w-24 h-24 rounded-full opacity-10"
          :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
        ></div>
      </div>

      <div class="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <!-- 面包屑导航 -->
        <div class="flex items-center justify-center gap-2 mb-8 animate-fade-in-up">
          <NuxtLink
            to="/"
            class="text-sm transition-colors duration-300"
            :style="{ color: 'var(--tm-txt-secondary)' }"
          >
            Home
          </NuxtLink>
          <span :style="{ color: 'var(--tm-txt-light)' }">/</span>
          <NuxtLink
            to="/industries"
            class="text-sm transition-colors duration-300"
            :style="{ color: 'var(--tm-txt-secondary)' }"
          >
            Industries
          </NuxtLink>
          <span :style="{ color: 'var(--tm-txt-light)' }">/</span>
          <NuxtLink
            to="/industries/aerospace-defense"
            class="text-sm transition-colors duration-300"
            :style="{ color: 'var(--tm-txt-secondary)' }"
          >
            Aerospace & Defense
          </NuxtLink>
          <span :style="{ color: 'var(--tm-txt-light)' }">/</span>
          <span
            class="text-sm font-medium"
            :style="{ color: 'var(--tm-accent-primary)' }"
          >
            Our People
          </span>
        </div>

        <!-- 标题 -->
        <h1
          class="text-4xl md:text-6xl font-light mb-6 animate-fade-in-up animation-delay-200"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          Our People
        </h1>

        <!-- 副标题 -->
        <p
          class="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-400"
          :style="{ color: 'var(--tm-txt-secondary)' }"
        >
          Meet our aerospace and defense experts who drive innovation and excellence across the
          industry
        </p>
      </div>
    </div>

    <!-- Practice Leaders 部分 -->
    <div class="relative py-16 md:py-24">
      <div class="max-w-[1400px] mx-auto px-4 md:px-8">
        <!-- Practice Leaders 标题 -->
        <div class="text-center mb-16">
          <h2
            class="text-2xl md:text-3xl font-semibold mb-4"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            Practice leaders
          </h2>
        </div>

        <!-- Practice Leaders 网格 -->
        <div class="grid md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
          <!-- Hugues Lavandier -->
          <div
            class="group text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <div class="mb-6">
              <OptImage
                src="/images/comm/team/michael-zhang.jpg"
                alt="Hugues Lavandier"
                class="w-24 h-24 rounded-full mx-auto object-cover"
              />
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Hugues Lavandier
            </h3>
            <p
              class="text-sm font-medium mb-4"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Senior Partner, Paris
            </p>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Advises energy, mining, and OEM companies on growth and portfolio strategies and
              evaluates corporate-finance opportunities; supports investors and private-equity
              groups in the commodities and industrials sector
            </p>
          </div>

          <!-- Yoran Neves -->
          <div
            class="group text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <div class="mb-6">
              <OptImage
                src="/images/comm/team/michael-zhang.jpg"
                alt="Yoran Neves"
                class="w-24 h-24 rounded-full mx-auto object-cover"
              />
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Yoran Neves
            </h3>
            <p
              class="text-sm font-medium mb-4"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Senior Partner and Leader, Aerospace & Defense, Denver
            </p>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Drives strategic and operational performance transformations to help advanced
              industrial and high-tech companies improve efficiency, growth, and agility
            </p>
          </div>
        </div>

        <!-- 所有团队成员网格 -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 团队成员数据 -->
          <div
            v-for="(member, index) in teamMembers"
            :key="member.name"
            class="group text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
              animationDelay: `${index * 0.1}s`,
            }"
            :class="'animate-fade-in-up'"
          >
            <div class="mb-4">
              <OptImage
                src="/images/comm/team/michael-zhang.jpg"
                :alt="member.name"
                class="w-20 h-20 rounded-full mx-auto object-cover"
              />
            </div>
            <h3
              class="text-lg font-semibold mb-1"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              {{ member.name }}
            </h3>
            <p
              class="text-sm font-medium mb-3"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              {{ member.title }}
            </p>
            <p
              class="text-xs leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // 页面配置
  definePageMeta({
    layout: 'default',
  })

  // SEO 设置
  useHead({
    title: 'Our People - Aerospace & Defense - VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Meet our aerospace and defense experts who drive innovation and excellence across the industry.',
      },
      {
        name: 'keywords',
        content: 'aerospace defense experts, team members, consultants, VMMC people',
      },
    ],
  })

  // 团队成员数据
  const teamMembers = [
    {
      name: 'Asmer Baig',
      title: 'Senior Partner, Atlanta',
      description:
        'Helps government agencies and defense technology companies develop, acquire, integrate, and deploy large IT systems.',
    },
    {
      name: 'Alberto Bertoli',
      title: 'Senior Partner, Rome',
      description:
        'Focuses on aerospace and defense post-merger integration, business planning, operational improvement, and corporate development.',
    },
    {
      name: 'Michael Birshan',
      title: 'Senior Partner, Washington DC and Senior Partner',
      description:
        'Leads the public sector and infrastructure development, as well as transformations in aerospace and defense industries.',
    },
    {
      name: 'Kimberly Borden',
      title: 'Senior Partner, Chicago',
      description:
        'Specializes in business and technology strategy for aerospace and defense, focusing on supply chain and manufacturing excellence.',
    },
    {
      name: 'Bryan Boslough',
      title: 'Senior Partner, Denver',
      description:
        'Helps aerospace and defense companies accelerate growth and improve operational performance through strategic initiatives.',
    },
    {
      name: 'Michele Bryant',
      title: 'Partner, Washington',
      description:
        'Focuses on defense acquisition reform, program management, and organizational transformation in the public sector.',
    },
    {
      name: 'David Chinn',
      title: 'Senior Partner, Sydney',
      description:
        'Leads digital transformations in aerospace manufacturing and helps companies adopt advanced technologies.',
    },
    {
      name: 'Frank Coleman III',
      title: 'Partner, Atlanta',
      description:
        'Specializes in aerospace and defense supply chain optimization, procurement excellence, and vendor management.',
    },
    {
      name: 'Rajiv Dhawan',
      title: 'Senior Partner and Managing Partner, Chicago',
      description:
        'Drives strategic transformations and operational improvements across aerospace and defense organizations.',
    },
    {
      name: 'Matthew Dominik',
      title: 'Partner, New York',
      description:
        'Advises on merger and acquisition strategy, business development, and post-merger integration in aerospace.',
    },
    {
      name: 'Giacomo Gatto',
      title: 'Partner, Rome',
      description:
        'Focuses on business strategy, operational excellence, and digital transformation in European aerospace markets.',
    },
    {
      name: 'Kevin Gowdey',
      title: 'Partner, Dallas',
      description:
        'Helps aerospace companies optimize their operations, improve manufacturing processes, and drive cost reduction.',
    },
    {
      name: 'Björn Hagemann',
      title: 'Senior Partner, Cologne',
      description:
        'Specializes in aerospace manufacturing, supply chain management, and operational transformation in European markets.',
    },
    {
      name: 'Lia Hempel',
      title: 'Partner, New York',
      description:
        'Focuses on business strategy, market development, and competitive positioning for aerospace companies.',
    },
    {
      name: 'Anna Hoch',
      title: 'Client Partner, Berlin',
      description:
        'Drives client relationships and strategic partnerships in the German aerospace and defense market.',
    },
    {
      name: 'Benjamin Kafka',
      title: 'Partner, Munich',
      description:
        'Leads digital innovation initiatives and technology adoption strategies for aerospace manufacturers.',
    },
    {
      name: 'Vik Krishnan',
      title: 'Senior Partner, New York',
      description:
        'Specializes in aerospace technology strategy, innovation management, and digital transformation.',
    },
    {
      name: 'Patrick Lahure',
      title: 'Client Partner, Paris and Lyon',
      description:
        'Manages strategic client relationships and develops growth strategies for French aerospace companies.',
    },
    {
      name: 'Diana Maor',
      title: 'Senior Partner, Chicago',
      description:
        'Focuses on aerospace workforce development, organizational design, and talent management strategies.',
    },
    {
      name: 'Yoran Norris',
      title: 'Senior Partner and Global Leader, Aerospace and Defense, Denver',
      description:
        'Coordinates global aerospace initiatives, strategic planning, and industry leadership development.',
    },
    {
      name: 'Nick Meihofer',
      title: 'Partner, Dallas',
      description:
        'Helps aerospace companies improve manufacturing efficiency, reduce costs, and optimize production processes.',
    },
    {
      name: 'Daniel Paravisini',
      title: 'Senior Partner, New York',
      description:
        'Specializes in aerospace finance, capital allocation, and investment strategy for industry clients.',
    },
    {
      name: 'Alex Perus',
      title: 'Senior Partner, Washington DC and Defense Markets',
      description:
        'Leads defense market development and strategic initiatives for government contractor clients.',
    },
    {
      name: 'Emma Perry',
      title: 'Partner, London',
      description:
        'Drives business transformation and operational excellence initiatives for European aerospace companies.',
    },
    {
      name: 'Kevin Sachs',
      title: 'Senior Partner and Former Partner, Manhattan',
      description:
        'Provides strategic advisory services and executive leadership development for aerospace executives.',
    },
    {
      name: 'Shevika Sobsky',
      title: 'Senior Partner, New York',
      description:
        'Specializes in aerospace technology integration, digital strategy, and innovation management.',
    },
    {
      name: 'François Soubers',
      title: 'Partner, Paris',
      description:
        'Focuses on aerospace market development, competitive strategy, and business transformation in France.',
    },
    {
      name: 'Dale Swartz',
      title: 'Senior Partner, Washington',
      description:
        'Leads government relations and defense sector strategy development for aerospace clients.',
    },
    {
      name: 'Simone Venco',
      title: 'Partner, Milan',
      description:
        'Drives operational improvement and strategic planning initiatives for Italian aerospace companies.',
    },
    {
      name: 'Brooke Weddle',
      title: 'Partner, Washington',
      description:
        'Specializes in aerospace policy, regulatory strategy, and government affairs management.',
    },
    {
      name: 'Markus Wildhagen',
      title: 'Senior Partner',
      description:
        'Provides strategic leadership and executive advisory services across multiple aerospace markets globally.',
    },
  ]
</script>

<style scoped>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }

    .md\:text-6xl {
      font-size: 3rem;
    }
  }
</style>
