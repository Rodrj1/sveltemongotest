<script lang="ts">
	import { userNotes } from '../store';
	import type { Note } from '../types';

	export let note: Note;

	const deleteNote = (title: string) => {
		const findNote = $userNotes.find((note) => note.title === title);

		if (findNote) {
			const updateNotes = $userNotes.filter((notes) => notes.title != findNote.title);

			$userNotes = updateNotes;
		} else return;
	};
</script>

<article class="bg-zinc-800 rounded-md w-[200px] h-auto p-3 flex flex-col gap-3">
	<h3>{note.title}</h3>

	<p>{note.description}</p>

	<button on:click={() => deleteNote(note.title)}>Delete</button>
</article>
