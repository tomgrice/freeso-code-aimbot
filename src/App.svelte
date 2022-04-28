<script>
	import codelist from "./code_list.json";
	import { clipboard } from '@tauri-apps/api';

	let currentpoint;
	let codetry;

	export function resetGame() {
		currentpoint = codelist;
		codetry = currentpoint["code"];
	}

	export function clickNumCopy(num) {
		if (currentpoint[num]) {
			clickNum(num);
			clipboard.writeText(codetry);
		}
	}

	export function clickNum(num) {
		currentpoint = currentpoint[num];
		codetry = currentpoint["code"];
	}

	resetGame();
</script>

<style>
	main {
		overflow: hidden;
		margin: 0;
		padding: 0;
		user-select: none;
	}
	
	.text-3xl {
		font-size: 3rem !important;
	}
</style>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
		rel="stylesheet"
	/>
	<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
	<link href="cirrus.min.css" rel="stylesheet" />
</svelte:head>

<main>
	<section class="m-0">
		<div class="content w-100p">
			<span class="w-100p u-center font-alt font-bold text-3xl my-1"
				>{codetry}</span
			>

			<div class="u-center">
				<button
					class="btn--xl font-bold text-indigo-400 bg-indigo-100 m-1"
					disabled={!currentpoint["0"]}
					on:click={() => clickNum("0")}>0</button
				>
				<button
					class="btn--xl font-bold text-indigo-400 bg-indigo-100 m-1"
					disabled={!currentpoint["1"]}
					on:click={() => clickNum("1")}>1</button
				>
				<button
					class="btn--xl font-bold text-indigo-400 bg-indigo-100 m-1"
					disabled={!currentpoint["2"]}
					on:click={() => clickNum("2")}>2</button
				>
			</div>
			<div class="u-center">
				<button
					class="btn--xs text-sm text-red-500 bg-red-200 m-1"
					on:click={() => resetGame()}>Reset Game</button
				>
			</div>
			<div class="u-center text-gray-800 bg-gray-400 mx-auto"><i class="fa fa-wrapper fa-keyboard mx-2"></i><span class="text-xs">Ctrl+Shift+[0-2] copies guess to clipboard. +R resets.</span></div>
		</div>
	</section>
</main>


