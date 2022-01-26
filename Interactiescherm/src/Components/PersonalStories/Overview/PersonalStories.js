import React from "react";
import StoryTile from "./StoryTile";

function PersonalStories() {
  return (
    <div className="stories">
      <section className="stories__top">
        <input type="text" name="name" placeholder="Zoek op locatie..." />
        <p>
          Lees hier alle persoonlijke verhalen van diegene die tot slaaf zijn
          gemaakt.
        </p>
      </section>
      <section className="stories__list">
        <ul>
          <StoryTile>Maria</StoryTile>
          <StoryTile>Achar</StoryTile>
          <StoryTile>Sinu</StoryTile>
          <StoryTile>Wonoh</StoryTile>
          <StoryTile>Adad</StoryTile>
          <StoryTile>Adam</StoryTile>
          <StoryTile>Joris</StoryTile>
          <StoryTile>Bongo</StoryTile>
          <StoryTile>Bousouk</StoryTile>
          <StoryTile>Bakkerij</StoryTile>
          <StoryTile>Bandul</StoryTile>
          <StoryTile>Ama</StoryTile>
          <StoryTile>Zondag</StoryTile>
          <StoryTile>Pieter</StoryTile>
          <StoryTile>Akier</StoryTile>
          <StoryTile>Balij</StoryTile>
        </ul>
      </section>
    </div>
  );
}

export default PersonalStories;
