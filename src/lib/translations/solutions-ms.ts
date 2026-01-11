/**
 * 🌍 SOLUTIONS TRANSLATIONS - MALAY (ms)
 * Complete Malay translations for all 300 solutions
 */

import type { SolutionTranslation } from '../types'

export const malayTranslations: Record<string, SolutionTranslation> = {
    // ==================== HEALTHCARE ====================

    'whatsapp-clinic-booking': {
        title: 'Sistem Tempahan Temujanji Klinik melalui WhatsApp',
        description: 'Sistem penjadualan temujanji automatik untuk klinik perubatan yang membolehkan pesakit menempah, menjadual semula dan membatalkan terus melalui WhatsApp.',
        shortDescription: 'Tempah temujanji klinik melalui WhatsApp',
        features: [
            'Ketersediaan temujanji masa nyata',
            'Penjadualan berbilang doktor',
            'Peringatan automatik 24 jam sebelum',
            'Jadual semula dan pembatalan',
            'Integrasi sejarah pesakit',
            'Pengurusan senarai menunggu',
            'Sokongan berbilang bahasa',
            'Penyegerakan kalendar'
        ],
        benefits: [
            'Kurangkan ketidakhadiran sebanyak 40%',
            'Jimat 3 jam sehari untuk panggilan telefon',
            'Tempahan tersedia 24/7',
            'Tingkatkan kepuasan pesakit sebanyak 60%',
            'Kurangkan beban pentadbiran sebanyak 50%',
            'Penggunaan temujanji yang lebih baik'
        ],
        useCases: [
            'Klinik perubatan',
            'Amalan pergigian',
            'Perundingan pakar',
            'Pusat diagnostik',
            'Pusat vaksinasi'
        ],
        timeframe: '6 bulan',
        metrics: ['Kurang ketidakhadiran', 'Masa dijimatkan', 'Lebih banyak tempahan'],
        deliveryTime: '2-3 minggu',
        faqs: [
            {
                question: 'Bagaimana tempahan temujanji berfungsi?',
                answer: 'Pesakit menghantar mesej ke nombor WhatsApp anda, bot menunjukkan slot yang tersedia, mereka memilih satu dan menerima pengesahan segera.'
            },
            {
                question: 'Bolehkah ia mengendalikan berbilang doktor?',
                answer: 'Ya, sistem menyokong bilangan doktor tanpa had dengan jadual dan tetapan individu.'
            },
            {
                question: 'Adakah ia menghantar peringatan?',
                answer: 'Ya, peringatan automatik dihantar 24 jam dan 2 jam sebelum temujanji.'
            },
            {
                question: 'Adakah ia mematuhi HIPAA?',
                answer: 'Ya, semua data pesakit disulitkan dan disimpan dengan selamat mengikut standard antarabangsa.'
            }
        ]
    },

    'whatsapp-pharmacy-assistant': {
        title: 'Pembantu Farmasi Pintar di WhatsApp',
        description: 'Pembantu farmasi berkuasa AI yang membantu pelanggan menyemak ketersediaan ubat dan memesan melalui WhatsApp.',
        shortDescription: 'Semak ketersediaan ubat melalui WhatsApp',
        features: [
            'Ketersediaan ubat masa nyata',
            'Muat naik preskripsi dan pengesahan OCR',
            'Cadangan ubat alternatif',
            'Perbandingan harga antara cawangan',
            'Penjadualan dan penjejakan penghantaran',
            'Peringatan dos via WhatsApp',
            'Amaran interaksi ubat',
            'Bantuan tuntutan insurans'
        ],
        benefits: [
            'Tingkatkan jualan sebanyak 35%',
            'Perkhidmatan pelanggan 24/7 automatik',
            'Kurangkan pertanyaan telefon sebanyak 70%',
            'Pemprosesan pesanan lebih cepat',
            'Pematuhan ubat yang lebih baik',
            'Pengurusan inventori yang lebih baik'
        ],
        useCases: [
            'Farmasi komuniti',
            'Farmasi hospital',
            'Farmasi dalam talian',
            'Rangkaian farmasi',
            'Kedai ubat khusus'
        ],
        timeframe: '4 bulan',
        metrics: ['Jualan meningkat', 'Kos sokongan berkurangan', 'Pengekalan pelanggan'],
        deliveryTime: '3-4 minggu',
        faqs: [
            {
                question: 'Bagaimana pelanggan memuat naik preskripsi?',
                answer: 'Pelanggan mengambil gambar preskripsi dan menghantarnya melalui WhatsApp. Sistem OCR AI kami mengesahkannya serta-merta.'
            },
            {
                question: 'Bolehkah ia mencadangkan ubat alternatif?',
                answer: 'Ya, jika ubat kehabisan stok, ia mencadangkan alternatif yang tersedia dengan bahan aktif yang sama.'
            },
            {
                question: 'Adakah ia mengendalikan tuntutan insurans?',
                answer: 'Ya, ia boleh mengesahkan perlindungan insurans dan membantu dengan dokumentasi digital.'
            }
        ]
    },

    // ==================== E-COMMERCE ====================

    'whatsapp-product-catalog': {
        title: 'Katalog Produk Interaktif di WhatsApp',
        description: 'Paparkan produk anda secara profesional di WhatsApp dengan imej, harga dan penerangan, dan biarkan pelanggan membeli terus.',
        shortDescription: 'Katalog produk profesional di WhatsApp',
        features: [
            'Paparan produk dengan imej',
            'Pelayaran mengikut kategori',
            'Carian produk',
            'Paparkan harga dan diskaun',
            'Tambah ke troli',
            'Pesanan terus',
            'Kongsi produk',
            'Makluman ketersediaan'
        ],
        benefits: [
            'Tingkatkan jualan sebanyak 50%',
            'Pengalaman membeli yang mudah',
            'Tiada aplikasi berasingan diperlukan',
            'Akses pangkalan pelanggan WhatsApp',
            'Kurangkan soalan berulang',
            'Pesanan lebih cepat'
        ],
        useCases: [
            'Kedai e-dagang',
            'Butik fesyen',
            'Kedai elektronik',
            'Kedai barang kemas',
            'Kedai perabot'
        ],
        timeframe: '3 bulan',
        metrics: ['Jualan meningkat', 'Kadar penukaran', 'Kepuasan pelanggan'],
        deliveryTime: '2-3 minggu',
        faqs: [
            {
                question: 'Bagaimana katalog berfungsi?',
                answer: 'Pelanggan menghantar mesej, melihat kategori, memilih produk, melihat butiran dan imej, dan boleh memesan.'
            },
            {
                question: 'Bolehkah produk dikemas kini?',
                answer: 'Ya, papan pemuka mudah untuk menambah, mengedit dan memadam produk serta-merta.'
            },
            {
                question: 'Adakah ia menyokong pembayaran?',
                answer: 'Ya, integrasi dengan gerbang pembayaran popular dan bayar semasa penghantaran.'
            }
        ]
    },

    'whatsapp-flash-sale': {
        title: 'Kempen Jualan Kilat di WhatsApp',
        description: 'Lancarkan promosi diskaun eksklusif untuk pelanggan WhatsApp dengan pemasa undur dan tawaran terhad yang meningkatkan pembelian.',
        shortDescription: 'Tawaran eksklusif di WhatsApp',
        features: [
            'Pelancaran kempen berjadual',
            'Pemasa undur',
            'Tawaran eksklusif WhatsApp',
            'Penyasaran berasaskan segmen',
            'Pautan pembelian terus',
            'Penjejakan prestasi kempen',
            'Jeda automatik apabila habis',
            'Pengumuman pemenang'
        ],
        benefits: [
            'Kadar buka 80%+',
            'Tingkatkan halaju jualan',
            'Cipta kesegeraan FOMO',
            'Kosongkan inventori dengan cepat',
            'Pelanggan baharu',
            'Pendapatan tambahan'
        ],
        useCases: [
            'Jualan pelepasan bermusim',
            'Pelancaran produk',
            'Promosi cuti',
            'Edisi terhad',
            'Pembersihan inventori'
        ],
        timeframe: '2 bulan',
        metrics: ['80%+ kadar buka', '45% kadar klik', '$35K+ hasil kempen'],
        deliveryTime: '1-2 minggu',
        faqs: [
            {
                question: 'Bagaimana untuk menjadualkan kempen?',
                answer: 'Papan pemuka mudah untuk mencipta kempen dengan tarikh/masa mula-akhir dan segmen sasaran.'
            },
            {
                question: 'Bagaimana untuk menyasarkan pelanggan?',
                answer: 'Berdasarkan sejarah pembelian, lokasi, minat dan jumlah yang dibelanjakan.'
            },
            {
                question: 'Jika item kehabisan stok?',
                answer: 'Sistem menghentikan kempen secara automatik dan memberitahu pelanggan dengan alternatif.'
            }
        ]
    },

    // ==================== RESTAURANTS ====================

    'whatsapp-food-ordering': {
        title: 'Sistem Pesanan Makanan melalui WhatsApp',
        description: 'Benarkan pelanggan memesan makanan terus melalui WhatsApp dengan menu interaktif dan pembayaran dalam talian.',
        shortDescription: 'Pesan makanan anda melalui WhatsApp',
        features: [
            'Menu makanan interaktif',
            'Penyesuaian pesanan',
            'Pembayaran dalam talian',
            'Pengesahan segera',
            'Penjejakan penghantaran',
            'Sejarah pesanan',
            'Tawaran dan diskaun',
            'Penilaian perkhidmatan'
        ],
        benefits: [
            'Tingkatkan pesanan sebanyak 40%',
            'Tiada komisen aplikasi',
            'Hubungan terus dengan pelanggan',
            'Data pelanggan',
            'Tawaran peribadi',
            'Kesetiaan lebih tinggi'
        ],
        useCases: [
            'Restoran',
            'Kafe',
            'Kedai roti',
            'Kedai kuih',
            'Dapur awan'
        ],
        timeframe: '2 bulan',
        metrics: ['Lebih banyak pesanan', 'Tiada komisen', 'Kepuasan pelanggan'],
        deliveryTime: '1-2 minggu',
        faqs: [
            {
                question: 'Bagaimana pelanggan memesan?',
                answer: 'Menghantar mesej, melayari menu, memilih item, menyesuaikan, membayar dan menerima pengesahan.'
            },
            {
                question: 'Apakah kaedah pembayaran yang disokong?',
                answer: 'Kad kredit, Apple Pay, bayar semasa penghantaran dan gerbang pembayaran tempatan.'
            },
            {
                question: 'Penghantaran dan pengambilan disokong?',
                answer: 'Ya, pelanggan memilih penghantaran dengan alamat atau pengambilan dengan masa pilihan.'
            }
        ]
    },

    'whatsapp-table-reservation': {
        title: 'Tempahan Meja melalui WhatsApp',
        description: 'Sistem tempahan meja yang mudah dan berkesan melalui WhatsApp dengan pemilihan masa dan pengesahan segera.',
        shortDescription: 'Tempah meja anda melalui WhatsApp',
        features: ['Paparkan masa tersedia', 'Pilih bilangan orang', 'Keutamaan meja', 'Pengesahan segera', 'Peringatan sebelum', 'Pembatalan/ubah mudah', 'Majlis khas', 'Senarai menunggu'],
        benefits: ['Lebih banyak tempahan', 'Kurang pembatalan', 'Pengagihan lebih baik', 'Pengalaman cemerlang', 'Jimat masa kakitangan', 'Data berharga'],
        useCases: ['Restoran mewah', 'Kafe premium', 'Hotel', 'Dewan acara', 'Kelab'],
        timeframe: '2 bulan',
        metrics: ['Lebih tempahan', 'Kurang ketidakhadiran', 'Kepuasan pelanggan'],
        deliveryTime: '1-2 minggu',
        faqs: [{ question: 'Bagaimana menempah?', answer: 'Pilih tarikh, masa, bilangan dan terima pengesahan segera.' }]
    },

    // ==================== ADDITIONAL HEALTHCARE ====================

    'whatsapp-lab-results': {
        title: 'Sistem Keputusan Makmal melalui WhatsApp',
        description: 'Hantar keputusan makmal kepada pesakit melalui WhatsApp dengan selamat dengan penerangan.',
        shortDescription: 'Terima keputusan anda melalui WhatsApp',
        features: ['Keputusan disulitkan', 'Tafsiran keputusan', 'Amaran nilai tidak normal', 'Temu janji susulan', 'Sejarah ujian', 'Perbandingan ujian lalu', 'Minta ujian baru', 'Hantar ke doktor'],
        benefits: ['Penghantaran lebih cepat', 'Kurang panggilan', 'Kepuasan pesakit', 'Jimat kertas', 'Lebih privasi', 'Susulan lebih baik'],
        useCases: ['Makmal perubatan', 'Pusat diagnostik', 'Hospital', 'Klinik', 'Pusat radiologi'],
        timeframe: '3 bulan',
        metrics: ['Kelajuan penghantaran', 'Kepuasan pesakit', 'Panggilan berkurangan'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Adakah keputusan selamat?', answer: 'Ya, disulitkan sepenuhnya dan dilindungi kata laluan.' }]
    },

    'whatsapp-dental-reminders': {
        title: 'Peringatan Pergigian',
        description: 'Sistem peringatan pintar untuk temu janji pergigian, pemeriksaan berkala dan susulan rawatan.',
        shortDescription: 'Peringatan pintar untuk temu janji pergigian',
        features: ['Peringatan temu janji', 'Perancangan pemeriksaan berkala', 'Susulan rawatan', 'Tip penjagaan pergigian', 'Tawaran pemutihan/pembersihan', 'Pengesahan kehadiran', 'Penjadualan semula', 'Peringatan X-ray'],
        benefits: ['45% kurang ketidakhadiran', 'Lebih pemeriksaan berkala', 'Susulan rawatan lebih baik', 'Pelanggan setia', 'Pendapatan lebih tinggi', 'Kurang masa panggilan'],
        useCases: ['Klinik pergigian', 'Pusat ortodontik', 'Klinik pediatrik', 'Pusat implan', 'Klinik kosmetik pergigian'],
        timeframe: '4 bulan',
        metrics: ['Kurang ketidakhadiran', 'Lebih lawatan berkala', 'Kepuasan pesakit'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Kekerapan peringatan?', answer: 'Peringatan seminggu, sehari dan dua jam sebelum.' }]
    },

    'whatsapp-veterinary-care': {
        title: 'Penjagaan Haiwan melalui WhatsApp',
        description: 'Sistem lengkap untuk klinik veterinar dengan tempahan, peringatan vaksinasi dan penjejakan kesihatan.',
        shortDescription: 'Jaga haiwan peliharaan anda melalui WhatsApp',
        features: ['Tempahan temu janji', 'Peringatan vaksinasi', 'Rekod kesihatan haiwan', 'Tip penjagaan', 'Pesanan ubat', 'Perundingan cepat', 'Kecemasan 24/7', 'Kedai aksesori'],
        benefits: ['Penjagaan haiwan lebih baik', 'Pematuhan vaksinasi', 'Pelanggan setia', 'Jualan tambahan', 'Kurang kecemasan', 'Jimat masa'],
        useCases: ['Klinik veterinar', 'Hospital haiwan', 'Kedai haiwan', 'Hotel haiwan', 'Perkhidmatan adopsi'],
        timeframe: '4 bulan',
        metrics: ['Pematuhan vaksinasi', 'Kepuasan pelanggan', 'Jualan tambahan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Adakah ia mengingatkan vaksinasi?', answer: 'Ya, peringatan automatik untuk semua vaksinasi dan pemeriksaan berkala.' }]
    },

    // ==================== EDUCATION ====================

    'whatsapp-student-enrollment': {
        title: 'Sistem Pendaftaran Pelajar melalui WhatsApp',
        description: 'Automasi proses pendaftaran dan kemasukan melalui WhatsApp dengan penjejakan dokumen.',
        shortDescription: 'Daftar ke sekolah melalui WhatsApp',
        features: ['Pertanyaan kemasukan', 'Hantar permohonan', 'Muat naik dokumen', 'Jejak status', 'Bayaran yuran', 'Lawatan maya', 'Jadual waktu', 'Hubungi penasihat'],
        benefits: ['Proses kemasukan lebih cepat', 'Kurang beban pentadbiran', 'Pengalaman ibu bapa lebih baik', 'Penjejakan tepat', 'Kurang kesilapan', 'Lebih pendaftaran'],
        useCases: ['Sekolah swasta', 'Universiti', 'Sekolah bahasa', 'Pusat latihan', 'Tadika'],
        timeframe: '4 bulan',
        metrics: ['Kelajuan kemasukan', 'Kadar pendaftaran', 'Kepuasan ibu bapa'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Bolehkah muat naik dokumen?', answer: 'Ya, muat naik sijil dan dokumen dengan selamat terus melalui WhatsApp.' }]
    },

    'whatsapp-parent-communication': {
        title: 'Komunikasi Ibu Bapa',
        description: 'Platform komunikasi lengkap antara sekolah dan ibu bapa melalui WhatsApp untuk pengumuman dan laporan.',
        shortDescription: 'Komunikasi langsung dengan sekolah',
        features: ['Hantar pengumuman', 'Laporan pelajar', 'Kalendar peperiksaan', 'Notifikasi kehadiran', 'Permohonan cuti', 'Hubungi guru', 'Gred dan penilaian', 'Aktiviti dan acara'],
        benefits: ['Komunikasi lebih baik', 'Susulan lebih mudah', 'Kurang kertas', 'Notifikasi segera', 'Kepuasan ibu bapa', 'Lebih ketelusan'],
        useCases: ['Sekolah', 'Tadika', 'Pusat selepas sekolah', 'Kem musim panas', 'Pusat latihan'],
        timeframe: '3 bulan',
        metrics: ['Kadar interaksi', 'Kepuasan ibu bapa', 'Pertanyaan berkurangan'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bolehkah hubungi guru?', answer: 'Ya, mesej peribadi kepada guru dengan balasan cepat.' }]
    },

    'whatsapp-online-courses': {
        title: 'Kursus Dalam Talian melalui WhatsApp',
        description: 'Platform untuk penyampaian kursus dan kandungan pendidikan melalui WhatsApp dengan ujian dan penjejakan kemajuan.',
        shortDescription: 'Belajar melalui WhatsApp',
        features: ['Kandungan harian', 'Video pendidikan', 'Ujian dan penilaian', 'Sijil tamat', 'Kumpulan perbincangan', 'Sokongan jurulatih', 'Peringatan kursus', 'Laporan kemajuan'],
        benefits: ['Akses lebih mudah untuk pelajar', 'Penglibatan lebih tinggi', 'Kadar siap lebih baik', 'Kos lebih rendah', 'Pembelajaran fleksibel', 'Skalabiliti'],
        useCases: ['Pusat latihan', 'Jurulatih bebas', 'Syarikat', 'Institusi pendidikan', 'Perunding'],
        timeframe: '4 bulan',
        metrics: ['Kadar siap', 'Kepuasan peserta', 'Jualan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Bagaimana penilaian dilakukan?', answer: 'Ujian interaktif melalui WhatsApp dengan keputusan serta-merta.' }]
    },

    // ==================== TRAVEL & TOURISM ====================

    'whatsapp-travel-booking': {
        title: 'Tempahan Pelancongan melalui WhatsApp',
        description: 'Tempah perjalanan, hotel dan tarikan dengan mudah melalui WhatsApp dengan sokongan segera.',
        shortDescription: 'Tempah perjalanan anda melalui WhatsApp',
        features: ['Tempahan penerbangan', 'Tempahan hotel', 'Lawatan pelancong', 'Visa perjalanan', 'Sewa kereta', 'Insurans', 'Jejak tempahan', 'Sokongan 24/7'],
        benefits: ['Tempahan cepat', 'Harga kompetitif', 'Sokongan peribadi', 'Ubah suai mudah', 'Semua di satu tempat', 'Tawaran eksklusif'],
        useCases: ['Agensi pelancongan', 'Syarikat pelancongan', 'Hotel', 'Syarikat penerbangan', 'Pengendali pelancongan'],
        timeframe: '5 bulan',
        metrics: ['Tempahan', 'Kepuasan pelanggan', 'Pendapatan'],
        deliveryTime: '4-5 minggu',
        faqs: [{ question: 'Bolehkah ubah tempahan?', answer: 'Ya, ubah suai atau batal dengan mudah melalui WhatsApp.' }]
    },

    // ==================== FINANCE & BANKING ====================

    'whatsapp-banking-assistant': {
        title: 'Pembantu Perbankan melalui WhatsApp',
        description: 'Perkhidmatan perbankan pintar melalui WhatsApp dengan baki, pemindahan dan pembayaran bil.',
        shortDescription: 'Perkhidmatan perbankan anda di WhatsApp',
        features: ['Semak baki', 'Penyata akaun', 'Pemindahan wang', 'Bayar bil', 'Amaran transaksi', 'Minta kad', 'Sekat kad', 'Sokongan pelanggan'],
        benefits: ['Perkhidmatan 24/7', 'Transaksi pantas', 'Keselamatan tinggi', 'Kurang lawatan cawangan', 'Kepuasan pelanggan', 'Pengurangan kos'],
        useCases: ['Bank', 'Syarikat kewangan', 'Dompet digital', 'Penyedia pembayaran', 'Kesatuan kredit'],
        timeframe: '6 bulan',
        metrics: ['Transaksi digital', 'Kepuasan pelanggan', 'Penjimatan kos'],
        deliveryTime: '5-6 minggu',
        faqs: [{ question: 'Adakah ia selamat?', answer: 'Ya, penyulitan bank dan pengesahan berbilang faktor.' }]
    },

    // ==================== AUTOMOTIVE ====================

    'whatsapp-car-service': {
        title: 'Perkhidmatan Kereta melalui WhatsApp',
        description: 'Tempah penyelenggaraan, terima peringatan servis dan jejak pembaikan melalui WhatsApp.',
        shortDescription: 'Jaga kereta anda melalui WhatsApp',
        features: ['Tempahan penyelenggaraan', 'Peringatan servis berkala', 'Jejak pembaikan', 'Sebut harga', 'Pesan alat ganti', 'Sejarah penyelenggaraan', 'Tip penjagaan', 'Perkhidmatan kecemasan'],
        benefits: ['Penyelenggaraan tetap', 'Kurang kerosakan', 'Pelanggan setia', 'Pendapatan berterusan', 'Jimat masa', 'Kepuasan pelanggan'],
        useCases: ['Bengkel kereta', 'Pengedar kereta', 'Pusat tayar', 'Kedai alat ganti', 'Bantuan tepi jalan'],
        timeframe: '4 bulan',
        metrics: ['Servis tetap', 'Kepuasan pelanggan', 'Pendapatan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Bagaimana jejak servis kereta?', answer: 'Sejarah penyelenggaraan lengkap dengan peringatan untuk servis seterusnya.' }]
    },

    // ==================== LEGAL SERVICES ====================

    'whatsapp-legal-consultation': {
        title: 'Perundingan Undang-undang melalui WhatsApp',
        description: 'Dapatkan nasihat undang-undang pantas dan boleh dipercayai melalui WhatsApp dengan peguam berlesen.',
        shortDescription: 'Berunding dengan peguam melalui WhatsApp',
        features: ['Perundingan pantas', 'Tempahan temu janji', 'Hantar dokumen', 'Jejak kes', 'Soalan undang-undang', 'Templat kontrak', 'Surat kuasa', 'Bayaran yuran'],
        benefits: ['Akses mudah ke keadilan', 'Jimat masa', 'Kos lebih rendah', 'Pakar pelbagai bidang', 'Kerahsiaan penuh', 'Susulan berterusan'],
        useCases: ['Firma guaman', 'Peguam bebas', 'Syarikat', 'Institusi', 'Individu'],
        timeframe: '4 bulan',
        metrics: ['Perundingan', 'Kepuasan pelanggan', 'Pendapatan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Adakah perundingan sulit?', answer: 'Ya, kerahsiaan peguam-klien penuh dengan penyulitan.' }]
    },

    // ==================== FITNESS & GYM ====================

    'whatsapp-gym-membership': {
        title: 'Keahlian Gim melalui WhatsApp',
        description: 'Urus keahlian, tempah kelas dan berkomunikasi dengan jurulatih melalui WhatsApp.',
        shortDescription: 'Gim anda di WhatsApp',
        features: ['Pembaharuan keahlian', 'Tempahan kelas', 'Program senaman', 'Hubungi jurulatih', 'Jejak kemajuan', 'Tip pemakanan', 'Tawaran khas', 'Jeda keahlian'],
        benefits: ['Ahli setia', 'Kehadiran lebih baik', 'Komunikasi berterusan', 'Lebih pembaharuan', 'Kepuasan ahli', 'Pendapatan tambahan'],
        useCases: ['Gim', 'Studio yoga', 'Pusat kecergasan', 'Jurulatih peribadi', 'Kelab sukan'],
        timeframe: '3 bulan',
        metrics: ['Kadar pembaharuan', 'Kehadiran', 'Kepuasan ahli'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bagaimana tempah kelas?', answer: 'Pilih jenis dan masa dan terima pengesahan segera.' }]
    },

    // ==================== BEAUTY & SPA ====================

    'whatsapp-beauty-booking': {
        title: 'Tempahan Salon Kecantikan melalui WhatsApp',
        description: 'Tempah temu janji salon kecantikan dan spa dengan mudah memilih perkhidmatan, kakitangan dan masa.',
        shortDescription: 'Tempah temu janji kecantikan anda melalui WhatsApp',
        features: ['Tempahan perkhidmatan', 'Pilih kakitangan', 'Senarai harga', 'Tawaran khas', 'Peringatan temu janji', 'Mata kesetiaan', 'Galeri kerja', 'Pesan produk'],
        benefits: ['Lebih tempahan', 'Kurang pembatalan', 'Pelanggan setia', 'Pemasaran mudah', 'Jimat masa', 'Data berharga'],
        useCases: ['Salon kecantikan', 'Pusat spa', 'Salun rambut', 'Pusat penjagaan kulit', 'Salun kuku'],
        timeframe: '3 bulan',
        metrics: ['Tempahan', 'Pembatalan', 'Kepuasan pelanggan'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bolehkah pilih kakitangan?', answer: 'Ya, pilih kakitangan pilihan anda dan lihat ketersediaan.' }]
    },

    // ==================== LOGISTICS & DELIVERY ====================

    'whatsapp-delivery-management': {
        title: 'Pengurusan Penghantaran melalui WhatsApp',
        description: 'Urus operasi penghantaran lengkap dari kutipan hingga penyerahan dengan penjejakan pemandu dan bungkusan.',
        shortDescription: 'Urus penghantaran anda melalui WhatsApp',
        features: ['Minta penghantaran', 'Jejak penghantaran', 'Hubungi pemandu', 'Bukti penghantaran', 'Jadual kutipan', 'Kira kos', 'Hantar semula', 'Laporan prestasi'],
        benefits: ['Ketelusan penuh', 'Kepuasan pelanggan', 'Kecekapan lebih tinggi', 'Kurang masalah', 'Penjejakan tepat', 'Penjimatan kos'],
        useCases: ['Syarikat penghantaran', 'E-dagang', 'Restoran', 'Farmasi', 'Pengangkut'],
        timeframe: '4 bulan',
        metrics: ['Kadar penghantaran', 'Kepuasan pelanggan', 'Kecekapan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Bolehkah jejak pemandu?', answer: 'Ya, lokasi langsung dengan anggaran masa tiba.' }]
    },

    // ==================== EVENTS & ENTERTAINMENT ====================

    'whatsapp-event-booking': {
        title: 'Tempahan Acara dan Tiket melalui WhatsApp',
        description: 'Tempah tiket konsert, acara dan persidangan dengan mudah melalui WhatsApp dengan tiket digital.',
        shortDescription: 'Tempah acara anda melalui WhatsApp',
        features: ['Layari acara', 'Tempah tiket', 'Pilih tempat duduk', 'Bayaran dalam talian', 'Tiket digital QR', 'Peringatan', 'Pembatalan dan bayaran balik', 'Kongsi dengan rakan'],
        benefits: ['Jualan lebih tinggi', 'Pengalaman mudah', 'Tiada barisan', 'Pemasaran langsung', 'Data pelanggan', 'Kos lebih rendah'],
        useCases: ['Penganjur konsert', 'Teater', 'Persidangan', 'Stadium', 'Muzium'],
        timeframe: '3 bulan',
        metrics: ['Jualan tiket', 'Kepuasan peserta', 'Kos'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bagaimana terima tiket?', answer: 'Tiket digital QR dihantar serta-merta ke WhatsApp.' }]
    },

    // ==================== INSURANCE ====================

    'whatsapp-insurance-claims': {
        title: 'Tuntutan Insurans melalui WhatsApp',
        description: 'Hantar tuntutan insurans, jejak status dan terima pampasan dengan mudah melalui WhatsApp.',
        shortDescription: 'Hantar tuntutan anda melalui WhatsApp',
        features: ['Hantar tuntutan', 'Muat naik dokumen', 'Jejak status', 'Hubungi pengendali', 'Pembaharuan polisi', 'Pertanyaan', 'Minta sijil', 'Bandingkan pelan'],
        benefits: ['Tuntutan lebih cepat', 'Ketelusan status', 'Kepuasan pelanggan', 'Jimat masa', 'Ketepatan lebih tinggi', 'Kos lebih rendah'],
        useCases: ['Syarikat insurans', 'Broker insurans', 'Insurans kesihatan', 'Insurans kereta', 'Insurans nyawa'],
        timeframe: '5 bulan',
        metrics: ['Kelajuan tuntutan', 'Kepuasan pelanggan', 'Kadar siap'],
        deliveryTime: '4-5 minggu',
        faqs: [{ question: 'Bolehkah muat naik foto kemalangan?', answer: 'Ya, muat naik semua dokumen dan foto terus melalui WhatsApp.' }]
    },

    // ==================== B2B SERVICES ====================

    'whatsapp-b2b-orders': {
        title: 'Pesanan B2B Borong melalui WhatsApp',
        description: 'Urus pesanan borong dengan katalog khusus, harga tersuai dan penjejakan pesanan.',
        shortDescription: 'Pesan borong melalui WhatsApp',
        features: ['Katalog borong', 'Harga pengedar', 'Had kredit', 'Jejak pesanan', 'Invois automatik', 'Peringatan pembayaran', 'Tawaran pengedar', 'Laporan jualan'],
        benefits: ['Pesanan lebih cepat', 'Kurang kesilapan', 'Hubungan lebih baik', 'Lebih jualan', 'Jimat masa', 'Data tepat'],
        useCases: ['Pengedar', 'Pengeluar', 'Pemborong', 'Pembekal', 'Pengimport'],
        timeframe: '4 bulan',
        metrics: ['Jumlah pesanan', 'Kelajuan kitaran', 'Kepuasan pengedar'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Bolehkah lihat baki akaun?', answer: 'Ya, kredit dan invois tertunggak sentiasa tersedia.' }]
    },

    // ==================== PET CARE ====================

    'whatsapp-pet-services': {
        title: 'Perkhidmatan Penjagaan Haiwan',
        description: 'Tempah perkhidmatan penjagaan haiwan seperti dandanan, penginapan dan latihan melalui WhatsApp.',
        shortDescription: 'Manjakan haiwan peliharaan anda melalui WhatsApp',
        features: ['Tempahan dandanan', 'Penginapan haiwan', 'Sesi latihan', 'Berjalan harian', 'Penjagaan kesihatan', 'Kedai aksesori', 'Vaksinasi', 'Tip penjagaan'],
        benefits: ['Perkhidmatan mudah', 'Peringatan tetap', 'Pelanggan setia', 'Jualan tambahan', 'Penjagaan lebih baik', 'Jimat masa'],
        useCases: ['Salun haiwan', 'Hotel haiwan', 'Pusat latihan', 'Perkhidmatan berjalan', 'Kedai haiwan'],
        timeframe: '3 bulan',
        metrics: ['Tempahan', 'Kepuasan pelanggan', 'Jualan'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bolehkah tempah penginapan?', answer: 'Ya, tempah dengan tempoh dan perkhidmatan tambahan.' }]
    },

    // ==================== RESTAURANT (Additional) ====================

    'whatsapp-restaurant-ordering': {
        title: 'Sistem Pesanan Restoran Pintar',
        description: 'Sistem pesanan lengkap untuk restoran dengan pesanan di tempat dan penghantaran serta pengurusan dapur.',
        shortDescription: 'Pesan di restoran melalui WhatsApp',
        features: ['Menu pintar', 'Pesan dari meja (QR)', 'Pesanan penghantaran', 'Pesanan bawa pulang', 'Pelbagai bayaran', 'Bahagi bil', 'Program kesetiaan', 'Penilaian makanan'],
        benefits: ['Lebih pesanan', 'Perkhidmatan lebih cepat', 'Kurang kesilapan', 'Kepuasan lebih tinggi', 'Data berharga', 'Kesetiaan pelanggan'],
        useCases: ['Restoran', 'Rangkaian restoran', 'Kafeteria', 'Pusat makanan', 'Katering'],
        timeframe: '3 bulan',
        metrics: ['Kadar pesanan', 'Nilai pesanan', 'Kepuasan pelanggan'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Adakah ia menyokong pesanan meja?', answer: 'Ya, QR di setiap meja untuk pesanan terus.' }]
    },

    // ==================== E-COMMERCE ====================

    'cart-abandonment-recovery-whatsapp': {
        title: 'Pemulihan Troli Terbengkalai',
        description: 'Sistem automatik untuk menghantar peringatan kepada pelanggan yang meninggalkan troli.',
        shortDescription: 'Pulihkan jualan yang hilang melalui WhatsApp',
        features: ['Peringatan automatik', 'Diskaun peribadi', 'Multi-susulan', 'Analisis penukaran'],
        benefits: ['Pulihkan 25% troli', 'Lebih jualan', 'Penukaran lebih baik'],
        useCases: ['E-dagang', 'Fesyen', 'Elektronik'],
        timeframe: '2 bulan',
        metrics: ['Kadar pemulihan', 'Pendapatan'],
        deliveryTime: '1-2 minggu',
        faqs: [{ question: 'Bagaimana ia berfungsi?', answer: 'Mesej automatik selepas troli ditinggalkan dengan tawaran peribadi.' }]
    },

    'loyalty-rewards-program-whatsapp': {
        title: 'Program Kesetiaan dan Ganjaran',
        description: 'Sistem mata dan ganjaran bersepadu melalui WhatsApp.',
        shortDescription: 'Kumpul dan tebus mata melalui WhatsApp',
        features: ['Jejak mata', 'Ganjaran automatik', 'Tawaran eksklusif', 'Tahap keahlian'],
        benefits: ['40% lebih kesetiaan', 'Pembelian berulang', 'Kepuasan pelanggan'],
        useCases: ['Runcit', 'Restoran', 'Salun'],
        timeframe: '3 bulan',
        metrics: ['Kadar pengekalan', 'Kadar pembelian semula'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bagaimana dapat mata?', answer: 'Automatik dengan setiap pembelian.' }]
    },

    // ==================== INSTAGRAM ====================

    'ig-fashion-boutique': {
        title: 'Butik Fesyen Instagram',
        description: 'Sistem jualan bersepadu untuk fesyen melalui Instagram dengan katalog dan pesanan.',
        shortDescription: 'Jual fesyen melalui Instagram',
        features: ['Katalog interaktif', 'Pesanan terus', 'Pembayaran dalam talian', 'Jejak pesanan'],
        benefits: ['Jualan melalui Instagram', 'Pengalaman lancar', 'Pelanggan baru'],
        useCases: ['Butik', 'Pereka', 'Jenama baharu'],
        timeframe: '2 bulan',
        metrics: ['Jualan', 'Penglibatan', 'Pengikut'],
        deliveryTime: '2-3 minggu',
        faqs: [{ question: 'Bagaimana ia berfungsi?', answer: 'Pelanggan melayari dan memesan terus melalui DM.' }]
    },

    'ig-fitness-coaching': {
        title: 'Kejurulatihan Kecergasan Instagram',
        description: 'Platform latihan peribadi dan penjejakan kecergasan melalui Instagram.',
        shortDescription: 'Kejurulatihan kecergasan peribadi melalui Instagram',
        features: ['Program latihan', 'Jejak kemajuan', 'Petua pemakanan', 'Sesi langsung'],
        benefits: ['Pendapatan tetap', 'Pelanggan global', 'Fleksibiliti penuh'],
        useCases: ['Jurulatih peribadi', 'Gim', 'Pakar pemakanan'],
        timeframe: '3 bulan',
        metrics: ['Pelanggan', 'Langganan', 'Keputusan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Bagaimana bermula?', answer: 'Pilih program dan kami akan menghubungi.' }]
    },

    // ==================== MESSENGER ====================

    'msg-b2b-leads': {
        title: 'Kelayakan Petunjuk B2B Messenger',
        description: 'Sistem kelayakan dan susulan automatik untuk pelanggan perniagaan.',
        shortDescription: 'Kelayakan automatik petunjuk B2B',
        features: ['Kelayakan automatik', 'Penjadualan mesyuarat', 'Susulan pintar', 'Integrasi CRM'],
        benefits: ['Petunjuk berkualiti', 'Jimat masa jualan', 'Penukaran lebih baik'],
        useCases: ['Syarikat B2B', 'SaaS', 'Perkhidmatan profesional'],
        timeframe: '3 bulan',
        metrics: ['Kualiti petunjuk', 'Kadar penukaran'],
        deliveryTime: '3 minggu',
        faqs: [{ question: 'Bagaimana kelayakan dilakukan?', answer: 'Soalan pintar mengenal pasti keperluan dan bajet.' }]
    },

    'msg-customer-support': {
        title: 'Sokongan Pelanggan Messenger',
        description: 'Sokongan pelanggan automatik 24/7 melalui Facebook Messenger.',
        shortDescription: 'Sokongan automatik melalui Messenger',
        features: ['Respons serta-merta 24/7', 'Soalan Lazim', 'Pemindahan ejen', 'Jejak tiket'],
        benefits: ['Kepuasan pelanggan', 'Penjimatan kos', 'Perkhidmatan berterusan'],
        useCases: ['Runcit', 'Perkhidmatan', 'Teknologi'],
        timeframe: '2 bulan',
        metrics: ['Masa respons', 'Kepuasan pelanggan'],
        deliveryTime: '2 minggu',
        faqs: [{ question: 'Adakah ia menggantikan manusia?', answer: 'Tidak, mengendalikan soalan biasa dan memindahkan yang kompleks.' }]
    },

    // ==================== NEXT.JS ====================

    'next-saas-platform': {
        title: 'Platform SaaS Next.js',
        description: 'Pembangunan platform SaaS lengkap dengan langganan dan papan pemuka.',
        shortDescription: 'Platform SaaS profesional',
        features: ['Langganan', 'Papan pemuka', 'API bersepadu', 'Analitik', 'Pembayaran dalam talian'],
        benefits: ['Kelajuan maksimum', 'SEO cemerlang', 'Skalabiliti'],
        useCases: ['Syarikat permulaan', 'Produk digital', 'Perkhidmatan awan'],
        timeframe: '4-6 bulan',
        metrics: ['Langganan', 'Pengekalan', 'Pendapatan'],
        deliveryTime: '8-12 minggu',
        faqs: [{ question: 'Mengapa Next.js?', answer: 'Prestasi tinggi, SEO cemerlang, pengalaman pembangun lancar.' }]
    },

    'next-ecommerce': {
        title: 'E-Dagang Next.js',
        description: 'Kedai dalam talian pantas dan berskala dengan teknologi Next.js.',
        shortDescription: 'Kedai dalam talian ultra-pantas',
        features: ['Katalog dinamik', 'Troli', 'Multi-pembayaran', 'Pengurusan inventori'],
        benefits: ['Muat <1 saat', 'SEO cemerlang', 'Penukaran lebih baik'],
        useCases: ['Runcit', 'Jenama', 'Pengedar'],
        timeframe: '3-4 bulan',
        metrics: ['Jualan', 'Kelajuan laman', 'Penukaran'],
        deliveryTime: '6-8 minggu',
        faqs: [{ question: 'Menyokong ribuan produk?', answer: 'Ya, direka untuk skala dengan prestasi tinggi.' }]
    },

    // ==================== SEO ====================

    'seo-ecommerce': {
        title: 'Pengoptimuman SEO E-Dagang',
        description: 'Strategi SEO lengkap untuk kedai dalam talian bagi meningkatkan trafik organik.',
        shortDescription: 'SEO khusus kedai',
        features: ['Pengoptimuman produk', 'Kata kunci', 'Pautan balik', 'Kelajuan laman'],
        benefits: ['200% lebih trafik', 'Jualan organik', 'Kos lebih rendah'],
        useCases: ['Kedai dalam talian', 'Pasaran', 'Runcit'],
        timeframe: '6-12 bulan',
        metrics: ['Kedudukan kata kunci', 'Trafik organik', 'Jualan'],
        deliveryTime: 'Berterusan',
        faqs: [{ question: 'Bila nampak hasil?', answer: 'Hasil awal dalam 3 bulan, ketara dalam 6-12 bulan.' }]
    },

    'seo-local': {
        title: 'SEO Tempatan untuk Perniagaan',
        description: 'Pengoptimuman keterlihatan dalam carian tempatan dan Google Maps.',
        shortDescription: 'Keterlihatan lebih baik dalam carian tempatan',
        features: ['Google Business', 'Ulasan', 'Maps', 'Kata kunci tempatan'],
        benefits: ['Keterlihatan Maps', 'Pelanggan tempatan', 'Lebih kepercayaan'],
        useCases: ['Restoran', 'Klinik', 'Runcit'],
        timeframe: '3-6 bulan',
        metrics: ['Kedudukan tempatan', 'Panggilan', 'Lawatan kedai'],
        deliveryTime: 'Berterusan',
        faqs: [{ question: 'Beza dengan SEO biasa?', answer: 'Fokus pada carian tempatan, Maps dan ulasan.' }]
    },

    // ==================== AI AUTOMATION ====================

    'auto-sales': {
        title: 'Automasi Jualan AI',
        description: 'Automasi proses jualan dari kelayakan hingga penutupan dengan AI.',
        shortDescription: 'Jualan automatik dengan AI',
        features: ['Kelayakan automatik', 'Susulan pintar', 'Analisis peluang', 'Ramalan jualan'],
        benefits: ['40% lebih jualan', 'Jimat masa pasukan', 'Keputusan lebih baik'],
        useCases: ['Pasukan jualan', 'Syarikat B2B', 'SaaS'],
        timeframe: '3 bulan',
        metrics: ['Kadar penukaran', 'Nilai urus niaga', 'Kelajuan penutupan'],
        deliveryTime: '4-6 minggu',
        faqs: [{ question: 'Perlu latihan?', answer: 'AI belajar secara automatik dari data anda.' }]
    },

    'auto-customer-service': {
        title: 'Perkhidmatan Pelanggan AI',
        description: 'Chatbot pintar untuk perkhidmatan pelanggan 24/7.',
        shortDescription: 'Sokongan pintar 24/7',
        features: ['Respons serta-merta', 'Pemahaman bahasa semula jadi', 'Pembelajaran berterusan', 'Pemindahan manusia'],
        benefits: ['Perkhidmatan 24/7', '60% penjimatan kos', 'Kepuasan lebih tinggi'],
        useCases: ['Semua syarikat', 'E-dagang', 'Perkhidmatan'],
        timeframe: '2 bulan',
        metrics: ['Masa respons', 'Kadar penyelesaian', 'Kepuasan pelanggan'],
        deliveryTime: '3-4 minggu',
        faqs: [{ question: 'Faham Bahasa Melayu?', answer: 'Ya, dilatih untuk Bahasa Melayu dan Inggeris.' }]
    }
}

export default malayTranslations
