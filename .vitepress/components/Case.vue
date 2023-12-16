<script setup lang="ts">
import { data } from '../data/repository.data.js'

const { repositories } = data
</script>

<template>
  <div flex="~ wrap" gap-3>
    <a
      v-for="(item, index) in repositories" :key="index"
      w-84 h-40 px-4 py-2 unset
      border="1 solid gray-300" rounded-md
      cursor-pointer
      hover="shadow-md"
      target="_blank"
      :href="item.url"
      flex="~ col"
      justify-between
    >
      <div flex items-center gap-2>
        <img :src="item.owner.avatarUrl" w-4 h-4 alt="">
        <span text-gray-500 text-14px>{{ item.owner.login }}</span>
      </div>
      <div font-semibold text-gray-900>
        {{ item.name }}
      </div>
      <div text-gray-500 flex-auto text-14px>
        <span line-clamp-2>
          {{ item.description }}
        </span>
      </div>
      <div flex gap-5>
        <div flex items-center gap-1>
          <div
            w-3 h-3 rounded-full :style="{
              'background-color': item.primaryLanguage.color,
            }"
          />
          <div text="12px gray-500">{{ item.primaryLanguage.name }}</div>
        </div>
        <div flex items-center gap-1 text="12px gray-500">
          <i class="i-lucide-star" />
          <div>{{ (item.stargazers.totalCount).toLocaleString() }}</div>
        </div>
        <div flex items-center gap-1 text="12px gray-500">
          <i class="i-lucide-git-fork" />
          <div>{{ item.forkCount }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: tr;
}
</style>
