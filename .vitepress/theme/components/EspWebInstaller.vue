<template>
  <div class="esp-web-install">
    <esp-web-install-button :manifest="manifest">
      <button slot="activate">Connect</button>
      <span slot="unsupported">您的浏览器不支持此功能，请使用 Chrome、Edge 或其他基于 Chromium 的浏览器。</span>
      <span slot="not-allowed">请通过 HTTPS 访问此页面以使用固件安装功能。</span>
    </esp-web-install-button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  manifest: {
    type: String,
    required: true
  }
})

onMounted(() => {
  // 动态加载 ESP Web Tools 脚本
  if (!document.querySelector('script[src*="esp-web-tools"]')) {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module'
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
.esp-web-install {
  margin: 16px 0;
}

:deep(esp-web-install-button button[slot="activate"]) {
  background-color: #03a9f4 !important;
  color: #ffffff !important;
  border: none !important;
  padding: 10px 20px !important;
  border-radius: 4px !important;
  font-size: 14px !important;
  cursor: pointer !important;
}

:deep(esp-web-install-button button[slot="activate"]:hover) {
  background-color: #0288d1 !important;
}
</style>
