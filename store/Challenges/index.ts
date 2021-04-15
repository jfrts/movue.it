import allChallenges from "@/assets/challenges/data";

import { State } from "./types";

// Estado é sempre uma função para evitar problemas com referência de memória.
export const state = (): State => ({
	level: 1,
	experience: {
		current: 0,
		start: 0,
		end: 64
	},
	completedChallenges: 0,
	currentChallengeIndex: null,
	isLevelUpModalOpen: false,
	allChallenges
});
