<template>
  <section class="py-60px lg:py-100px bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-1/4 left-1/4 w-500px h-500px bg-gradient-to-br from-[var(--tm-accent-gradient-from)] via-[var(--tm-accent-gradient-to)] to-transparent rounded-full blur-80px"
      ></div>
    </div>

    <div class="max-w-1400px mx-auto px-20px relative z-10">
      <!-- 标题区域 -->
      <div class="text-center mb-60px lg:mb-80px">
        <h2
          class="text-3xl lg:text-5xl font-light text-[var(--tm-txt-primary)] leading-tight mb-20px"
        >
          We cover all regions of the
          <span
            class="block mt-10px bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent font-semibold"
          >
            GCC
          </span>
        </h2>
        <p class="text-lg text-[var(--tm-txt-secondary)] max-w-600px mx-auto">
          Strategic presence across the Gulf with deep local market knowledge and cultural expertise
        </p>
      </div>

      <!-- GCC地区网格 - 重新设计布局 -->
      <div class="space-y-40px">
        <!-- 第一行：UAE（突出显示） -->
        <div class="flex justify-center mb-40px">
          <div
            class="group bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-tertiary)] rounded-25px p-40px lg:p-50px border-2 border-[var(--tm-accent-primary)] shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden max-w-500px w-full"
          >
            <!-- 特殊标记 -->
            <div class="absolute top-20px right-20px">
              <div
                class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white text-xs px-8px py-4px rounded-full font-semibold"
              >
                HQ
              </div>
            </div>

            <div class="relative z-10 text-center">
              <h3 class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-15px">UAE</h3>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-25px">
                Regional Headquarters - Middle East Hub
              </p>

              <!-- 更精美的城市天际线 -->
              <div class="mb-30px flex justify-center">
                <svg
                  class="w-full max-w-300px h-80px text-[var(--tm-accent-primary)] opacity-80"
                  viewBox="0 0 400 80"
                  fill="currentColor"
                >
                  <!-- Burj Khalifa and surrounding buildings -->
                  <rect
                    x="180"
                    y="5"
                    width="8"
                    height="75"
                    rx="2"
                  />
                  <rect
                    x="165"
                    y="25"
                    width="12"
                    height="55"
                    rx="2"
                  />
                  <rect
                    x="195"
                    y="20"
                    width="10"
                    height="60"
                    rx="2"
                  />
                  <rect
                    x="155"
                    y="35"
                    width="8"
                    height="45"
                    rx="1"
                  />
                  <rect
                    x="210"
                    y="30"
                    width="6"
                    height="50"
                    rx="1"
                  />
                  <rect
                    x="140"
                    y="40"
                    width="10"
                    height="40"
                    rx="2"
                  />
                  <rect
                    x="225"
                    y="35"
                    width="12"
                    height="45"
                    rx="2"
                  />
                  <rect
                    x="125"
                    y="50"
                    width="8"
                    height="30"
                    rx="1"
                  />
                  <rect
                    x="245"
                    y="45"
                    width="8"
                    height="35"
                    rx="1"
                  />
                  <rect
                    x="110"
                    y="55"
                    width="12"
                    height="25"
                    rx="2"
                  />
                  <rect
                    x="260"
                    y="50"
                    width="10"
                    height="30"
                    rx="2"
                  />
                  <rect
                    x="95"
                    y="60"
                    width="8"
                    height="20"
                    rx="1"
                  />
                  <rect
                    x="280"
                    y="55"
                    width="6"
                    height="25"
                    rx="1"
                  />
                  <!-- Palm tree silhouettes -->
                  <circle
                    cx="50"
                    cy="70"
                    r="3"
                  />
                  <rect
                    x="49"
                    y="60"
                    width="2"
                    height="15"
                  />
                  <circle
                    cx="350"
                    cy="70"
                    r="3"
                  />
                  <rect
                    x="349"
                    y="60"
                    width="2"
                    height="15"
                  />
                </svg>
              </div>

              <div class="grid grid-cols-1 gap-12px text-sm">
                <div class="flex items-center justify-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">
                    Dubai Office - Regional Operations Center
                  </span>
                </div>
                <div class="flex items-center justify-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">
                    Abu Dhabi Government Sector Focus
                  </span>
                </div>
                <div class="flex items-center justify-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Comprehensive UAE Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二行：KSA 和 Qatar -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-40px">
          <!-- KSA -->
          <div
            class="group bg-[var(--tm-bg-primary)] rounded-20px p-35px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-30 h-30 bg-gradient-to-bl from-[var(--tm-accent-gradient-from)] to-transparent opacity-15 rounded-bl-full"
            ></div>

            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-[var(--tm-txt-primary)] mb-15px">Saudi Arabia</h3>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-20px">
                Vision 2030 Strategic Partner
              </p>

              <div class="mb-25px flex justify-center">
                <svg
                  class="w-full max-w-250px h-60px text-[var(--tm-accent-primary)] opacity-70"
                  viewBox="0 0 300 60"
                  fill="currentColor"
                >
                  <!-- Riyadh modern skyline -->
                  <rect
                    x="50"
                    y="15"
                    width="12"
                    height="45"
                    rx="2"
                  />
                  <rect
                    x="70"
                    y="5"
                    width="8"
                    height="55"
                    rx="1"
                  />
                  <rect
                    x="85"
                    y="25"
                    width="15"
                    height="35"
                    rx="3"
                  />
                  <rect
                    x="110"
                    y="20"
                    width="10"
                    height="40"
                    rx="2"
                  />
                  <rect
                    x="130"
                    y="10"
                    width="6"
                    height="50"
                    rx="1"
                  />
                  <rect
                    x="145"
                    y="30"
                    width="12"
                    height="30"
                    rx="2"
                  />
                  <rect
                    x="165"
                    y="35"
                    width="8"
                    height="25"
                    rx="1"
                  />
                  <rect
                    x="180"
                    y="25"
                    width="10"
                    height="35"
                    rx="2"
                  />
                  <rect
                    x="200"
                    y="40"
                    width="15"
                    height="20"
                    rx="2"
                  />
                  <rect
                    x="225"
                    y="20"
                    width="8"
                    height="40"
                    rx="1"
                  />
                  <rect
                    x="240"
                    y="45"
                    width="12"
                    height="15"
                    rx="2"
                  />
                </svg>
              </div>

              <div class="space-y-10px text-sm">
                <div class="flex items-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Riyadh & Jeddah Operations</span>
                </div>
                <div class="flex items-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">NEOM & Mega Projects</span>
                </div>
                <div class="flex items-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Saudization Compliance</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Qatar -->
          <div
            class="group bg-[var(--tm-bg-primary)] rounded-20px p-35px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-30 h-30 bg-gradient-to-bl from-[var(--tm-accent-gradient-from)] to-transparent opacity-15 rounded-bl-full"
            ></div>

            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-[var(--tm-txt-primary)] mb-15px">Qatar</h3>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-20px">
                World Cup 2022 Legacy Market
              </p>

              <div class="mb-25px flex justify-center">
                <svg
                  class="w-full max-w-250px h-60px text-[var(--tm-accent-primary)] opacity-70"
                  viewBox="0 0 300 60"
                  fill="currentColor"
                >
                  <!-- Doha modern skyline with distinctive architecture -->
                  <rect
                    x="60"
                    y="20"
                    width="10"
                    height="40"
                    rx="2"
                  />
                  <rect
                    x="80"
                    y="10"
                    width="6"
                    height="50"
                    rx="1"
                  />
                  <rect
                    x="95"
                    y="25"
                    width="12"
                    height="35"
                    rx="6"
                  />
                  <rect
                    x="115"
                    y="30"
                    width="8"
                    height="30"
                    rx="1"
                  />
                  <rect
                    x="130"
                    y="5"
                    width="15"
                    height="55"
                    rx="3"
                  />
                  <rect
                    x="155"
                    y="35"
                    width="10"
                    height="25"
                    rx="2"
                  />
                  <rect
                    x="175"
                    y="15"
                    width="8"
                    height="45"
                    rx="1"
                  />
                  <rect
                    x="190"
                    y="40"
                    width="12"
                    height="20"
                    rx="2"
                  />
                  <rect
                    x="210"
                    y="25"
                    width="6"
                    height="35"
                    rx="1"
                  />
                  <rect
                    x="225"
                    y="45"
                    width="10"
                    height="15"
                    rx="2"
                  />
                  <rect
                    x="245"
                    y="30"
                    width="8"
                    height="30"
                    rx="1"
                  />
                </svg>
              </div>

              <div class="space-y-10px text-sm">
                <div class="flex items-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Doha Financial District</span>
                </div>
                <div class="flex items-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Energy & Infrastructure</span>
                </div>
                <div class="flex items-center gap-8px">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Qatarization Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第三行：Kuwait, Oman, Bahrain -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-30px">
          <!-- Kuwait -->
          <div
            class="group bg-[var(--tm-bg-primary)] rounded-15px p-30px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-400 relative"
          >
            <div class="text-center">
              <h3 class="text-xl font-bold text-[var(--tm-txt-primary)] mb-10px">Kuwait</h3>

              <div class="mb-20px flex justify-center">
                <svg
                  class="w-full max-w-180px h-40px text-[var(--tm-accent-primary)] opacity-70"
                  viewBox="0 0 200 40"
                  fill="currentColor"
                >
                  <rect
                    x="30"
                    y="15"
                    width="8"
                    height="25"
                    rx="1"
                  />
                  <rect
                    x="45"
                    y="10"
                    width="6"
                    height="30"
                    rx="1"
                  />
                  <rect
                    x="60"
                    y="20"
                    width="10"
                    height="20"
                    rx="2"
                  />
                  <rect
                    x="80"
                    y="5"
                    width="12"
                    height="35"
                    rx="2"
                  />
                  <rect
                    x="100"
                    y="25"
                    width="8"
                    height="15"
                    rx="1"
                  />
                  <rect
                    x="115"
                    y="15"
                    width="6"
                    height="25"
                    rx="1"
                  />
                  <rect
                    x="130"
                    y="30"
                    width="10"
                    height="10"
                    rx="2"
                  />
                  <rect
                    x="150"
                    y="20"
                    width="8"
                    height="20"
                    rx="1"
                  />
                </svg>
              </div>

              <div class="space-y-8px text-xs">
                <div class="flex items-center justify-center gap-6px">
                  <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Oil & Gas Excellence</span>
                </div>
                <div class="flex items-center justify-center gap-6px">
                  <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Government Partnerships</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Oman -->
          <div
            class="group bg-[var(--tm-bg-primary)] rounded-15px p-30px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-400 relative"
          >
            <div class="text-center">
              <h3 class="text-xl font-bold text-[var(--tm-txt-primary)] mb-10px">Oman</h3>

              <div class="mb-20px flex justify-center">
                <svg
                  class="w-full max-w-180px h-40px text-[var(--tm-accent-primary)] opacity-70"
                  viewBox="0 0 200 40"
                  fill="currentColor"
                >
                  <rect
                    x="25"
                    y="20"
                    width="8"
                    height="20"
                    rx="1"
                  />
                  <rect
                    x="40"
                    y="15"
                    width="6"
                    height="25"
                    rx="1"
                  />
                  <rect
                    x="55"
                    y="25"
                    width="10"
                    height="15"
                    rx="2"
                  />
                  <rect
                    x="75"
                    y="10"
                    width="12"
                    height="30"
                    rx="2"
                  />
                  <rect
                    x="95"
                    y="30"
                    width="8"
                    height="10"
                    rx="1"
                  />
                  <rect
                    x="110"
                    y="18"
                    width="6"
                    height="22"
                    rx="1"
                  />
                  <rect
                    x="125"
                    y="35"
                    width="10"
                    height="5"
                    rx="1"
                  />
                  <rect
                    x="145"
                    y="12"
                    width="8"
                    height="28"
                    rx="1"
                  />
                  <rect
                    x="165"
                    y="25"
                    width="6"
                    height="15"
                    rx="1"
                  />
                </svg>
              </div>

              <div class="space-y-8px text-xs">
                <div class="flex items-center justify-center gap-6px">
                  <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Tourism & Hospitality</span>
                </div>
                <div class="flex items-center justify-center gap-6px">
                  <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Vision 2040 Projects</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bahrain -->
          <div
            class="group bg-[var(--tm-bg-primary)] rounded-15px p-30px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-400 relative"
          >
            <div class="text-center">
              <h3 class="text-xl font-bold text-[var(--tm-txt-primary)] mb-10px">Bahrain</h3>

              <div class="mb-20px flex justify-center">
                <svg
                  class="w-full max-w-180px h-40px text-[var(--tm-accent-primary)] opacity-70"
                  viewBox="0 0 200 40"
                  fill="currentColor"
                >
                  <rect
                    x="35"
                    y="18"
                    width="8"
                    height="22"
                    rx="1"
                  />
                  <rect
                    x="50"
                    y="25"
                    width="6"
                    height="15"
                    rx="1"
                  />
                  <rect
                    x="65"
                    y="12"
                    width="10"
                    height="28"
                    rx="2"
                  />
                  <rect
                    x="85"
                    y="20"
                    width="12"
                    height="20"
                    rx="2"
                  />
                  <rect
                    x="105"
                    y="30"
                    width="8"
                    height="10"
                    rx="1"
                  />
                  <rect
                    x="120"
                    y="15"
                    width="6"
                    height="25"
                    rx="1"
                  />
                  <rect
                    x="135"
                    y="35"
                    width="10"
                    height="5"
                    rx="1"
                  />
                  <rect
                    x="155"
                    y="22"
                    width="8"
                    height="18"
                    rx="1"
                  />
                </svg>
              </div>

              <div class="space-y-8px text-xs">
                <div class="flex items-center justify-center gap-6px">
                  <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Financial Services Hub</span>
                </div>
                <div class="flex items-center justify-center gap-6px">
                  <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-[var(--tm-txt-secondary)]">Regional Gateway</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部总结统计 -->
      <div class="mt-60px lg:mt-80px">
        <div
          class="bg-gradient-to-r from-[var(--tm-bg-primary)] via-[var(--tm-bg-secondary)] to-[var(--tm-bg-primary)] rounded-20px p-40px border border-[var(--tm-bd-light)] shadow-lg text-center"
        >
          <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-30px">
            Regional Excellence
          </h3>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-25px">
            <div>
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-5px">6</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">GCC Countries</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-5px">15+</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Major Cities</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-5px">100%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Market Coverage</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-5px">14+</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // GCC地区组件逻辑
</script>

