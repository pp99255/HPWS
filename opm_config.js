// ══════════════════════════════════════════════════════════════════
// opm_config.js — OPM.html 外部資源檔名參數
// 修改檔名只需編輯此檔案，不需修改 OPM.html 本身
// 全部檔案須與 OPM.html 放在同一目錄
// ══════════════════════════════════════════════════════════════════
const _ASSETS = {
  cover: 'opm_cover.jpg',   // 首頁封面圖
  intro: 'opm_intro.pdf',   // 系統簡介 PDF
  spec:  'opm_spec.pdf',    // 規格書 PDF
  cons:  'opm_cons.pdf',    // 顧問簡介 PDF
};

if (typeof module !== 'undefined' && module.exports) module.exports = _ASSETS;
