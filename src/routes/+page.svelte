<script lang="ts">
	import { userNotes } from '../store';
	import type { Note } from '../types';

	type InputEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	type Field = 'title' | 'description';

	let title: string = '';
	let description: string = '';

	const handleChange = (e: InputEvent, field: Field) => {
		const target = e.target as HTMLInputElement;

		if (field === 'title') title = target.value;
		if (field === 'description') description = target.value;
	};

	const createNote = () => {
		if (title != '' && description != '') {
			const newNote: Note = { title, description };

			$userNotes.push(newNote);

			title = '';
			description = '';
		} else return;
	};
</script>

<div class="flex flex-col justify-center items-center pt-20 gap-5">
	<h1 class="text-violet-600">Welcome to SvelteKit</h1>

	<div class="bg-zinc-800 w-max p-3 flex flex-col gap-5 items-start rounded-md">
		<fieldset class="flex flex-col gap-1">
			<label for="Title">Title</label>

			<input on:change={(e) => handleChange(e, 'title')} id="Title" name="Title" />
		</fieldset>

		<fieldset class="flex flex-col gap-1">
			<label for="Description">Description</label>

			<input
				on:change={(e) => handleChange(e, 'description')}
				id="Description"
				name="Description"
			/>
		</fieldset>

		<button on:click={createNote}>Create Note</button>
	</div>
</div>
