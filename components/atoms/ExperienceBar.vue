<template>
	<header class="pb-10 flex items-center">
		<p class="text-sm">
			{{ `${experience.start} xp` }}
		</p>
		<div class="mx-4 lg:mx-6 flex-1 bg-gray-line h-1 rounded-md">
			<div
				:style="{ width: `${currentExperiencePercentage}%` }"
				class="relative bg-green h-1"
			>
				<p class="text-sm absolute -right-4 w-max top-2 ">
					{{ `${experience.current} xp (${currentExperiencePercentage}%)` }}
				</p>
			</div>
		</div>
		<p class="text-sm">{{ `${experience.end} xp` }}</p>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
	computed: {
		...mapState("Challenges", ["experience"]),
		...mapGetters("Challenges", ["currentExperiencePercentage"])
	}
});
</script>
