<script lang="ts">
  import Table from "$lib/components/table/table.svelte";
</script>

<svelte:head>
  <title>Data Pasien</title>
  <meta name="description" content="Data Pasien" />
</svelte:head>

<!-- <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p> -->

<!-- <h1 class="text-3xl font-bold underline border border-red-500">Hello world!</h1> -->

<div class="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
  <Table title="Daftar Pasien" />
</div>
