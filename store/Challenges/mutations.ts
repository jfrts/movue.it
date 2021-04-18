import { MutationsInterface } from "./types";

export default {
	SET_CURRENT_CHALLENGE_INDEX(state, index) {
		state.currentChallengeIndex = index;
	},

	SET_IS_LEVEL_UP_MODAL_OPEN(state, flag) {
		state.isLevelUpModalOpen = flag;
	},

	COMPLETE_CHALLENGE(state, experienceAmount) {
		const { current, end } = state.experience;
		const updatedExperience = experienceAmount + current;

		const shouldLevelUp = updatedExperience >= end;

		state.completedChallenges += 1;

		if (shouldLevelUp) {
			state.level += 1;

			const remainingXp = updatedExperience - end;
			const experienceToNextLevel = Math.pow((state.level + 1) * 4, 2);

			state.experience = {
				current: remainingXp,
				start: 0,
				end: experienceToNextLevel
			};

			state.isLevelUpModalOpen = true;
			return;
		}

		state.experience = {
			...state.experience,
			current: updatedExperience
		};
	},

	SAVE_COOKIE_DATA(state, cookie) {
		state.level = cookie.level;
		state.experience = cookie.experience;
		state.completedChallenges = cookie.completedChallenges;
	}
} as MutationsInterface;
