import { MutationTree } from "vuex";

export interface Experience {
	current: number;
	start: number;
	end: number;
}

export interface Challenge {
	type: string;
	description: string;
	amount: number;
}

export interface Cookie {
	level: number;
	experience: Experience;
	completedChallenges: number;
}

export interface State {
	level: number;
	experience: Experience;
	completedChallenges: number;
	currentChallengeIndex: number | null;
	isLevelUpModalOpen: boolean;
	allChallenges: Challenge[];
}

export interface Getters {
	challengesLength: (state: State) => number;
	currentExperiencePercentage: (state: State) => number;
	currentChallenge: (state: State) => Challenge | null;
}

export type RootState = ReturnType<() => State>;

export interface Mutations extends MutationTree<RootState> {
	SET_CURRENT_CHALLENGE_INDEX(state: State, param: number): void;
	SET_IS_LEVEL_UP_MODAL_OPEN(state: State, param: boolean): void;
	COMPLETE_CHALLENGE(state: State, param: number): void;
	SAVE_COOKIE_DATA(state: State, param: Cookie): void;
}
