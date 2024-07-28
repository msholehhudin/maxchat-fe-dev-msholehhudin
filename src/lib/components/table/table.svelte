<script lang="ts">
  // import Modal from "$lib/components/modal/modal.svelte";
  import { columns, patients } from "$lib/data/patient";
  import Modal from "$lib/components/modal/modalSvelte.svelte";

  $: showModal = false;

  let patientData = {
    name: "",
    ktp: "",
    rm: "",
  };

  const search = (event: any) => {
    event.preventDefault();
    console.log("ini button submit di tekan : ", patientData);
  };

  export let title: string;

  const openModal = () => {
    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
  };
</script>

<div
  class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white"
>
  <div class="flex gap-4 justify-center items-center">
    <svg
      class="w-6 h-6 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 20"
    >
      <path
        d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"
      />
    </svg>
    <h1 class="font-semibold text-xl">{title}</h1>
  </div>
  <!-- <label for="table-search" class="sr-only">Search</label> -->
  <div class="relative flex gap-4">
    <div
      class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      <svg
        class="w-4 h-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>

    <input
      type="text"
      id="table-search-users"
      class="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:border-blue-500"
      placeholder="Search for users"
      on:click={openModal}
    />

    <a
      type="button"
      class="bg-blue-700 hover:bg-blue-800 text-sm font-medium text-center text-white rounded-lg py-2 px-6"
      href="/add-new-patient"
      >+ Tambah
    </a>
  </div>
</div>
<table class="w-full text-sm text-left rtl:text-right text-gray-500">
  <thead class="text-xs text-gray-700 uppercase bg-gray-100">
    <tr class="border rounded-lg">
      {#each columns as header}
        <th class="px-6 py-3">{header.label}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each patients as patient}
      <tr class="border-b">
        {#each columns as column}
          <td class="px-6 py-4">
            {patient[column.key]}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<Modal bind:showModal>
  <div slot="header" class="flex justify-between">
    <h2>Pencarian</h2>
    <button>X</button>
  </div>
  <div slot="body">
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
      <div class="flex justify-center items-center my-4 flex-col md:flex-row">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >No. KTP</label
          >
        </div>
        <div class="w-full md:flex-1">
          <input
            type="text"
            id="ktp"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input No. KTP"
            required
            bind:value={patientData.ktp}
          />
        </div>
      </div>
      <div class="flex justify-center items-center my-4 flex-col md:flex-row">
        <div class="flex-none w-full md:w-48">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >No. Rekam Medis</label
          >
        </div>
        <div class="w-full md:flex-1">
          <input
            type="text"
            id="rm"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input No. Rekam Medis"
            required
            bind:value={patientData.rm}
          />
        </div>
      </div>
    </form>
  </div>
  <div slot="footer" class="flex justify-center items-center gap-4">
    <button
      type="submit"
      class="text-white my-2 flex bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      on:click={search}
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
      OK</button
    >
    <button
      type="button"
      class="text-gray-900 my-2 bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      on:click={closeModal}
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>Tutup</button
    >
  </div>
</Modal>
