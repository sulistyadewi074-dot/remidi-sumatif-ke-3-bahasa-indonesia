import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Membaca dan Memirsa (Teks Sastra & Nonsastra)';
const ELEMEN_SASTRA = 'Apresiasi & Pemahaman Teks Sastra';
const ELEMEN_BERGAMBAR = 'Memirsa & Menelaah Teks Sastra Bergambar';

const CP_DEFAULT =
  'Peserta didik mampu memahami, menganalisis, dan mengevaluasi beragam teks nonsastra/faktual (teks berita, teks laporan hasil observasi, teks eksplanasi, teks prosedur, teks eksposisi), mengapresiasi dan menelaah unsur intrinsik karya sastra (puisi, cerpen, novel, drama, cerita rakyat), serta memaknai informasi dan konvensi visual dalam teks sastra bergambar (cergam, komik, cerpen bergambar, novel bergambar) secara kritis dan mandiri.';

const TP_1 =
  'Mengidentifikasi dan menganalisis ide pokok, unsur 5W+1H (ADiKSiMBa), struktur piramida terbalik, serta perbedaan fakta dan opini pada teks berita dan teks laporan.';
const TP_2 =
  'Menganalisis karakteristik, hubungan kausalitas (sebab-akibat), kalimat imperatif, dan argumentasi logis pada teks eksplanasi, teks prosedur, dan teks eksposisi.';
const TP_3 =
  'Menelaah unsur intrinsik karya sastra (tema, tokoh/penokohan, latar, alur, amanat, bait/rima puisi, petunjuk lakuan kramagung drama, ragam cerita rakyat: fabel, legenda, mite, sage).';
