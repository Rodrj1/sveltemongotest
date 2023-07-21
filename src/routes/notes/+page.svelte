<script lang="ts">
	import NoteUI from '../../components/NoteUI.svelte';
	import { userNotes } from '../../store';
</script>

<div class="flex flex-col justify-center items-center pt-20 gap-5">
	<h1 class="text-violet-600">Your notes</h1>

	<ul class="flex gap-5 flex-wrap items-center justify-center">
		{#each $userNotes as note}
			<li>
				<NoteUI {note} />
			</li>
		{/each}
	</ul>
</div>
