# AnesTalk - 麻醉科多國語音輔助與雙向翻譯系統

專為麻醉科（麻醉醫師、麻醉護理師 CRNA）設計的多國語音輔助與雙向對話溝通平台。比照 RadioTalk 系統規格開發，支援離線 PWA、全螢幕病患視覺提示彈窗、與雙向語音翻譯。

## 🌟 功能亮點
1. **支援 7 國目標語系**：韓文 (Korean 🇰🇷)、英文 (English 🇺🇸)、日文 (Japanese 🇯🇵)、越南語 (Tiếng Việt 🇻🇳)、泰語 (ไทย 🇹🇭)、印尼語 (Indonesia 🇮🇩)、菲律賓語 (Filipino 🇵🇭)。
2. **三階段麻醉情境快捷卡**：術前評估備診 (Pre-Op)、擺位與誘導指令 (Intra-Op)、恢復室 VAS 痛感評估 (PACU Recovery)。
3. **🗣️ 雙向互動翻譯專區 (Two-Way Interactive Zone)**：
   - 👨‍⚕️ 醫護端點擊發言 (繁體中文 🎙️) ➔ 自動翻譯並發音目標語言。
   - 👤 病患端點擊發言 (目標母語 🎤) ➔ 自動翻譯成中文語音播報給醫護聽。
   - 🖐️ 病患免口述快答卡 (很痛/不痛、想吐/頭暈、會冷/發抖、聽懂了/OK)。
4. **全螢幕病患視覺提示卡 (Patient Visualizer Overlay)**：大字體 display、雙語對照、羅馬拼音、動態圓圈呼吸/擺位脈動動畫。
5. **離線 PWA 支援 (Progressive Web App)**：內建 Service Worker，適應手術室與恢復室鉛板屏蔽環境。

## 🚀 使用方式
在瀏覽器中開啟 `index.html`：
```bash
open index.html
```
或啟動 HTTP 伺服器：
```bash
python3 -m http.server 8000
```
瀏覽 `http://localhost:8000` 即可使用。