const TP_4 =
  'Mengevaluasi perpaduan teks verbal dan ilustrasi visual, konvensi komik (panel kotak, balon kata, balon pikiran, onomatope), serta karakteristik cergam, cerpen bergambar, dan novel grafis.';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR: NO. 1 - 10) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus kutipan teks berita kegiatan literasi sekolah beserta bagan piramida terbalik, peserta didik dapat mengidentifikasi unsur ADiKSiMBa (pertanyaan "Apa" dan "Kapan") dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan diagram struktur teks berita piramida terbalik (Kepala Berita, Tubuh Berita, Ekor Berita), peserta didik dapat menentukan fungsi bagian "Kepala Berita (Lead)" dalam menyampaikan informasi pokok.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan kutipan teks Laporan Hasil Observasi (LHO) tentang ekosistem hutan mangrove, peserta didik dapat menentukan bagian struktur "Deskripsi Bagian" yang memuat fakta objektif.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan stimulus bagan alur proses terjadinya pelangi, peserta didik dapat mengidentifikasi hubungan kausalitas (sebab-akibat) yang merupakan ciri utama teks eksplanasi fenomena alam.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kutipan langkah-langkah dalam teks prosedur pembuatan pupuk kompos daun, peserta didik dapat mengidentifikasi kalimat berjenis imperatif (perintah/instruksi teknis).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan paragraf teks eksposisi tentang gemar membaca buku, peserta didik dapat membedakan kalimat yang menyatakan fakta konkret dengan kalimat yang menyatakan opini/pendapat penulis.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan satu bait puisi anak bertema keindahan pantai di senja hari, peserta didik dapat mengidentifikasi majas personifikasi yang melukiskan alam seolah berperilaku seperti manusia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan kutipan cerita pendek (cerpen) persahabatan anak sekolah, peserta didik dapat menganalisis watak tokoh protagonis berdasarkan tindakan dan perkataannya dalam cerita.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan cuplikan cerita rakyat Nusantara mengenai asal-usul sebuah selat/danau, peserta didik dapat menentukan jenis cerita rakyat tersebut (Legenda) dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_BERGAMBAR,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan ilustrasi panel komik edukatif dengan ragam balon ucapan, peserta didik dapat menentukan fungsi balon bergaris putus-putus atau bergelombang (balon bisikan / monolog batin).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR: NO. 11 - 15) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan ringkasan ciri-ciri teks faktual, peserta didik dapat memilih beberapa pernyataan yang tepat mengenai karakteristik pembeda antara teks berita dan teks laporan hasil observasi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan perbandingan teks eksplanasi dan teks eksposisi, peserta didik dapat menentukan ciri kebahasaan yang lazim ditemukan pada teks ilmiah dan teks argumentasi faktual.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan telaah unsur pembangun karya puisi anak, peserta didik dapat mengidentifikasi unsur-unsur batin dan fisik puisi (rima, bait, larik, majas, dan amanat).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan komparasi karya prosa fiksi, peserta didik dapat menganalisis perbedaan mendasar antara cerita pendek (cerpen) dan novel dari segi alur cerita, jumlah tokoh, dan rentang setting waktu.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_BERGAMBAR,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan konsep teks sastra bergambar, peserta didik dapat menentukan ciri khas yang membedakan komik, cerita bergambar (cergam), dan novel grafis (graphic novel).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR: NO. 16 - 20) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan tabel 4 pernyataan terkait informasi dalam teks berita dan teks eksposisi, peserta didik dapat memvalidasi kebenaran status kalimat fakta versus kalimat opini (Benar / Salah).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan tabel 4 kaidah struktur teks prosedur dan teks eksplanasi, peserta didik dapat menilai kesesuaian pernyataan mengenai tahapan kerja dan deretan penjelas kausalitas (Sesuai / Tidak Sesuai).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan tabel 4 pernyataan mengenai naskah drama pementasan anak (prolog, dialog, epilog, kramagung), peserta didik dapat menentukan kebenaran peran masing-masing unsur panggung (Benar / Salah).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan tabel 4 deskripsi jenis cerita rakyat Indonesia (fabel, legenda, mite, sage), peserta didik dapat memverifikasi kebenaran definisi dan contoh cerita rakyat (Benar / Salah).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_BERGAMBAR,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan tabel 4 pernyataan mengenai konvensi teks sastra bergambar (panel gambar, balon kata, teks narasi pengantar, onomatope), peserta didik dapat menilai kesesuaian kaidah visual (Sesuai / Tidak Sesuai).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN / MATCHING (5 BUTIR: NO. 21 - 25) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan premis 5 jenis teks nonsastra (Berita, LHO, Prosedur, Eksplanasi, Eksposisi), peserta didik dapat memasangkan dengan tujuan utama komunikasinya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan premis 5 unsur intrinsik karya cerita fiksi (Tema, Tokoh, Alur, Latar, Amanat), peserta didik dapat memasangkan dengan definisi operasionalnya masing-masing.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan premis 5 istilah dalam seni drama teater anak (Prolog, Epilog, Kramagung, Wawancang, Mimik), peserta didik dapat memasangkan dengan pengertian fungsinya di panggung.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan premis 5 klasifikasi cerita rakyat (Fabel, Legenda, Mite, Sage, Cerita Jenaka), peserta didik dapat memasangkan dengan judul cerita rakyat Nusantara yang bersangkutan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_BERGAMBAR,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan premis 5 unsur dalam teks sastra bergambar (Panel, Balon Kata, Balon Pikiran, Onomatope, Caption Narasi), peserta didik dapat memasangkan dengan bentuk visual dan maknanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR: NO. 26 - 30) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan deskripsi rumus enam pertanyaan pokok untuk menggali kelengkapan informasi berita, peserta didik dapat menuliskan akronim bahasa Indonesianya (ADIKSIBA atau 5W1H).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat instruksi pada teks prosedur, peserta didik dapat menuliskan istilah linguistik untuk bentuk kalimat yang berisi perintah atau ajakan (kalimat imperatif).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan contoh larik puisi yang mengumpamakan angin membisikkan salam, peserta didik dapat menuliskan nama majas perumpamaan perilaku manusia tersebut (personifikasi).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_BERGAMBAR,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan contoh kata tiruan bunyi seperti "Bruk!", "Duar!", "Kring!" pada komik, peserta didik dapat menuliskan istilah sastra untuk kata tiruan bunyi tersebut (onomatope).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_SASTRA,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan ciri-ciri cerita rakyat fiksi yang diperankan oleh binatang berbudi pekerti seperti manusia, peserta didik dapat menuliskan nama genre cerita rakyat tersebut (fabel).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Mengisi metadata kisi-kisi ke objek Question
 */
export function enrichQuestion(q: Question): Question {
  const meta = KISI_KISI_MAP[q.id];
  if (!meta) return q;

  return {
    ...q,
    elemen: meta.elemen,
    cp: meta.cp,
    tp: meta.tp,
    indikator: meta.indikator,
    levelKognitif: meta.levelKognitif,
    bobotSkor: meta.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi ringkasan statistik kisi-kisi untuk summary cards
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Pemahaman & Pengetahuan',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Aplikasi & Penerapan',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Penalaran & Analisis HOTS',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
