// ══════════════════════════════════════════════════════════════════
// eam_config.js — EAM.html 外部資源檔名參數
// 修改檔名只需編輯此檔案，不需修改 EAM.html 本身
// 全部檔案須與 EAM.html 放在同一目錄
// ══════════════════════════════════════════════════════════════════
const _ASSETS = {
  cover: 'eam_cover.jpg',   // 首頁封面圖
  intro: 'eam_intro.pdf',   // 系統簡介 PDF
  spec:  'eam_spec.pdf',    // 規格書 PDF
  cons:  'eam_cons.pdf',    // 顧問簡介 PDF
};

if (typeof module !== 'undefined' && module.exports) module.exports = _ASSETS;
