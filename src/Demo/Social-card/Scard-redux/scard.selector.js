import { createSelector } from "reselect";

const selectSocialCard = state => state.Social_data;

export const selectScardSection = createSelector(
    [selectSocialCard],
    scard = scard.Social_data
)