<style scoped>
  /* 背景模糊效果 */
  .blur-80px {
    filter: blur(80px);
  }

  /* 不同层次的卡片样式 */
  .group:hover svg rect {
    animation: buildingPulse 0.6s ease-in-out;
  }

  @keyframes buildingPulse {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.1);
    }
  }

  /* UAE特殊样式 */
  .border-2 {
    border-width: 2px;
  }

  /* 响应式调整 */
  @media (max-width: 1024px) {
    .max-w-500px {
      max-width: 100%;
    }

    .grid-cols-2 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .py-60px {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .lg\:py-100px {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .mb-60px {
      margin-bottom: 40px;
    }

    .space-y-40px > * + * {
      margin-top: 25px;
    }

    .gap-40px {
      gap: 25px;
    }

    .p-40px {
      padding: 25px;
    }

    .lg\:p-50px {
      padding: 25px;
    }

    .p-35px {
      padding: 25px;
    }

    .mt-60px {
      margin-top: 40px;
    }

    .gap-30px {
      gap: 20px;
    }

    .p-30px {
      padding: 20px;
    }

    .w-500px {
      width: 250px;
    }

    .h-500px {
      height: 250px;
    }
  }

  @media (max-width: 640px) {
    .text-3xl {
      font-size: 1.875rem;
    }

    .grid-cols-3 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .grid-cols-4 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
