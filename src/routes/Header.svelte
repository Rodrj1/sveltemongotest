<script>
	import { page } from '$app/stores';
</script>

<header
	class="flex items-center justify-center fixed z-50 transition-colors duration-100 w-full h-auto"
>
	<nav>
		<ul class="flex justify-center gap-10 p-4 text-xl text-blue-600">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">HOME!</a>
			</li>
			<li aria-current={$page.url.pathname === '/notes' ? 'page' : undefined}>
				<a href="/notes">NOTES!</a>
			</li>
		</ul>
	</nav>
</header>
