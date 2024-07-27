export type Patient = {
  name: string
  rm: number
  ktp: number
  dob: string
  gender: string
  edu: string
  status: string
}

export type Column = {
  label: string;
  key: keyof Patient;
};

export const patients: Patient[] = [
  {
    name: "Santoso Ibadul Alim",
    rm: 1721618463,
    ktp: 3521061604960001,
    dob: '1998-02-10',
    gender: 'Laki-laki',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Agus Jatmiko",
    rm: 1720696048,
    ktp: 3521061604960003,
    dob: '1993-08-10',
    gender: 'Laki-laki',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Suyati Shinka Amarta",
    rm: 1720697007,
    ktp: 3521061604960002,
    dob: '1999-02-12',
    gender: 'Perempuan',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Winda Kusmiati Aldianti",
    rm: 1721618473,
    ktp: 3521061604960004,
    dob: '1998-01-11',
    gender: 'Perempuan',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Ana Andriani",
    rm: 1721618484,
    ktp: 3521061604960005,
    dob: '1997-02-10',
    gender: 'Perempuan',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Sulaiman Hakim",
    rm: 1721618493,
    ktp: 3521061604960006,
    dob: '1993-04-10',
    gender: 'Laki-laki',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Dadang Sudana",
    rm: 1721618773,
    ktp: 3521061604960007,
    dob: '1991-02-10',
    gender: 'Laki-laki',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Indra Bachtiar",
    rm: 1721618466,
    ktp: 3521061604960008,
    dob: '1998-06-10',
    gender: 'Laki-laki',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Wardono",
    rm: 1721618469,
    ktp: 3521061604960009,
    dob: '2000-02-10',
    gender: 'Laki-laki',
    edu: 'SLTA Sederajat',
    status: ''
  },
  {
    name: "Lia Sinta",
    rm: 1721618411,
    ktp: 3521061604960010,
    dob: '1992-09-10',
    gender: 'Perempuan',
    edu: 'SLTA Sederajat',
    status: ''
  },
];

export const columns: Column[] = [
  {label: "Nama", key: 'name'},
  {label: "Rekam Medis", key: 'rm'},
  {label: "KTP", key: 'ktp'},
  {label: "Tgl Lahir", key: 'dob'},
  {label: "JK", key: 'gender'},
  {label: "Pendidikan", key: 'edu'},
  {label: "Status", key: 'status'},
];
