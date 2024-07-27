<script lang="ts">
  import Table from "$lib/components/table/table.svelte";
  import Modal from "$lib/components/modal/modalSvelte.svelte";

  let showModal = false;
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p> -->

<!-- <h1 class="text-3xl font-bold underline border border-red-500">Hello world!</h1> -->

<!-- <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
  <Table />
</div> -->

<!-- <form class="search-container svelte-15l0yne" action="/search">
  <input
    type="search"
    name="q"
    placeholder="Search"
    aria-label="Search"
    spellcheck="false"
    class="svelte-15l0yne"
  />
  <div class="shortcut svelte-15l0yne">
    <kbd class="svelte-15l0yne">Ctrl</kbd> <kbd class="svelte-15l0yne">K</kbd>
  </div>
</form> -->

<button on:click={() => (showModal = true)}> show modal </button>

<Moda
l bind:showModal>
  <h2 slot="header">
    modal
    <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
  </h2>

  <ol class="definition-list">
    <li>of or relating to modality in logic</li>
    <li>
      containing provisions as to the mode of procedure or the manner of taking
      effect —used of a contract or legacy
    </li>
    <li>of or relating to a musical mode</li>
    <li>of or relating to structure as opposed to substance</li>
    <li>
      of, relating to, or constituting a grammatical form or category
      characteristically indicating predication
    </li>
    <li>of or relating to a statistical mode</li>
  </ol>

  <a href="https://www.merriam-webster.com/dictionary/modal"
    >merriam-webster.com</a
  >
</Modal>
