<template>
	<section
		class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20"
	>
		<div class="flex flex-col w-full lg:w-1/2">
			<Profile />
			<CompletedChallenges />
			<Countdown @completed="getNewChallenge" />

			<button v-if="hasCountdownCompleted" disabled class="button completed">
				Cycle completed
			</button>

			<button
				v-else-if="isCountdownActive"
				@click="setCountdownState(false)"
				class="button abandon"
			>
				Abandon cycle
			</button>

			<button v-else @click="setCountdownState(true)" class="button start">
				Start a cycle
			</button>
		</div>

		<Card id="challenge" class="w-full lg:w-1/2" />
	</section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";

import { Mutations as CountdownMutations } from "@/store/Countdown/types";
import { Mutations as ChallengesMutations } from "@/store/Challenges/types";

import {
	playAudio,
	sendNotification,
	getRandomNumber,
	scrollToElement
} from "@/utils";

interface Head {
	title: string;
}

export default Vue.extend({
	computed: {
		...mapState("Countdown", {
			hasCountdownCompleted: "hasCompleted",
			isCountdownActive: "isActive"
		}),

		...mapGetters("Challenges", ["challengesLength"])
	},

	methods: {
		...mapMutations({
			setCountdownHasCompleted: `Countdown/${CountdownMutations.SET_HAS_COMPLETED}`,
			setCountdownIsActive: `Countdown/${CountdownMutations.SET_IS_ACTIVE}`,
			setCurrentChallengeIndex: `Challenges/${ChallengesMutations.SET_CURRENT_CHALLENGE_INDEX}`
		}),

		setCountdownState(flag: boolean) {
			this.setCountdownHasCompleted(false);
			this.setCountdownIsActive(flag);
		},

		getNewChallenge() {
			const index = getRandomNumber(0, this.challengesLength);

			this.setCountdownHasCompleted(true);
			this.setCurrentChallengeIndex(index);

			if (Notification?.permission === "granted") {
				playAudio("/notification.mp3");
				sendNotification("New Challenge!", {
					body: "A new challenge has started! Go complete it!",
					icon: "/favicon.ico"
				});
			}

			this.$nextTick(() => {
				scrollToElement("#challenge");
			});
		}
	},

	mounted() {
		if ("Notification" in window) {
			Notification.requestPermission();
		}
	},

	head(): Head {
		return {
			title: "Home | Movue.It"
		};
	}
});
</script>
