<script lang="ts">
  import Modal from "$lib/components/modal/modal.svelte";
  import { columns, patients } from "$lib/data/patient";

  let showModal = false;
  export let title: string;

  const openModal = () => {
    showModal = true;
    console.log("ini  showModal : ", showModal);
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

<!-- {#if showModal} -->
<Modal bind:showModal onClose={closeModal} />
<!-- {/if} -->
