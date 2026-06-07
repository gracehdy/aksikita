export const formatStatusText = (status: string): string => {
  if (!status) return 'Akan Datang';
  if (status.toLowerCase().includes('jalan')) return 'Sedang Berjalan';
  if (status.toLowerCase().includes('selesai')) return 'Selesai';
  return 'Akan Datang';
};

export const getStatusColor = (status: string): string => {
  const s = formatStatusText(status);
  if (s === 'Sedang Berjalan') return '#19456B';
  if (s === 'Selesai') return '#16C79A';
  return '#11698E';
};

export const getStatusIcon = (status: string) => {
  const s = formatStatusText(status)
  if (s === 'Sedang Berjalan') return 'mdi-play'
  if (s === 'Selesai') return 'mdi-check-circle-outline'
  return 'mdi-clock-outline'
}

export const getButtonConfig = (s: string) => {
  const status = formatStatusText(s)
  if (status === 'Sedang Berjalan') return { color: '#11698E', text: 'Lihat Detail' }
  if (status === 'Selesai') return { color: 'grey', text: 'Aksi Selesai' }
  return { color: '#16C79A', text: 'Daftar Sekarang' }
}

