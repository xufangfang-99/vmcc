<template>
  <div class="success-stories py-20 md:py-32 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 right-0 w-100 h-100 rounded-full opacity-5 bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent transform translate-x-20 -translate-y-20"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-3 bg-gradient-to-tr from-[var(--tm-accent-secondary)] to-transparent transform -translate-x-10 translate-y-10"
      ></div>
    </div>

    <div class="max-w-1400px mx-auto px-4 md:px-8 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-16 md:mb-20">
        <div
          class="inline-flex items-center gap-3 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-feature)] rounded-full px-6 py-3 text-sm font-medium text-[var(--tm-txt-primary)] mb-6 backdrop-blur-10px"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
          </div>
          银行金融行业成功案例
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Driving Financial Innovation,
          <span
            class="block md:inline text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] bg-clip-text text-transparent"
          >
            Building Digital Excellence
          </span>
        </h2>

        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] leading-relaxed max-w-4xl mx-auto"
        >
          在金融科技快速发展的时代，VMMC为GCC地区领先的银行和金融机构提供顶尖人才，推动数字化转型和创新发展。以下是我们在银行金融领域的卓越成就。
        </p>
      </div>

      <!-- 统计数据概览 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-[var(--tm-shadow-accent)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            25K+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            金融专才配置
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-[var(--tm-shadow-accent)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
                ry="2"
              ></rect>
              <line
                x1="8"
                y1="21"
                x2="16"
                y2="21"
              ></line>
              <line
                x1="12"
                y1="17"
                x2="12"
                y2="21"
              ></line>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            150+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            金融机构合作
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="m2 17 10 5 10-5"></path>
              <path d="m2 12 10 5 10-5"></path>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            $50B+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            支持项目价值
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">95%</div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            数字化转型成功率
          </div>
        </div>
      </div>

      <!-- 成功案例卡片 -->
      <div class="space-y-16 md:space-y-20">
        <!-- 案例1: 大型央行数字货币项目 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div
              class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      x="1"
                      y="3"
                      width="15"
                      height="13"
                    ></rect>
                    <path d="m16 8 2-2 2 2"></path>
                    <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path>
                    <path d="M5 12V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5H5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">GCC央行</h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">数字货币研发项目</p>
                </div>
              </div>

              <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                构建区域首个央行数字货币(CBDC)团队
              </h4>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                为GCC某央行组建了一支世界级的数字货币研发团队，包括区块链架构师、密码学专家、金融科技产品经理等关键角色，成功推动该国成为区域数字货币先驱。
              </p>

              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">45</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">区块链专家团队</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">18</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">月完成组建</div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  区块链技术
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  密码学安全
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  监管合规
                </span>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <OptImage
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Central Bank Digital Currency"
                class="w-full h-80 md:h-96 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h5 class="text-lg font-semibold mb-2">项目亮点</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ 区域首个CBDC</div>
                  <div>✓ 国际标准制定</div>
                  <div>✓ 技术专利申请</div>
                  <div>✓ 跨境支付创新</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 案例2: 伊斯兰银行科技升级 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <OptImage
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
                alt="Islamic Banking Technology"
                class="w-full h-80 md:h-96 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h5 class="text-lg font-semibold mb-2">伊斯兰金融科技团队</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ 80名专业人才</div>
                  <div>✓ 合规体系建设</div>
                  <div>✓ 产品创新突破</div>
                  <div>✓ 客户体验提升</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9,22 9,12 15,12 15,22"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">领先伊斯兰银行</h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">数字化转型项目</p>
                </div>
              </div>

              <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                重塑伊斯兰金融服务数字体验
              </h4>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                为GCC地区最大的伊斯兰银行建立了专业的金融科技团队，开发符合伊斯兰教法的创新金融产品，成功将传统伊斯兰银行业务与现代科技完美融合。
              </p>

              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">80</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">金融科技专家</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">300%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">数字化业务增长</div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  伊斯兰金融
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  教法合规
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  产品创新
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 案例3: 保险科技独角兽人才支撑 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div
              class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                    新兴保险科技公司
                  </h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">独角兽企业孵化项目</p>
                </div>
              </div>

              <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                打造中东首个保险科技独角兽企业
              </h4>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                从零开始为新兴保险科技公司组建全栈团队，涵盖精算、数据科学、人工智能、产品设计等关键领域，助力其在24个月内成长为估值超10亿美元的独角兽企业。
              </p>

              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">200+</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">专业团队成员</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">$1B+</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">企业估值达成</div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  保险科技
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  AI精算模型
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  初创团队孵化
                </span>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <OptImage
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="InsurTech Innovation"
                class="w-full h-80 md:h-96 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h5 class="text-lg font-semibold mb-2">成就里程碑</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ 独角兽估值</div>
                  <div>✓ 多轮融资成功</div>
                  <div>✓ 区域市场领导</div>
                  <div>✓ 技术专利组合</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 客户证言 -->
      <div class="mt-20 text-center">
        <h3 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] mb-12">
          金融行业领袖的信任之选
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 证言1 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="text-[var(--tm-accent-primary)] text-4xl mb-4">"</div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              "VMMC在区块链和数字货币领域的专业理解让我们印象深刻。他们为我们匹配的团队成员都具备顶尖的技术能力和深度的行业洞察。"
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-full flex items-center justify-center"
              >
                <span class="text-[var(--tm-accent-primary)] font-semibold">MA</span>
              </div>
              <div>
                <div class="font-semibold text-[var(--tm-txt-primary)]">Mohammed Al-Rashid</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">数字货币部门主管，GCC央行</div>
              </div>
            </div>
          </div>

          <!-- 证言2 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="text-[var(--tm-accent-primary)] text-4xl mb-4">"</div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              "在伊斯兰金融科技领域，VMMC展现了无与伦比的专业性。他们不仅理解技术要求，更深谙伊斯兰教法在金融产品设计中的重要性。"
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-full flex items-center justify-center"
              >
                <span class="text-[var(--tm-accent-primary)] font-semibold">FK</span>
              </div>
              <div>
                <div class="font-semibold text-[var(--tm-txt-primary)]">Fatima Al-Kindi</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">首席技术官，领先伊斯兰银行</div>
              </div>
            </div>
          </div>

          <!-- 证言3 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] md:col-span-2 lg:col-span-1"
          >
            <div class="text-[var(--tm-accent-primary)] text-4xl mb-4">"</div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              "从初创到独角兽，VMMC始终是我们最信赖的人才合作伙伴。他们帮助我们在关键发展节点找到了最合适的团队成员。"
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-full flex items-center justify-center"
              >
                <span class="text-[var(--tm-accent-primary)] font-semibold">RG</span>
              </div>
              <div>
                <div class="font-semibold text-[var(--tm-txt-primary)]">Raj Gupta</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">
                  创始人兼CEO，保险科技独角兽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="mt-20 text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
        >
          <!-- 背景装饰 -->
          <div class="absolute inset-0 opacity-10">
            <div
              class="absolute top-4 right-4 w-32 h-32 rounded-full bg-white transform rotate-45"
            ></div>
            <div
              class="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white transform -rotate-12"
            ></div>
          </div>

          <div class="relative z-1">
            <h3 class="text-3xl md:text-4xl font-light mb-6">准备开启您的金融科技创新之旅？</h3>
            <p class="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              加入150多家领先金融机构的行列，与VMMC携手构建面向未来的金融服务团队。让我们帮助您在数字化转型浪潮中脱颖而出。
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-3 bg-white text-[var(--tm-accent-primary)] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 shadow-lg hover:shadow-xl no-underline"
              >
                <span>开启合作咨询</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </NuxtLink>

              <NuxtLink
                to="/industries/banking-finance"
                class="inline-flex items-center gap-3 border-2 border-white/60 bg-transparent text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
              >
                <span>了解更多案例</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import FooterSection from '~/components/Home/FooterSection.vue'
  // 页面元数据设置
  useHead({
    title: '银行金融行业成功案例 | VMMC Global Talent Solutions',
    meta: [
      {
        name: 'description',
        content:
          'VMMC在银行金融领域的卓越成就，包括央行数字货币、伊斯兰金融科技、保险科技等创新项目的人才支持案例。',
      },
    ],
  })
