<script lang="ts">
  import Modal from "$lib/components/modal/modal.svelte";
  import { writable } from "svelte/store";

  const showModal = writable(false);

  const openModal = () => {
    showModal.set(true);
    console.log("ini  showModal : ", showModal);
  };

  const closeModal = () => {
    showModal.set(false);
  };
</script>

<div
  class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white"
>
  <div>Ini Table title</div>
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
    <button
      class="bg-blue-600 hover:bg-blue-700 text-sm text-center text-white rounded-lg py-2 px-6"
      on:click={openModal}
      >+ Tambah
    </button>
  </div>
</div>
<table class="w-full text-sm text-left rtl:text-right text-gray-500">
  <thead class="text-xs text-gray-700 uppercase bg-gray-100">
    <tr class="border rounded-lg">
      <th scope="col" class="px-6 py-3">Song</th>
      <th scope="col" class="px-6 py-3">Artist</th>
      <th scope="col" class="px-6 py-3">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b">
      <td scope="col" class="px-6 py-3"
        >The Sliding Mr. Bones (Next Stop, Pottersville)</td
      >
      <td scope="col" class="px-6 py-3">Malcolm Lockyer</td>
      <td scope="col" class="px-6 py-3">1961</td>
    </tr>
  </tbody>
</table>

{#if $showModal}
  <Modal show={$showModal} onClose={closeModal} />
{/if}
