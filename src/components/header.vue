<template>
  <div class="bg-white dark:bg-black-dark fixed w-full z-50 text-black-dark dark:text-black-light">
    <div class="px-4 md:px-12 mx-auto">
      <header class="flex h-16 justify-between items-center text-3xl md:h-20">
        <div class="w-7 mr-14 md:w-10">
          <img src="../assets/images/logo@2x.png" alt="" />
        </div>
        <!-- nav - start -->

        <nav class="hidden gap-12 mr-auto text-lg md:flex">
          <router-link to="/home">Home</router-link>
          <router-link to="/rank">Game Directory</router-link>
          <router-link to="/learn">Airdrop Campaign</router-link>
          <router-link to="/learn">Task Center</router-link>
        </nav>
        <!-- nav - end -->

        <!-- Get Started -->
        <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
          <el-dropdown>
            <div class="btn h-9 text-base leading-9">
              Get Started
              <el-icon class="align-text-top"><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link v-slot="{ navigate }" custom to="/rank">
                    <div class="hover:text-primary" @click="navigate">Marketplace</div>
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link v-slot="{ navigate }" custom to="/rank">
                    <div class="hover:text-primary" @click="navigate">Create Campaign</div>
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link v-slot="{ navigate }" custom to="/rank">
                    <div class="hover:text-primary" @click="navigate">Nodes</div>
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link v-slot="{ navigate }" custom to="/rank">
                    <div class="hover:text-primary" @click="navigate">My Space</div>
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="hidden xl:flex">
          <button class="btn h-9 text-base ml-3">Sign up</button>
          <button class="btn h-9 text-base ml-3">Sign in</button>
        </div>
        <div class="hidden xl:flex ml-3">
          <el-switch v-model="sysTheme" inline-prompt :active-icon="Check" :inactive-icon="Close" />
        </div>
        <el-icon class="text-gray-700 ml-3"><Expand /></el-icon>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Check, Close } from '@element-plus/icons-vue'

  // 主题（暗黑/明亮）切换
  let sysTheme = ref(true)
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    sysTheme.value = true
    document.documentElement.className = 'dark'
  } else {
    sysTheme.value = false
  }
  watch(sysTheme, () => {
    let theme: string = sysTheme.value ? 'dark' : 'light'
    localStorage.theme = theme
    document.documentElement.className = theme
  })
</script>

<style scoped>
  .router-link-active {
    color: #9764e9;
    font-weight: bold;
  }
</style>
