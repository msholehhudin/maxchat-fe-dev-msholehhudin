<script lang="ts">
  import { region } from "$lib/data/region";

  type Patient = {
    name: string;
    tempatLahir: string;
    dob: string;
    province: string;
    city: string;
    district: string;
    village: string;
    address: string;
    familyRelationship: string;
    familyName: string;
  };

  let patientData: Patient = {
    name: "",
    tempatLahir: "",
    dob: "",
    province: "Choose option...",
    city: "Choose option...",
    district: "Choose option...",
    village: "Choose option...",
    address: "",
    familyRelationship: "Choose option...",
    familyName: "",
  };

  let sameAsKtp: boolean = false;

  let oriDomisiliAddress = {
    province: "Choose option...",
    city: "Choose option...",
    district: "Choose option...",
    village: "Choose option...",
    address: "",
  };

  let domisiliAddress = { ...oriDomisiliAddress };

  $: if (sameAsKtp) {
    domisiliAddress = {
      province: patientData.province,
      city: patientData.city,
      district: patientData.district,
      village: patientData.village,
      address: patientData.address,
    };
  } else {
    domisiliAddress = { ...oriDomisiliAddress };
  }

  // $: cities = patientData.province
  //   ? Object.keys(region[patientData.province] || {})
  //   : [];
  // $: districts = patientData.city
  //   ? Object.keys(region[patientData.city] || {})
  //   : [];
  // $: villages = patientData.district
  //   ? Object.keys(region[patientData.district] || {})
  //   : [];

  $: cities = patientData.province
    ? Object.keys(region[patientData.province] || {})
    : [];
  $: districts =
    patientData.province && region[patientData.province] && patientData.city
      ? Object.keys(region[patientData.province][patientData.city] || {})
      : [];
  $: villages =
    patientData.district &&
    region[patientData.province] &&
    region[patientData.province][patientData.city]
      ? Object.values(
          region[patientData.province][patientData.city][
            patientData.district
          ] || {}
        )
      : [];

  let otherFams = [
    {
      id: 1,
      name: "",
      relation: "Choose option...",
    },
    {
      id: 2,
      name: "",
      relation: "Choose option...",
    },
  ];

  const addFams = () => {
    otherFams = [
      ...otherFams,
      {
        id: otherFams.length + 1,
        name: "",
        relation: "Choose option...",
      },
    ];
  };

  const removeFams = (id: number) => {
    otherFams = otherFams.filter((item) => item.id !== id);
  };
</script>

<svelte:head>
  <title>Tambahkan Pasien Baru</title>
  <meta name="description" content="Tambah Pasien Baru" />
