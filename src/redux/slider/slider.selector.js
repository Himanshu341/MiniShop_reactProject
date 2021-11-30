import { createSelector } from "reselect";

const selectSlider = state => state.slider_Collection;

export const selectSliderSection = createSelector(
    [selectSlider],
    slider => slider.slider_Collection
)