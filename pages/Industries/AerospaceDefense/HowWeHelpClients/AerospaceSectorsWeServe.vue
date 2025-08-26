<template>
  <div class="relative py-16 md:py-24 overflow-hidden">
    <!-- 背景层 -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0"
        :style="{
          background: `linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 100%)`,
        }"
      ></div>

      <!-- 装饰网格 -->
      <div class="absolute inset-0 opacity-3">
        <div
          class="w-full h-full"
          style="
            background-image:
              linear-gradient(var(--tm-bd-light) 1px, transparent 1px),
              linear-gradient(90deg, var(--tm-bd-light) 1px, transparent 1px);
            background-size: 50px 50px;
          "
        ></div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
      <!-- 标题部分 -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2
          class="text-xs font-bold tracking-wider uppercase mb-4"
          :style="{ color: 'var(--tm-txt-light)' }"
        >
          SECTORS WE SERVE
        </h2>
        <div
          class="w-24 h-0.5 mx-auto"
          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
        ></div>
      </div>

      <!-- 行业网格 -->
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- 第一列 -->
        <div class="space-y-12">
          <!-- Commercial aerospace -->
          <div class="animate-fade-in-up">
            <div class="flex items-start justify-between mb-6">
              <h3
                class="text-2xl font-semibold"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Commercial aerospace
              </h3>
              <div
                class="w-8 h-8 rounded-full mt-1"
                :style="{ backgroundColor: 'var(--tm-accent-primary)', opacity: '0.2' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed mb-6"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Our expertise spans all major aircraft equipment categories, including engines,
              aerostructures, avionics, landing gears, and interiors. We work closely with industry
              leaders to develop perspectives on trends shaping aviation, such as advanced air
              mobility solutions and future sustainable propulsion technologies.
            </p>
          </div>

          <!-- Business and general aviation -->
          <div class="animate-fade-in-up animation-delay-400">
            <h3
              class="text-2xl font-semibold mb-6"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Business and general aviation
            </h3>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              We help companies in the business and general aviation market strive for operational
              improvement. We also provide assistance on key business challenges, such as accessing
              new customer segments, innovating business models, transforming product development,
              and improving customer support services.
            </p>
          </div>
        </div>

        <!-- 第二列 -->
        <div class="space-y-12">
          <!-- Defense -->
          <div class="animate-fade-in-up animation-delay-100">
            <h3
              class="text-2xl font-semibold mb-6"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Defense
            </h3>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Our clients are active across the spectrum of defense domains. Through our work, we
              have built expertise related to all major categories of platforms and associated
              equipment, including military aerospace, land systems, naval systems, space-based
              systems, as well as sensors and electronics. We also work with defense ministries,
              national security, and public-safety organizations to address their most pressing
              challenges.
            </p>
          </div>

          <!-- Maritime & Naval Systems -->
          <div class="animate-fade-in-up animation-delay-500">
            <div class="flex items-start justify-between mb-6">
              <h3
                class="text-2xl font-semibold"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Maritime & Naval Systems
              </h3>
              <div
                class="w-8 h-8 rounded-full mt-1"
                :style="{ backgroundColor: 'var(--tm-accent-primary)', opacity: '0.2' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Our maritime expertise encompasses helping shipyards and maritime industry clients
              unlock operational performance, attract and develop a skilled labor force, create
              supply chain resiliency, and implement digital capabilities for enhanced
              competitiveness.
            </p>
          </div>
        </div>

        <!-- 第三列 -->
        <div class="space-y-12">
          <!-- Space -->
          <div class="animate-fade-in-up animation-delay-200">
            <div class="flex items-start justify-between mb-6">
              <h3
                class="text-2xl font-semibold"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Space
              </h3>
              <div
                class="w-8 h-8 rounded-full mt-1"
                :style="{ backgroundColor: 'var(--tm-accent-primary)', opacity: '0.2' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed mb-6"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Over many years we have built strong relationships with clients across the space value
              chain, including launch providers, satellite builders, equipment providers, services
              companies, investors, and public sector institutions.
            </p>
          </div>

          <!-- Security and cybersecurity -->
          <div class="animate-fade-in-up animation-delay-600">
            <h3
              class="text-2xl font-semibold mb-6"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Security and cybersecurity
            </h3>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              We help incumbents and new entrants in the physical security and cybersecurity markets
              craft strategies to succeed. As the aerospace and defense industry relies on more
              connectivity technologies today, our digital security experts help clients find
              solutions to secure and protect the industry's technology backbone, mission-critical
              to the development, manufacture, operation, and maintenance of aerospace and defense
              equipment.
            </p>
          </div>

          <!-- Maintenance Repair and Overhaul (MRO) -->
          <div class="animate-fade-in-up animation-delay-700">
            <div class="flex items-start justify-between mb-6">
              <h3
                class="text-2xl font-semibold"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Maintenance Repair and Overhaul (MRO)
              </h3>
              <div
                class="w-8 h-8 rounded-full mt-1"
                :style="{ backgroundColor: 'var(--tm-accent-primary)', opacity: '0.2' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Our comprehensive MRO capabilities help airlines and independent service providers
              optimize their aircraft MRO operations, support OEMs and their suppliers in developing
              aftermarket services strategies, and assist private equity and investor groups in
              evaluating M&A opportunities in the MRO sector.
            </p>
          </div>
        </div>
      </div>

      <!-- 底部装饰 -->
      <div class="flex justify-center mt-16 animate-fade-in-up animation-delay-800">
        <div class="flex space-x-2">
          <div
            class="w-2 h-2 rounded-full"
            :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
          ></div>
          <div
            class="w-2 h-2 rounded-full opacity-60"
            :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
          ></div>
          <div
            class="w-2 h-2 rounded-full opacity-30"
            :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    animation: fade-in-up 0.8s ease-out;
  }

  .animation-delay-100 {
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  .animation-delay-300 {
    animation-delay: 0.3s;
    animation-fill-mode: both;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }

  .animation-delay-500 {
    animation-delay: 0.5s;
    animation-fill-mode: both;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
    animation-fill-mode: both;
  }

  .animation-delay-700 {
    animation-delay: 0.7s;
    animation-fill-mode: both;
  }

  .animation-delay-800 {
    animation-delay: 0.8s;
    animation-fill-mode: both;
  }
</style>
