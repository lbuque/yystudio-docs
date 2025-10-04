<template>
  <div class="things-table">
    <div
      v-for="(section, sIdx) in sections"
      :key="sIdx"
      class="things-section"
    >
      <div class="things-grid">
        <article
          v-for="(item, idx) in section.items"
          :key="idx"
          class="thing-card"
        >
          <div class="thumb">
            <img v-if="item.image" class="thumb-img" :src="item.image" :alt="item.name" />
            <div v-else class="thumb-fallback" :aria-label="item.name">{{ initials(item.name) }}</div>
          </div>
          <div class="meta">
            <div class="title-row">
              <template v-if="item.url">
                <a class="thing-name" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
              </template>
              <template v-else>
                <span class="thing-name">{{ item.name }}</span>
              </template>
              <span v-if="item.quantity" class="qty-pill">x{{ item.quantity }}<span v-if="item.unit"> {{ item.unit }}</span></span>
            </div>
            <div v-if="item.subtitle" class="subtitle">{{ item.subtitle }}</div>
            <div v-if="item.notes" class="notes">{{ item.notes }}</div>
            
          </div>
        </article>
      </div>
    </div>
  </div>
  </template>

<script setup lang="ts">
type ThingItem = {
  name: string
  image?: string
  url?: string
  quantity?: number | string
  unit?: string
  subtitle?: string
  notes?: string
}

type ThingSection = {
  // 分组标题已不用于渲染，保持可选以兼容历史数据
  title?: string
  items: ThingItem[]
}

const props = defineProps<{
  sections: ThingSection[]
}>()

const initials = (name: string) => {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  const a = parts[0]?.[0] || ''
  const b = parts[1]?.[0] || ''
  return (a + b).toUpperCase() || name[0]?.toUpperCase() || '?'
}
</script>

<style scoped>
.things-section + .things-section {
  margin-top: 20px;
}

.things-grid {
  display: grid;
  grid-template-columns: 1fr; /* 单列：每行一项 */
  gap: 12px;
}

.thing-card {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 12px;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 12px;
}

.thumb {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--vp-c-text-2);
}

.meta {
  min-width: 0;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.thing-name {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

/* 带链接的 name 使用常见超链接蓝色 */
a.thing-name {
  color: #0969da; /* 常见链接蓝（GitHub 风格） */
  cursor: pointer;
}

a.thing-name:hover {
  color: #0a58ca; /* hover 时加深 */
  text-decoration: underline;
}

/* 非链接 name 保持正常文本颜色 */
span.thing-name {
  color: var(--vp-c-text-1);
}

.qty-pill {
  margin-left: auto;
  font-size: 12px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 2px 8px;
}

.subtitle {
  margin-top: 2px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.notes {
  margin-top: 6px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}



@media (max-width: 480px) {
  .thing-card {
    grid-template-columns: 48px 1fr;
  }
  .thumb { width: 48px; height: 48px; }
}
</style>
