export const mockReports = [
  {
    id: 1,
    title: 'Sampah menumpuk di sungai',
    description: 'Banyak sampah plastik yang menyumbat aliran sungai.',
    category: 'Lingkungan',
    location: 'Semarang',
    status: 'action',
    createdAt: new Date(),
    image: '',
    author: {
      name: 'Budi',
      avatar: ''
    },
    volunteerAction: {
      registeredPeople: 5,
      requiredPeople: 10,
      scheduledDate: new Date()
    }
  },
  {
    id: 2,
    title: 'Jalan berlubang',
    description: 'Lubang besar di jalan utama.',
    category: 'Infrastruktur',
    location: 'Demak',
    status: 'open',
    createdAt: new Date(),
    image: '',
    author: {
      name: 'Siti',
      avatar: ''
    }
  },
  {
    id: 3,
    title: 'Gotong Royong Menambal Jalan',
    description: 'Aksi swadaya masyarakat untuk menutupi lubang besar di jalan utama menggunakan material swadaya agar tidak membahayakan pengendara.',
    category: 'Infrastruktur',
    location: 'Jalan Utama, Demak',
    status: 'Akan Datang', // Status aksi (Akan Datang / Sedang Berjalan / Selesai)
    createdAt: new Date(),
    image: '',
    author: {
      name: 'Andi',
      avatar: ''
    },
    volunteerAction: {
      requiredPeople: 20, // Target relawan yang dibutuhkan
      registeredPeople: 5, // Relawan yang sudah mendaftar
      scheduledDate: new Date('2026-05-30T08:00:00') // Tanggal aksi dilaksanakan
    }
  }
]