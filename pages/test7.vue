<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">
      {{ $t('title') }}
    </h1>
    <p class="text-[var(--tm-text-secondary)] mb-2">
      {{ $t('welcome') }}
    </p>
    <p class="text-[var(--tm-text-secondary)] mb-6">
      {{ $t('description') }}
    </p>

    <div class="bg-[var(--tm-bg-secondary)] p-4 rounded-lg">
      <h3 class="text-lg font-semibold mb-3 text-[var(--tm-text-primary)]">
        {{ $t('changeLanguage') }}
      </h3>
      <el-radio-group
        v-model="currentLocale"
        class="flex gap-2"
        @change="changeLocale"
      >
        <el-radio-button
          value="zh-CN"
          :style="{
            '--el-radio-button-checked-bg-color': 'var(--tm-pri-0)',
            '--el-radio-button-checked-text-color': 'var(--tm-btn-primary-text-0)',
            '--el-radio-button-checked-border-color': 'var(--tm-pri-0)',
          }"
        >
          中文
        </el-radio-button>
        <el-radio-button
          value="en-US"
          :style="{
            '--el-radio-button-checked-bg-color': 'var(--tm-pri-0)',
            '--el-radio-button-checked-text-color': 'var(--tm-btn-primary-text-0)',
            '--el-radio-button-checked-border-color': 'var(--tm-pri-0)',
          }"
        >
          English
        </el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup>
  const { locale, setLocale } = useI18n()
  const currentLocale = ref(locale.value)

  const changeLocale = async (newLocale) => {
    await setLocale(newLocale)
    localStorage.setItem('user-language', newLocale)
  }
</script>
