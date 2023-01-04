import React from 'react';
import imageInteractive from "../images/desktop/image-interactive.jpg"

function About(){
    return (
      <section class="about" id="about">
        <div class="img-box">
          <img src={imageInteractive} alt="" />
        </div>

        <div class="content-box">
          <h2>The leader in interactive VR</h2>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.</p>
        </div>
      </section>
    )

}

export default About;