</script>

<style>
  /* 只保留无法用 UnoCSS 表达的复杂样式 */

  /* 背景装饰动画 */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  .success-stories .absolute:first-child {
    animation: float 8s ease-in-out infinite;
  }

  .success-stories .absolute:nth-child(2) {
    animation: float 10s ease-in-out infinite reverse;
  }

  /* 卡片入场动画 */
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .success-stories > div > div:nth-child(n + 3) {
    animation: slideInUp 0.8s ease-out forwards;
  }

  /* 深色模式适配 */
  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-card);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
  }

  .dark .border-\[var\(--tm-bd-card\)\] {
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-badge\)\] {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
  }

  /* 响应式优化 */
  @media (max-width: 768px) {
    .success-stories .grid.grid-cols-1.lg\:grid-cols-2 {
      gap: 2rem;
    }

    .success-stories .text-4xl.md\:text-5xl.lg\:text-6xl {
      font-size: 2.5rem;
      line-height: 1.2;
    }

    .success-stories .p-8.md\:p-10 {
      padding: 1.5rem;
    }
  }

  /* 金融主题的特殊样式 */
  .success-stories .grid > div:hover {
    transform: translateY(-8px);
    transition: all 0.3s ease;
  }

  /* 渐变文字效果增强 */
  .bg-gradient-to-r.from-\[var\(--tm-accent-primary\)\].to-\[var\(--tm-accent-secondary\)\].bg-clip-text {
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>