</svelte:head>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
  <div class="flex gap-4 border-b py-4">
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
    <h1 class="font-semibold text-xl">Tambah Pasien</h1>
  </div>

  <!-- <div> -->
  <h1 class="font-semibold text-xl mt-4">Data Utama</h1>

  <form class="w-full mx-auto">
    <div class="flex justify-center items-center my-4 flex-col md:flex-row">
      <div class="flex-none w-full md:w-48">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Nama</label
        >
      </div>
      <div class="w-full md:flex-1">
        <input
          type="text"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Input patient name"
          required
          bind:value={patientData.name}
        />
      </div>
    </div>
    <div class="flex gap-4 w-full items-center my-4 flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label
            for="bornPlace"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Tempat lahir</label
          >
        </div>
        <div class="w-full md:flex-1">
          <input
            type="text"
            id="bornPlace"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input born place"
            required
            bind:value={patientData.tempatLahir}
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="dob" class="block mb-2 text-sm font-medium text-gray-900"
            >Tanggal lahir</label
          >
        </div>
        <div class="w-full md:flex-1">
          <input
            type="date"
            id="dob"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input Date of Birth"
            required
            bind:value={patientData.dob}
          />
        </div>
      </div>
    </div>

    <h1 class="font-semibold text-xl mt-4">Alamat Sesuai KTP</h1>

    <div class="flex gap-4 w-full items-center my-4 flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900">Provinsi</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="province"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={patientData.province}
          >
            <option selected disabled>Choose option...</option>
            {#each Object.keys(region) as province}
              <option>{province}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Kota/Kab.</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="city"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={patientData.city}
          >
            <option selected disabled>Choose option...</option>
            {#each cities as city}
              <option>{city}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    <div class="flex gap-4 w-full items-center my-4 flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Kecamatan</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="district"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={patientData.district}
          >
            <option selected disabled>Choose option...</option>
            {#each districts as district}
              <option>{district}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Desa</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="village"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={patientData.village}
          >
            <option selected disabled>Choose option...</option>
            {#each villages as village}
              <option>{village}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center my-4 flex-col md:flex-row">
      <div class="flex-none w-full md:w-48">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Alamat</label
        >
      </div>
      <div class="w-full md:flex-1">
        <textarea
          id="address"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Address..."
          required
          bind:value={patientData.address}
        ></textarea>
      </div>
    </div>
    <h1 class="font-semibold text-xl my-4">Alamat Domisili</h1>

    <!-- <div class="flex gap-4"> -->
    <label class="inline-flex items-center mb-5 cursor-pointer">
      <span class="text-sm mr-20 font-medium text-gray-900 dark:text-gray-300"
        >Sama dengan KTP</span
      >
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        bind:checked={sameAsKtp}
      />
      <div
        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
    </label>
    <!-- </div> -->

    <div class="flex gap-4 w-full items-center mb-4 flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Provinsi</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="provinceDomisili"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={domisiliAddress.province}
          >
            <option selected disabled>Choose option...</option>
            {#each Object.keys(region) as province}
              <option>{province}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Kota/Kab.</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="cityDomisili"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={domisiliAddress.city}
          >
            <option selected disabled>Choose option...</option>
            {#each cities as city}
              <option>{city}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    <div class="flex gap-4 w-full items-center my-4 flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Kecamatan</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="relation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={domisiliAddress.district}
          >
            <option selected disabled>Choose option...</option>
            {#each districts as district}
              <option>{district}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Desa</label
          >
        </div>
        <div class="w-full md:flex-1">
          <select
            id="relation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={domisiliAddress.village}
          >
            <option selected disabled>Choose option...</option>
            {#each villages as village}
              <option>{village}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center my-4 flex-col md:flex-row">
      <div class="flex-none w-full md:w-48">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Alamat</label
        >
      </div>
      <div class="w-full md:flex-1">
        <textarea
          id="address"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Address..."
          required
          bind:value={domisiliAddress.address}
        ></textarea>
      </div>
    </div>

    <h1 class="font-semibold text-xl my-4">Anggota Keluarga Terdekat</h1>
    <div
      class="flex justify-center items-center w-1/3 my-4 flex-col md:flex-row"
    >
      <div class="flex-none w-full md:w-48">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Hubungan</label
        >
      </div>
      <div class="w-full md:flex-1">
        <select
          id="relation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          bind:value={patientData.familyRelationship}
        >
          <option selected disabled>Choose option...</option>
          <option>Ayah</option>
          <option>Ibu</option>
          <option>Kakak</option>
          <option>Adik</option>
          <option>Kakek</option>
          <option>Nenek</option>
          <option>Sepupu</option>
          <option>Keponakan</option>
        </select>
      </div>
    </div>
    <div class="flex justify-center items-center my-4 flex-col md:flex-row">
      <div class="flex-none w-full md:w-48">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Nama</label
        >
      </div>
      <div class="w-full md:flex-1">
        <input
          type="text"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Input patient name"
          required
          bind:value={patientData.familyName}
        />
      </div>
    </div>
    <h1 class="font-semibold text-xl my-4">Anggota Keluarga Lainnya</h1>
    <div class="w-full flex my-2 gap-2">
      <div class="flex-none w-14 text-center">
        <h1>Urut</h1>
      </div>
      <div class="flex-1 text-center">
        <h1>Nama</h1>
      </div>
      <div class="flex-1 text-center">
        <h1>Hubungan</h1>
      </div>
    </div>

    {#each otherFams as fams}
      <div class="w-full flex my-2 gap-2">
        <div class="flex-none w-14 text-center">
          <input
            type="text"
            id="id"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="1"
            bind:value={fams.id}
          />
        </div>
        <div class="flex-1 text-center">
          <input
            type="text"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Family Name"
            bind:value={fams.name}
          />
        </div>
        <div class="flex-1 text-center">
          <select
            id="relation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            bind:value={fams.relation}
          >
            <option selected disabled>Choose option...</option>
            <option>Ayah</option>
            <option>Ibu</option>
            <option>Kakak</option>
            <option>Adik</option>
            <option>Kakek</option>
            <option>Nenek</option>
            <option>Sepupu</option>
            <option>Keponakan</option>
          </select>
        </div>
        <div class="flex items-center justify-center mx-4">
          <button
            on:click={() => removeFams(fams.id)}
            class="text-sm font-semibold text-gray-600">X</button
          >
        </div>
      </div>
    {/each}

    <button
      type="submit"
      class="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      on:click={addFams}>+ Tambah</button
    >

    <div class="border-b"></div>
    <div class="flex justify-center items-center gap-10">
      <button
        type="submit"
        class="text-gray-900 my-2 bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >&lt Kembali</button
      >
      <button
        type="submit"
        class="text-white my-2 bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4 mr-2 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v7a2 2 0 01-2 2h-2m-6 0v4m0-4H8m4 0h4"
          />
        </svg>
        Cetak Berkas</button
      >
      <button
        type="submit"
        class="text-white my-2 bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4 mr-2 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
        Upload Berkas</button
      >
      <button
        type="submit"
        class="text-white my-2 bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4 mr-2 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Simpan</button
      >
    </div>
  </form>

  <!-- </div> -->
</div>
