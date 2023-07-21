<script lang="ts">
	import Header from './Header.svelte';
import './styles.css';
</script>

<div>
    <Header />

	<main class="w-full h-screen bg-zinc-900">
		<slot />
	</main>
</div>
