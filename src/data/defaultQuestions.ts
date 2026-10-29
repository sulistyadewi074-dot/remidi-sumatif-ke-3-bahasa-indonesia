import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Teks Berita - Unsur ADiKSiMBa (5W+1H)',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan teks berita berikut dengan saksama!\n\n"Denpasar – Sebanyak 350 siswa sekolah dasar dari berbagai kabupaten di Bali antusias mengikuti Festival Literasi Anak 2026 yang diselenggarakan oleh Dinas Pendidikan pada hari Sabtu, 14 Maret 2026, di Gedung Ksirarnawa, Taman Budaya Art Center Denpasar. Acara ini bertujuan untuk menumbuhkan kecintaan membaca sejak dini melalui lomba mendongeng, cipta puisi, dan pembuatan komik strip edukatif."\n\nBerdasarkan kutipan teks berita di atas, informasi yang menjawab unsur pertanyaan "Kapan" dan "Di mana" peristiwa tersebut berlangsung adalah...',
    imageSvg: `<svg viewBox="0 0 420 180" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="180" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Icon Berita / Koran -->
      <rect x="25" y="25" width="100" height="130" rx="6" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
      <rect x="35" y="38" width="80" height="12" rx="2" fill="#3b82f6"/>
      <rect x="35" y="58" width="38" height="28" rx="2" fill="#93c5fd"/>
      <line x1="80" y1="62" x2="108" y2="62" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="80" y1="72" x2="108" y2="72" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="80" y1="82" x2="108" y2="82" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="35" y1="96" x2="108" y2="96" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <line x1="35" y1="106" x2="108" y2="106" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <line x1="35" y1="116" x2="108" y2="116" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <line x1="35" y1="126" x2="90" y2="126" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <line x1="35" y1="136" x2="75" y2="136" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <!-- Bagan 5W + 1H (ADiKSiMBa) -->
      <rect x="145" y="25" width="250" height="130" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <text x="270" y="48" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Formula Berita ADiKSiMBa</text>
      <text x="160" y="72" font-size="10" font-weight="bold" fill="#2563eb">A</text><text x="175" y="72" font-size="9.5" fill="#334155">: Apa (What) - Festival Literasi</text>
      <text x="160" y="90" font-size="10" font-weight="bold" fill="#2563eb">Di</text><text x="178" y="90" font-size="9.5" fill="#334155">: Di mana (Where) - Art Center</text>
      <text x="160" y="108" font-size="10" font-weight="bold" fill="#2563eb">K</text><text x="175" y="108" font-size="9.5" fill="#334155">: Kapan (When) - Sabtu, 14 Maret</text>
      <text x="160" y="126" font-size="10" font-weight="bold" fill="#2563eb">Si</text><text x="175" y="126" font-size="9.5" fill="#334155">: Siapa (Who) - 350 Siswa SD</text>
      <text x="160" y="144" font-size="10" font-weight="bold" fill="#2563eb">M-Ba</text><text x="192" y="144" font-size="9.5" fill="#334155">: Mengapa &amp; Bagaimana</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Sabtu, 14 Maret 2026 dan Gedung Ksirarnawa, Taman Budaya Art Center Denpasar' },
      { id: 'B', text: 'Senin, 14 Maret 2026 dan Halaman Kantor Dinas Pendidikan Provinsi Bali' },
      { id: 'C', text: 'Sabtu, 14 Maret 2026 dan Ruang Kelas SD Negeri 3 Loloan Timur' },
      { id: 'D', text: 'Minggu, 15 Maret 2026 dan Lapangan Umum Puputan Badung Denpasar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Unsur "Kapan" (When) merujuk pada waktu pelaksanaan kegiatan, yaitu "hari Sabtu, 14 Maret 2026", sedangkan unsur "Di mana" (Where) merujuk pada tempat kejadian, yaitu di "Gedung Ksirarnawa, Taman Budaya Art Center Denpasar".',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Teks Berita - Struktur Piramida Terbalik',
    difficulty: 'Mudah',
    text: 'Perhatikan bagan struktur penulisan teks berita berikut!\n\nTeks berita umumnya disusun dengan pola "Piramida Terbalik", yaitu informasi yang paling penting diletakkan di bagian paling atas, diikuti penjelasan terperinci, dan ditutup dengan rincian pendukung.\n\nFungsi utama dari bagian "Kepala Berita" (Lead/Teras Berita) dalam teks berita adalah...',
    imageSvg: `<svg viewBox="0 0 420 180" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="180" fill="#f8fafc" rx="12" stroke="#e2e8f0"/>
      <!-- Segitiga Piramida Terbalik -->
      <polygon points="40,25 240,25 210,65 70,65" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="140" y="49" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1. KEPALA BERITA (LEAD)</text>
      
      <polygon points="70,67 210,67 180,115 100,115" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/>
      <text x="140" y="95" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">2. TUBUH BERITA (BODY)</text>
      
      <polygon points="100,117 180,117 150,155 130,155" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="140" y="139" font-size="9" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3. EKOR</text>

      <!-- Keterangan Sebelah Kanan -->
      <rect x="255" y="25" width="145" height="135" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="265" y="46" font-size="10" font-weight="bold" fill="#1e3a8a">Tingkat Kepentingan:</text>
      <text x="265" y="68" font-size="9" fill="#1d4ed8" font-weight="semibold">• Sangat Penting:</text>
      <text x="272" y="82" font-size="8.5" fill="#475569">Memuat intisari 5W+1H</text>
      <text x="265" y="102" font-size="9" fill="#2563eb" font-weight="semibold">• Penting:</text>
      <text x="272" y="116" font-size="8.5" fill="#475569">Kronologi &amp; kutipan</text>
      <text x="265" y="136" font-size="9" fill="#64748b" font-weight="semibold">• Kurang Penting:</text>
      <text x="272" y="150" font-size="8.5" fill="#475569">Informasi pelengkap</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Memuat inti sari informasi pokok terpenting yang merangkum sebagian besar unsur ADiKSiMBa di awal paragraf' },
      { id: 'B', text: 'Menyajikan profil riwayat hidup wartawan yang meliput berita secara lengkap dan mendalam' },
      { id: 'C', text: 'Memuat kesimpulan fiktif dan kritik subjektif penulis terhadap narasumber berita' },
      { id: 'D', text: 'Menempatkan informasi tambahan yang tidak terlalu penting agar pembaca merasa penasaran' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kepala Berita (Lead/Teras Berita) berada di puncak piramida terbalik dan berfungsi merangkum fakta utama (unsur ADiKSiMBa) yang paling penting agar pembaca langsung memahami inti peristiwa dalam hitungan detik.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Teks Laporan Hasil Observasi (LHO) - Struktur & Sifat Faktual',
    difficulty: 'Mudah',
    text: 'Bacalah penggalan teks berikut!\n\n"Hutan mangrove memiliki sistem perakaran yang unik berupa akar napas (pneumatofor) yang menjulang ke atas permukaan lumpur. Akar ini berfungsi menyerap oksigen langsung dari udara saat air laut pasang surut. Selain itu, daun mangrove memiliki kelenjar khusus yang mampu mengeluarkan kelebihan kadar garam dari air laut yang diserapnya."\n\nDalam struktur Teks Laporan Hasil Observasi (LHO), penggalan teks di atas termasuk ke dalam bagian...',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
      <!-- Struktur Teks LHO -->
      <rect x="25" y="30" width="110" height="110" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="80" y="55" font-size="10.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Pernyataan</text>
      <text x="80" y="70" font-size="10.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Umum</text>
      <text x="80" y="95" font-size="8.5" fill="#0c4a6e" text-anchor="middle">Definisi &amp;</text>
      <text x="80" y="110" font-size="8.5" fill="#0c4a6e" text-anchor="middle">Klasifikasi Objek</text>

      <rect x="155" y="20" width="110" height="130" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="210" y="50" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Deskripsi</text>
      <text x="210" y="66" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Bagian</text>
      <circle cx="210" cy="90" r="14" fill="#22c55e"/>
      <path d="M204 90 L208 94 L216 86" stroke="#ffffff" stroke-width="2.5" fill="none"/>
      <text x="210" y="122" font-size="8.5" font-weight="bold" fill="#14532d" text-anchor="middle">Ciri fisik, bagian</text>
      <text x="210" y="136" font-size="8.5" font-weight="bold" fill="#14532d" text-anchor="middle">&amp; fungsi organ</text>

      <rect x="285" y="30" width="110" height="110" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="340" y="55" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">Deskripsi</text>
      <text x="340" y="70" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">Manfaat</text>
      <text x="340" y="95" font-size="8.5" fill="#78350f" text-anchor="middle">Kegunaan bagi</text>
      <text x="340" y="110" font-size="8.5" fill="#78350f" text-anchor="middle">lingkungan / manusia</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Pernyataan Umum (Klasifikasi dasar objek)' },
      { id: 'B', text: 'Deskripsi Bagian (Menguraikan ciri morfologi akar dan daun secara ilmiah)' },
      { id: 'C', text: 'Deskripsi Manfaat (Menjelaskan fungsi ekonomi hutan mangrove)' },
      { id: 'D', text: 'Penegasan Opini Subjektif Pembaca' },
    ],
    correctAnswer: 'B',
    explanation:
      'Penggalan teks tersebut menjelaskan ciri-ciri fisik bagian tubuh tumbuhan mangrove secara rinci (akar napas dan kelenjar daun), sehingga termasuk ke dalam struktur "Deskripsi Bagian" dalam teks Laporan Hasil Observasi (LHO).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Teks Eksplanasi - Hubungan Kausalitas (Sebab-Akibat)',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram alur fenomena alam berikut!\n\nTeks eksplanasi adalah teks yang menjelaskan proses terjadinya fenomena alam atau sosial dengan prinsip sebab-akibat (kausalitas).\n\n"Pelangi terbentuk karena sinar matahari mengenai tetesan air hujan di atmosfer. Cahaya matahari tersebut dibiaskan dan dipantulkan oleh butir-butir air, sehingga spektrum warnanya terurai menjadi deretan warna merah, jingga, kuning, hijau, biru, nila, dan ungu."\n\nKata penghubung (konjungsi) yang menyatakan hubungan sebab-akibat pada teks eksplanasi di atas adalah...',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
      <!-- Sinar Matahari -->
      <circle cx="50" cy="85" r="24" fill="#fbbf24"/>
      <text x="50" y="90" font-size="9" font-weight="bold" fill="#78350f" text-anchor="middle">Matahari</text>
      <line x1="78" y1="85" x2="155" y2="85" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 2"/>
      <!-- Butir Air Hujan -->
      <circle cx="185" cy="85" r="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="185" y="82" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Tetes</text>
      <text x="185" y="94" font-size="8.5" fill="#0284c7" text-anchor="middle">Air Hujan</text>
      <!-- Pembiasan Spektrum Pelangi -->
      <path d="M213 80 Q280 60 360 45" stroke="#ef4444" stroke-width="3" fill="none"/>
      <path d="M213 82 Q280 65 360 55" stroke="#f97316" stroke-width="3" fill="none"/>
      <path d="M213 84 Q280 70 360 65" stroke="#eab308" stroke-width="3" fill="none"/>
      <path d="M213 86 Q280 75 360 75" stroke="#22c55e" stroke-width="3" fill="none"/>
      <path d="M213 88 Q280 80 360 85" stroke="#06b6d4" stroke-width="3" fill="none"/>
      <path d="M213 90 Q280 85 360 95" stroke="#3b82f6" stroke-width="3" fill="none"/>
      <path d="M213 92 Q280 90 360 105" stroke="#8b5cf6" stroke-width="3" fill="none"/>
      <rect x="270" y="125" width="130" height="32" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
      <text x="335" y="145" font-size="9.5" font-weight="bold" fill="#334155" text-anchor="middle">Spektrum Cahaya Terurai</text>
      <!-- Label Hubungan Sebab-Akibat -->
      <text x="130" y="40" font-size="10.5" font-weight="bold" fill="#1d4ed8">Penyebab (Sebab)</text>
      <text x="310" y="30" font-size="10.5" font-weight="bold" fill="#15803d">Dampak (Akibat)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'karena dan sehingga' },
      { id: 'B', text: 'dan serta atau' },
      { id: 'C', text: 'ketika dan sebelum' },
      { id: 'D', text: 'walaupun dan meskipun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Konjungsi kausalitas (sebab-akibat) yang digunakan adalah "karena" (menyatakan sebab terjadinya pembiaskan) dan "sehingga" (menyatakan akibat berupa terurainya spektrum warna).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Teks Prosedur - Ciri Bahasa & Kalimat Imperatif',
    difficulty: 'Mudah',
    text: 'Cermati kutipan petunjuk cara membuat pupuk kompos sederhana berikut!\n\n1) Siapkan wadah ember bekas yang telah dilubangi pada bagian dasarnya.\n2) Cacah daun-daun kering dan sisa sayuran menjadi ukuran kecil.\n3) Masukkan cacahan sampah organik secara bergantian dengan tanah gembur.\n4) Siramlah dengan sedikit air cucian beras agar proses pembusukan berlangsung cepat.\n5) Tutuplah ember dengan rapat dan simpan di tempat yang teduh selama 4 minggu.\n\nCiri khas kalimat yang dominan digunakan pada langkah-langkah di atas adalah...',
    options: [
      { id: 'A', text: 'Kalimat berita yang berisi pengumuman peristiwa di masyarakat' },
      { id: 'B', text: 'Kalimat tanya retoris yang tidak memerlukan jawaban langsung' },
      { id: 'C', text: 'Kalimat imperatif (perintah/instruksi) yang ditandai partikel -lah dan kata kerja tindakan' },
      { id: 'D', text: 'Kalimat pengandaian yang menggambarkan angan-angan penulis' },
    ],
    correctAnswer: 'C',
    explanation:
      'Teks prosedur menggunakan kalimat imperatif (perintah atau petunjuk kerja) seperti "Siapkan", "Cacah", "Masukkan", "Siramlah", dan "Tutuplah" yang mengarahkan pembaca melakukan tindakan nyata secara bertahap.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Teks Eksposisi - Membedakan Fakta dan Opini',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan paragraf eksposisi berikut dengan cermat!\n\n"(1) Membaca buku selama 20 menit setiap hari sangat bermanfaat bagi kecerdasan anak. (2) Berdasarkan data Perpustakaan Nasional tahun 2024, siswa yang rutin membaca memiliki penguasaan kosakata 40% lebih banyak dibanding yang tidak membaca. (3) Menuruku, buku cerita fiksi bergambar adalah buku paling menarik dan menyenangkan di seluruh dunia. (4) Oleh karena itu, kita hendaknya mengagendakan waktu berkunjung ke perpustakaan sekolah setiap pekan."\n\nKalimat yang berisi FAKTA pada kutipan teks eksposisi di atas ditandai oleh nomor...',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat (2) merupakan fakta karena memuat data empiris dan sumber yang dapat diverifikasi kebenarannya ("Berdasarkan data Perpustakaan Nasional tahun 2024... penguasaan kosakata 40% lebih banyak"). Sementara kalimat (3) adalah opini ("Menurutku... paling menarik").',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Teks Puisi - Majas Personifikasi & Makna Kata',
    difficulty: 'Mudah',
    text: 'Perhatikan bait puisi anak berikut!\n\n"Deru ombak berkejaran di bibir pantai,\nMenyapa butir pasir putih yang ramah,\nAngin sore berbisik lembut di telingaku,\nMengajak pulang mentari yang mulai lelah."\n\nLarik puisi yang mengandung majas personifikasi (menggambarkan benda mati bersikap seperti manusia) adalah...',
    options: [
      { id: 'A', text: '"Menyapa butir pasir putih yang ramah" dan "Angin sore berbisik lembut"' },
      { id: 'B', text: '"Deru ombak berkejaran" dan "putih yang ramah" saja' },
      { id: 'C', text: '"Mulai lelah" dan "di telingaku"' },
      { id: 'D', text: '"Pulang mentari" tanpa unsur lain' },
    ],
    correctAnswer: 'A',
    explanation:
      'Majas personifikasi melukiskan benda mati seolah-olah bernyawa dan berperilaku seperti manusia. Pada puisi di atas, ombak dapat "menyapa", pasir dapat "ramah", angin dapat "berbisik", dan mentari merasa "lelah".',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Teks Cerita Pendek (Cerpen) - Unsur Tokoh & Penokohan',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan cerita pendek berikut!\n\n"Meskipun keringat membasahi dahinya dan jam istirahat hampir usai, Bima tetap sabar memandu Dika menyelesaikan soal latihan matematika yang sulit. Bima tidak mengeluh sedikit pun, padahal perutnya sendiri sudah lapar. Baginya, melihat senyum kelegaan temannya adalah kebahagiaan yang tak ternilai."\n\nBerdasarkan kutipan cerpen di atas, watak tokoh Bima dan cara pengarang menggambarkannya adalah...',
    options: [
      { id: 'A', text: 'Pemarah dan sombong, digambarkan melalui monolog batin Dika' },
      { id: 'B', text: 'Iri hati dan perhitungan, digambarkan lewat dialog langsung antar tokoh' },
      { id: 'C', text: 'Sabar, tulus, dan setia kawan, digambarkan melalui tindakan dan sikap tokoh' },
      { id: 'D', text: 'Cerdas tetapi malas, digambarkan lewat setting tempat di ruang kelas' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bima memiliki watak sabar, tulus, dan setia kawan, sebagaimana dibuktikan oleh sikapnya yang tetap sabar mengajari Dika tanpa mengeluh meskipun ia sendiri lelah dan lapar.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Teks Cerita Rakyat - Jenis-Jenis Cerita Tradisional',
    difficulty: 'Mudah',
    text: 'Bacalah ringkasan cerita rakyat berikut!\n\n"Dahulu kala, Pulau Jawa dan Pulau Bali menyatu dalam satu daratan. Karena kenakalan putranya Manik Angkeran yang gemar berjudi, Danghyang Sidhimantra membuat goresan tongkat di atas tanah untuk memisahkan daratan tersebut. Dari goresan tongkat itu keluarlah air bah yang sangat deras hingga terbentuklah selat yang kini kita kenal sebagai Selat Bali."\n\nCerita rakyat yang mengisahkan asal-usul terjadinya suatu tempat atau bentang alam seperti Selat Bali tersebut digolongkan sebagai...',
    options: [
      { id: 'A', text: 'Fabel (cerita binatang)' },
      { id: 'B', text: 'Legenda (cerita asal-usul tempat)' },
      { id: 'C', text: 'Mite (cerita dewa-dewi dan hal gaib)' },
      { id: 'D', text: 'Cerita jenaka (lelucon masyarakat)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Legenda adalah cerita rakyat yang menceritakan tentang asal-usul terjadinya suatu tempat, bentang alam, danau, gunung, atau daerah geografis tertentu di Nusantara.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Teks Sastra Bergambar - Konvensi Visual Komik',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar panel komik edukatif berikut!\n\nDalam sebuah komik, pengarang menggunakan panel gambar berurutan serta ragam bentuk balon untuk menyampaikan cerita.\n\nBerdasarkan gambar, balon bergelombang atau berbentuk awan kecil berderet (Nomor 2) berfungsi untuk menggambarkan...',
    imageSvg: `<svg viewBox="0 0 420 180" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="180" fill="#f8fafc" rx="12" stroke="#e2e8f0"/>
      <!-- Panel 1: Balon Bicara Biasa -->
      <rect x="20" y="25" width="180" height="135" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <rect x="35" y="40" width="150" height="40" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="60,80 50,92 72,80" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="110" y="58" font-size="9" font-weight="bold" fill="#1e3a8a" text-anchor="middle">"Ayo kita ke perpustakaan!"</text>
      <text x="110" y="72" font-size="8" fill="#64748b" text-anchor="middle">(1. Balon Kata Ucapan Langsung)</text>
      <circle cx="80" cy="120" r="16" fill="#93c5fd"/>
      <text x="80" y="125" font-size="9" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Siswa A</text>

      <!-- Panel 2: Balon Pikiran (Awan) -->
      <rect x="220" y="25" width="180" height="135" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <!-- Cloud Shape -->
      <path d="M250,55 Q240,45 255,35 Q270,25 290,32 Q310,22 330,32 Q350,25 365,38 Q380,50 370,65 Q380,80 365,90 Q345,98 330,90 Q310,98 290,90 Q270,95 255,85 Q235,80 242,65 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <circle cx="270" cy="100" r="4" fill="#f59e0b"/>
      <circle cx="265" cy="108" r="2.5" fill="#f59e0b"/>
      <text x="308" y="55" font-size="8.5" font-weight="bold" fill="#92400e" text-anchor="middle">Wah, buku ensiklopedia</text>
      <text x="308" y="68" font-size="8.5" font-weight="bold" fill="#92400e" text-anchor="middle">itu seru sekali...</text>
      <text x="308" y="82" font-size="7.5" fill="#b45309" text-anchor="middle">(2. Balon Pikiran)</text>
      <circle cx="260" cy="125" r="14" fill="#fcd34d"/>
      <text x="260" y="129" font-size="8.5" font-weight="bold" fill="#78350f" text-anchor="middle">Siswa B</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Perkataan tokoh yang diucapkan secara keras dan berteriak lantang' },
      { id: 'B', text: 'Monolog batin atau hal yang dipikirkan dalam hati tokoh tanpa diucapkan secara lisan' },
      { id: 'C', text: 'Keterangan waktu dan tempat yang ditulis narator di sudut panel' },
      { id: 'D', text: 'Efek suara tiruan seperti ledakan atau dering bel sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Balon pikiran berbentuk awan dengan gelembung-gelembung kecil menuju kepala tokoh berfungsi menggambarkan hal-hal yang sedang dipikirkan, dirasakan, atau dibicarakan dalam hati oleh tokoh tanpa didengar oleh orang lain.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Peserta didik dapat memilih lebih dari satu jawaban benar
  // Setiap butir bernilai skor 1 (Total skor PGK = 5)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Teks Berita & Teks Laporan - Karakteristik Teks Faktual',
    difficulty: 'Mudah',
    text: 'Teks berita dan teks laporan hasil observasi (LHO) tergolong ke dalam teks nonsastra faktual. Manakah pernyataan berikut yang BENAR mengenai karakteristik kedua teks tersebut? (Pilihlah lebih dari satu jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Teks berita menyajikan peristiwa aktual (terkini), nyata, dan hangat diperbincangkan masyarakat.' },
      { id: 'B', text: 'Teks laporan hasil observasi disusun berdasarkan hasil pengamatan langsung secara objektif terhadap suatu objek.' },
      { id: 'C', text: 'Kedua jenis teks mengutamakan fakta konkret dan data valid, bukan imajinasi khayalan pengarang.' },
      { id: 'D', text: 'Bahasa dalam teks berita dan laporan wajib menggunakan gaya bahasa kiasan dan majas hiperbola.' },
      { id: 'E', text: 'Teks berita disusun menggunakan rumus pokok ADiKSiMBa (5W+1H).' },
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    explanation:
      'Pernyataan A, B, C, dan E benar. Teks faktual (berita dan LHO) bersifat objektif, menyajikan fakta nyata, berbasis data/pengamatan, dan menggunakan rumus 5W+1H. Pernyataan D salah karena teks ilmiah dan berita tidak boleh didominasi majas berlebihan.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Teks Eksplanasi & Prosedur - Ciri Kebahasaan Ilmiah Populer',
    difficulty: 'Mudah',
    text: 'Cermati kaidah kebahasaan teks eksplanasi dan teks prosedur berikut. Manakah di antara ciri-ciri di bawah ini yang TEPAT? (Pilihlah lebih dari satu jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Teks eksplanasi banyak menggunakan konjungsi kausalitas seperti "sebab", "karena", dan "sehingga".' },
      { id: 'B', text: 'Teks prosedur memuat kata kerja imperatif seperti "tambahkan", "aduklah", dan "potonglah".' },
      { id: 'C', text: 'Teks prosedur disusun menggunakan konjungsi urutan waktu seperti "pertama", "selanjutnya", dan "kemudian".' },
      { id: 'D', text: 'Teks eksplanasi berfokus menjawab pertanyaan "mengapa" dan "bagaimana" suatu fenomena dapat terjadi.' },
      { id: 'E', text: 'Teks eksplanasi bertujuan membujuk pembaca agar membeli produk yang diiklankan.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation:
      'Pernyataan A, B, C, dan D benar. Teks eksplanasi menjelaskan mekanisme sebab-akibat (mengapa & bagaimana), sedangkan teks prosedur memandu urutan kerja dengan kata kerja perintah dan urutan waktu. Pernyataan E salah karena membujuk membeli produk adalah fungsi teks iklan/persuasi.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Teks Puisi - Unsur Fisik dan Batin Puisi',
    difficulty: 'Mudah',
    text: 'Puisi merupakan karya sastra yang padat makna dan estetis. Manakah di antara pilihan berikut yang termasuk unsur pembangun dalam karya puisi? (Pilihlah lebih dari satu jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Rima atau persamaan bunyi di akhir larik puisi (misalnya sajak a-b-a-b atau a-a-a-a).' },
      { id: 'B', text: 'Bait yang terdiri atas beberapa larik atau baris kata.' },
      { id: 'C', text: 'Penggunaan majas dan bahasa konotatif (makna kias) untuk membangkitkan imajinasi pembaca.' },
      { id: 'D', text: 'Amanat atau pesan moral luhur yang ingin disampaikan penyair kepada pembaca.' },
      { id: 'E', text: 'Babak dan adegan pementasan teater beserta kramagung.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation:
      'Pernyataan A, B, C, dan D merupakan unsur fisik dan batin puisi (rima, bait, larik, majas/gaya bahasa, dan amanat). Adapun pilihan E adalah unsur naskah drama pementasan teater, bukan puisi.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Unsur Intrinsik Prosa - Perbedaan Cerpen dan Novel',
    difficulty: 'Mudah',
    text: 'Cerita pendek (cerpen) dan novel adalah dua bentuk karya sastra prosa fiksi. Manakah pernyataan berikut yang TEPAT membedakan cerpen dan novel? (Pilihlah lebih dari satu jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Cerpen memiliki alur cerita tunggal yang ringkas dan biasanya berfokus pada satu konflik utama tokoh.' },
      { id: 'B', text: 'Novel memiliki alur cerita yang lebih luas dan kompleks, serta mencakup banyak babak atau subkonflik.' },
      { id: 'C', text: 'Penokohan dalam novel mengalami perkembangan watak dan perubahan nasib seiring berjalannya cerita.' },
      { id: 'D', text: 'Cerpen umumnya dapat selesai dibaca dalam sekali duduk (sekitar 10-30 menit).' },
      { id: 'E', text: 'Cerpen tidak memiliki latar tempat dan waktu, sedangkan novel selalu memiliki latar yang nyata.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation:
      'Pernyataan A, B, C, dan D benar. Cerpen berfokus pada konflik tunggal, singkat, dan dapat dibaca dalam sekali duduk. Novel memiliki cakupan luas, banyak babak, dan karakter berkembang dinamis. Pilihan E salah karena cerpen tetap memiliki unsur latar (setting) tempat, waktu, dan suasana.',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Teks Sastra Bergambar - Konvensi Cergam, Komik & Graphic Novel',
    difficulty: 'Mudah',
    text: 'Teks sastra bergambar memadukan kekuatan bahasa tulis dan ilustrasi visual. Manakah pernyataan berikut yang TEPAT mengenai jenis teks sastra bergambar? (Pilihlah lebih dari satu jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Komik menyajikan cerita menggunakan rangkaian panel kotak berurutan yang dilengkapi balon kata dan onomatope.' },
      { id: 'B', text: 'Cerita bergambar (cergam) umumnya memuat paragraf narasi cerita yang didampingi oleh ilustrasi gambar pendukung adegan.' },
      { id: 'C', text: 'Novel bergambar (graphic novel) menyajikan cerita naratif panjang yang utuh dengan kualitas seni visual mendalam.' },
      { id: 'D', text: 'Onomatope adalah tiruan bunyi benda atau peristiwa (misalnya "Duar!", "Bruk!", "Kring!") yang ditulis dengan tipografi menarik.' },
      { id: 'E', text: 'Teks sastra bergambar sama sekali tidak memiliki unsur tema, tokoh, maupun amanat.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation:
      'Pernyataan A, B, C, dan D benar tentang ragam karya sastra bergambar. Pilihan E keliru karena teks sastra bergambar tetap merupakan karya sastra yang kaya akan tema, karakter tokoh, alur cerita, dan pesan moral/amanat.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI / TABEL BENAR-SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Menilai kebenaran / kesesuaian pernyataan (Setiap butir bernilai skor 1)
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Teks Berita & Teks Eksposisi - Validasi Kalimat Fakta vs Opini',
    difficulty: 'Mudah',
    text: 'Tentukan apakah setiap pernyataan di bawah ini termasuk kategori pernyataan yang BENAR atau SALAH berdasarkan kaidah fakta dan opini dalam teks berita dan eksposisi!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Kalimat fakta berisi kenyataan nyata yang kebenarannya dapat dibuktikan dengan data angka atau dokumentasi objektif.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Kalimat opini berisi pandangan, perkiraan, atau perasaan subjektif yang ditandai kata seperti "menurut saya", "sebaiknya", atau "mungkin".',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Teks berita wajib didominasi oleh opini pribadi wartawan tanpa perlu melakukan verifikasi kepada narasumber.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Tesis dalam teks eksposisi berisi sudut pandang penulis terhadap topik permasalahan yang kemudian diperkuat oleh argumen fakta.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1, 2, dan 4 Benar. Pernyataan 3 Salah karena berita harus berpegang teguh pada kode etik jurnalistik yang mengutamakan fakta objektif, bukan opini pribadi wartawan.',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Teks Eksplanasi & Prosedur - Kaidah Struktur Ilmiah',
    difficulty: 'Mudah',
    text: 'Tentukan apakah pernyataan mengenai struktur dan kaidah teks eksplanasi serta teks prosedur berikut SESUAI atau TIDAK SESUAI!',
    categoryType: 'sesuai_tidak',
    statements: [
      {
        id: 's1',
        text: 'Bagian "Deretan Penjelas" dalam teks eksplanasi memuat proses terperinci bagaimana suatu fenomena alam terjadi secara sebab-akibat.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's2',
        text: 'Urutan langkah-langkah pada teks prosedur dapat diacak secara bebas tanpa memengaruhi hasil akhir kegiatan.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's3',
        text: 'Bagian "Tujuan" pada teks prosedur menjelaskan maksud kegiatan atau hasil yang akan diperoleh setelah mengikuti seluruh panduan.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's4',
        text: 'Teks eksplanasi fenomena sosial dapat membahas masalah kemacetan lalu lintas atau pentingnya pengelolaan sampah di perkotaan.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
    ],
    explanation:
      'Pernyataan 1, 3, dan 4 Sesuai. Pernyataan 2 Tidak Sesuai karena langkah-langkah pada teks prosedur harus sistematis dan terurut logis.',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Teks Drama - Unsur Pementasan & Naskah Drama',
    difficulty: 'Mudah',
    text: 'Tentukan apakah pernyataan mengenai unsur intrinsik naskah drama anak berikut BENAR atau SALAH!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Prolog adalah kata-kata pengantar di awal naskah drama yang menggambarkan latar belakang peristiwa atau situasi cerita.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Kramagung adalah petunjuk lakuan atau tindakan gerak aktor yang biasanya ditulis di dalam tanda kurung ( ) atau dicetak miring.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Epilog adalah bagian naskah drama yang berisi pertengkaran puncak antara tokoh protagonis dan antagonis.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Dialog dalam naskah drama berfungsi menyampaikan alur cerita serta mencerminkan watak dan hubungan antartokoh.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1, 2, dan 4 Benar. Pernyataan 3 Salah karena puncak pertengkaran disebut klimaks, sedangkan epilog adalah bagian penutup naskah yang berisi kesimpulan atau amanat.',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Cerita Rakyat - Klasifikasi Ragam Cerita Tradisional',
    difficulty: 'Mudah',
    text: 'Tentukan apakah pernyataan mengenai jenis-jenis cerita rakyat Nusantara di bawah ini BENAR atau SALAH!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Fabel adalah cerita rakyat yang menampilkan tokoh binatang yang dapat berbicara, berpikir, dan bersikap seperti manusia.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Mite (mitos) adalah cerita rakyat yang berhubungan dengan kisah dewa-dewi, makhluk halus, atau hal-hal gaib yang diyakini sakral.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Sage adalah cerita rakyat yang mengisahkan asal-usul penamaan sebuah gunung atau danau di daerah tertentu.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Cerita rakyat "Kancil dan Buaya" merupakan contoh fabel yang sarat dengan pesan kecerdikan dan kehati-hatian.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1, 2, dan 4 Benar. Pernyataan 3 Salah karena cerita tentang asal-usul tempat adalah legenda, sedangkan sage adalah cerita rakyat yang memuat unsur kepahlawanan atau keberanian leluhur.',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Teks Sastra Bergambar - Ciri Visual Komik, Cergam & Novel Grafis',
    difficulty: 'Mudah',
    text: 'Tentukan apakah pernyataan mengenai unsur teks sastra bergambar berikut SESUAI atau TIDAK SESUAI!',
    categoryType: 'sesuai_tidak',
    statements: [
      {
        id: 's1',
        text: 'Panel komik adalah kotak pembatas gambar yang memisahkan satu adegan cerita dengan adegan berikutnya secara teratur.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's2',
        text: 'Onomatope pada komik hanya boleh ditulis dengan font kecil biasa dan diletakkan di luar panel gambar.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's3',
        text: 'Dalam cerita bergambar (cergam), gambar berfungsi sebagai pendukung teks tertulis agar adegan cerita lebih mudah dibayangkan anak.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's4',
        text: 'Novel bergambar menggabungkan narasi cerita yang mendalam dengan panel gambar ekspresif sepanjang buku.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
    ],
    explanation:
      'Pernyataan 1, 3, dan 4 Sesuai. Pernyataan 2 Tidak Sesuai karena onomatope dalam komik umumnya didesain dengan tipografi besar, tebal, dinamis, dan menyatu di dalam adegan panel gambar.',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN / MATCHING (5 BUTIR SOAL: NO. 21 - 25)
  // Menjodohkan premis di kolom kiri dengan pasangan tepat di kolom kanan
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'Jenis Teks Nonsastra & Tujuan Utamanya',
    difficulty: 'Mudah',
    text: 'Pasangkanlah jenis teks nonsastra di kolom kiri dengan tujuan utama penulisannya di kolom kanan secara tepat!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Teks Berita',
        match: 'Menyampaikan kabar peristiwa terkini, hangat, dan faktual kepada khalayak ramai',
      },
      {
        id: 'm2',
        premise: 'Teks Laporan Hasil Observasi',
        match: 'Menyajikan klasifikasi dan deskripsi objektif suatu objek berdasarkan hasil pengamatan langsung',
      },
      {
        id: 'm3',
        premise: 'Teks Eksplanasi',
        match: 'Menjelaskan mekanisme proses dan sebab-akibat terjadinya suatu fenomena alam atau sosial',
      },
      {
        id: 'm4',
        premise: 'Teks Prosedur',
        match: 'Memberikan panduan langkah-langkah kerja berurutan cara membuat atau melakukan sesuatu',
      },
      {
        id: 'm5',
        premise: 'Teks Eksposisi',
        match: 'Menyampaikan gagasan atau argumen logis disertai fakta untuk meyakinkan pendapat penulis',
      },
    ],
    explanation:
      'Pasangan teks nonsastra dan tujuannya: Berita (kabar peristiwa aktual), LHO (laporan pengamatan objektif), Eksplanasi (proses kausalitas fenomena), Prosedur (langkah-langkah kerja bertahap), Eksposisi (argumen logis meyakinkan pendapat).',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Unsur Intrinsik Cerpen & Maknanya',
    difficulty: 'Mudah',
    text: 'Pasangkanlah unsur intrinsik karya cerita fiksi di kolom kiri dengan definisinya di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Tema',
        match: 'Gagasan pokok atau ide dasar yang menjadi pondasi seluruh jalan cerita',
      },
      {
        id: 'm2',
        premise: 'Penokohan / Watak',
        match: 'Cara pengarang melukiskan karakter, sifat batin, dan kepribadian tokoh',
      },
      {
        id: 'm3',
        premise: 'Alur / Plot',
        match: 'Jalinan peristiwa yang memiliki hubungan sebab-akibat mulai pengenalan hingga penyelesaian',
      },
      {
        id: 'm4',
        premise: 'Latar / Setting',
        match: 'Keterangan mengenai waktu, tempat, dan suasana terjadinya peristiwa dalam cerita',
      },
      {
        id: 'm5',
        premise: 'Amanat',
        match: 'Pesan moral atau nasihat berharga yang ingin disampaikan pengarang kepada pembaca',
      },
    ],
    explanation:
      'Unsur intrinsik prosa: Tema (gagasan dasar cerita), Penokohan (watak tokoh), Alur (jalinan peristiwa berurutan), Latar (waktu, tempat, suasana), Amanat (pesan moral/nasihat).',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Istilah dalam Seni Drama Pementasan',
    difficulty: 'Mudah',
    text: 'Pasangkanlah istilah dalam naskah dan pementasan drama anak di kolom kiri dengan pengertiannya di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Prolog',
        match: 'Kata pengantar di awal naskah untuk mengantarkan penonton ke dalam suasana cerita',
      },
      {
        id: 'm2',
        premise: 'Epilog',
        match: 'Kata penutup di akhir naskah yang berisi simpulan atau petuah hikmah bagi penonton',
      },
      {
        id: 'm3',
        premise: 'Kramagung',
        match: 'Petunjuk lakuan, ekspresi, atau gerakan fisik aktor yang tertulis dalam tanda kurung',
      },
      {
        id: 'm4',
        premise: 'Wawancang (Dialog)',
        match: 'Percakapan lisan yang diucapkan antarpara tokoh drama di atas panggung',
      },
      {
        id: 'm5',
        premise: 'Mimik Wajah',
        match: 'Raut atau perubahan ekspresi muka pemeran untuk menggambarkan emosi jiwa tokoh',
      },
    ],
    explanation:
      'Istilah drama teater: Prolog (kata pengantar), Epilog (kata penutup), Kramagung (petunjuk tindakan dalam tanda kurung), Wawancang (dialog percakapan tokoh), Mimik (ekspresi wajah pemeran).',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Klasifikasi Cerita Rakyat & Contoh Judul Nusantara',
    difficulty: 'Mudah',
    text: 'Pasangkanlah jenis cerita rakyat di kolom kiri dengan contoh judul cerita tradisional Nusantara di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Fabel',
        match: 'Kisah Kancil yang Cerdik dan Buaya di Sungai',
      },
      {
        id: 'm2',
        premise: 'Legenda',
        match: 'Asal-Usul Terjadinya Danau Batur dan Danau Toba',
      },
      {
        id: 'm3',
        premise: 'Mite (Mitos)',
        match: 'Kisah Dewi Sri Sang Dewi Kesuburan Padi',
      },
      {
        id: 'm4',
        premise: 'Sage',
        match: 'Kisah Kepahlawanan Ciung Wanara dan Patih Gajah Mada',
      },
      {
        id: 'm5',
        premise: 'Cerita Jenaka',
        match: 'Kisah Kocak Si Kabayan Mengambil Nangka di Sungai',
      },
    ],
    explanation:
      'Pasangan genre cerita rakyat: Fabel (Kancil & Buaya), Legenda (Danau Batur & Danau Toba), Mite (Dewi Sri), Sage (Ciung Wanara / Gajah Mada), Cerita Jenaka (Si Kabayan).',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'Elemen Teks Sastra Bergambar & Fungsinya',
    difficulty: 'Mudah',
    text: 'Pasangkanlah elemen teks sastra bergambar di kolom kiri dengan fungsinya di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Panel Kotak',
        match: 'Bingkai gambar sekuensial yang memuat satu unit peristiwa dalam komik',
      },
      {
        id: 'm2',
        premise: 'Balon Kata (Speech Balloon)',
        match: 'Wadah teks berujung ekor lancip yang memuat kalimat ucapan langsung tokoh',
      },
      {
        id: 'm3',
        premise: 'Balon Pikiran (Thought Bubble)',
        match: 'Wadah teks berbentuk gumpalan awan yang memuat bisikan batin dalam hati tokoh',
      },
      {
        id: 'm4',
        premise: 'Onomatope',
        match: 'Kata tiruan bunyi tiruan alam atau tabrakan (seperti "Bruk!", "Duar!", "Kring!")',
      },
      {
        id: 'm5',
        premise: 'Keterangan Narasi (Caption Box)',
        match: 'Kotak persegi di sudut panel yang berisi narasi waktu atau tempat dari pengarang',
      },
    ],
    explanation:
      'Elemen visual sastra bergambar: Panel (bingkai kotak sekuens adegan), Balon kata (ucapan langsung bersudut lancip), Balon pikiran (awan batin tokoh), Onomatope (kata tiruan bunyi dramatis), Caption box (keterangan latar dari narator).',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Menjawab dengan istilah singkat dan tepat (Setiap butir bernilai skor 1)
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Teks Berita - Rumus Unsur Berita Bahasa Indonesia',
    difficulty: 'Mudah',
    text: 'Enam unsur pokok penggali kelengkapan informasi dalam teks berita (Apa, Di mana, Kapan, Siapa, Mengapa, dan Bagaimana) dalam bahasa Indonesia sering disingkat dengan sebuah akronim yaitu...',
    correctAnswer: 'ADIKSIBA',
    acceptedAnswers: ['ADIKSIBA', 'ADIK SIMBA', 'ADiKSiMBa', '5W1H', '5W + 1H', 'ADIKSI MBA'],
    explanation:
      'Akronim resmi dalam bahasa Indonesia untuk mengingat 6 pertanyaan pokok berita adalah ADIKSIBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana) yang merupakan padanan dari rumus 5W+1H.',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Teks Prosedur - Istilah Kalimat Perintah',
    difficulty: 'Mudah',
    text: 'Kalimat yang berisi perintah, instruksi, atau arahan kerja langsung dalam teks prosedur (seperti kata: "Tuangkanlah", "Potonglah", "Siapkan") disebut sebagai kalimat...',
    correctAnswer: 'imperatif',
    acceptedAnswers: ['imperatif', 'perintah', 'kalimat imperatif', 'kalimat perintah'],
    explanation:
      'Kalimat yang berisi perintah atau ajakan untuk melakukan tindakan dalam petunjuk kerja disebut kalimat imperatif (kalimat perintah).',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Teks Puisi - Majas Gaya Bahasa',
    difficulty: 'Mudah',
    text: 'Gaya bahasa (majas) dalam puisi yang melukiskan benda-benda mati seolah-olah memiliki nyawa, perasaan, dan dapat bertindak menyerupai manusia disebut majas...',
    correctAnswer: 'personifikasi',
    acceptedAnswers: ['personifikasi', 'majas personifikasi'],
    explanation:
      'Majas personifikasi adalah gaya bahasa perbandingan yang mempersonifikasikan atau mengumpamakan benda mati seakan-akan hidup dan bersikap seperti manusia.',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Teks Komik - Kata Tiruan Bunyi Visual',
    difficulty: 'Mudah',
    text: 'Kata tiruan bunyi yang digunakan dalam komik untuk menggambarkan suara gemuruh, tabrakan, letusan, atau bunyi benda (seperti "Duar!", "Bruk!", "Prang!", "Kring!") disebut...',
    correctAnswer: 'onomatope',
    acceptedAnswers: ['onomatope', 'onomatopoeia', 'kata tiruan bunyi', 'tiruan bunyi'],
    explanation:
      'Onomatope (onomatopoeia) adalah kata yang terbentuk dari tiruan bunyi suara alam, bunyi binatang, atau bunyi tumbukan benda yang lazim digunakan dalam seni komik.',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Cerita Rakyat - Fabel',
    difficulty: 'Mudah',
    text: 'Jenis cerita rakyat fiksi yang seluruh tokoh utamanya diperankan oleh binatang yang dapat berbicara, berpikir, dan memiliki budi pekerti seperti manusia disebut cerita...',
    correctAnswer: 'fabel',
    acceptedAnswers: ['fabel', 'cerita fabel', 'dongeng fabel'],
    explanation:
      'Fabel adalah genre cerita rakyat fiksi bertema hewan/binatang yang diberi sifat manusiawi serta mengusung pesan pendidikan moral bagi anak.',
  },
];

