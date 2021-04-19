<template>
	<section
		class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16"
	>
		<header class="w-full pb-6 border-b-2 border-background">
			<h2 class="text-xl text-blue font-semibold text-center">
				{{ `Win ${amount} xp` }}
			</h2>
		</header>

		<main class="flex flex-col flex-1 justify-center items-center mt-6">
			<img
				:src="`icons/${type}.svg`"
				:alt="type"
				:style="{ minHeight: '70px' }"
			/>
			<h1 class="font-semibold text-3xl text-title mt-6 mb-2">Work out</h1>
			<p class="text-center text-base leading-6">{{ description }}</p>
		</main>

		<footer class="flex w-full gap-x-2">
			<button @click="resetChallenges" class="button failed">
				Failed
			</button>

			<button @click="challengeSucceeded" class="button succeeded">
				Completed
			</button>
		</footer>
	</section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { Mutations as CountdownMutations } from "@/store/Countdown/types";

import {
	Challenge as ChallengeType,
	Mutations as ChallengesMutations
} from "@/store/Challenges/types";

export default Vue.extend<unknown, any, unknown, ChallengeType>({
	props: {
		type: { type: String, required: true },
		description: { type: String, required: true },
		amount: { type: Number, required: true }
	},

	computed: mapState("Challenges", [
		"level",
		"experience",
		"completedChallenges"
	]),

	methods: {
		resetChallenges() {
			this.resetTime();
			this.setIsActive(false);
			this.setHasCompleted(false);
			this.setCurrentChallengeIndex(null);
		},

		challengeSucceeded() {
			this.resetChallenges();
			this.completeChallenge(this.amount);

			this.$cookiz.set("movueit", {
				level: this.level,
				experience: this.experience,
				completedChallenges: this.completedChallenges
			});
		},

		...mapMutations({
			resetTime: `Countdown/${CountdownMutations.RESET_TIME}`,
			setIsActive: `Countdown/${CountdownMutations.SET_IS_ACTIVE}`,
			setHasCompleted: `Countdown/${CountdownMutations.SET_HAS_COMPLETED}`,
			setCurrentChallengeIndex: `Challenges/${ChallengesMutations.SET_CURRENT_CHALLENGE_INDEX}`,
			completeChallenge: `Challenges/${ChallengesMutations.COMPLETE_CHALLENGE}`
		})
	}
});
</script>
