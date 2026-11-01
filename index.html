<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Notulen & Perencanaan Kegiatan RT v3.9.8</title>
  
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0ea5e9">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Notulen RT">
  <link rel="apple-touch-icon" href="icon-192.png">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
  
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <script src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"></script>

  <style>
    :root { --primary-color: #0ea5e9; --primary-dark: #0284c7; --bg-light: #f8fafc; --card-bg: #ffffff; --text-main: #0f172a; --border-color: #e2e8f0; }
    [data-theme="emerald"] { --primary-color: #10b981; --primary-dark: #059669; }
    [data-theme="indigo"] { --primary-color: #6366f1; --primary-dark: #4f46e5; }
    [data-theme="sunset"] { --primary-color: #f97316; --primary-dark: #ea580c; }
    [data-theme="dark"] { --primary-color: #38bdf8; --primary-dark: #0284c7; --bg-light: #0f172a; --card-bg: #1e293b; --text-main: #f8fafc; --border-color: #334155; }
    body { background-color: var(--bg-light); color: var(--text-main); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding-bottom: 95px; user-select: none; transition: background-color 0.2s, color 0.2s; }
    .bg-primary-custom { background-color: var(--primary-color) !important; }
    .text-primary-custom { color: var(--primary-color) !important; }
    .btn-primary-custom { background-color: var(--primary-color) !important; color: #ffffff !important; border: none !important; }
    .btn-primary-custom:hover { background-color: var(--primary-dark) !important; color: #ffffff !important; }
    .navbar-brand { font-weight: 700; letter-spacing: -0.5px; }
    .app-logo-nav { width: 54px; height: 54px; object-fit: contain; border-radius: 14px; background: #ffffff; padding: 3px; box-shadow: 0 3px 10px rgba(0,0,0,0.2); }
    .card-custom { background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: 18px; box-shadow: 0 4px 14px rgba(0,0,0,0.03); transition: transform 0.1s; }
    .card-custom:active { transform: scale(0.98); }
    .icon-badge { width: 38px; height: 38px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .btn-rounded { border-radius: 12px; font-weight: 600; padding: 10px 16px; }
    .bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: var(--card-bg); border-top: 1px solid var(--border-color); display: flex; justify-content: space-around; padding: 8px 0; z-index: 1030; box-shadow: 0 -4px 16px rgba(0,0,0,0.04); }
    .nav-item-btn { background: none; border: none; color: #64748b; font-size: 0.72rem; display: flex; flex-direction: column; align-items: center; gap: 3px; width: 20%; transition: color 0.15s; }
    .nav-item-btn i { font-size: 1.35rem; }
    .nav-item-btn.active { color: var(--primary-color); font-weight: 700; }
    .install-banner { background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white; border-radius: 18px; padding: 14px; margin-bottom: 16px; display: none; }
    .badge-status { font-size: 0.75rem; padding: 5px 12px; border-radius: 20px; }
    .footer-branding { text-align: center; padding: 15px 0 5px 0; font-size: 0.75rem; color: #64748b; }
    #qrcode-box img { margin: 0 auto; border: 10px solid #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    #scanner-reader-container { width: 100%; max-width: 380px; margin: 0 auto; background: #000; border-radius: 16px; overflow: hidden; border: 2px solid var(--primary-color); box-shadow: 0 8px 25px rgba(0,0,0,0.5); }
    #scanner-reader { width: 100% !important; min-height: 280px !important; background: #000 !important; }
    #scanner-reader video { width: 100% !important; height: auto !important; object-fit: cover !important; }
    @media print {
      .bottom-nav, .navbar, .btn, .no-print, .install-banner, .footer-branding, .modal-header button { display: none !important; }
      body { background: #fff !important; color: #000 !important; padding: 0 !important; }
      .modal { position: absolute !important; left: 0 !important; top: 0 !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; }
      .modal-dialog { max-width: 100% !important; width: 100% !important; margin: 0 !important; }
      .modal-content { border: none !important; box-shadow: none !important; background: #fff !important; }
      .modal-body { padding: 0 !important; overflow: visible !important; }
    }
  </style>
</head>
<body>

  <!-- ================= WADAH UTAMA ADMIN ================= -->
  <div id="admin-app-container">
    <datalist id="dl-warga-list"></datalist>
    <nav class="navbar navbar-expand navbar-dark bg-primary-custom sticky-top shadow-sm py-2">
      <div class="container">
        <span class="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
          <img src="icon-192.png" alt="Logo" class="app-logo-nav" onerror="this.style.display='none'">
          <div>
            <div class="d-flex align-items-center gap-1">
              <span>NOTULEN RT</span>
              <span class="badge bg-white text-primary-custom fs-6 fw-bold opacity-90 ms-1" style="font-size: 0.62rem !important;">v3.9.8</span>
            </div>
            <div id="nav-header-subtext" class="text-white opacity-90 fw-normal" style="font-size: 0.68rem; line-height: 1.1;">RT 01 / RW 01 • Desa Sukamaju</div>
          </div>
        </span>
        <div class="d-flex align-items-center gap-2">
          <button id="btn-sync" class="btn btn-sm btn-light rounded-circle shadow-sm" onclick="syncData()" title="Sinkronkan Data Manual"><i class="bi bi-arrow-repeat text-primary-custom"></i></button>
          <button class="btn btn-sm btn-light rounded-circle shadow-sm" onclick="logoutApp()" title="Log Out"><i class="bi bi-box-arrow-right text-danger"></i></button>
        </div>
      </div>
    </nav>

    <div class="container py-3">
      <!-- SEKSI 1: DASHBOARD -->
      <div id="sec-dashboard" class="page-section">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="fw-bold mb-0">Ringkasan RT</h5>
          <span id="sync-status" class="badge bg-secondary d-none" style="display:none !important;">Offline Cache</span>
        </div>
        <div class="row g-2 mb-3">
          <div class="col-4"><div class="card card-custom p-2 text-center bg-primary-custom text-white"><h3 id="stat-notulen" class="fw-bold mb-0">0</h3><small class="opacity-90" style="font-size:0.7rem;">Notulen</small></div></div>
          <div class="col-4"><div class="card card-custom p-2 text-center bg-success text-white"><h3 id="stat-kegiatan" class="fw-bold mb-0">0</h3><small class="opacity-90" style="font-size:0.7rem;">Agenda</small></div></div>
          <div class="col-4"><div class="card card-custom p-2 text-center bg-info text-white"><h3 id="stat-warga" class="fw-bold mb-0">0</h3><small class="opacity-90" style="font-size:0.7rem;">Warga</small></div></div>
        </div>
        <h6 class="fw-bold text-muted mb-2">Aksi Cepat Petugas</h6>
        <div class="row g-2 mb-4">
          <div class="col-6">
            <button class="btn btn-light card-custom w-100 p-3 text-start border d-flex flex-column gap-2" onclick="switchTab('notulen'); openFormNotulen();">
              <div class="icon-badge bg-primary-subtle text-primary-custom"><i class="bi bi-journal-plus"></i></div>
              <div><span class="fw-bold d-block mt-1">+ Buat Notulen</span><small class="text-muted">Hasil musyawarah</small></div>
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-light card-custom w-100 p-3 text-start border d-flex flex-column gap-2" onclick="openModalPresensi()">
              <div class="icon-badge bg-warning-subtle text-warning"><i class="bi bi-person-check-fill"></i></div>
              <div><span class="fw-bold d-block mt-1">Presensi Manual</span><small class="text-muted">Absen warga hadir</small></div>
            </button>
          </div>
        </div>
        
        <h6 class="fw-bold text-muted mb-2"><i class="bi bi-bar-chart-fill me-1"></i> Rekap Kehadiran Rapat Terbaru</h6>
        <div id="dashboard-recent-presensi-rapat" class="mb-3"></div>
        <h6 class="fw-bold text-muted mb-2"><i class="bi bi-calendar-check-fill me-1"></i> Rekap Kehadiran Agenda Kegiatan Terbaru</h6>
        <div id="dashboard-recent-presensi-kegiatan" class="mb-4"></div>
        <h6 class="fw-bold text-muted mb-2">Notulen Musyawarah Terbaru</h6>
        <div id="dashboard-recent-notulen"></div>
      </div>

      <!-- SEKSI 2: NOTULEN -->
      <div id="sec-notulen" class="page-section" style="display:none;">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 class="fw-bold mb-0">Notulen Rapat RT</h5>
          <button class="btn btn-primary-custom text-white btn-sm rounded-pill px-3" onclick="openFormNotulen()"><i class="bi bi-plus-lg me-1"></i>Tambah</button>
        </div>
        <input type="text" id="search-notulen" class="form-control form-control-sm mb-3 rounded-pill" placeholder="🔍 Cari agenda notulen..." onkeyup="renderNotulenList()">
        <div id="list-notulen-container"></div>
      </div>

      <!-- SEKSI 3: KEGIATAN -->
      <div id="sec-kegiatan" class="page-section" style="display:none;">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 class="fw-bold mb-0">Perencanaan Kegiatan</h5>
          <button class="btn btn-success btn-sm rounded-pill px-3" onclick="openFormKegiatan()"><i class="bi bi-plus-lg me-1"></i>Agenda Baru</button>
        </div>
        <input type="text" id="search-kegiatan" class="form-control form-control-sm mb-3 rounded-pill" placeholder="🔍 Cari nama agenda..." onkeyup="renderKegiatanList()">
        <div id="list-kegiatan-container"></div>
      </div>

      <!-- SEKSI 4: WARGA -->
      <div id="sec-warga" class="page-section" style="display:none;">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 class="fw-bold mb-0">Data Warga & Pengurus</h5>
          <button class="btn btn-outline-primary btn-sm rounded-pill px-3" onclick="openFormWarga()"><i class="bi bi-plus-lg me-1"></i>Tambah Warga</button>
        </div>
        <input type="text" id="search-warga" class="form-control form-control-sm mb-3 rounded-pill" placeholder="🔍 Cari nama atau blok rumah..." onkeyup="renderWargaList()">
        <div id="list-warga-container"></div>
      </div>

      <!-- SEKSI 5: PENGATURAN -->
      <div id="sec-pengaturan" class="page-section" style="display:none;">
        <h5 class="fw-bold mb-3">Pengaturan & Data</h5>
        
        <div class="card card-custom p-3 mb-3 border-dark bg-dark text-white shadow-sm">
          <h6 class="fw-bold mb-2 text-info"><i class="bi bi-qr-code-scan me-2"></i>Master QR Permanen RT</h6>
          <p class="small opacity-75 mb-2">Cetak Master QR ini, laminating, lalu tempel permanen di pos ronda / balai RT.</p>
          <button class="btn btn-warning fw-bold w-100 rounded-pill shadow text-dark" onclick="showPermanentMasterQR()"><i class="bi bi-printer-fill me-1"></i>Cetak QR Master Posko</button>
        </div>

        <div class="card card-custom p-3 mb-3 border-warning-subtle">
          <h6 class="fw-bold mb-2 text-warning"><i class="bi bi-shield-lock me-2"></i>Ubah Keamanan PIN</h6>
          <div class="mb-2"><input type="password" id="setting-pin-lama" class="form-control form-control-sm rounded-pill" placeholder="PIN Lama"></div>
          <div class="mb-3"><input type="password" id="setting-pin-baru" class="form-control form-control-sm rounded-pill" placeholder="PIN Baru (Min. 4 digit)"></div>
          <button class="btn btn-sm btn-primary-custom text-white rounded-pill fw-bold w-100 py-2 shadow-sm" onclick="changePinSecure()">Simpan PIN Baru</button>
        </div>
        
        <div class="card card-custom p-3 mb-3 border-success-subtle bg-success-subtle bg-opacity-10">
          <h6 class="fw-bold mb-2 text-success"><i class="bi bi-envelope-check me-2"></i>Email Pemulihan</h6>
          <div class="mb-3"><input type="email" id="setting-email-admin" class="form-control form-control-sm rounded-pill" placeholder="contoh@gmail.com"></div>
          <button class="btn btn-sm btn-success rounded-pill fw-bold w-100 py-2 shadow-sm" onclick="saveEmailPemulihan()">Simpan Email</button>
        </div>
        
        <div class="card card-custom p-3 mb-3 border-primary-subtle">
          <h6 class="fw-bold mb-2 text-primary-custom"><i class="bi bi-building me-2"></i>Identitas Header & Kop Surat</h6>
          <div class="mb-2"><input type="text" id="setting-nama-rt" class="form-control form-control-sm" placeholder="Nama RT / RW"></div>
          <div class="mb-2"><input type="text" id="setting-desa-alamat" class="form-control form-control-sm" placeholder="Desa / Kelurahan"></div>
          <button class="btn btn-sm btn-primary-custom text-white rounded-pill fw-bold w-100 mt-1 py-2 shadow-sm" onclick="saveHeaderSettings()">Simpan Header</button>
        </div>
        
        <div class="card card-custom p-3 mb-3 border-danger-subtle bg-danger-subtle">
          <div class="d-flex justify-content-between align-items-center">
            <div><h6 class="fw-bold text-danger mb-0"><i class="bi bi-box-arrow-right me-2"></i>Sesi Aplikasi</h6><small class="text-danger opacity-75">Keluar aplikasi</small></div>
            <button class="btn btn-sm btn-danger rounded-pill fw-bold px-3" onclick="logoutApp()">Log Out</button>
          </div>
        </div>
      </div>
      <div class="footer-branding no-print">
        <div class="fw-semibold">Aplikasi Notulen & Perencanaan Kegiatan RT</div>
        <div class="text-primary-custom fw-bold mt-1">Powered By Ari GPM • <span class="text-muted fw-normal">v3.9.8</span></div>
      </div>
    </div>

    <!-- BOTTOM NAVIGATION -->
    <nav class="bottom-nav">
      <button class="nav-item-btn active" onclick="switchTab('dashboard')"><i class="bi bi-grid-1x2-fill"></i><span>Beranda</span></button>
      <button class="nav-item-btn" onclick="switchTab('notulen')"><i class="bi bi-journal-text"></i><span>Notulen</span></button>
      <button class="nav-item-btn" onclick="switchTab('kegiatan')"><i class="bi bi-calendar-event"></i><span>Agenda</span></button>
      <button class="nav-item-btn" onclick="switchTab('warga')"><i class="bi bi-people-fill"></i><span>Warga</span></button>
      <button class="nav-item-btn" onclick="switchTab('pengaturan')"><i class="bi bi-sliders"></i><span>Pengaturan</span></button>
    </nav>
  </div>
  <!-- ================= END WADAH ADMIN ================= -->

  <!-- ================= WADAH MODE SCANNER WARGA ================= -->
  <div id="warga-scanner-app" style="display:none; background: #0f172a; min-height: 100vh; color: #fff; position: absolute; top:0; left:0; width:100%; z-index:9999;">
    <div class="container py-4 text-center">
      <img src="icon-192.png" alt="Logo" style="width: 70px; border-radius: 15px; background: #fff; padding: 5px; margin-bottom: 15px;">
      <h4 class="fw-bold mb-1 text-info">Presensi Mandiri Warga</h4>
      <p class="small text-light opacity-75 mb-3" id="scanner-rt-header">Memuat data RT...</p>

      <div class="card bg-dark border-secondary p-3 mb-3 shadow-lg text-start mx-auto" style="max-width: 400px; border-radius: 16px;" id="scanner-main-card">
        
        <!-- AUTO LOCK INFO -->
        <div id="scanner-locked-info" class="mb-3 p-3 bg-info bg-opacity-10 border border-info rounded-3 text-center" style="display:none;">
          <h6 class="text-info fw-bold mb-1"><i class="bi bi-pin-angle-fill me-1"></i>Agenda Saat Ini:</h6>
          <h5 class="text-white fw-bold mb-1" id="locked-agenda-name">Nama Agenda</h5>
          <small class="text-light opacity-75 d-block" id="locked-agenda-time">Batas Waktu: -</small>
        </div>

        <div class="mb-3">
          <label class="form-label small fw-bold text-info mb-1"><i class="bi bi-person-badge-fill me-1"></i> 1. Ketik Nama / No. Rumah</label>
          <input type="text" id="scanner-warga-input" class="form-control rounded-pill bg-light text-dark fw-bold" list="dl-scanner-warga" placeholder="🔍 Cari Nama / Blok...">
          <datalist id="dl-scanner-warga"></datalist>
        </div>
        
        <!-- MANUAL SELECT (HANYA MUNCUL JIKA LINK TIDAK SPESIFIK) -->
        <div class="mb-3" id="scanner-manual-select-group">
          <label class="form-label small fw-bold text-info mb-1"><i class="bi bi-journal-text me-1"></i> 2. Pilih Agenda Rapat / Regu Kerja</label>
          <input type="text" id="scanner-agenda-input" class="form-control rounded-pill bg-light text-dark fw-bold" list="dl-scanner-agenda" placeholder="🔍 Pilih agenda rapat...">
          <datalist id="dl-scanner-agenda"></datalist>
        </div>
        <input type="hidden" id="scanner-agenda-id-val">
        
        <label class="form-label small fw-bold text-info mb-1" id="label-step-3">Scan Master QR di Posko/Lokasi</label>
        
        <div id="btn-scan-container">
          <button id="btn-start-scan" class="btn btn-info w-100 rounded-pill fw-bold text-white py-3 shadow" onclick="startScanner()">
            <i class="bi bi-camera-fill me-2 fs-5"></i>Buka Kamera & Scan QR
          </button>
        </div>
      </div>

      <div id="scanner-reader-container" style="display:none; max-width: 400px; margin: 0 auto;" class="mb-3">
        <div id="scanner-reader"></div>
        <button class="btn btn-danger btn-sm w-100 rounded-0 py-2 fw-bold" onclick="stopScanner()">Batalkan Scan</button>
      </div>
      <div id="scanner-status" class="alert alert-dark border-secondary mx-auto text-center py-3 mb-3 bg-black text-white" style="max-width: 400px; display:none; border-radius: 14px;"></div>
      <div id="warga-task-view" style="display:none; max-width: 400px; text-align: left;" class="mx-auto card bg-black border-info p-3 shadow-lg text-white rounded-4 mb-4"></div>
      
      <div class="mt-4 pb-3">
        <div class="fw-semibold small text-light opacity-75" style="font-size: 0.75rem;">Aplikasi Presensi RT</div>
        <div class="text-info fw-bold mt-1" style="font-size: 0.75rem;">Powered By Ari GPM • <span onclick="window.location.href = window.location.href.split('?')[0];" class="text-secondary fw-normal" style="cursor: pointer; padding: 5px;">v3.9.8</span></div>
      </div>
    </div>
  </div>
  <!-- ================= END WADAH SCANNER ================= -->

  <!-- Modals -->
  <div class="modal fade" id="modalPermanentQR" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-sm"><div class="modal-content rounded-4 border-0 text-center shadow-lg bg-dark text-white"><div class="modal-header border-0 pb-0 justify-content-center pt-4 relative"><button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3" data-bs-dismiss="modal"></button><h5 class="modal-title fw-bold text-info"><i class="bi bi-qr-code-scan me-2"></i>Master QR Permanen RT</h5></div><div class="modal-body p-4 pt-2"><p class="small text-light opacity-75 mb-3">Cetak QR ini dan tempel di pos ronda.</p><div id="qrcode-box" class="d-flex justify-content-center bg-white p-2 rounded-4 mx-auto" style="width: fit-content;"></div><h6 class="fw-bold mt-3 text-warning" id="qr-master-title">RT 01 / RW 01 - POSKO UTAMA</h6><button class="btn btn-sm btn-light text-primary w-100 rounded-pill fw-bold mt-3" onclick="window.print()"><i class="bi bi-printer me-1"></i>Cetak QR Ini</button></div></div></div></div>
  <div class="modal fade" id="modalPinLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-sm"><div class="modal-content rounded-4 border-0 text-center p-3 shadow-lg"><div class="modal-body p-2"><div class="rounded-circle bg-primary bg-opacity-10 d-inline-flex p-3 mb-2 text-primary-custom"><i class="bi bi-lock-fill fs-3"></i></div><h5 class="fw-bold mb-1 text-dark">Notulen RT</h5><p class="small text-muted mb-3">Masukkan PIN Keamanan Aplikasi</p><form id="form-pin-login" onsubmit="verifyPin(event)"><div class="mb-3"><input type="password" id="input-pin-login" class="form-control text-center rounded-pill py-2" placeholder="••••••••" style="letter-spacing: 4px;" autocomplete="off" required><div id="pin-login-error" class="text-danger small mt-1 fw-bold" style="display:none; font-size: 0.75rem;">PIN Salah!</div></div><button type="submit" class="btn btn-primary-custom text-white w-100 rounded-pill fw-bold py-2 shadow-sm mb-3">Buka Aplikasi</button></form><a href="#" onclick="openModalLupaPin(); return false;" class="small text-primary-custom text-decoration-none fw-semibold"><i class="bi bi-key-fill me-1"></i>Lupa PIN?</a></div></div></div></div>
  <div class="modal fade" id="modalLupaPin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-sm"><div class="modal-content rounded-4 border-0 p-3 shadow-lg"><div class="modal-body p-2"><div class="d-flex justify-content-between align-items-center mb-2"><h5 class="fw-bold text-dark mb-0">Reset PIN</h5><button type="button" class="btn-close shadow-none" onclick="closeModalLupaPin()"></button></div><form id="form-otp-step1" onsubmit="sendOtpEmail(event)"><p class="small text-muted mb-3" style="font-size: 0.8rem;">Masukkan email pemulihan terdaftar.</p><div class="mb-3"><input type="email" id="input-otp-email" class="form-control form-control-sm rounded-pill py-2 text-center" placeholder="contoh@gmail.com" required></div><button type="submit" id="btn-send-otp" class="btn btn-primary-custom text-white w-100 rounded-pill fw-bold py-2 shadow-sm">Kirim OTP</button></form><form id="form-otp-step2" onsubmit="verifyOtpCode(event)" style="display:none;"><p class="small text-success mb-2 fw-semibold">Kode OTP telah dikirim.</p><div class="mb-3"><input type="text" id="input-otp-code" class="form-control form-control-sm rounded-pill text-center fw-bold fs-5" placeholder="123456" maxlength="6" autocomplete="off" required></div><button type="submit" class="btn btn-success w-100 rounded-pill fw-bold py-2 shadow-sm">Verifikasi OTP</button></form><form id="form-otp-step3" onsubmit="resetPinWithOtp(event)" style="display:none;"><div class="mb-2"><input type="password" id="input-new-pin-otp" class="form-control form-control-sm rounded-pill text-center" placeholder="PIN Baru" required></div><div class="mb-3"><input type="password" id="input-confirm-pin-otp" class="form-control form-control-sm rounded-pill text-center" placeholder="Konfirmasi PIN Baru" required></div><button type="submit" class="btn btn-primary-custom text-white w-100 rounded-pill fw-bold py-2 shadow-sm">Simpan PIN Baru</button></form></div></div></div></div>

  <!-- Form Modal Notulen (DENGAN TIMER SCANNER) -->
  <div class="modal fade" id="modalNotulen" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0"><h5 class="modal-title fw-bold" id="modalNotulenTitle">Notulen Musyawarah</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><form id="form-notulen"><input type="hidden" id="notulen-id"><div class="mb-2"><label class="form-label small fw-bold">Agenda</label><input type="text" id="notulen-agenda" class="form-control" required></div><div class="row g-2 mb-2"><div class="col-6"><label class="form-label small fw-bold">Tanggal</label><input type="date" id="notulen-tgl" class="form-control" required></div><div class="col-6"><label class="form-label small fw-bold">Waktu Rapat</label><input type="time" id="notulen-waktu" class="form-control"></div></div><div class="mb-2"><label class="form-label small fw-bold">Tempat</label><input type="text" id="notulen-tempat" class="form-control" list="dl-warga-list"></div><div class="row g-2 mb-2"><div class="col-6"><label class="form-label small fw-bold">Pimpinan</label><input type="text" id="notulen-pimpinan" class="form-control" list="dl-warga-list"></div><div class="col-6"><label class="form-label small fw-bold">Notulis</label><input type="text" id="notulen-notulis" class="form-control" list="dl-warga-list"></div></div><div class="mb-2"><label class="form-label small fw-bold">Uraian</label><textarea id="notulen-pembahasan" class="form-control" rows="3"></textarea></div><div class="mb-3"><label class="form-label small fw-bold">Keputusan</label><textarea id="notulen-keputusan" class="form-control" rows="2"></textarea></div>
  <div class="border rounded p-2 mb-3 bg-light"><h6 class="small fw-bold text-info mb-2"><i class="bi bi-qr-code-scan"></i> Pengaturan Waktu Akses Scanner QR</h6><div class="row g-2"><div class="col-6"><label class="form-label text-muted mb-0" style="font-size:0.7rem;">Mulai Buka</label><input type="datetime-local" id="notulen-scan-start" class="form-control form-control-sm"></div><div class="col-6"><label class="form-label text-muted mb-0" style="font-size:0.7rem;">Tutup Otomatis</label><input type="datetime-local" id="notulen-scan-end" class="form-control form-control-sm"></div></div></div>
  <button type="submit" class="btn btn-primary-custom text-white w-100 btn-rounded shadow-sm">Simpan Notulen</button></form></div></div></div></div>
  
  <!-- Form Modal Kegiatan (DENGAN TIMER SCANNER) -->
  <div class="modal fade" id="modalKegiatan" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0"><h5 class="modal-title fw-bold" id="modalKegiatanTitle">Buat Agenda Kegiatan</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><form id="form-kegiatan"><input type="hidden" id="kegiatan-id"><div class="mb-2"><label class="form-label small fw-bold">Nama Kegiatan</label><input type="text" id="kegiatan-nama" class="form-control" required placeholder="Contoh: Siskamling, Kerja Bakti"></div><div class="row g-2 mb-2"><div class="col-6"><label class="form-label small fw-bold">Tanggal</label><input type="date" id="kegiatan-tgl" class="form-control" required></div><div class="col-6"><label class="form-label small fw-bold">Status</label><select id="kegiatan-status" class="form-select"><option value="Rencana">Rencana</option><option value="Berjalan">Berjalan</option><option value="Selesai">Selesai</option></select></div></div><div class="mb-2"><label class="form-label small fw-bold">Lokasi</label><input type="text" id="kegiatan-lokasi" class="form-control" list="dl-warga-list"></div><div class="mb-3"><label class="form-label small fw-bold">PJ Utama</label><input type="text" id="kegiatan-pj" class="form-control" list="dl-warga-list"></div>
  <div class="border rounded p-2 mb-3 bg-light"><h6 class="small fw-bold text-success mb-2"><i class="bi bi-qr-code-scan"></i> Pengaturan Waktu Akses Scanner QR</h6><div class="row g-2"><div class="col-6"><label class="form-label text-muted mb-0" style="font-size:0.7rem;">Mulai Buka</label><input type="datetime-local" id="kegiatan-scan-start" class="form-control form-control-sm"></div><div class="col-6"><label class="form-label text-muted mb-0" style="font-size:0.7rem;">Tutup Otomatis</label><input type="datetime-local" id="kegiatan-scan-end" class="form-control form-control-sm"></div></div></div>
  <button type="submit" class="btn btn-success w-100 btn-rounded shadow-sm">Simpan Agenda</button></form></div></div></div></div>
  
  <div class="modal fade" id="modalWarga" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0"><h5 class="modal-title fw-bold" id="modalWargaTitle">Data Warga</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><form id="form-warga"><input type="hidden" id="warga-id"><div class="mb-2"><label class="form-label small fw-bold">Nama Lengkap</label><input type="text" id="warga-nama" class="form-control" required></div><div class="row g-2 mb-3"><div class="col-6"><label class="form-label small fw-bold">No. Rumah</label><input type="text" id="warga-rumah" class="form-control"></div><div class="col-6"><label class="form-label small fw-bold">No. WA</label><input type="tel" id="warga-wa" class="form-control"></div></div><button type="submit" class="btn btn-primary-custom text-white w-100 btn-rounded shadow-sm">Simpan Warga</button></form></div></div></div></div>
  
  <div class="modal fade" id="modalRegu" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0 d-flex justify-content-between align-items-center"><div><h5 class="modal-title fw-bold text-info"><i class="bi bi-diagram-3-fill me-2"></i>Pembagian Banyak Regu</h5><small class="text-muted fw-semibold" id="regu-kegiatan-title"></small></div><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><form id="form-regu-item" class="card card-custom p-3 bg-info bg-opacity-10 border-info-subtle mb-3"><div class="d-flex justify-content-between align-items-center mb-2"><h6 class="fw-bold small mb-0 text-info">+ Form Tambah Regu Baru</h6><button type="button" class="btn btn-xs btn-outline-secondary rounded-pill py-0 px-2" style="font-size: 0.7rem;" onclick="resetFormReguBaru()">Reset Form</button></div><input type="hidden" id="regu-id"><div class="mb-2"><input type="text" id="regu-nama-input" class="form-control form-control-sm border-info-subtle" placeholder="Nama Tugas / Kelompok (Contoh: Regu Senen)" required></div><div class="row g-2 mb-2"><div class="col-6"><label class="form-label small fw-bold mb-0 text-muted" style="font-size:0.7rem;">Tanggal</label><input type="date" id="regu-tgl-input" class="form-control form-control-sm border-info-subtle" required></div><div class="col-6"><label class="form-label small fw-bold mb-0 text-muted" style="font-size:0.7rem;">Jam / Waktu</label><input type="time" id="regu-jam-input" class="form-control form-control-sm border-info-subtle" required></div></div><div class="mb-2"><input type="text" id="regu-lokasi-input" class="form-control form-control-sm border-info-subtle" placeholder="Lokasi Target" required></div><div class="mb-2"><input type="text" id="regu-pj-input" class="form-control form-control-sm border-info-subtle" list="dl-warga-list" placeholder="Koordinator Regu" required></div><button type="submit" id="btn-submit-regu" class="btn btn-info text-white btn-sm rounded-pill fw-bold w-100 py-2 shadow-sm">+ Simpan & Tambah Regu Lainnya</button></form><h6 class="fw-bold small text-muted mb-2">Daftar Regu / Kelompok Kerja Tersimpan:</h6><div id="regu-items-container"></div></div></div></div></div>
  <div class="modal fade" id="modalAnggotaRegu" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0"><h5 class="modal-title fw-bold">Pilih Anggota Warga</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body pt-2"><div class="mb-2 fw-bold text-info border-bottom pb-1" id="anggota-regu-title"></div><input type="text" id="anggota-search-warga" class="form-control form-control-sm mb-2 rounded-pill" placeholder="🔍 Cari nama..." onkeyup="filterAnggotaRegu()"><div class="d-flex justify-content-between align-items-center mb-2 px-1"><small class="fw-bold text-muted">Terpilih: <span id="anggota-count" class="text-info">0</span></small><button class="btn btn-xs btn-outline-secondary rounded-pill py-0 px-2" onclick="selectAllAnggota(false)">Reset Pilihan</button></div><div id="anggota-checklist-container" class="border rounded-3 p-2 bg-light" style="max-height: 280px; overflow-y: auto;"></div><button class="btn btn-info w-100 btn-rounded text-white fw-bold mt-3 shadow-sm" onclick="saveAnggotaRegu()">Simpan Data Anggota</button></div></div></div></div>
  <div class="modal fade" id="modalRab" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0 d-flex justify-content-between align-items-center"><div><h5 class="modal-title fw-bold">Rencana Anggaran Biaya (RAB)</h5><small class="text-muted" id="rab-kegiatan-title"></small></div><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><form id="form-rab-item" class="card card-custom p-3 bg-light mb-3"><input type="hidden" id="rab-id"><div class="mb-2"><input type="text" id="rab-nama-kebutuhan" class="form-control form-control-sm" placeholder="Nama Kebutuhan" required></div><div class="row g-2 mb-2"><div class="col-4"><input type="number" id="rab-jumlah" class="form-control form-control-sm" placeholder="Jumlah" required value="1"></div><div class="col-4"><input type="text" id="rab-satuan" class="form-control form-control-sm" placeholder="Satuan"></div><div class="col-4"><input type="number" id="rab-harga" class="form-control form-control-sm" placeholder="Harga Satuan" required></div></div><button type="submit" id="btn-submit-rab" class="btn btn-success text-white btn-sm rounded-pill fw-bold w-100 py-2 shadow-sm">+ Tambah Ke Anggaran</button></form><div class="table-responsive"><table class="table table-sm align-middle table-hover border"><thead class="table-light small"><tr><th>Kebutuhan</th><th class="text-center">Vol/Sat</th><th class="text-end">Harga</th><th class="text-end">Subtotal</th><th class="text-center"><i class="bi bi-gear"></i></th></tr></thead><tbody id="rab-items-container"></tbody><tfoot class="table-light fw-bold"><tr><td colspan="3" class="text-end">Total RAB:</td><td class="text-end text-success" id="rab-grand-total">Rp 0</td><td></td></tr></tfoot></table></div></div></div></div></div>

  <div class="modal fade" id="modalPresensi" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 pb-0 d-flex justify-content-between align-items-center"><h5 class="modal-title fw-bold">Presensi Kehadiran</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body pt-2"><div class="mb-2"><label class="form-label small fw-bold mb-1">Pilih Agenda</label><select id="presensi-agenda-select" class="form-select form-select-sm" onchange="loadPresensiChecklist()"></select></div><div class="d-flex justify-content-between align-items-center my-2"><small class="fw-bold text-muted">Hadir: <span id="presensi-count" class="text-primary-custom fw-bold">0</span> / <span id="presensi-total">0</span> KK</small><div class="d-flex gap-1"><button class="btn btn-xs btn-outline-primary rounded-pill py-0 px-2" style="font-size:0.72rem;" onclick="selectAllPresensi(true)">Pilih Semua</button><button class="btn btn-xs btn-outline-secondary rounded-pill py-0 px-2" style="font-size:0.72rem;" onclick="selectAllPresensi(false)">Reset</button></div></div><input type="text" id="presensi-search-warga" class="form-control form-control-sm mb-2 rounded-pill" placeholder="🔍 Cari nama atau blok..." onkeyup="filterPresensiWarga()"><div id="presensi-checklist-container" class="border rounded-3 p-2 bg-light" style="max-height: 280px; overflow-y: auto;"></div><button class="btn btn-warning w-100 btn-rounded text-dark fw-bold mt-3 shadow-sm" onclick="savePresensi()">Simpan Daftar Hadir Manual</button></div></div></div></div>
  <div class="modal fade" id="modalCetak" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content rounded-4 border-0 shadow-lg"><div class="modal-header border-0 no-print"><h5 class="modal-title fw-bold">Pratinjau Cetak Notulen</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body p-4" id="print-area"></div><div class="modal-footer border-0 no-print"><button class="btn btn-primary-custom text-white rounded-pill px-4 shadow-sm" onclick="window.print()"><i class="bi bi-printer me-2"></i>Cetak PDF</button></div></div></div></div>

  <!-- SCRIPT UTAMA -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    const APP_VERSION = "v3.9.8";
    // ISI DENGAN URL GOOGLE APPS SCRIPT ANDA
    const API_URL = "https://script.google.com/macros/s/AKfycbyjpowaeROtz1hpUonUmJkdrPtW2ZmZvtOLlZ_vyOFjxu_ybcds6R6yzMLb9-j5poD0/exec";
    
    let APP_DATA = JSON.parse(localStorage.getItem('rt_app_data')) || {
      SETTINGS: { nama_rt: "RT 01 / RW 01", desa_alamat: "Desa Sukamaju", pin: "kamu nanyak", email_admin: "" },
      NOTULEN: [], KEGIATAN: [], WARGA: [], KEHADIRAN: [], ANGGARAN: [], REGU: []
    };
    if (!APP_DATA.SETTINGS) APP_DATA.SETTINGS = { nama_rt: "RT 01", desa_alamat: "Sukamaju", pin: "kamu nanyak", email_admin: "" };
    if (!APP_DATA.REGU) APP_DATA.REGU = [];

    let currentRabKegiatanId = null, currentReguKegiatanId = null, currentAnggotaReguId = null;
    let deferredPrompt = null, generatedOtpCode = null, qrcodeObj = null;

    function getAnggotaArr(reguObj) {
      if (!reguObj || !reguObj.anggota) return [];
      if (Array.isArray(reguObj.anggota)) return reguObj.anggota;
      let str = String(reguObj.anggota).trim();
      if (str === '') return [];
      if (str.startsWith('[')) { try { return JSON.parse(str); } catch (e) {} }
      return str.split(',').map(x => x.trim()).filter(x => x !== '');
    }

    function showAlert(title, text, icon = 'info') { Swal.fire({ title: title, text: text, icon: icon, confirmButtonColor: '#0ea5e9', borderRadius: '15px' }); }
    function showToast(title, icon = 'success') { Swal.fire({ toast: true, position: 'top-end', icon: icon, title: title, showConfirmButton: false, timer: 2000 }); }
    function customConfirm(message, callback) { Swal.fire({ title: 'Konfirmasi', text: message, icon: 'warning', showCancelButton: true, confirmButtonColor: '#d33', confirmButtonText: 'Ya', borderRadius: '15px' }).then((r) => { if(r.isConfirmed) callback(); }); }
    function hideModalSafe(modalId) {
      const el = document.getElementById(modalId); if (!el) return;
      const m = bootstrap.Modal.getInstance(el) || bootstrap.Modal.getOrCreateInstance(el); m.hide();
      setTimeout(() => { if (!document.querySelector('.modal.show')) { document.querySelectorAll('.modal-backdrop').forEach(b => b.remove()); document.body.classList.remove('modal-open'); document.body.style = ''; } }, 350);
    }

    /* ========================================================================= */
    /* LOGIKA KEAMANAN & PENGATURAN                                              */
    /* ========================================================================= */
    function showPermanentMasterQR() {
      let container = document.getElementById('qrcode-box');
      container.innerHTML = '';
      let permanentText = `NOTULENRT_MASTER|RT_PERMANEN_QR`;
      qrcodeObj = new QRCode(container, { text: permanentText, width: 250, height: 250, colorDark : "#0284c7", colorLight : "#ffffff", correctLevel : QRCode.CorrectLevel.H });
      new bootstrap.Modal(document.getElementById('modalPermanentQR')).show();
    }

    function shareAutoScannerLink(tipe, idItem) {
      let itemTitle = "";
      if(tipe === 'NOTULEN') { let dt = APP_DATA.NOTULEN.find(x => x.id === idItem); if(dt) itemTitle = "Rapat: " + dt.agenda; }
      else if(tipe === 'KEGIATAN') { let dt = APP_DATA.KEGIATAN.find(x => x.id === idItem); if(dt) itemTitle = "Kegiatan: " + dt.nama_kegiatan; }
      
      let publicUrl = window.location.href.split('?')[0] + `?mode=scanner&agenda_id=${idItem}`;
      let txt = `📢 *LINK ABSEN OTOMATIS:*\n*${itemTitle}*\n\nSilakan klik link di bawah ini untuk absen kehadiran via HP Anda:\n\n🌐 ${publicUrl}\n\n_1. Klik Link di atas_\n_2. Ketik Nama / Blok Rumah_\n_3. Arahkan Kamera ke Master QR di Lokasi (Posko)_\n\n_Aplikasi Notulen RT ${APP_VERSION}_`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`, '_blank');
    }

    function verifyPin(e) { e.preventDefault(); let inputEl = document.getElementById('input-pin-login'); let currentPin = (APP_DATA.SETTINGS && APP_DATA.SETTINGS.pin) ? APP_DATA.SETTINGS.pin.trim().toLowerCase() : "kamu nanyak"; if ((inputEl.value || '').trim().toLowerCase() === currentPin) { sessionStorage.setItem('rt_app_authenticated', 'true'); document.getElementById('pin-login-error').style.display = 'none'; inputEl.value = ''; hideModalSafe('modalPinLogin'); } else { document.getElementById('pin-login-error').style.display = 'block'; } }
    function openModalLupaPin() { hideModalSafe('modalPinLogin'); document.getElementById('form-otp-step1').style.display = 'block'; document.getElementById('form-otp-step2').style.display = 'none'; document.getElementById('form-otp-step3').style.display = 'none'; bootstrap.Modal.getOrCreateInstance(document.getElementById('modalLupaPin')).show(); }
    function closeModalLupaPin() { hideModalSafe('modalLupaPin'); if (!sessionStorage.getItem('rt_app_authenticated')) bootstrap.Modal.getOrCreateInstance(document.getElementById('modalPinLogin')).show(); }
    async function sendOtpEmail(e) { e.preventDefault(); let emailInput = document.getElementById('input-otp-email').value.trim(); let registeredEmail = (APP_DATA.SETTINGS.email_admin || '').trim(); if (!registeredEmail) return showAlert('Error', 'Email pemulihan belum diatur di Pengaturan!', 'error'); if (emailInput.toLowerCase() !== registeredEmail.toLowerCase()) return showAlert('Error', 'Email tidak sesuai data!', 'error'); generatedOtpCode = Math.floor(100000 + Math.random() * 900000).toString(); let btn = document.getElementById('btn-send-otp'); btn.disabled = true; btn.innerHTML = 'Mengirim...'; try { let response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'sendOtp', email: registeredEmail, otp: generatedOtpCode, nama_rt: APP_DATA.SETTINGS.nama_rt }) }); let result = await response.json(); if(result.status === 'success' || result) { document.getElementById('form-otp-step1').style.display = 'none'; document.getElementById('form-otp-step2').style.display = 'block'; showToast('OTP terkirim!'); } } catch(err) { showAlert('Gagal', 'Koneksi internet bermasalah.', 'error'); } finally { btn.disabled = false; btn.innerHTML = 'Kirim OTP'; } }
    function verifyOtpCode(e) { e.preventDefault(); if (document.getElementById('input-otp-code').value.trim() === generatedOtpCode) { document.getElementById('form-otp-step2').style.display = 'none'; document.getElementById('form-otp-step3').style.display = 'block'; } else { showAlert('Error', 'OTP Salah!', 'error'); } }
    function resetPinWithOtp(e) { e.preventDefault(); let np = document.getElementById('input-new-pin-otp').value.trim().toLowerCase(); let cp = document.getElementById('input-confirm-pin-otp').value.trim().toLowerCase(); if(np.length < 4) return showAlert('Perhatian', 'Minimal 4 digit', 'warning'); if(np !== cp) return showAlert('Error', 'Konfirmasi tidak cocok', 'error'); APP_DATA.SETTINGS.pin = np; localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); showAlert('Berhasil!', 'PIN berhasil direset.', 'success'); closeModalLupaPin(); }
    function changePinSecure() { let pl = document.getElementById('setting-pin-lama').value.trim().toLowerCase(); let pb = document.getElementById('setting-pin-baru').value.trim().toLowerCase(); let c = APP_DATA.SETTINGS.pin.trim().toLowerCase(); if(pl !== c) return showAlert('Error', 'PIN Lama Salah', 'error'); if(pb.length < 4) return showAlert('Perhatian', 'Minimal 4 digit', 'warning'); APP_DATA.SETTINGS.pin = pb; localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); document.getElementById('setting-pin-lama').value=''; document.getElementById('setting-pin-baru').value=''; showToast('PIN diubah!'); }
    function saveEmailPemulihan() { let v = document.getElementById('setting-email-admin').value.trim(); if(!v || !v.includes('@')) return showAlert('Perhatian', 'Email tidak valid', 'warning'); APP_DATA.SETTINGS.email_admin = v; localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); showToast('Email disimpan!'); }
    function saveHeaderSettings() { APP_DATA.SETTINGS.nama_rt = document.getElementById('setting-nama-rt').value.trim() || "RT 01"; APP_DATA.SETTINGS.desa_alamat = document.getElementById('setting-desa-alamat').value.trim() || "Desa"; localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); loadHeaderSettingsToUI(); showToast('Identitas disimpan!'); }
    function logoutApp() { customConfirm('Keluar dari aplikasi?', () => { sessionStorage.removeItem('rt_app_authenticated'); localStorage.removeItem('rt_active_tab'); switchTab('dashboard'); bootstrap.Modal.getOrCreateInstance(document.getElementById('modalPinLogin')).show(); }); }

    /* ========================================================================= */
    /* LOGIKA INIT DAN UI                                                        */
    /* ========================================================================= */
    document.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('mode') === 'scanner') {
         document.getElementById('admin-app-container').style.display = 'none';
         document.body.style.backgroundColor = '#0f172a';
         document.getElementById('warga-scanner-app').style.display = 'block';
         let forcedAgendaId = urlParams.get('agenda_id'); // GET THE AUTO-LOCK ID
         initScannerWarga(forcedAgendaId);
         return;
      }
      applyTheme(localStorage.getItem('rt_theme') || 'default');
      loadHeaderSettingsToUI();
      switchTab(localStorage.getItem('rt_active_tab') || 'dashboard', false);
      if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{}); 
      renderUI();
      if (API_URL) syncData();
      if (!sessionStorage.getItem('rt_app_authenticated')) bootstrap.Modal.getOrCreateInstance(document.getElementById('modalPinLogin')).show();
    });

    function applyTheme(t) { document.body.removeAttribute('data-theme'); if(t!=='default') document.body.setAttribute('data-theme', t); localStorage.setItem('rt_theme', t); }
    function switchTab(tabName, saveState = true) {
      document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
      document.querySelectorAll('.nav-item-btn').forEach(btn => btn.classList.remove('active'));
      let sec = document.getElementById('sec-' + tabName); if (sec) sec.style.display = 'block';
      const tabs = ['dashboard', 'notulen', 'kegiatan', 'warga', 'pengaturan'];
      const activeIdx = tabs.indexOf(tabName); if (activeIdx !== -1) document.querySelectorAll('.nav-item-btn')[activeIdx].classList.add('active');
      if (saveState) localStorage.setItem('rt_active_tab', tabName);
    }
    function formatTanggal(dStr) { if (!dStr) return '-'; let s = dStr.toString().split('T')[0]; let p = s.split('-'); return p.length===3 ? `${p[2]}/${p[1]}/${p[0]}` : s; }

    function updateDatalistWarga() { let dl = document.getElementById('dl-warga-list'); if (dl) dl.innerHTML = (APP_DATA.WARGA || []).map(w => `<option value="${w.nama}">${w.nama} (${w.no_rumah || 'Blok -'})</option>`).join(''); }
    function loadHeaderSettingsToUI() { 
      let rt = APP_DATA.SETTINGS.nama_rt || "RT 01"; let ds = APP_DATA.SETTINGS.desa_alamat || "Desa"; 
      document.getElementById('nav-header-subtext').innerText = `${rt} • ${ds}`; 
      document.getElementById('setting-nama-rt').value = rt; 
      document.getElementById('setting-desa-alamat').value = ds; 
      document.getElementById('setting-email-admin').value = APP_DATA.SETTINGS.email_admin || ""; 
    }

    function renderUI() {
      updateDatalistWarga(); loadHeaderSettingsToUI();
      
      let elNotulen = document.getElementById('stat-notulen'); if(elNotulen) elNotulen.innerText = APP_DATA.NOTULEN ? APP_DATA.NOTULEN.length : 0;
      let elKegiatan = document.getElementById('stat-kegiatan'); if(elKegiatan) elKegiatan.innerText = APP_DATA.KEGIATAN ? APP_DATA.KEGIATAN.length : 0;
      let elWarga = document.getElementById('stat-warga'); if(elWarga) elWarga.innerText = APP_DATA.WARGA ? APP_DATA.WARGA.length : 0;

      // PEMBARUAN VISUALISASI DASHBOARD
      let pRapat = document.getElementById('dashboard-recent-presensi-rapat');
      if (pRapat) {
        let allNotulen = APP_DATA.NOTULEN || [];
        if (allNotulen.length === 0) pRapat.innerHTML = `<div class="card card-custom p-3 text-center text-muted small border bg-light">Belum ada data rapat.</div>`;
        else {
          let lastRapat = allNotulen[allNotulen.length - 1];
          let kehadiranList = (APP_DATA.KEHADIRAN || []).filter(k => k && String(k.id_kegiatan) === String(lastRapat.id));
          let totalWarga = APP_DATA.WARGA ? APP_DATA.WARGA.length : 0;
          let persentase = totalWarga === 0 ? 0 : Math.round((kehadiranList.length / totalWarga) * 100);
          
          let listHtml = kehadiranList.length > 0 
            ? `<div class="mt-2 pt-2 border-top border-warning-subtle small"><strong class="text-dark d-block mb-1">Sudah Absen:</strong><div class="d-flex flex-wrap gap-1">${kehadiranList.map(k => `<span class="badge bg-warning text-dark shadow-sm px-2">${k.nama}</span>`).join('')}</div></div>`
            : `<div class="mt-2 pt-2 border-top border-warning-subtle small text-muted">Belum ada absen.</div>`;

          pRapat.innerHTML = `<div class="card card-custom p-3 border-warning border shadow-sm mb-3" style="background-color: #fffaf0;"><div class="d-flex justify-content-between align-items-center mb-1"><h6 class="fw-bold mb-0 text-dark text-truncate" style="max-width: 70%;">${lastRapat.agenda.toUpperCase()}</h6><span class="badge bg-warning text-dark shadow-sm">${persentase}% Hadir</span></div><div class="progress mt-2 border border-warning" style="height: 10px; background-color: #fff;"><div class="progress-bar bg-warning" style="width: ${persentase}%"></div></div><small class="text-muted mt-2 d-block"><b>${kehadiranList.length}</b> dari <b>${totalWarga}</b> KK hadir.</small>${listHtml}</div>`;
        }
      }

      let pKegiatan = document.getElementById('dashboard-recent-presensi-kegiatan');
      if (pKegiatan) {
        let allKegiatan = APP_DATA.KEGIATAN || [];
        // MENAMPILKAN 3 KEGIATAN TERAKHIR (AGAR KERJABAKTI, SISKAMLING DLL SEMUA TAMPIL)
        let activeKegiatans = allKegiatan.slice(-3).reverse(); 
        
        if (activeKegiatans.length === 0) {
            pKegiatan.innerHTML = `<div class="card card-custom p-3 text-center text-muted small border bg-light">Belum ada data agenda.</div>`;
        } else {
            pKegiatan.innerHTML = activeKegiatans.map(keg => {
                let kehadiranList = (APP_DATA.KEHADIRAN || []).filter(k => k && String(k.id_kegiatan) === String(keg.id));
                let totalWarga = APP_DATA.WARGA ? APP_DATA.WARGA.length : 0;
                let persentase = totalWarga === 0 ? 0 : Math.round((kehadiranList.length / totalWarga) * 100);
                
                let listHtml = kehadiranList.length > 0 
                  ? `<div class="mt-2 pt-2 border-top border-success-subtle small"><strong class="text-dark d-block mb-2">Sudah Absen:</strong><div class="d-flex flex-wrap gap-1">${kehadiranList.map(k => {
                       let rL = "";
                       if (k.status_hadir && String(k.status_hadir).includes('Regu:')) {
                          let rName = String(k.status_hadir).split('Regu:')[1].replace(')', '').trim();
                          rL = `<span class="badge bg-success opacity-75 ms-1" style="font-size:0.55rem;">(${rName.toUpperCase()})</span>`;
                       }
                       return `<span class="badge bg-success text-white shadow-sm px-2 py-1 mb-1 d-flex align-items-center">${k.nama}${rL}</span>`;
                     }).join('')}</div></div>`
                  : `<div class="mt-2 pt-2 border-top border-success-subtle small text-muted">Belum ada absen.</div>`;

                return `<div class="card card-custom p-3 border-success border-2 shadow-sm mb-3" style="background-color: #f0fdf4;"><div class="d-flex justify-content-between align-items-center mb-1"><h6 class="fw-bold mb-0 text-dark text-truncate" style="max-width: 70%;">${keg.nama_kegiatan.toUpperCase()}</h6><span class="badge bg-success text-white shadow-sm">${persentase}% Hadir</span></div><div class="progress mt-2 border border-success" style="height: 10px; background-color: #fff;"><div class="progress-bar bg-success" style="width: ${persentase}%"></div></div><small class="text-dark mt-2 d-block fw-semibold"><b>${kehadiranList.length}</b> dari <b>${totalWarga}</b> KK hadir.</small>${listHtml}</div>`;
            }).join('');
        }
      }

      let rNot = document.getElementById('dashboard-recent-notulen');
      if (rNot) {
        if (!APP_DATA.NOTULEN || APP_DATA.NOTULEN.length === 0) rNot.innerHTML = `<div class="text-center text-muted py-3 small">Belum ada notulen.</div>`;
        else {
          let l = APP_DATA.NOTULEN[APP_DATA.NOTULEN.length - 1];
          rNot.innerHTML = `<div class="card card-custom p-3 border-primary border shadow-sm"><h6 class="fw-bold mb-1">${l.agenda.toUpperCase()}</h6><div class="small text-muted mb-2">${formatTanggal(l.tgl_rapat)}</div><p class="small text-secondary mb-2">${l.keputusan || l.pembahasan || '-'}</p><button class="btn btn-sm btn-outline-primary rounded-pill fw-bold w-100" onclick="shareWA('${l.id}')"><i class="bi bi-whatsapp me-1"></i>Share Rangkuman</button></div>`;
        }
      }

      renderNotulenList(); renderKegiatanList(); renderWargaList();
    }

    /* ========================================================================= */
    /* DAFTAR LISTING ADMIN                                                      */
    /* ========================================================================= */
    function renderNotulenList() {
      let q = (document.getElementById('search-notulen')?.value || '').toLowerCase(); let container = document.getElementById('list-notulen-container');
      if(!container) return;
      let filtered = (APP_DATA.NOTULEN || []).filter(x => (x.agenda || '').toLowerCase().includes(q));
      if (filtered.length === 0) return container.innerHTML = `<div class="card p-4 text-center text-muted">Data kosong.</div>`;
      container.innerHTML = [...filtered].reverse().map(item => `
        <div class="card card-custom p-3 mb-2">
          <h6 class="fw-bold mb-0 text-dark">${item.agenda}</h6><small class="text-muted mb-2 d-block">${formatTanggal(item.tgl_rapat)}</small>
          <button class="btn btn-sm btn-info text-white fw-bold w-100 rounded-pill mb-2 shadow-sm" onclick="shareAutoScannerLink('NOTULEN', '${item.id}')"><i class="bi bi-qr-code-scan me-1"></i>Share Link Scanner</button>
          <div class="d-flex gap-2"><button class="btn btn-sm btn-light text-primary flex-fill fw-bold" onclick="shareWA('${item.id}')"><i class="bi bi-whatsapp"></i></button><button class="btn btn-sm btn-light text-secondary" onclick="editNotulen('${item.id}')"><i class="bi bi-pencil"></i></button><button class="btn btn-sm btn-light text-dark" onclick="openPrintModal('${item.id}')"><i class="bi bi-printer"></i></button><button class="btn btn-sm btn-light text-danger" onclick="deleteItem('NOTULEN', '${item.id}')"><i class="bi bi-trash"></i></button></div>
        </div>
      `).join('');
    }

    function renderKegiatanList() {
      let q = (document.getElementById('search-kegiatan')?.value || '').toLowerCase(); let container = document.getElementById('list-kegiatan-container');
      if(!container) return;
      let filtered = (APP_DATA.KEGIATAN || []).filter(x => (x.nama_kegiatan || '').toLowerCase().includes(q));
      if (filtered.length === 0) return container.innerHTML = `<div class="card p-4 text-center text-muted">Data kosong.</div>`;
      container.innerHTML = [...filtered].reverse().map(item => {
        let rabItems = (APP_DATA.ANGGARAN || []).filter(a => a && String(a.id_kegiatan) === String(item.id));
        let reguItems = (APP_DATA.REGU || []).filter(r => r && String(r.id_kegiatan) === String(item.id));
        let totalRab = rabItems.reduce((acc, curr) => acc + ((Number(curr.jumlah)||0) * (Number(curr.harga_satuan)||0)), 0);
        return `
          <div class="card card-custom p-3 mb-2">
            <div class="d-flex justify-content-between align-items-center mb-1"><h6 class="fw-bold mb-0">${item.nama_kegiatan}</h6><span class="badge bg-primary">${item.status}</span></div>
            <small class="text-muted d-block mb-2">${formatTanggal(item.tgl)}</small>
            <div class="d-flex justify-content-between align-items-center bg-light rounded-3 p-2 mb-2">
              <small class="fw-bold text-success mb-0">RAB: Rp ${totalRab.toLocaleString('id-ID')}</small>
              <div class="d-flex gap-1">
                <button class="btn btn-xs btn-outline-success fw-bold py-0 px-2 rounded-pill" onclick="openModalRab('${item.id}')"><i class="bi bi-calculator me-1"></i>(${rabItems.length})</button>
                <button class="btn btn-xs btn-outline-info fw-bold py-0 px-2 rounded-pill" onclick="openModalRegu('${item.id}')"><i class="bi bi-diagram-3-fill me-1"></i>Regu (${reguItems.length})</button>
              </div>
            </div>
            <button class="btn btn-sm btn-info text-white fw-bold w-100 rounded-pill mb-2 shadow-sm" onclick="shareAutoScannerLink('KEGIATAN', '${item.id}')"><i class="bi bi-qr-code-scan me-1"></i>Share Link Scanner</button>
            <div class="d-flex gap-2"><button class="btn btn-sm btn-success flex-fill fw-bold rounded-pill" onclick="shareAgendaWA('${item.id}')"><i class="bi bi-whatsapp"></i> Info Info</button><button class="btn btn-sm btn-light border text-secondary" onclick="editKegiatan('${item.id}')"><i class="bi bi-pencil"></i></button><button class="btn btn-sm btn-light border text-danger" onclick="deleteItem('KEGIATAN', '${item.id}')"><i class="bi bi-trash"></i></button></div>
          </div>
        `;
      }).join('');
    }

    function renderWargaList() {
      let q = (document.getElementById('search-warga')?.value || '').toLowerCase(); let container = document.getElementById('list-warga-container');
      if(!container) return;
      let filtered = (APP_DATA.WARGA || []).filter(x => (x.nama || '').toLowerCase().includes(q));
      container.innerHTML = filtered.map(item => `<div class="card card-custom p-3 mb-2 d-flex flex-row justify-content-between align-items-center"><div><h6 class="fw-bold mb-0">${item.nama}</h6><small class="text-muted">Blok: ${item.no_rumah||'-'}</small></div><div class="d-flex gap-1"><button class="btn btn-sm btn-light text-secondary" onclick="editWarga('${item.id}')"><i class="bi bi-pencil"></i></button><button class="btn btn-sm btn-light text-danger" onclick="deleteItem('WARGA', '${item.id}')"><i class="bi bi-trash"></i></button></div></div>`).join('');
    }

    /* ========================================================================= */
    /* LOGIKA FORM SUBMIT ADMIN (DENGAN BATAS WAKTU)                             */
    /* ========================================================================= */
    function openFormNotulen() { document.getElementById('form-notulen').reset(); document.getElementById('notulen-id').value = ''; document.getElementById('notulen-tgl').value = new Date().toISOString().split('T')[0]; new bootstrap.Modal(document.getElementById('modalNotulen')).show(); }
    function editNotulen(id) { let item = APP_DATA.NOTULEN.find(x => String(x.id) === String(id)); if (!item) return; document.getElementById('notulen-id').value = item.id; document.getElementById('notulen-agenda').value = item.agenda || ''; document.getElementById('notulen-tgl').value = item.tgl_rapat ? item.tgl_rapat.split('T')[0] : ''; document.getElementById('notulen-waktu').value = item.waktu || ''; document.getElementById('notulen-tempat').value = item.tempat || ''; document.getElementById('notulen-pimpinan').value = item.pimpinan || ''; document.getElementById('notulen-notulis').value = item.notulis || ''; document.getElementById('notulen-pembahasan').value = item.pembahasan || ''; document.getElementById('notulen-keputusan').value = item.keputusan || ''; document.getElementById('notulen-scan-start').value = item.scanner_start || ''; document.getElementById('notulen-scan-end').value = item.scanner_end || ''; new bootstrap.Modal(document.getElementById('modalNotulen')).show(); }
    document.getElementById('form-notulen').addEventListener('submit', function(e) { e.preventDefault(); saveLocalAndSync('NOTULEN', { id: document.getElementById('notulen-id').value, agenda: document.getElementById('notulen-agenda').value, tgl_rapat: document.getElementById('notulen-tgl').value, waktu: document.getElementById('notulen-waktu').value, tempat: document.getElementById('notulen-tempat').value, pimpinan: document.getElementById('notulen-pimpinan').value, notulis: document.getElementById('notulen-notulis').value, pembahasan: document.getElementById('notulen-pembahasan').value, keputusan: document.getElementById('notulen-keputusan').value, scanner_start: document.getElementById('notulen-scan-start').value, scanner_end: document.getElementById('notulen-scan-end').value }); hideModalSafe('modalNotulen'); showToast('Notulen Disimpan'); });

    function openFormKegiatan() { document.getElementById('form-kegiatan').reset(); document.getElementById('kegiatan-id').value = ''; document.getElementById('kegiatan-tgl').value = new Date().toISOString().split('T')[0]; new bootstrap.Modal(document.getElementById('modalKegiatan')).show(); }
    function editKegiatan(id) { let item = APP_DATA.KEGIATAN.find(x => String(x.id) === String(id)); if (!item) return; document.getElementById('kegiatan-id').value = item.id; document.getElementById('kegiatan-nama').value = item.nama_kegiatan || ''; document.getElementById('kegiatan-tgl').value = item.tgl ? item.tgl.split('T')[0] : ''; document.getElementById('kegiatan-status').value = item.status || 'Rencana'; document.getElementById('kegiatan-lokasi').value = item.lokasi || ''; document.getElementById('kegiatan-pj').value = item.penanggung_jawab || ''; document.getElementById('kegiatan-scan-start').value = item.scanner_start || ''; document.getElementById('kegiatan-scan-end').value = item.scanner_end || ''; new bootstrap.Modal(document.getElementById('modalKegiatan')).show(); }
    document.getElementById('form-kegiatan').addEventListener('submit', function(e) { e.preventDefault(); saveLocalAndSync('KEGIATAN', { id: document.getElementById('kegiatan-id').value, nama_kegiatan: document.getElementById('kegiatan-nama').value, tgl: document.getElementById('kegiatan-tgl').value, status: document.getElementById('kegiatan-status').value, lokasi: document.getElementById('kegiatan-lokasi').value, penanggung_jawab: document.getElementById('kegiatan-pj').value, scanner_start: document.getElementById('kegiatan-scan-start').value, scanner_end: document.getElementById('kegiatan-scan-end').value }); hideModalSafe('modalKegiatan'); showToast('Agenda Disimpan'); });

    function openFormWarga() { document.getElementById('form-warga').reset(); document.getElementById('warga-id').value = ''; new bootstrap.Modal(document.getElementById('modalWarga')).show(); }
    function editWarga(id) { let item = APP_DATA.WARGA.find(x => String(x.id) === String(id)); if (!item) return; document.getElementById('warga-id').value = item.id; document.getElementById('warga-nama').value = item.nama || ''; document.getElementById('warga-rumah').value = item.no_rumah || ''; document.getElementById('warga-wa').value = item.no_wa || ''; new bootstrap.Modal(document.getElementById('modalWarga')).show(); }
    document.getElementById('form-warga').addEventListener('submit', function(e) { e.preventDefault(); saveLocalAndSync('WARGA', { id: document.getElementById('warga-id').value, nama: document.getElementById('warga-nama').value, no_rumah: document.getElementById('warga-rumah').value, no_wa: document.getElementById('warga-wa').value }); hideModalSafe('modalWarga'); showToast('Warga Disimpan'); });

    /* ========================================================================= */
    /* LOGIKA REGU, RAB, SYNC DLL                                                */
    /* ========================================================================= */
    function openModalRegu(idKegiatan) { currentReguKegiatanId = idKegiatan; let keg = APP_DATA.KEGIATAN.find(x => String(x.id) === String(idKegiatan)); document.getElementById('regu-kegiatan-title').innerText = keg ? keg.nama_kegiatan : ''; resetFormReguBaru(); renderReguList(); new bootstrap.Modal(document.getElementById('modalRegu')).show(); }
    function resetFormReguBaru() { document.getElementById('form-regu-item').reset(); document.getElementById('regu-id').value = ''; document.getElementById('btn-submit-regu').innerText = '+ Simpan Regu'; let keg = APP_DATA.KEGIATAN.find(x => String(x.id) === String(currentReguKegiatanId)); document.getElementById('regu-tgl-input').value = keg && keg.tgl ? keg.tgl.split('T')[0] : new Date().toISOString().split('T')[0]; document.getElementById('regu-jam-input').value = "08:00"; }
    function renderReguList() { let items = (APP_DATA.REGU || []).filter(r => r && String(r.id_kegiatan) === String(currentReguKegiatanId)); let container = document.getElementById('regu-items-container'); if (items.length === 0) { container.innerHTML = `<div class="text-center text-muted small py-3">Belum ada kelompok.</div>`; return; } container.innerHTML = items.map(item => { let arrAnggota = getAnggotaArr(item); let anggotaListHtml = arrAnggota.length > 0 ? `<div class="d-flex flex-wrap gap-1 mt-2 mb-2 p-2 bg-light rounded-3 border border-info-subtle"><small class="w-100 fw-bold text-info mb-1" style="font-size:0.7rem;">Anggota:</small>${arrAnggota.map(a => `<span class="badge bg-white text-dark border shadow-sm">${a}</span>`).join('')}</div>` : `<div class="mt-2 mb-2 p-2 bg-light rounded-3 border border-secondary text-muted small fst-italic">Belum ada anggota.</div>`; return `<div class="card border border-info mb-3 shadow-sm rounded-4"><div class="card-body p-3"><div class="d-flex justify-content-between align-items-start mb-2 border-bottom border-info-subtle pb-2"><h6 class="fw-bold mb-0 text-info"><i class="bi bi-boxes me-2"></i>${item.nama_regu}</h6><div><button type="button" class="btn btn-sm btn-link text-secondary p-0 me-2" onclick="editReguItem('${item.id}')"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-sm btn-link text-danger p-0" onclick="deleteItem('REGU', '${item.id}')"><i class="bi bi-trash"></i></button></div></div><div class="row g-2 small text-muted mb-1"><div class="col-6"><i class="bi bi-calendar me-1"></i>${formatTanggal(item.tgl)}</div><div class="col-6"><i class="bi bi-clock me-1"></i>${item.jam}</div><div class="col-12 fw-bold text-dark"><i class="bi bi-person-badge me-1 text-info"></i>PJ: ${item.koordinator}</div></div>${anggotaListHtml}<button type="button" class="btn btn-sm btn-outline-info w-100 rounded-pill fw-bold" onclick="openModalAnggotaRegu('${item.id}')"><i class="bi bi-people-fill me-1"></i>Kelola Anggota (${arrAnggota.length})</button></div></div>`; }).join(''); }
    function editReguItem(idRegu) { let item = APP_DATA.REGU.find(r => String(r.id) === String(idRegu)); if(!item) return; document.getElementById('regu-id').value = item.id; document.getElementById('regu-nama-input').value = item.nama_regu || ''; document.getElementById('regu-tgl-input').value = item.tgl ? item.tgl.split('T')[0] : ''; document.getElementById('regu-jam-input').value = item.jam || '08:00'; document.getElementById('regu-lokasi-input').value = item.lokasi || ''; document.getElementById('regu-pj-input').value = item.koordinator || ''; document.getElementById('btn-submit-regu').innerText = 'Update Regu'; }
    document.getElementById('form-regu-item').addEventListener('submit', function(e) { e.preventDefault(); let rId = document.getElementById('regu-id').value; let existingAnggota = []; if (rId) { let exItem = APP_DATA.REGU.find(r => String(r.id) === String(rId)); if (exItem) existingAnggota = getAnggotaArr(exItem); } let newItem = { id: rId, id_kegiatan: currentReguKegiatanId, nama_regu: document.getElementById('regu-nama-input').value, tgl: document.getElementById('regu-tgl-input').value, jam: document.getElementById('regu-jam-input').value || '08:00', lokasi: document.getElementById('regu-lokasi-input').value, koordinator: document.getElementById('regu-pj-input').value, anggota: existingAnggota }; saveLocalAndSync('REGU', newItem); resetFormReguBaru(); renderReguList(); showToast('Regu disimpan!'); });
    function openModalAnggotaRegu(idRegu) { currentAnggotaReguId = idRegu; let regu = APP_DATA.REGU.find(r => r.id === idRegu); let currArr = getAnggotaArr(regu); document.getElementById('anggota-regu-title').innerText = `Target: ${regu.nama_regu}`; document.getElementById('anggota-search-warga').value = ''; let container = document.getElementById('anggota-checklist-container'); if (!APP_DATA.WARGA || APP_DATA.WARGA.length === 0) { container.innerHTML = `<div class="text-center text-muted small py-2">Data warga kosong.</div>`; document.getElementById('anggota-count').innerText = '0'; } else { let allReguInAgenda = (APP_DATA.REGU || []).filter(r => r && String(r.id_kegiatan) === String(currentReguKegiatanId)); let html = '<div class="row g-1">'; APP_DATA.WARGA.forEach(w => { let isChecked = currArr.includes(w.nama); let inOtherRegu = false; let otherReguName = ''; allReguInAgenda.forEach(otherR => { if (otherR.id !== idRegu && getAnggotaArr(otherR).includes(w.nama)) { inOtherRegu = true; otherReguName = otherR.nama_regu; } }); if (inOtherRegu) { html += `<div class="col-6 anggota-item" data-search="${(w.nama).toLowerCase()}"><div class="form-check p-1 px-2 border rounded bg-light d-flex flex-column mb-1 shadow-sm opacity-50"><div class="d-flex align-items-center gap-1"><input class="form-check-input ms-0 me-1" type="checkbox" disabled><label class="form-check-label small text-truncate fw-semibold text-muted" style="font-size:0.75rem;">${w.nama}</label></div><small class="text-danger" style="font-size: 0.6rem;">Masuk ${otherReguName}</small></div></div>`; } else { html += `<div class="col-6 anggota-item" data-search="${(w.nama).toLowerCase()}"><div class="form-check p-1 px-2 border rounded bg-white d-flex align-items-center gap-1 mb-1 shadow-sm"><input class="form-check-input ms-0 me-1 valid-cb" type="checkbox" value="${w.nama}" id="cb-regu-${w.id}" ${isChecked ? 'checked' : ''} onchange="updateAnggotaCount()"><label class="form-check-label small text-truncate fw-semibold" for="cb-regu-${w.id}" style="font-size:0.75rem;">${w.nama}</label></div></div>`; } }); html += '</div>'; container.innerHTML = html; updateAnggotaCount(); } new bootstrap.Modal(document.getElementById('modalAnggotaRegu')).show(); }
    function filterAnggotaRegu() { let q = (document.getElementById('anggota-search-warga').value || '').toLowerCase(); document.querySelectorAll('.anggota-item').forEach(item => { item.style.display = (item.getAttribute('data-search') || '').includes(q) ? 'block' : 'none'; }); }
    function updateAnggotaCount() { document.getElementById('anggota-count').innerText = document.querySelectorAll('#anggota-checklist-container input[type="checkbox"]:checked').length; }
    function selectAllAnggota(status) { document.querySelectorAll('#anggota-checklist-container .anggota-item').forEach(item => { if (item.style.display !== 'none') { let chk = item.querySelector('input[type="checkbox"].valid-cb'); if (chk && !chk.disabled) chk.checked = status; } }); updateAnggotaCount(); }
    function saveAnggotaRegu() { let regu = APP_DATA.REGU.find(r => r.id === currentAnggotaReguId); if(!regu) return; regu.anggota = Array.from(document.querySelectorAll('#anggota-checklist-container input[type="checkbox"].valid-cb:checked')).map(cb => cb.value); saveLocalAndSync('REGU', regu); hideModalSafe('modalAnggotaRegu'); renderReguList(); showToast('Anggota disave!'); }

    function openModalRab(idKegiatan) { currentRabKegiatanId = idKegiatan; document.getElementById('form-rab-item').reset(); document.getElementById('rab-id').value = ''; renderRabList(); new bootstrap.Modal(document.getElementById('modalRab')).show(); }
    function renderRabList() { let items = (APP_DATA.ANGGARAN || []).filter(a => a && String(a.id_kegiatan) === String(currentRabKegiatanId)); let container = document.getElementById('rab-items-container'); let grandTotal = 0; if (items.length === 0) { container.innerHTML = `<tr><td colspan="5" class="text-center text-muted small py-3">Belum ada rincian RAB.</td></tr>`; } else { container.innerHTML = items.map(item => { let qty = Number(item.jumlah) || 0; let harga = Number(item.harga_satuan) || 0; let tot = qty * harga; grandTotal += tot; return `<tr><td class="small fw-semibold">${item.nama_kebutuhan}</td><td class="small text-center">${qty}</td><td class="small text-end">Rp ${harga.toLocaleString('id-ID')}</td><td class="small text-end fw-bold text-success">Rp ${tot.toLocaleString('id-ID')}</td><td class="text-center"><button type="button" class="btn btn-sm btn-link text-secondary p-0 me-2" onclick="editRabItem('${item.id}')"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-sm btn-link text-danger p-0" onclick="deleteItem('ANGGARAN', '${item.id}')"><i class="bi bi-trash"></i></button></td></tr>`; }).join(''); } document.getElementById('rab-grand-total').innerText = 'Rp ' + grandTotal.toLocaleString('id-ID'); }
    function editRabItem(idItem) { let item = APP_DATA.ANGGARAN.find(a => String(a.id) === String(idItem)); if(!item) return; document.getElementById('rab-id').value = item.id; document.getElementById('rab-nama-kebutuhan').value = item.nama_kebutuhan || ''; document.getElementById('rab-jumlah').value = item.jumlah || ''; document.getElementById('rab-satuan').value = item.satuan || ''; document.getElementById('rab-harga').value = item.harga_satuan || ''; document.getElementById('btn-submit-rab').innerText = 'Update Anggaran'; }
    document.getElementById('form-rab-item').addEventListener('submit', function(e) { e.preventDefault(); saveLocalAndSync('ANGGARAN', { id: document.getElementById('rab-id').value, id_kegiatan: currentRabKegiatanId, nama_kebutuhan: document.getElementById('rab-nama-kebutuhan').value, jumlah: document.getElementById('rab-jumlah').value, satuan: document.getElementById('rab-satuan').value, harga_satuan: document.getElementById('rab-harga').value }); document.getElementById('form-rab-item').reset(); renderRabList(); showToast('RAB Disimpan'); });

    function shareWA(idNotulen) { let item = APP_DATA.NOTULEN.find(x => String(x.id) === String(idNotulen)); if(!item) return; let rt = APP_DATA.SETTINGS.nama_rt || "RT 01 / RW 01"; let desa = APP_DATA.SETTINGS.desa_alamat || "Desa Sukamaju"; let kehadiran = (APP_DATA.KEHADIRAN || []).filter(k => String(k.id_kegiatan) === String(idNotulen)).map(k => k.nama); let txt = `📢 *HASIL MUSYAWARAH RT*\n🏛️ *${rt} - ${desa}*\n━━━━━━━━━━━━━━━━━━━━━\n📌 *Agenda:* ${item.agenda}\n📅 *Tgl:* ${formatTanggal(item.tgl_rapat)} ${item.waktu ? '(' + item.waktu + ')' : ''}\n📍 *Tempat:* ${item.tempat || '-'}\n👤 *Pimpinan:* ${item.pimpinan || '-'}\n✍️ *Notulis:* ${item.notulis || '-'}\n━━━━━━━━━━━━━━━━━━━━━\n\n👥 *DAFTAR HADIR (${kehadiran.length} KK):*\n`; if (kehadiran.length > 0) txt += `${kehadiran.map((n, i) => `  ${i+1}. ${n}`).join('\n')}\n\n`; else txt += `_Belum ada presensi_\n\n`; txt += `💡 *PEMBAHASAN:*\n${item.pembahasan || '-'}\n\n✅ *KEPUTUSAN FINAL:* \n${item.keputusan || '-'}\n\n_Dibuat via Aplikasi Notulen RT (${APP_VERSION}) | Powered By Ari GPM_`; window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`, '_blank'); }
    function shareAgendaWA(idKegiatan) { let keg = APP_DATA.KEGIATAN.find(x => String(x.id) === String(idKegiatan)); if (!keg) return; let rt = APP_DATA.SETTINGS.nama_rt || "RT 01 / RW 01"; let desa = APP_DATA.SETTINGS.desa_alamat || "Desa Sukamaju"; let txt = `📋 *PERENCANAAN AGENDA & REGU KERJA*\n🏛️ *${rt} - ${desa}*\n━━━━━━━━━━━━━━━━━━━━━\n📌 *Agenda Utama:* ${keg.nama_kegiatan}\n📅 *Tanggal:* ${formatTanggal(keg.tgl)}\n📍 *Lokasi:* ${keg.lokasi || '-'}\n👤 *PJ Utama:* ${keg.penanggung_jawab || '-'}\n━━━━━━━━━━━━━━━━━━━━━\n\n👥 *PEMBAGIAN KELOMPOK KERJA:*\n\n`; let reguItems = (APP_DATA.REGU || []).filter(r => r && String(r.id_kegiatan) === String(idKegiatan)); if (reguItems.length > 0) { reguItems.forEach((r, idx) => { let arrAnggota = getAnggotaArr(r); txt += `*${idx+1}. ${r.nama_regu}*\n   • Waktu: ${formatTanggal(r.tgl)} (Jam ${r.jam})\n   • Target Lokasi: ${r.lokasi}\n   • Koordinator Regu: ${r.koordinator}\n   • Anggota Warga (${arrAnggota.length} Orang):\n`; if (arrAnggota.length > 0) { arrAnggota.forEach((a, i) => { txt += `      ${i+1}) ${a}\n`; }); } else { txt += `      _(Belum ada anggota)_\n`; } txt += `\n`; }); } else { txt += `_Belum ada pembagian kelompok kerja._\n\n`; } txt += `━━━━━━━━━━━━━━━━━━━━━\n\n`; let rabItems = (APP_DATA.ANGGARAN || []).filter(a => a && String(a.id_kegiatan) === String(idKegiatan)); if (rabItems.length > 0) { let grandTotal = 0; txt += `💰 *RENCANA ANGGARAN BIAYA (RAB):*\n\n`; rabItems.forEach((item, idx) => { let qty = Number(item.jumlah) || 0; let harga = Number(item.harga_satuan) || 0; let tot = qty * harga; grandTotal += tot; let satuanTxt = item.satuan ? ` ${item.satuan}` : ''; txt += `🔹 *${idx+1}. ${item.nama_kebutuhan}*\n   ${qty}${satuanTxt} x Rp ${harga.toLocaleString('id-ID')} = *Rp ${tot.toLocaleString('id-ID')}*\n`; }); txt += `\n💸 *TOTAL RAB: Rp ${grandTotal.toLocaleString('id-ID')}*\n\n━━━━━━━━━━━━━━━━━━━━━\n`; } txt += `_Aplikasi Notulen RT ${APP_VERSION} | Powered By Ari GPM_`; window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`, '_blank'); }
    function openPrintModal(idNotulen) { let item = APP_DATA.NOTULEN.find(x => String(x.id) === String(idNotulen)); if (!item) return; let rt = APP_DATA.SETTINGS.nama_rt || "RT 01 / RW 01"; let desa = APP_DATA.SETTINGS.desa_alamat || "Desa Sukamaju"; let kehadiran = (APP_DATA.KEHADIRAN || []).filter(k => String(k.id_kegiatan) === String(idNotulen)).map(k => k.nama); document.getElementById('print-area').innerHTML = `<div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"><div class="d-flex align-items-center gap-3"><img src="icon-192.png" alt="Logo" style="width: 50px; height: 50px; object-fit: contain;" onerror="this.style.display='none'"><div><h4 class="fw-bold mb-0 text-dark">RUKUN TETANGGA (${rt})</h4><p class="mb-0 text-muted small fw-semibold">${desa.toUpperCase()}</p></div></div><div class="text-end"><span class="badge bg-light text-dark border px-2 py-1">Versi: ${APP_VERSION}</span></div></div><table class="table table-sm table-borderless mb-3 small"><tr><td width="130" class="fw-bold">Agenda</td><td>: ${item.agenda}</td></tr><tr><td class="fw-bold">Tanggal</td><td>: ${formatTanggal(item.tgl_rapat)} ${item.waktu ? '| ' + item.waktu : ''}</td></tr><tr><td class="fw-bold">Tempat</td><td>: ${item.tempat || '-'}</td></tr><tr><td class="fw-bold">Pimpinan Rapat</td><td>: ${item.pimpinan || '-'}</td></tr><tr><td class="fw-bold">Notulis</td><td>: ${item.notulis || '-'}</td></tr></table><div class="mb-3"><h6 class="fw-bold border-bottom pb-1">I. PEMBAHASAN & URAIAN</h6><p class="small text-secondary" style="white-space: pre-line;">${item.pembahasan || '-'}</p></div><div class="mb-3"><h6 class="fw-bold border-bottom pb-1">II. KEPUTUSAN MUSYAWARAH</h6><p class="small text-secondary" style="white-space: pre-line;">${item.keputusan || '-'}</p></div><div class="mb-4"><h6 class="fw-bold border-bottom pb-1">III. DAFTAR HADIR (${kehadiran.length} Org)</h6><p class="small text-secondary">${kehadiran.length > 0 ? kehadiran.join(', ') : 'Belum ada presensi'}</p></div><div class="row text-center mt-5 small"><div class="col-6">Pimpinan Rapat,<br><br><br><b>(${item.pimpinan || 'Ketua RT'})</b></div><div class="col-6">Notulis,<br><br><br><b>(${item.notulis || 'Sekretaris'})</b></div></div>`; new bootstrap.Modal(document.getElementById('modalCetak')).show(); }

    function openModalPresensi() { let select = document.getElementById('presensi-agenda-select'); let notulenOpts = (APP_DATA.NOTULEN || []).map(n => `<option value="${n.id}">[Rapat] ${n.agenda}</option>`); let kegiatanOpts = (APP_DATA.KEGIATAN || []).map(k => `<option value="${k.id}">[Agenda] ${k.nama_kegiatan}</option>`); select.innerHTML = [...notulenOpts, ...kegiatanOpts].join(''); if ((APP_DATA.NOTULEN || []).length === 0 && (APP_DATA.KEGIATAN || []).length === 0) return showAlert('Perhatian', 'Buat agenda terlebih dahulu.', 'warning'); loadPresensiChecklist(); new bootstrap.Modal(document.getElementById('modalPresensi')).show(); }
    function loadPresensiChecklist() { let selId = document.getElementById('presensi-agenda-select').value; let exist = (APP_DATA.KEHADIRAN || []).filter(k => k && String(k.id_kegiatan) === String(selId)).map(k => k.nama); let allReguInAgenda = (APP_DATA.REGU || []).filter(r => r && String(r.id_kegiatan) === String(selId)); let container = document.getElementById('presensi-checklist-container'); if (!APP_DATA.WARGA || APP_DATA.WARGA.length === 0) { container.innerHTML = `<div class="text-center small py-2">Data warga kosong.</div>`; return; } document.getElementById('presensi-total').innerText = APP_DATA.WARGA.length; document.getElementById('presensi-count').innerText = exist.length; let html = `<div class="row g-1">`; APP_DATA.WARGA.forEach(w => { let isCh = exist.includes(w.nama); let reguLabel = ""; let wargaRegu = allReguInAgenda.find(r => getAnggotaArr(r).includes(w.nama)); if(wargaRegu) reguLabel = `<span class="badge bg-info text-white ms-1 shadow-sm" style="font-size:0.6rem;">${wargaRegu.nama_regu}</span>`; html += `<div class="col-6 presensi-item" data-search="${(w.nama).toLowerCase()}"><div class="form-check p-1 px-2 border rounded bg-white d-flex align-items-center gap-1 mb-1"><input class="form-check-input ms-0 me-1" type="checkbox" value="${w.nama}" id="chk-${w.id}" ${isCh ? 'checked' : ''} onchange="updatePresensiCount()"><label class="form-check-label small text-truncate fw-semibold" for="chk-${w.id}" style="font-size:0.75rem;">${w.nama} ${reguLabel}</label></div></div>`; }); html += `</div>`; container.innerHTML = html; }
    function filterPresensiWarga() { let q = (document.getElementById('presensi-search-warga').value || '').toLowerCase(); document.querySelectorAll('.presensi-item').forEach(item => { item.style.display = (item.getAttribute('data-search') || '').includes(q) ? 'block' : 'none'; }); }
    function updatePresensiCount() { document.getElementById('presensi-count').innerText = document.querySelectorAll('#presensi-checklist-container input[type="checkbox"]:checked').length; }
    function selectAllPresensi(st) { document.querySelectorAll('#presensi-checklist-container .presensi-item').forEach(item => { if (item.style.display !== 'none') { let chk = item.querySelector('input[type="checkbox"]'); if (chk) chk.checked = st; } }); updatePresensiCount(); }
    async function savePresensi() { let selId = document.getElementById('presensi-agenda-select').value; let allReguInAgenda = (APP_DATA.REGU || []).filter(r => r && String(r.id_kegiatan) === String(selId)); APP_DATA.KEHADIRAN = (APP_DATA.KEHADIRAN || []).filter(k => k && String(k.id_kegiatan) !== String(selId)); document.querySelectorAll('#presensi-checklist-container input[type="checkbox"]:checked').forEach(chk => { let namaW = chk.value; let reguWargaIni = allReguInAgenda.find(r => getAnggotaArr(r).includes(namaW)); let statusHadirDynamic = reguWargaIni ? `Hadir (Regu: ${reguWargaIni.nama_regu})` : 'Hadir'; saveLocalAndSync('KEHADIRAN', { id_kegiatan: selId, nama: namaW, status_hadir: statusHadirDynamic, waktu: new Date().toLocaleTimeString('id-ID') }); }); localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); hideModalSafe('modalPresensi'); showToast('Daftar Hadir Disimpan!'); }

    async function saveLocalAndSync(table, data) {
      if (!APP_DATA[table]) APP_DATA[table] = [];
      if (!data.id || data.id === '') { data.id = table.substring(0,3) + '-' + new Date().getTime() + Math.floor(Math.random()*1000); APP_DATA[table].push(data); } 
      else { let idx = APP_DATA[table].findIndex(x => String(x.id) === String(data.id)); if (idx !== -1) APP_DATA[table][idx] = { ...APP_DATA[table][idx], ...data }; else APP_DATA[table].push(data); }
      localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); renderUI(); 
      if (table === 'REGU') renderReguList(); if (table === 'ANGGARAN') renderRabList();
      if (API_URL) { try { fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'save', table: table, data: data }) }).catch(e => console.log('Offline')); } catch (e) {} }
    }
    
    function deleteItem(table, id) { customConfirm('Hapus data ini?', async () => { if (APP_DATA[table]) { APP_DATA[table] = APP_DATA[table].filter(x => x && String(x.id) !== String(id)); localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); renderUI(); if (table === 'ANGGARAN') renderRabList(); if (table === 'REGU') renderReguList(); showToast('Dihapus'); } if (API_URL) { try { fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'delete', table: table, data: { id: id } }) }).catch(e=>console.log(e)); } catch(e){} } }); }
    async function syncData() { if (!API_URL) return; let sb = document.getElementById('sync-status'); if (sb) { sb.className = 'badge bg-warning text-dark d-none'; sb.innerText = 'Sync...'; } try { let res = await fetch(API_URL + '?action=sync'); let json = await res.json(); if (json.status === 'success') { let c = APP_DATA.SETTINGS; APP_DATA = json.data; if (!APP_DATA.SETTINGS) APP_DATA.SETTINGS = c; localStorage.setItem('rt_app_data', JSON.stringify(APP_DATA)); renderUI(); if (sb) { sb.className = 'badge bg-success d-none'; sb.innerText = 'Sync OK'; } } } catch (err) { if (sb) { sb.className = 'badge bg-secondary d-none'; sb.innerText = 'Offline'; } } }
    
    /* ========================================================================= */
    /* LOGIKA SCANNER WARGA (AUTO-LOCK, ANTI-DUPLICATE SPECIFIC, TIME LIMIT)     */
    /* ========================================================================= */
    let html5QrcodeScanner = null, scannerAppData = { NOTULEN: [], KEGIATAN: [], WARGA: [], KEHADIRAN: [], REGU: [] }, scannerApiUrl = ""; 
    
    async function initScannerWarga(forcedAgendaId) {
      // 1. Cek Sesi Tersimpan (Anti Duplicate yang sekarang lebih spesifik)
      let sessionScanner = localStorage.getItem('rt_scanner_session');
      if (sessionScanner) {
         let sData = JSON.parse(sessionScanner);
         
         // PERUBAHAN: Hanya kunci layar jika warga membuka LINK agenda yang sama.
         // Jika warga membuka link agenda baru (contoh kemarin siskamling, sekarang kerjabakti) hapus sesi lama.
         if (!forcedAgendaId || String(sData.idAgenda) === String(forcedAgendaId)) {
             document.getElementById('scanner-warga-input').value = sData.namaWarga;
             document.getElementById('scanner-warga-input').disabled = true; 
             document.getElementById('scanner-manual-select-group').style.display = 'none';
             document.getElementById('label-step-3').innerText = "3. Sesi Absen Selesai";
             document.getElementById('btn-scan-container').innerHTML = `<div class="alert alert-dark border-success bg-black text-center mb-0"><i class="bi bi-check-circle-fill text-success fs-2 mb-2 d-block"></i><h6 class="text-white fw-bold">Sesi Anda Tersimpan</h6><small class="text-muted d-block mb-3">Sdr/i ${sData.namaWarga} sudah absen di agenda ini.</small><button class="btn btn-outline-info w-100 rounded-pill fw-bold" onclick="showDirectTaskView('${sData.idAgenda}', '${sData.namaWarga}')">Lihat Detail Penugasan</button></div>`;
             
             scannerApiUrl = API_URL; try { let res = await fetch(scannerApiUrl + '?action=sync'); let json = await res.json(); if (json.status === 'success') scannerAppData = json.data; } catch(e){} return; 
         } else {
             // Jika beda agenda, warga diizinkan absen di agenda baru ini
             localStorage.removeItem('rt_scanner_session');
         }
      }

      // 2. Load Data dari Server
      let dlWarga = document.getElementById('dl-scanner-warga'), dlAgenda = document.getElementById('dl-scanner-agenda'), inAgenda = document.getElementById('scanner-agenda-input'), hidAgendaId = document.getElementById('scanner-agenda-id-val');
      try {
        scannerApiUrl = API_URL; let res = await fetch(scannerApiUrl + '?action=sync'); let json = await res.json();
        if (json.status === 'success') {
          scannerAppData = json.data;
          document.getElementById('scanner-rt-header').innerText = `${scannerAppData.SETTINGS?.nama_rt || "RT"} - ${scannerAppData.SETTINGS?.desa_alamat || ""}`;
          if (dlWarga) dlWarga.innerHTML = (scannerAppData.WARGA || []).map(x => `<option value="${x.nama} (${x.no_rumah || '-'})"></option>`).join('');
          
          let combined = [...(scannerAppData.NOTULEN || []).map(n => ({ id: n.id, title: n.agenda, date: n.tgl_rapat, start: n.scanner_start, end: n.scanner_end })), ...(scannerAppData.KEGIATAN || []).map(k => ({ id: k.id, title: k.nama_kegiatan, date: k.tgl, start: k.scanner_start, end: k.scanner_end }))].reverse();
          
          // 3. Logika Jika Dibuka dari Link Khusus (Auto Lock)
          if (forcedAgendaId) {
            let activeAgenda = combined.find(i => i.id === forcedAgendaId);
            if (activeAgenda) {
              // Cek Timer / Batas Waktu
              let now = new Date();
              let isLockedOut = false;
              let timeText = "Bebas Waktu (Manual)";
              
              if (activeAgenda.start && activeAgenda.end) {
                let startDt = new Date(activeAgenda.start);
                let endDt = new Date(activeAgenda.end);
                timeText = `${startDt.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})} s/d ${endDt.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})}`;
                if (now < startDt || now > endDt) isLockedOut = true;
              } else if (activeAgenda.start) {
                 let startDt = new Date(activeAgenda.start);
                 timeText = `Mulai: ${startDt.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})}`;
                 if (now < startDt) isLockedOut = true;
              } else if (activeAgenda.end) {
                 let endDt = new Date(activeAgenda.end);
                 timeText = `Tutup: ${endDt.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})}`;
                 if (now > endDt) isLockedOut = true;
              }

              document.getElementById('scanner-manual-select-group').style.display = 'none'; // Sembunyikan pilihan
              hidAgendaId.value = activeAgenda.id; // Kunci ID
              
              let lockBox = document.getElementById('scanner-locked-info');
              lockBox.style.display = 'block';
              document.getElementById('locked-agenda-name').innerText = activeAgenda.title.toUpperCase();
              document.getElementById('locked-agenda-time').innerText = "Waktu Absen: " + timeText;

              if (isLockedOut) {
                 lockBox.className = "mb-3 p-3 bg-danger bg-opacity-10 border border-danger rounded-3 text-center";
                 lockBox.innerHTML += `<div class="mt-2 text-danger fw-bold"><i class="bi bi-x-circle-fill"></i> WAKTU ABSEN DITUTUP / BELUM DIMULAI</div>`;
                 document.getElementById('scanner-warga-input').disabled = true;
                 document.getElementById('btn-start-scan').disabled = true;
                 document.getElementById('btn-start-scan').className = "btn btn-secondary w-100 rounded-pill fw-bold text-white py-3 shadow";
                 return;
              }
            } else {
               showAlert('Error', 'Agenda tidak ditemukan di server.', 'error');
            }
          } else {
             // Jika link umum, tampilkan pilihan manual
             if (dlAgenda) dlAgenda.innerHTML = combined.map(i => `<option value="${(i.title||'').toUpperCase()} | ${formatTanggal(i.date)}"></option>`).join('');
             if(inAgenda) { inAgenda.addEventListener('input', function() { let v = this.value; let m = combined.find(i => `${(i.title||'').toUpperCase()} | ${formatTanggal(i.date)}` === v) || combined.find(i => v.includes((i.title||'').toUpperCase())); if (m) hidAgendaId.value = m.id; }); }
          }
        }
      } catch(e) { document.getElementById('scanner-status').style.display = 'block'; document.getElementById('scanner-status').innerHTML = `<span class='text-danger small fw-bold'>❌ Error: Tidak dapat memuat data.</span>`; }
    }

    function showDirectTaskView(idAgenda, namaWarga) { document.getElementById('scanner-status').style.display = 'none'; renderWargaTaskDetail(idAgenda, namaWarga); }
    
    async function startScanner() {
      let inWargaVal = document.getElementById('scanner-warga-input').value.trim(); let namaWarga = inWargaVal.split('(')[0].trim();
      let idAgenda = document.getElementById('scanner-agenda-id-val').value;
      if (!namaWarga || !idAgenda) return showAlert('Perhatian', 'Nama dan Agenda harus lengkap!', 'warning');
      
      document.getElementById('scanner-status').style.display = 'none'; document.getElementById('warga-task-view').style.display = 'none';
      document.getElementById('scanner-reader-container').style.display = 'block'; document.getElementById('btn-scan-container').style.display = 'none';
      document.getElementById('scanner-main-card').style.display = 'none'; // Bersihkan UI saat scan

      if(!html5QrcodeScanner) html5QrcodeScanner = new Html5Qrcode("scanner-reader"); 
      try { await html5QrcodeScanner.start({ facingMode: "environment" }, { fps: 15, qrbox: { width: 250, height: 250 } }, (d) => { stopScannerNative(); processScanResult(d, namaWarga, idAgenda); }, (e) => {}); } catch(err) { try { await html5QrcodeScanner.start({ facingMode: "user" }, { fps: 15, qrbox: { width: 250, height: 250 } }, (d) => { stopScannerNative(); processScanResult(d, namaWarga, idAgenda); }, (e) => {}); } catch(e2) { showAlert('Error', 'Kamera tidak dapat diakses.', 'error'); stopScanner(); } }
    }
    
    function stopScannerNative() { try { if(html5QrcodeScanner) html5QrcodeScanner.stop().catch(e=>{}); } catch(e){} }
    function stopScanner() { stopScannerNative(); document.getElementById('scanner-reader-container').style.display = 'none'; document.getElementById('btn-scan-container').style.display = 'block'; document.getElementById('scanner-main-card').style.display = 'block'; }

    async function processScanResult(qrText, namaWarga, idAgenda) {
      let parts = qrText.split('|'); let statusBox = document.getElementById('scanner-status'); statusBox.style.display = 'block';
      if (parts.length !== 2 || parts[0] !== 'NOTULENRT_MASTER') { statusBox.innerHTML = "<span class='text-danger fw-bold'>❌ QR Tidak Valid! Harus QR Posko.</span>"; document.getElementById('btn-scan-container').style.display = 'block'; document.getElementById('scanner-main-card').style.display = 'block'; return; }
      statusBox.innerHTML = "<div class='spinner-border spinner-border-sm text-info me-2'></div> Memeriksa dan Menyimpan Data...";
      try {
        let checkRes = await fetch(scannerApiUrl + '?action=sync'); let checkJson = await checkRes.json();
        if(checkJson.status === 'success') scannerAppData = checkJson.data;
        let existingHadir = (scannerAppData.KEHADIRAN || []).find(h => h && String(h.id_kegiatan) === String(idAgenda) && String(h.nama).toLowerCase() === String(namaWarga).toLowerCase());
        if (existingHadir) {
          statusBox.className = "alert alert-dark border-warning mx-auto text-center py-3 bg-black text-white"; statusBox.innerHTML = `<h6 class='fw-bold text-warning mb-1'><i class='bi bi-exclamation-triangle-fill'></i> Anda Sudah Absen Sebelumnya!</h6><button class='btn btn-sm btn-outline-light mt-2 w-100 rounded-pill' onclick='location.reload()'>Tutup</button>`;
          localStorage.setItem('rt_scanner_session', JSON.stringify({namaWarga: namaWarga, idAgenda: idAgenda})); renderWargaTaskDetail(idAgenda, namaWarga); return;
        }
        
        let allRegu = (scannerAppData.REGU || []);
        let reguWargaIni = allRegu.find(r => r && String(r.id_kegiatan) === String(idAgenda) && getAnggotaArr(r).includes(namaWarga));
        let statusHadirDynamic = reguWargaIni ? `Hadir Scan QR (Regu: ${reguWargaIni.nama_regu})` : 'Hadir Scan QR';
        
        await fetch(scannerApiUrl, { method: 'POST', body: JSON.stringify({ action: 'save', table: 'KEHADIRAN', data: { id_kegiatan: idAgenda, nama: namaWarga, status_hadir: statusHadirDynamic, waktu: new Date().toLocaleTimeString('id-ID') } }) });
        statusBox.className = "alert alert-dark border-success mx-auto text-center py-3 bg-black text-white"; statusBox.innerHTML = `<h5 class='fw-bold mb-1 text-success'><i class='bi bi-check-circle-fill'></i> Presensi Berhasil Disimpan!</h5>`;
        localStorage.setItem('rt_scanner_session', JSON.stringify({namaWarga: namaWarga, idAgenda: idAgenda})); renderWargaTaskDetail(idAgenda, namaWarga);
      } catch(e) { statusBox.innerHTML = "<span class='text-danger fw-bold'>❌ Gagal mengirim. Cek Sinyal Internet.</span>"; document.getElementById('btn-scan-container').style.display = 'block'; document.getElementById('scanner-main-card').style.display = 'block'; }
    }

    function renderWargaTaskDetail(idAgenda, namaWarga) {
      let aItem = (scannerAppData.NOTULEN || []).find(n => n && String(n.id) === String(idAgenda)) || (scannerAppData.KEGIATAN || []).find(k => k && String(k.id) === String(idAgenda));
      let myRegu = (scannerAppData.REGU || []).find(r => r && String(r.id_kegiatan) === String(idAgenda) && getAnggotaArr(r).includes(namaWarga));
      let taskBox = document.getElementById('warga-task-view'); taskBox.style.display = 'block';
      let html = `<h6 class='fw-bold text-info border-bottom border-secondary pb-2 mb-2'><i class='bi bi-clipboard2-check-fill me-1'></i> Bukti Kehadiran & Tugas</h6>`;
      if(aItem) { html += `<p class='small mb-1'><b>Agenda:</b> ${aItem.agenda || aItem.nama_kegiatan}</p><p class='small mb-1'><b>Tanggal:</b> ${formatTanggal(aItem.tgl_rapat || aItem.tgl)}</p>`; }
      html += `<div class='bg-dark p-2 rounded-3 mt-2 border border-secondary'><small class='text-warning fw-bold d-block mb-1'>📌 Penugasan Kelompok/Regu:</small>`;
      if(myRegu) { html += `<p class='small mb-1 text-white'><b>Nama Regu:</b> ${myRegu.nama_regu}</p><p class='small mb-1 text-white'><b>Koordinator:</b> ${myRegu.koordinator}</p><p class='small mb-0 text-white'><b>Kumpul/Target:</b> Pukul ${myRegu.jam} di ${myRegu.lokasi}</p>`; } 
      else { html += `<p class='small mb-0 text-muted'>Tidak ada pembagian grup khusus. Ikuti arahan pengurus pusat.</p>`; }
      html += `</div><button class='btn btn-outline-light btn-sm w-100 rounded-pill mt-3 fw-bold' onclick='location.reload()'>Selesai & Keluar</button>`; taskBox.innerHTML = html;
    }
  </script>
</body>
</html>
